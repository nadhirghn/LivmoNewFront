import React from "react";

import {muiButtonSx} from "../../MerchantMuiStyles";

//Mui imports
import Box from "@mui/material/Box";
import {Button} from "@mui/material";

//imgs imports
import verifiedIcon from '../../../../../img/verifiedIcon.png';
import messageUserIcon from "../../../../../img/messageUserIcon.png"

const MerchantAcceptedRequestItemTransport = ({data}) =>{

    const handleCancel = ()=> alert('Cancel')
    const handleContact = ()=> alert('Send Message')


    return(
        <Box className="itemsBoxRounded flex">


            {/* Left box */}
            <Box className="space-y-2 itemsBoxRoundedLeftBox">
                <Box className="flex space-x-20">
                    {/* Name */}
                    <Box className="itemTitleFont" >{data.reservation.service.name}</Box>

                </Box>

                {/* Description */}
                <Box className="importantItemTextFont">Description :</Box>
                <Box className="normalTextFont">{data.reservation.service.description}</Box>
                {/* Price & dates */}
                <Box className="flex relative importantItemTextFont">
                    <Box>{data.reservation.service.price} DT/Dish</Box>
                    <Box className="absolute right-0">  {data.reservation.service.company}</Box>
                </Box>
                {/* Location & details button */}
                <Box className="flex relative">
                    <Box className="importantItemTextFont">{data.reservation.service.location}</Box>
                    <Box className="absolute right-0"> <a className="importantItemTextFont detailsTextFont">Details</a> </Box>
                </Box>

                <Box className="pt-5">
                    {
                        data.payment?
                            <Box className="importantItemTextFont" style={{color: "#00A811"}}>*This client has paid for their reservation</Box>
                            :
                            <Box className="importantItemTextFont" style={{color: "#F40707"}}>*This client hasn't paid for their reservation yet</Box>

                    }
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
                        {data.reservation.totalPrice} DT
                    </Box>
                </Box>

                <Box className="pt-6 space-x-3 pr-2">
                    <Button sx={muiButtonSx} style={{width: '127px', textTransform: 'none'}} onClick={handleCancel}
                            className="blueGradientText">Cancel</Button>
                    <Button sx={muiButtonSx} style={{maxWidth: '40px', borderRadius: '7px'}} onClick={handleContact}>
                        <img className="msgUserButtonImage" src={messageUserIcon}/></Button>
                </Box>


            </Box>

        </Box>
    )

}

export default MerchantAcceptedRequestItemTransport;