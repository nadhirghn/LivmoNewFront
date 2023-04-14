import React from "react";

//Mui Imports 
import Box from "@mui/material/Box";
import {Button} from "@mui/material";
import muiButtonSx from "../MuiStyles";

//Img Imports
import messageUserIcon from "../../../../img/messageUserIcon.png"
import verifiedIcon from '../../../../img/verifiedIcon.png';

const HostNewRequestItem = ({data}) =>{

    const handleAccept = ()=> alert('Accept')
    const handleDecline = ()=> alert('Decline')
    const handleContact = ()=> alert('Send Message')


    return(
        <Box className="itemsBoxRounded flex">


            {/* Left box */}
            <Box className="space-y-5 itemsBoxRoundedLeftBox">
                <Box className="flex space-x-20">
                    {/* Name */}
                    <Box className="itemTitleFont" >{data.reservation.experience.name}</Box>

                    {/* Tags (I used tags as string separated by spaces ' ') */}
                    <Box className="flex space-x-16">
                        {
                            data.reservation.experience.tags.split(' ').map(tag=>(
                                <Box key={tag} className="pinkGradientBgWhiteText tagItem">{tag}</Box>
                            ))
                        }
                    </Box>
                </Box>

                {/* Description */}
                <Box className="importantItemTextFont">Description :</Box>
                <Box className="normalTextFont">{data.reservation.experience.description}</Box>
                {/* Price & dates */}
                <Box className="flex relative importantItemTextFont">
                    <Box>{data.reservation.experience.price} DT/Person</Box>
                    <Box className="absolute right-0"> {data.reservation.experience.startDateTime} - {data.reservation.experience.endDateTime} </Box>
                </Box>
                {/* Location & details button */}
                <Box className="flex relative">
                    <Box className="importantItemTextFont">{data.reservation.experience.location}</Box>
                    <Box className="absolute right-0"> <a className="importantItemTextFont detailsTextFont">Details</a> </Box>
                </Box>
            </Box>

            {/* Right box */}
            <Box className="itemsBoxRoundedRightBox bg-[#EEEEEE] space-y-4 pl-[11px] pt-6">


                <Box className="flex text-left mb-8 pl-[14px]">
                    <img className="profilePictureImage" src={data.reservation.user.image}/>
                    <Box className="importantItemTextFont ml-5 mt-4">
                        <Box className="flex">
                            {data.reservation.user.firstName} {data.reservation.user.lastName}
                            <img src={verifiedIcon} className="verifiedUserIconStyle"/>
                        </Box>
                        <Box>
                            <a className="detailsTextFont" href="#" target="_blank" style={{textDecorationLine: 'none'}}>Profile</a>
                        </Box>
                    </Box>
                </Box>

                <Box className="text-left importantItemTextFont pl-[14px] space-y-6">
                    <Box>
                        {data.reservation.startDateTime} - {data.reservation.endDateTime}
                    </Box>
                    <Box>
                        {data.reservation.clientsCount}
                    </Box>
                    <Box>
                        {data.reservation.totalPrice} DT
                    </Box>
                </Box>

                <Box className="pt-6 space-x-3 pr-2">
                    <Button sx={muiButtonSx} style={{width: '110px'}} onClick={handleAccept}
                            className="pinkGradientBgWhiteText">Accept</Button>
                    <Button sx={muiButtonSx} style={{width: '110px', textTransform: 'none'}} onClick={handleDecline}
                            className="blueGradientText">Delete</Button>
                    <Button sx={muiButtonSx} style={{maxWidth: '40px', borderRadius: '7px'}}
                            onClick={handleContact}>
                        <img className="msgUserButtonImage" src={messageUserIcon}/></Button>
                </Box>


            </Box>

        </Box>
    )

}

export default HostNewRequestItem;