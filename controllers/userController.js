const User = require('../models/user');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const sendToken = require('../utils/jwtToken');
const sendEmail = require('../utils/sendEmail');
const sendConfirmationEmail = require('../utils/sendEmail');
const cloudinary = require('cloudinary');
const crypto =require('crypto');


//Verify user => /api/v1/verifyuser/:activationcode
exports.verifyUser  = catchAsyncErrors(async (req, res, next) => {

    const user = await User.findOne({ activationCode: req.params.activationcode });
   
                 
            user.verified = true

            await user.save();

            res.send({
                message: ""
            })
    

    
})


// Register a user   => /api/v1/register
exports.registerUser = catchAsyncErrors(async (req, res, next) => {

    console.log(req.body)

    const characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let activationCode = "";
    for (let i = 0; i < 25; i++) {
        activationCode += characters[Math.floor(Math.random() * characters.length)];
    }
    // const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
    //     folder: 'avatars',
    //     width: 150,
    //     crop: "scale"
    // })

    const { fname, lname, phone, birthday, email, country, password } = req.body;

    const user = await User.create({
        fname,
        lname,
        email,
        birthday,
        phone,
        country,
        password,
        activationCode: activationCode,
        // avatar: {
        //     public_id: result.public_id,
        //     url: result.secure_url
        // }
    })

    user.save().then(saved => {
        res.status(200).json({user: saved});
    })

        // Create reset password url
        // const confirmUrl = `${process.env.FRONTEND_URL}/confirm/${user.activationCode}`;

        const message = `To activate your account, please click on this link:\n\n${confirmUrl}\n\nIf you have not requested this email, then ignore it.`
    
        // try {
        //     await sendEmail({
        //         email: user.email,
        //         subject: 'livmo conform your account',
        //         message
        //     })
        //     res.status(200).json({
        //         success: true,
        //         message: `Email sent to: ${user.email}`
        //     })
        // } catch (error) {
        //     return next(console.log(error));
        // }
        // try {
        //     const savedUser = await user.save();
        //     res.status(201).json({user: savedUser});
        // } catch(err) {
        //     res.status(500).json({error: err.message});
        // }

})
   



// Login User  =>  /a[i/v1/login
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;

    // Checks if email and password is entered by user
    if (!email || !password) {
        return next(new ErrorHandler('Please enter your email address and password', 400))
    }


    // Finding user in database
    const user = await User.findOne({ email }).select('+password')


    if (!user) {
        return next(new ErrorHandler('Invalid email or password', 401));
    }

    // Checks if password is correct or not
    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new ErrorHandler('Invalid email or password', 401));
    }

    if (isPasswordMatched && user && !user.verified ) {
        return next(new ErrorHandler('Please check your email for activation', 401));
    }

    sendToken(user, 200, res)
})


// Forgot Password   =>  /api/v1/password/forgot
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {

    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return next(new ErrorHandler('User not found with this email', 404));
    }

    // Get reset token
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    // Create reset password url
    const resetUrl = `${process.env.FRONTEND_URL}/password/reset/${resetToken}`;

    const message = `Your password reset token is as follow:\n\n${resetUrl}\n\nIf you have not requested this email, then ignore it.`

    try {

        await sendEmail({
            email: user.email,
            subject: 'livmo Password Recovery',
            message
        })

        res.status(200).json({
            success: true,
            message: `Email sent to: ${user.email}`
        })

    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false });

        return next(new ErrorHandler(error.message, 500));
    }

})

// Reset Password   =>  /api/v1/password/reset/:token
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {

    // Hash URL token
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex')

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }
    })

    if (!user) {
        return next(new ErrorHandler('Le jeton de réinitialisation du mot de passe n est pas valide ou a expiré', 400))
    }

    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler('Le mot de passe ne correspond pas', 400))
    }

    // Setup new password
    user.password = req.body.password;

    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    sendToken(user, 200, res)

})

// Get currently logged in user details   =>   /api/v1/me
exports.getUserProfile = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user
    })
})

// Update / Change password   =>  /api/v1/password/update
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id).select('+password');

    // Check previous user password
    const isMatched = await user.comparePassword(req.body.oldPassword)
    if (!isMatched) {
        return next(new ErrorHandler('Old password is incorrect'));
    }

    user.password = req.body.password;
    await user.save();

    const message = `Your password has been changed to ${new Date()}` 

    try {

        await sendEmail({
            email: user.email,
            subject: 'livmo Password Changed',
            message
        })

        res.status(200).json({
            success: true,
            message: `Email sent to: ${user.email}`
        })

    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
    sendToken(user, 200, res)

})
// Update user profile   =>   /api/v1/me/update
exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
    const newUserData = {
        fname: req.body.fname,
        lname: req.body.lname,
        name: req.body.name,
        birthday: req.body.birthday,
        country: req.body.country,
        phone: req.body.phone,
        bio: req.body.bio,
        showbooked : req.body.showBookedExp,

    }

    // Update avatar
    if (req.body.avatar !== '') {
        const user = await User.findById(req.user.id)


        const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
            folder: 'avatars',
            width: 150,
            crop: "scale"
        })

        newUserData.avatar = { 
            public_id: result.public_id,
            url: result.secure_url
        }
    }

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true
    })
})




// Logout user   =>   /api/v1/logout
exports.logout = catchAsyncErrors(async (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: 'Déconnecté'
    })
})



// userHost controller 

