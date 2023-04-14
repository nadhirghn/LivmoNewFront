import React from "react";
import { useSelector } from 'react-redux'
import { useState } from "react";

import moment from 'moment'


//Img Imports

import favoriteFilledIcon from '../../../../img/favouritePinkIcon.png'
import commentsBlueIcon from '../../../../img/commentsBlueGradientIcon.png'
import verifiedBlackIcon from '../../../../img/verifiedBlackIcon.png'


//Other Imports
import HostProfileExperienceItem from "./HostProfileExperienceItem";
import HostProfileComments from "./HostProfileComments";

//Mui Imports
import {Button, Link} from "@mui/material";
import muiButtonSx from "../MuiStyles";
import Box from "@mui/material/Box";
import { FacebookRounded, Instagram, LinkedIn, Twitter} from "@mui/icons-material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";


const HostProfile = ()=>{

    const { user } = useSelector(state => state.auth);

    //Preset data

    const presetEditExperiencesData=[
        {id: '1', name: 'Jbal Rsas Hiking', price: '120', location: 'Mornak', startDateTime: '25/06/2022 12:00', endDateTime: '27/06/2022 18:00', tags: 'Nature Hiking', image: 'https://t4.ftcdn.net/jpg/02/12/62/79/240_F_212627923_L2vmREAE9lGLnmFbNPhf2TfCRT44z6PB.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'}
    ]
    const comments=[
        {id: '1', name: 'Yassmine Fitouri', dateTime: '12/04/2022 18:35', image: 'https://t4.ftcdn.net/jpg/01/29/91/19/240_F_129911911_4zgnIdibNhZXLDVGhQ4Dl0rwAcp6gkIa.jpg', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"},
        {id: '2', name: 'Khaled Lahmer', dateTime: '12/04/2022 18:35', image: 'https://t4.ftcdn.net/jpg/03/64/21/11/240_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"},
    ]
    const [value, setValue] = useState(0);

    return(
        <Box className="-ml-[100px] flex">

            {/* Left part */}
            <Box className="w-[382px]">

                <Box className="pl-8">
                    {/* Profile picture */}
                    <Box className="mb-8">
                        <img className="hostProfilePictureBig ml-7"
                             src={user.avatar.url}
                             alt={user.name} />
                    </Box>
                    <Box className="flex space-x-8">

                        {/* Verified, Favourites & Comments */}
                        <BottomNavigation
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                    >
                        <BottomNavigationAction
                        label="Verified"
                        style={{color:"black"}}
                        icon={<CheckCircleOutlineOutlinedIcon sx={{color: "#e42651", fontSize: 60}}/>}
                        />
                        <BottomNavigationAction 
                        style={{color:"black"}}
                        label="Favorites" 
                        icon={<FavoriteIcon sx={{color: "#e42651" , fontSize: 60}}/>} />
                        <BottomNavigationAction
                        label="Comments"
                        style={{color:"black"}}
                        icon={<ChatBubbleOutlineOutlinedIcon sx={{color: "#e42651" , fontSize: 60}} />}
                        />
                    </BottomNavigation>
                    </Box>
                </Box>


                {/* Divider */}
                <Box>
                    <hr className="divider" />
                </Box>


                {/* Unclear */}
                <Box className="pl-7 space-y-16">
                    <Box style={{marginTop: '-90px', color: 'black', letterSpacing: '0.02em'}} className="itemsBoxRoundedBlueBoxTextFont">
                        {user.name}: Confirmed


                    </Box>

                    {/* Verified box */}
                    <Box className="profileBoxes space-y-6 blueGradientText">
                        <Box className="verificationBoxItems">
                            <img src={verifiedBlackIcon} alt={"Verified Icon"}/>
                            Identity
                        </Box>
                        <Box className="verificationBoxItems">
                            <img src={verifiedBlackIcon} alt={"Verified Icon"}/>
                            Email
                        </Box>
                        <Box className="verificationBoxItems">
                            <img src={verifiedBlackIcon} alt={"Verified Icon"}/>
                            Phone Number
                        </Box>
                    </Box>

                    {/* Learn more box */}
                    <Box className="profileBoxes learnMoreText" paddingTop="15%">
                        <Link to="#" target="_blank" className="blueGradientText detailsTextFont">Learn More:</Link> on how confirming account information helps keep the LIVMO community safe.
                    </Box>

                </Box>

                <Box className="space-x-4 text-center mt-12">
                    {/* Social media */}
                    <FacebookRounded fontSize="large" />
                    <Instagram fontSize="large" />
                    <Twitter fontSize="large"/>
                    <LinkedIn fontSize="large"/>
                </Box>

            </Box>




            {/* Right part */}
            <Box className="ml-20 w-full space-y-20">

                {/* Personal data */}
                <Box className=" p-6">
                    <Box className="font-bold text-4xl pinkGradientText leading-9">
                        {user.name}
                    </Box>
                    <Box className="font-bold text-xl leading-6 tracking-widest">
                        Host
                    </Box>
                    <Box className="learnMoreText pt-3" style={{fontSize: "14px"}}>
                        Member since {moment(user.createdAt).format('LL')}
                    </Box>
                    <Box className="learnMoreText" style={{fontSize: "14px"}}>
                        Lives in {user.country}
                    </Box>
                </Box>

                {/* Bio box */}
                <Box className="profileBoxes" style={{width: "100%", height: "auto"}}>
                    <Box className="titleFont">
                        Biography
                    </Box>
                    <Box className="normalTextFont">
                        {user.bio}
                    </Box>
                </Box>

                {/* Experience box */}
                <Box>
                    <Box className="titleFont">
                        Experiences
                    </Box>
                    <Box>
                        {
                            presetEditExperiencesData.map(item=>(
                                <Box key={item.id}>
                                    <HostProfileExperienceItem data={item}/>
                                </Box>
                            ))
                        }
                    </Box>
                </Box>

                {/* Favourites & Comments */}
                <Box>

                    <Box className="flex space-x-6">
                        <Box style={{textTransform: 'none', width: "212px", height: '47px'}}
                             className="flex tagItem pinkGradientText buttonStyleRadius11 pl-2 pt-3">
                            <img className="ml-2 w-[32px] h-[27px] mr-4"
                                 src={favoriteFilledIcon}
                                 alt="Favourites icon"/>
                            {/* Favourites count */}
                            45
                            Favourites</Box>
                        <Box style={{textTransform: 'none', width: "212px", height: '47px'}}
                             className="flex tagItem blueGradientText buttonStyleRadius11 pl-2 pt-3">
                            <img className="ml-2 w-[25px] h-[25px] mr-4 "
                                 src={commentsBlueIcon}
                                 alt="Favourites icon"/>
                            {/* Comments count*/}
                            21
                            Comments</Box>
                    </Box>

                </Box>

                {/* Comments */}
                <Box >
                    <Box className="space-y-11">
                        {
                            comments.map(item=>(
                                <Box key={item.id}>
                                    <HostProfileComments data={item} />
                                </Box>
                            ))
                        }

                        {/* See more */}
                        <Box style={{marginLeft: '25%'}} className="">
                            <Button style={{width: '251px', fontSize:'26px', borderRadius: '11px' }}
                                    className=" pinkGradientText" sx={muiButtonSx}>See more</Button>
                        </Box>
                    </Box>

                </Box>



            </Box>

        </Box>
    )
}

export default HostProfile;