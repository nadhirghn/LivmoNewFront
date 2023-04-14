import React, { useState, useEffect } from 'react'


import { useForm } from "react-hook-form";
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import MetaData from '../../../shared/metaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updatePassword, updateEmail, clearErrors }from "../../../../actions/userActions";
import { UPDATE_PASSWORD_RESET, UPDATE_EMAIL_RESET } from '../../../../constants/userConstants'

import Box from "@mui/material/Box";
import {DesktopWindows, Smartphone} from "@mui/icons-material";
import {Button, Stack, TextField} from "@mui/material";
import {muiButtonSx, textFieldSx} from "./UserSettingsMuiStyles";



import { useHistory } from 'react-router-dom';


const UserSettingsCS =({data})=>{

  const history = useHistory()

 //vd
 

    //handle form events

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: 'onTouched'
    });
    const {
        register: register2,
        formState: { errors: errors2 },
        handleSubmit: handleSubmit2,
      } = useForm({
        mode: "onBlur",
      });


    //
    const [oldpasswordEye, setOldPasswordEye] = useState(false);

    const handleOldPasswordClick = () =>{
        setOldPasswordEye(!oldpasswordEye)
    }

    //

    const [passwordEye, setPasswordEye] = useState(false);

    const handlePasswordClick = () =>{
        setPasswordEye(!passwordEye)
    }

    //Confirm
    const [confirmpasswordEye, setConfirmPasswordEye] = useState(false);

    const handleConfirmPasswordClick = () =>{
        setConfirmPasswordEye(!confirmpasswordEye)
    }

    //  check password event

    const password = watch('password')
 //

    const [oldPassword, setOldPassword] = useState('')
    const [newpassword, setNewPassword] = useState('')

    const [oldEmail, setOldEmail] = useState('')
    const [email, setEmail] = useState('')

    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, isUpdated } = useSelector(state => state.user)
    const { user } = useSelector(state => state.auth);

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            alert.success('Email updated successfully')

            history.push('/')
            
            dispatch({
                type: UPDATE_EMAIL_RESET,
                
            })
            dispatch({
                type: UPDATE_PASSWORD_RESET,
               
            })
        }

    }, [dispatch, alert, error, isUpdated, history])


    const submitHandler = (e) => {
      
        const formData = new FormData();
        formData.set('oldPassword', oldPassword);
        formData.set('password', password);

        dispatch(updatePassword(formData))
      
         
       
    }



    const submitEmailHandler = (e) => {
      
      if(user.email === oldEmail){

        const formData = new FormData();
        formData.set('oldEmail', oldEmail);
        formData.set('email', email);

        dispatch(updateEmail(formData))

        alert.success('Password updated successfully')

        history.push('/')

      }else {
 
        alert.error('Old email is incorrect')
      
        }
    }




    


  

 

   

   
    return(
        <Box className="space-y-10">
        <MetaData title={'Change Password'} />
            <Box className="titleFont text-center mb-16">
                Connection & Security
            </Box>

            {/* Sessions */}
            <Box>
                <Box className="CSTitles titleFont mb-8">
                    Sessions
                </Box>

                <Stack className="space-y-4" alignItems="center">
                    {
                        data.sessions.map(session=>(
                            <Box key={session.id} className="sessionBox flex space-x-6">
                                <Box>
                                    {session.type ==='pc'?
                                        <DesktopWindows fontSize="large"/>:
                                        <Smartphone fontSize="large"/>
                                    }
                                </Box>
                                <Box>
                                    <Box className="subTitleFont">
                                        {session.brand} - {session.location}.
                                    </Box>

                                    <Box className="subTitleFont">
                                        {session.browser} - {session.lastActive}.
                                    </Box>
                                </Box>

                            </Box>
                        ))
                    }
                </Stack>

            </Box>
            {/* Password */}
            <Box>
                <Box className="CSTitles titleFont mb-8">
                    Change your password
                </Box>
            <form onSubmit={handleSubmit(submitHandler)}>
                <Stack className="space-y-3" alignItems="center">
                <div className='bg-whiite w-auto h-auto pb-20 mt-2 rounded-lg mx-5 sm:w-full md:w-4/5
                    md:mx-auto lg:w-2/5 lg:mx-auto'>
                <div className='mx-5'>
                     <div className='mt-10 relative'>
                     <TextField
                            sx={textFieldSx}
                            className="w-full h-14 rounded-lg"
                            type={(oldpasswordEye === false)? 'password': 'text'}
                            placeholder="Old Password"
                            name="oldpassword"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            onPaste={(e)=>{
                             
                              return false;
                                    }}
                                    />
                          
                                    
                             <div className='text-2xl absolute top-4 right-5' >
                            {
                                (oldpasswordEye === false)? <AiFillEyeInvisible onClick={handleOldPasswordClick}/>:
                                 <AiFillEye onClick={handleOldPasswordClick}/>
                                    }
                                    
                                     
                                     </div>
                                     </div>
                                     </div>

                     {/* first */}
                     <div className='mx-5'>
                     <div className='mt-10 relative'>
                        <TextField
                             name="newpassword"
                            type={(passwordEye === false)? 'password': 'text'}
                            placeholder="New Password"
                            sx={textFieldSx}
                            className="w-full h-14 rounded-lg"
                            {...register("password", { required: "Password is required",
                                    pattern:{
                                        value:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                                        message:'Password should include at least one uppercase & one lowercase, one numeric value and one special character'
                                    },
                                    minLength:{
                                        value:8,
                                        message:'Minimum Required length is 8'
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: "Maximum Required length is 20"
                                    }
                                })}
                                value={newpassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                  
                                    {errors.password && <span className="text-sm text-red-500">
                                        {errors.password.message}</span>}


                                     <div className='text-2xl absolute top-4 right-5'>
                                     {
                                        (passwordEye === false)? <AiFillEyeInvisible onClick={handlePasswordClick}/>:
                                        <AiFillEye onClick={handlePasswordClick}/>
                                    }
                                    
                                     
                                     </div>
                                     </div>
                                     </div>
                     {/* secend */}
                     <div className='mx-5'>
                     <div className='mt-10 relative'>
                     <TextField
                       
                            sx={textFieldSx}
                            className={`w-full h-14 rounded-lg ${ errors.password && 
                                "focus:border-red-500 focus:ring-red-500 border-red-500" } `}
                            type={(confirmpasswordEye === false)? 'password': 'text'}
                            placeholder="Confirm New Password"
                            //onPaste={(e)=>{
                              //return false;
                                //    }}
                                
                            {...register("confirmpassword", { required: "Confirm Password is required",
                              validate: (value) =>
                              value === password || "The passwords do not match"
                                    })}
                                    />
                            {errors.confirmpassword && <span className="text-sm text-red-500">
                                        {errors.confirmpassword.message}</span>}
                                    
                             <div className='text-2xl absolute top-4 right-5' >
                            {
                                (confirmpasswordEye === false)? <AiFillEyeInvisible onClick={handleConfirmPasswordClick}/>:
                                 <AiFillEye onClick={handleConfirmPasswordClick}/>
                                    }
                                    
                                     
                                     </div>
                                     </div>
                                     </div>
                                     </div>

                  

                    <Button sx={{...muiButtonSx, width: '25%', minWidth: '200px', fontSize: '18px'}}
                            type='Submit' className="pinkGradientBgWhiteText">Update password</Button>
                </Stack>
                </form>

            </Box>

            <Box>
                <Box className="CSTitles titleFont mb-8">
                    Change your email
                </Box>
                
                <form onSubmit={handleSubmit2(submitEmailHandler)}>
                <Stack className=" space-y-3 text-center" alignItems="center">
        

                    <TextField style={{width: '70%', minWidth: '300px'}}
                     sx={textFieldSx}         
                     placeholder="Old Email"
                     {...register2("oldemail", { required: "Old Email is required",
                      pattern: {
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        message: "Email is invalid, exemple: example@mail.com "
            
                     }
                 })}
                     value={oldEmail}
                     onChange={(e) => setOldEmail(e.target.value)}
                     />
                   
                     {errors2.oldemail && <span className="text-sm text-red-500">
                         {errors2.oldemail.message}</span>}

                     <TextField style={{width: '70%', minWidth: '300px'}}
                     sx={textFieldSx}         
                     
                     placeholder="New Email"
                     {...register2("newemail", { required: "New Email is required",
                      pattern: {
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        message: "Email is invalid, exemple: example@mail.com "
            
                     }
                 })}
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     />
                   
                     {errors2.newemail && <span className="text-sm text-red-500">
                         {errors2.newemail.message}</span>}
                     


                    <Button sx={{...muiButtonSx, width: '25%', minWidth: '200px', fontSize: '18px'}}
                    type="Submit"
                        className="pinkGradientBgWhiteText">Save Changes</Button>
                </Stack>
                </form>


            </Box>


        </Box>
    )
}

export default UserSettingsCS;