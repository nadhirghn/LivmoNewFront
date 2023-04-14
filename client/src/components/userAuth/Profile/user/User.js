import React, {useState} from "react";
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

//
import verifiedIcon from '../../../img/verifiedIcon.png';

//
import UserHistory from "./userHistory/UserHistory";
import muiButtonSx from "./MuiStyles";
import UserFavourites from "./userFavourites/UserFavourites";
import UserRequests from "./userReservation/userRequests";
import UserProfile from "./userProfile/userProfile";
import Layout from "../../../shared/layout"

//Mui Imports
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {Box, Button} from "@mui/material";
import Typography from "@mui/material/Typography";
import {SxProps} from "@mui/material";

//Styles
const tabsStyle= {
    color: 'black',
    fontWeight: '700',
    fontSize: '17px',
    textTransform: 'none',
    width: '200px',
    marginLeft: '30px',
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
}
const tabsSx: SxProps={
    '& .MuiTabs-root':{
//        width: '100%'
    },
    '& .MuiTabs-indicator':{
        background: 'linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)',
    },
    '& .Mui-selected':{
        background: 'linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)',
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


const User= () =>{
    const { user } = useSelector(state => state.auth);


    //Array of tabs label
    const tabsLabels= ['History', 'Favourites', 'Reservations', 'Profile', 'Messages']

    //Active tab state
    const [activeTab, setActiveTab]= useState(0);
    const handleActiveTabChange= (event, newActiveStep)=> setActiveTab(newActiveStep)

    return(
        <Layout>
        <Box className="m-12">
            {/* Profile header */}
            <Box className="flex justify-center center pt-11">
                <img className="hostProfilePictureBig"
                    src={user.avatar.url}
                     alt="User profile picture" />
                <Box className="p-6">
                    <Typography component="div" className="flex space-x-3.5">
                        <Box className="font-bold text-4xl leading-9">
                            {user.fname} {user.lname} 
                        </Box>
                        <img width="45px" src={verifiedIcon}/>
                    </Typography>
                    <Typography component="div">
                        <Box className="font-bold text-xl leading-6 tracking-widest">
                        Adventurer
                        </Box>
                    </Typography>

                    <Box className="pt-6">
                    <Link  style={{ textDecoration : "none", color: '#000000'}} to="/settings">
                        <Button sx={muiButtonSx} className="pinkGradientText" style={{textTransform: 'none'}}>
                            Settings</Button>
                    </Link>
                    </Box>
                </Box>

            </Box>


            {/* Tabs */}
            <Box className="relative mt-4">
                <Box sx={{ borderBottom: '1px solid #0C1424'}} className="">
                    <Tabs sx={tabsSx} value={activeTab} variant="scrollable" onChange={handleActiveTabChange} >
                        {
                            tabsLabels.map( (label, index)=>(
                                <Tab key={index} style={tabsStyle} label={label} value={index}/>
                            ))
                        }

                    </Tabs>
                </Box>
            </Box>

            {/* Tabs panels */}
            <Box className="mt-16 ml-[130px]">
                <TabPanel value={activeTab} index={0}> <UserHistory/> </TabPanel>
                <TabPanel value={activeTab} index={1}> <UserFavourites/> </TabPanel>
                <TabPanel value={activeTab} index={2}> <UserRequests/> </TabPanel>
                <TabPanel value={activeTab} index={3}> <UserProfile/> </TabPanel>
                <TabPanel value={activeTab} index={4}>Msgs</TabPanel>
            </Box>
        </Box>
        </Layout>
    )
}

export default User;