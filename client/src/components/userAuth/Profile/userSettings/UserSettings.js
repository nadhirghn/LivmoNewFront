import React, { useState, useEffect } from 'react'
import './userSettingStyle.scss';



//Logout 
import { logout } from '../../../../actions/userActions';



//
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {SxProps} from "@mui/material";
import Box from "@mui/material/Box";



//update

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfile, loadUser, clearErrors } from '../../../../actions/userActions'
import { UPDATE_PROFILE_RESET } from '../../../../constants/userConstants'

//

import UserSettingsCS from "./UserSettingsCS";
import ContactPage from "./ContactPage";



import Layout from '../../../shared/layout'


//
import {Button, Input, Switch, TextField} from "@mui/material";
import {
    bookedExpSwitchSx,
    dateTextFieldSx,
    muiButtonSx,
    popperSx,
    textAreaSx,
    textFieldSx
} from "./UserSettingsMuiStyles";
import { getYear} from "date-fns";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";

import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import { Link } from 'react-router-dom';

const tabsStyle= {
    color: 'black',
    fontWeight: '400',
    fontSize: '22px',
    textTransform: 'none',
}
const tabsSx: SxProps={
    '& .MuiTabs-root':{
    },
    '& .MuiTabs-indicator':{
        background: 'none'
    },
    '& .Mui-selected':{
        background: '#389BF8',
        WebkitTextFillColor: 'transparent',
        WebkitBackgroundClip: 'text',
    }
}


//Returns the child component of the selected tab
function TabPanel(props){
    const {children, value, index, ...other} = props;
    return(
        <div  hidden={value !== index}>
            <Box sx={{ p: 3 }}>
                <Typography component="div">
                    {children}
                </Typography>
            </Box>
        </div>
    )
}


