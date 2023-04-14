import React, {useState} from "react";


//Mui
import Box from "@mui/material/Box";
import {ArrowBack, Facebook, FacebookRounded} from "@mui/icons-material";
import {Button, Select, Stack, TextField} from "@mui/material";
import {selectSx, textAreaSx, textFieldSx} from "./UserSettingsMuiStyles";
import MenuItem from "@mui/material/MenuItem";

//imgs
import facebookIcon from '../../../img/facebookContactIcon.png';
import instagramIcon from '../../../img/instagramContactIcon.png';
import emailIcon from '../../../img/emailContactIcon.png';
import whatsAppIcon from '../../../img/whatsAppContactIcon.png';
import contactImage from '../../../img/contactBoxImage.png';
import logo from '../../../img/logo.png';



const ContactPage = ()=>{

    //States
    const [topic, setTopic]= useState('none')
    const [fullName, setFullName]= useState('')
    const [phone, setPhone]= useState(0)
    const [email, setEmail]= useState('')
    const [message, setMessage]= useState('')

    //Handlers
    const handleTopicChange= (event)=> setTopic(event.target.value)
    const handleFullNameChange= (event)=> setFullName(event.target.value)
    const handlePhoneChange= (event)=> setPhone(event.target.value)
    const handleEmailChange= (event)=> setEmail(event.target.value)
    const handleMessageChange= (event)=> setMessage(event.target.value)

    const sendEmailHelp= ()=>{
        if(fullName.length!=0 && phone.toString().length==8 && /.+@.+\.[A-Za-z]+$/.test(email) && message.length>10)
            alert("Help!")
    }


    const topics= ["Experience", "User report", "More topics"]

    return(
        <Box className="mb-24 subTitleFont">

            <Box className="flex ml-5">
                <Box>
                    {/* Insert Link here */}
                    <ArrowBack className="cursor-pointer" fontSize="large" />
                </Box>
                <Box className="text-center w-full titleFont pinkGradientText">
                    Contact Information
                </Box>
            </Box>


            <Box className="ml-[15%]">
            {/* Contact */}
            <Box className="flex" alignItems="center">

                <Box className="w-1/2">
                    <Box className="subTitleFont contactInfoBox">
                        <img  src={whatsAppIcon}/>
                        +216 55 000 000
                    </Box>

                    <Box className="subTitleFont contactInfoBox">
                        <img src={facebookIcon}/>
                        <a target="_blank" href="">www.facebook.com/livmo</a>
                    </Box>
                </Box>

                <Box className="w-1/2">
                    <Box className="subTitleFont contactInfoBox">
                        <img src={emailIcon}/>
                        contact@livmo.com
                    </Box>
                    <Box className="subTitleFont contactInfoBox">
                        <img src={instagramIcon}/>
                        <a target="_blank" href="">www.instagram.com/livmo</a>
                    </Box>
                </Box>

            </Box>

            {/* Help box */}
            <Box className="contactHelpBox flex">

                <Box className="w-[40%] relative">
                    <img src={logo} alt="Livmo logo" className="absolute w-[45%] ml-[35%] mt-[10%]"/>
                    <img className="contactHelpBoxImage" src={contactImage} alt="Contact image"/>
                </Box>

                <Stack className="w-[60%] ml-5 pt-3 mb-4 pr-[2%]">
                    <Box className="pinkGradientText titleFont">
                        How can we help?
                    </Box>
                    <Stack>
                        Please select a topic
                        <Select sx={selectSx} style={{width: '50%'}}
                                value={topic} onChange={handleTopicChange}>
                            <MenuItem selected value='none'>
                                Topic
                            </MenuItem>
                            {
                                topics.map((item)=>(
                                    <MenuItem key={item} value={item} >
                                        {item}
                                    </MenuItem>
                                ))
                            }
                        </Select>
                    </Stack>

                    <Box className="flex">
                        <Box className="w-[50%]">
                            Full name<br/>
                            <TextField sx={textFieldSx} placeholder="Full name"
                                       value={fullName} onChange={handleFullNameChange}/>
                        </Box>
                        <Box className="w-[50%]">
                            Phone<br/>
                            <TextField sx={textFieldSx} placeholder="Phone" error={isNaN(phone)}
                                       value={phone} onChange={handlePhoneChange}/>
                        </Box>
                    </Box>

                    <Box className="">
                        Email<br/>
                        <TextField sx={textFieldSx} error={!(/.+@.+\.[A-Za-z]+$/.test(email))} placeholder="Email"
                                   value={email} onChange={handleEmailChange}/>
                    </Box>

                    <Box className="mb-16">
                        Message<br/>
                        <TextField fullWidth sx={textAreaSx} placeholder="Message"
                                   value={message} onChange={handleMessageChange}/>
                    </Box>

                    <Box  className="text-right">
                        <Button sx={{
                            width: '150px',
                            height: '50px',
                            fontWeight: '700',
                            fontSize: '24px',
                            borderRadius: '25px',
                        }}
                                onClick={sendEmailHelp}
                            className="pinkGradientBgWhiteText" >Send</Button>
                    </Box>

                </Stack>
            </Box>

            </Box>
        </Box>
    )
}

export default ContactPage;