import React, {useState} from "react";
import {Box, Button, Stack} from "@mui/material";
import reservationExperienceIcon from '../img/reservationExperienceIcon.png'
import Typography from "@mui/material/Typography";
import {CalendarMonth, Person} from "@mui/icons-material";
import closeIcon from "../img/closeIcon.png";

const ReservationFinalConfirmationExperience= () =>{

    //Experience presetData
    const presetData={
        name: 'Rtiba Forest Hiking',
        price: 240,
        date: '12 Sept, 14H',
        clientsCount: '2 Clients'
    }

    const buttonStyle={
        transform: 'translateX(75%)',
        width: '99px',
        height: '41px',
        boxShadow: ' 1.05109px 0.525546px 2.62773px 1.05109px rgba(0, 0, 0, 0.4)',
        borderRadius: '8px',
        background: 'linear-gradient(270deg, #0C1424 -0.34%, #143880 100%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: '15px',
        fontWeight: '600'
    }

    return(
        <Box>
            <Box className="relative">
                <img src={closeIcon} className="absolute right-4 top-3 cursor-pointer" width="31px" height="31px"  />
            </Box>
            <Stack style={{boxShadow: ' 1.05109px 0.525546px 2.62773px 1.05109px rgba(0, 0, 0, 0.4)', borderRadius: '8px',}}
                   className="text-center border-2 space-y-[52px] pt-9"  width="262px" height="505px">

                <img style={{marginLeft: '40%'}} src={reservationExperienceIcon} width="38px" height="36px"/>
                <Typography component='div' ><Box sx={{fontWeight: '400', fontSize: '18px'}}>{presetData.name}</Box></Typography>
                <Typography component='div'><Box sx={{fontWeight: '700', fontSize: '21px'}}>{presetData.price} DT</Box></Typography>
                <Typography component='div'><Box className="text-left" sx={{fontWeight: '400', fontSize: '13px'}}><CalendarMonth sx={{marginLeft:'11%', marginRight: '10px'}}/> {presetData.date}</Box></Typography>
                <Typography component='div'><Box className="text-left" sx={{fontWeight: '400', fontSize: '13px'}}><Person sx={{marginLeft:'11%', marginRight: '10px'}}/>{presetData.clientsCount}</Box></Typography>

                <Button style={buttonStyle}>Edit</Button>
            </Stack>
        </Box>
    )
}

export default ReservationFinalConfirmationExperience