const UserSettings= ({ history }) =>{


    //log out
    

  const logoutHandler = () => {
    history.push('/login');
    dispatch(logout());
    alert.success('Log out.')
    localStorage.clear();
  }


    //personal info
        //States

        
        const [showBookedExp, setShowBookedExp]= useState("")
    
        const handleBirthDateChange = (value)=> setBirthday(value)

    
        const handleShowBookedExpChange = (event)=> {
            setShowBookedExp(event.target.checked)
            console.log(event.target.checked)
        } 
    
    
      
    //

    

    // User preset data
    const userData= {
        password: "ENCRYPTED PASSWORD",
        email: "maryDoe@email.com",
        sessions:[
            {id: "1", type: "pc", brand: "PC Windows" ,location: "Ariana, Tunisia", browser: "Chrome", lastActive: "Active"},
            {id: "é", type: "mobile", brand: "Huawei Nova 7i" ,location: "Ariana, Tunisia", browser: "Chrome", lastActive: "Active 4h ago"},
        ]

    }


    const settingsLabels= ['Personal Information', 'Connection & Security', 'Help', 'Log Out']

    //Active tab state
    const [activeSetting, setActiveSetting]= useState(0);
    const handleActiveSettingChange= (event, newActiveStep)=> setActiveSetting(newActiveStep===3?activeSetting:newActiveStep)

 


    //
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [name, setName] = useState('');
    const [country, setCountry] = useState("");
    const [phone, setPhone] = useState('');
    const [bio, setBio] = useState('');
    const [birthday, setBirthday] = useState([]);
    const [avatar, setAvatar] = useState('');


    const alert = useAlert();
    const dispatch = useDispatch();

    const { user } = useSelector(state => state.auth);
    const { error, isUpdated } = useSelector(state => state.user)
    const img = user.avatar.url
    const [avatarPreview, setAvatarPreview] = useState(img);

    useEffect(() => {

        if (user) {
            setFname(user.fname);
            setLname(user.lname);
            setName(user.name);
            setCountry(user.country);
            setPhone(user.phone);
            setBio(user.bio);
            setBirthday(user.birthday);
            setShowBookedExp(false)
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            dispatch(loadUser());
            dispatch({
                type: UPDATE_PROFILE_RESET
            })
        }

    }, [dispatch, alert, error, 
        isUpdated, user])

    const submitHandler = () => {

        const formData = new FormData();
        formData.set('fname', fname);
        formData.set('lname', lname);
        formData.set('name', name);
        formData.set('country', country);
        formData.set('bio', bio);
        formData.set('birthday', birthday);
        formData.set('phone', phone);
        formData.set('avatar', avatar);
        formData.set('showbooked', showBookedExp);

        dispatch(updateProfile(formData))
        alert.success('User updated successfully')
        history.push('/');
    }
 const onDelete = e => {
    setAvatarPreview('/images/default_avatar.jpg');
 }
    const onChange = e => {
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatarPreview(reader.result)
                setAvatar(reader.result)
            }
        }

        reader.readAsDataURL(e.target.files[0])

    }
    //

    return(

        <Layout>
            <br/>
            <br/>
        <Box className="m-12">
            <Box>
                {/* Name / Settings */}
                <Box className="flex">
                    <Box>
                        <img src={user.avatar.url} alt={user.name +' picture'} className="profilePictureImage"
                             style={{width:"124px", height:"124px"}}/>
                    </Box>
                    <Box className="flex">
                    {user.role ==="user" ? (
                        <Box className="mt-7 ml-5 subTitleFont"><span className="titleFont">{user.fname} {user.lname} /</span> Settings</Box>
                        ) : ( 
                        <Box className="mt-7 ml-5 subTitleFont"><span className="titleFont">{user.name} /</span> Settings</Box>
                              )}
                    </Box>
                </Box>

                {/* Contents */}
                <Box className="flex">
                    {/* Settings */}
                    <Box className="relative mt-4 w-[20%]">
                        <Box className="">
                            <label className="titleFont">Settings</label>
                            <Tabs sx={tabsSx} orientation="vertical" value={activeSetting} variant="scrollable" onChange={handleActiveSettingChange} >
                                {
                                    settingsLabels.map( (label, index)=>(
                                        <Tab style={tabsStyle} key={index} label={label} value={index}
                                             onClick={index===3?logoutHandler: null}
                                             style={{fontSize:"0.9rem", marginRight:"3rem"}}
                                             
                                        />
                                    ))
                                }

                            </Tabs>
                        </Box>
                    </Box>

                    {/* Content */}
                    <Box className="relative mt-4 w-[80%]">
                        <TabPanel value={activeSetting} index={0}> 
                        <Box container component="form" onSubmit={submitHandler} noValidate>




{/* Change pic */}
<Box className="flex">

    <Box>
        <img  src={avatarPreview} alt={user.name +' picture'} className="profilePictureImage"
             style={{width:"124px", height:"124px"}}/>
    </Box>
    <Box className="flex">

        <Box className="mt-9 ml-12 subTitleFont space-x-10">

            <Input id="uploadImage" style={{display: 'none'}}
                   type="file" onChange={onChange}/>
            <label htmlFor="uploadImage"
                   style={{
                       height: '44px',
                       boxShadow: '1.57533px 0.787666px 3.93833px 1.57533px rgba(0, 0, 0, 0.4)',
                       borderRadius: '11px',
                       fontWeight: '600',
                       fontSize: '20px',
                       paddingLeft: '15px',
                       paddingRight: '15px',
                       paddingTop: '12px',
                       paddingBottom: '12px',
                       textTransform: 'uppercase'
                   }}
                   className="cursor-pointer pinkGradientBgWhiteText"
            >Change profile picture</label>


            <Button sx={{...muiButtonSx,width: '105px', fontSize: '18px'}} className="blueGradientText" onClick={onDelete}>
                Delete
            </Button>
        </Box>
    </Box>
</Box>


{/* Infos */}
<Box>

    <Box className="titleFont text-center">
        Change your information
    </Box>

    {/* Fields */}
    <Box>
        {/* Name */}
        {user.role ==="user" ? (
      <>
        <Box className="textFieldsBox" >
            <Box >
                <TextField style={{width: '300px'}} sx={textFieldSx}
                           value={fname} onChange={(e) => setFname(e.target.value)} 
                           placeholder="First name"/>
            </Box>
            </Box>
        <Box className="textFieldsBox ">
            <Box>
                <TextField style={{width: '300px'}} sx={textFieldSx}
                           value={lname} onChange={(e) => setLname(e.target.value)}
                            placeholder="Last name"/>
            </Box>
        </Box>
        </>
          ) : ( 
       
            <Box className="textFieldsBox ">
            <Box>
                <TextField style={{width: '300px'}} sx={textFieldSx}
                           value={name} onChange={(e) => setName(e.target.value)}
                            placeholder="Name"/>
            </Box>
        </Box>
     
          )}

        {/* Date / Country */}
        <Box className="textFieldsBox ">
            <Box>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    maxDate={new Date().setFullYear(getYear(new Date())-18)}
                    PopperProps={{sx:popperSx}}
                    onChange={handleBirthDateChange}
                    value={birthday}
                    inputFormat="dd/MM/yyyy"
                    renderInput={(params)=><TextField className="w-[299px] relative" sx={dateTextFieldSx} {...params}/>} />
                </LocalizationProvider>
            </Box>
            </Box>
            <Box className="textFieldsBox ">
            <Box>
                <TextField style={{width: '300px'}} sx={textFieldSx}
                           value={country} onChange={(e) => setCountry(e.target.value)}
                            placeholder="Country"/>
            </Box>
            </Box>

        {/* Phone */}
        <Box className="textFieldsBox ">

            <Box>
                <TextField style={{width: '300px'}} sx={textFieldSx}
                           value={phone} onChange={(e) => setPhone(e.target.value)}
                           placeholder="Phone number" type="number"/>
            </Box>
            </Box>
        </Box>
        <br/>

        {/* Bio */}
        <Box className="mb-24">
            <Box>
                <Box className="titleFont" style={{fontSize: '20px'}}>
                    Bio:
                </Box>
                <Box>
                    <TextField style={{width: '100%'}} sx={textAreaSx}
                               value={bio} onChange={(e) => setBio(e.target.value)}
                               placeholder="Bio"/>
                </Box>
            </Box>
<br/><br/><br/>
        {/* Booked Exp */}
        <Box className="flex">
            <Box className="titleFont" style={{fontSize: '18px'}}>
                Show Booked Experiences on your profile:
            </Box>
            <Box>
                <Switch checked={showBookedExp} value={showBookedExp}
                        onChange={handleShowBookedExpChange} sx={bookedExpSwitchSx} />
            </Box>
        </Box>
    </Box>

    {/* Buttons */}
    <Box className="mt-24">
        <Box className="flex space-x-10" justifyContent="center">
        {user.role ==="trader" ? (<>
            <Link to="/merchant/me">
            <Button sx={{...muiButtonSx, fontSize: '18px'}} style={{color: 'white'}}
                    className="blueGradientBg">Return to profile</Button>
            </Link>
            </>
                        ) : ( <></>
                              )}
            {user.role ==="host" ? (<>
            <Link to="/host/me">
            <Button sx={{...muiButtonSx, fontSize: '18px'}} style={{color: 'white'}}
                    className="blueGradientBg">Return to profile</Button>
            </Link>
            </>
                        ) : ( <></>
                              )}
          {user.role ==="user" ? (<>
            <Link to="/me">
            <Button sx={{...muiButtonSx, fontSize: '18px'}} style={{color: 'white'}}
                    className="blueGradientBg">Return to profile</Button>
            </Link>
            </>
                        ) : ( <></>
                              )}
            <Button sx={{...muiButtonSx, fontSize: '18px'}}
                    className="pinkGradientBgWhiteText" type="submit" onClick={submitHandler}>Save changes</Button>
        </Box>

    </Box>


</Box>

</Box>
                        </TabPanel>
                        <TabPanel value={activeSetting} index={1}> <UserSettingsCS data={userData}/> </TabPanel>
                        <TabPanel value={activeSetting} index={2}> <ContactPage/> </TabPanel>

                    </Box>

                </Box>



            </Box>

        </Box>
        </Layout>
    )
}

export default UserSettings;