exports.registerUserHost = catchAsyncErrors(async (req, res, next) => {

    const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
        folder: 'documents',
        width: 150,
        crop: "scale"
    })

    const resul = await cloudinary.v2.uploader.upload(req.body.cin, {
        folder: 'cin',
        width: 150,
        crop: "scale"
    })
    const resu = await cloudinary.v2.uploader.upload(req.body.patente, {
        folder: 'patente',
        width: 150,
        crop: "scale"
    })
 

    const { typehost, name, email, country, phone, password, city, codepostale, address } = req.body;

    const user = await User.create({
        typehost,
        name,
        email,
        country,
        city,
        phone,
        password,
        codepostale,
        address,
        role: 'host',
        avatar: {
            public_id: result.public_id,
            url: result.secure_url
        },
        cin: {
            public_id: resul.public_id,
            url: resul.secure_url
        },
        patente: {
            public_id: resu.public_id,
            url: resu.secure_url
        },
    })

    
    
    sendToken(user, 200, res)

})


exports.updateToHostProfile = catchAsyncErrors(async (req, res, next) => {

    const resul = await cloudinary.v2.uploader.upload(req.body.cin, {
        folder: 'cin',
        width: 150,
        crop: "scale"
    })
    const resu = await cloudinary.v2.uploader.upload(req.body.cin, {
        folder: 'patente',
        width: 150,
        crop: "scale"
    })
    const newUserData = {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        country: req.body.country,
        phone: req.body.phone,
        codepostale: req.body.phone,
        address: req.body.address,
        role: 'host',
        cin: {
            public_id: resul.public_id,
            url: resul.secure_url
        },
        patente: {
            public_id: resu.public_id,
            url: resu.secure_url
        },
    }

    // Update avatar
    if (req.body.avatar !== '') {
        const user = await User.findById(req.user.id)


        const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
            folder: 'avatars',
            width: 150,
            crop: "scale"
        })

        newUserData.avatar = { 
            public_id: result.public_id,
            url: result.secure_url
        }
    }

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true
    })
})


// Host "Organism Controller"

exports.registerOrganism = catchAsyncErrors(async (req, res, next) => {

    const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
        folder: 'documents',
        width: 150,
        crop: "scale"
    })

    const resul = await cloudinary.v2.uploader.upload(req.body.rne, {
        folder: 'rne',
        width: 150,
        crop: "scale"
    })
    const resu = await cloudinary.v2.uploader.upload(req.body.patente, {
        folder: 'patente',
        width: 150,
        crop: "scale"
    })

    const {typehost, name, city, contactpersone, email, country, phone, codepostale, address, password, cnss, mfiscale, homme, femme} = req.body;

    const user = await User.create({
        typehost,
        name,
        contactpersone,
        email,
        country,
        phone,
        codepostale,
        address,
        password,
        cnss,
        city,
        mfiscale,
        homme,
        femme,
        role: 'host',
        avatar: {
            public_id: result.public_id,
            url: result.secure_url
        },
        rne: {
            public_id: resul.public_id,
            url: resul.secure_url
        },
        patente: {
            public_id: resu.public_id,
            url: resu.secure_url
        },
        


    })
    
    sendToken(user, 200, res)

})

// Organism Profile

exports.updateOrganismProfile = catchAsyncErrors(async (req, res, next) => {

    const newHostData = {

        name: req.body.name,
        contactpersone,
        email: req.body.email,
        country: req.body.country,
        phone : req.body.phone,
        codepostale : req.body.codepostale,
        address : req.body.address,
        password: req.body.password,
        forme: req.body.forme,
        mfiscale: req.body.mfiscale,
        cnss: req.body.cnss
    }


    if (req.body.avatar !== '') {

        const user = await User.findById(req.user.id)


        const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
            folder: 'avatars',
            width: 150,
            crop: "scale"
        })

        newHostData.avatar = { 
            public_id: result.public_id,
            url: result.secure_url
        }
    }

    const user = await User.findByIdAndUpdate(req.user.id, newHostData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true
    })
})

// Trader controller 

exports.registerTrader = catchAsyncErrors(async (req, res, next) => {

    const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
        folder: 'documents',
        width: 150,
        crop: "scale"
    })

    const resul = await cloudinary.v2.uploader.upload(req.body.rne, {
        folder: 'rne',
        width: 150,
        crop: "scale"
    })

    const resu = await cloudinary.v2.uploader.upload(req.body.patente, {
        folder: 'patente',
        width: 150,
        crop: "scale"
    })



    const {typeservice, name, contactpersone, email, password, country,city, phone, codepostale, address, mfiscale, cnss, activity, 
        homme, femme, forme, typerestaurant, specialty  } = req.body;

    const user = await User.create({
        typeservice,
        name,
        contactpersone,
        email,
        password,
        country,
        city,
        phone,
        codepostale,
        address,
        mfiscale,
        cnss,
        activity,
        homme,
        femme,
        forme,
        typerestaurant,
        specialty,

        role: 'trader',

        avatar: {
            public_id: result.public_id,
            url: result.secure_url
        },
        rne: {
            public_id: resul.public_id,
            url: resul.secure_url
        },
        patente: {
            public_id: resu.public_id,
            url: resu.secure_url
        },

       
    })

  
    if (req.body.cad !== '') {
    
        const resultt = await cloudinary.v2.uploader.upload(req.body.cad, {
            folder: 'cad',
            width: 150,
            crop: "scale"
        })

        user.cad = { 
            public_id: resultt.public_id,
            url: resultt.secure_url
        }
    }
   

    
    
    sendToken(user, 200, res)

})



//Update / Change email   =>  /api/v1/email/update
exports.updateEmail = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id).select('+email');


    user.email = req.body.email;
    await user.save();
    
    {/*
    const message = `Your password has been changed to ${new Date()}`

      try {

        await sendEmail({
            email: req.body.email,
            subject: 'livmo Email Changed',
            message
        })

        res.status(200).json({
            success: true,
            message: `Email sent to: ${req.body.email}`
        })

    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
    */}
    sendToken(user, 200, res)

})