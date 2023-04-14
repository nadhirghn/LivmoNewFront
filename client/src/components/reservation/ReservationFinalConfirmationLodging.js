import React, {useState} from "react";
import {Box, Button, Stack} from "@mui/material";
import reservationLodgingIcon from "../img/reservationLodgingIcon.png";
import closeIcon from '../img/closeIcon.png'
import Typography from "@mui/material/Typography";
import {CalendarMonth, Person} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {format, formatDuration, intervalToDuration} from "date-fns";
import ReservationCancelPopUp from "./ReservationCancelPopUp";
import {resetReservationConfirmedLodging, subtractReservationTotalMoney} from "../../actions";


const ReservationFinalConfirmationLodging = ({handleStepChange })=>{

    const lodgingData= useSelector(state=> state.reservationConfirmedLodging)
    const dispatch= useDispatch()

    const [cancelPopUpOpen, setCancelPopOpen]= useState(false);
    const handleOpen = ()=> setCancelPopOpen(true)
    const handleClose = ()=> setCancelPopOpen(false)

    const subtractFromTotal = (arrivalDate, departureDate, price)=>{
        let value=+(formatDuration(
            intervalToDuration({
                start: arrivalDate,
                end: departureDate}),
            {format: ['days']}
        ).split(' ')[0])*(+price)
        dispatch(subtractReservationTotalMoney(value))
    }

    const cancelReservation = ()=> {
        dispatch(resetReservationConfirmedLodging())
        subtractFromTotal(lodgingData.arrivalDate, lodgingData.departureDate, lodgingData.lodging.price)
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
            <ReservationCancelPopUp open={cancelPopUpOpen} msg={"Are you sure you want to cancel this reservation?"}
                                  onClick={cancelReservation}  handleClose={handleClose}
            />
            <Box className="relative">
                <img onClick={handleOpen} src={closeIcon} className="absolute right-4 top-3 cursor-pointer" width="31px" height="31px" />
            </Box>
            <Stack style={{boxShadow: ' 1.05109px 0.525546px 2.62773px 1.05109px rgba(0, 0, 0, 0.4)', borderRadius: '8px',}}
                   className="text-center border-2 space-y-[52px] pt-12"  width="262px" height="505px">

                <img style={{marginLeft: '40%'}} src={reservationLodgingIcon} width="38px" height="36px"/>
                <Typography component='div' ><Box sx={{fontWeight: '400', fontSize: '18px'}}>{lodgingData.lodging.name}</Box></Typography>
                <Typography component='div'><Box sx={{fontWeight: '700', fontSize: '21px'}}>
                    {
                        +(formatDuration(
                            intervalToDuration({
                                start: lodgingData.arrivalDate,
                                end: lodgingData.departureDate}),
                            {format: ['days']}
                        ).split(' ')[0])*(lodgingData.lodging.price)
                    } DT
                </Box></Typography>
                <Typography component='div'><Box className="text-left" sx={{fontWeight: '400', fontSize: '13px'}}>
                    <CalendarMonth sx={{marginLeft:'11%', marginRight: '10px'}}/>
                    {format(lodgingData.arrivalDate, 'dd MMM')} -
                    {format(lodgingData.departureDate, 'dd MMM')}
                </Box></Typography>
                <Typography component='div'><Box className="text-left" sx={{fontWeight: '400', fontSize: '13px'}}><Person sx={{marginLeft:'11%', marginRight: '10px'}}/>{lodgingData.clientsCount}</Box></Typography>

                <Button style={buttonStyle} onClick={()=>handleStepChange(0)}>Edit</Button>
            </Stack>
        </Box>
    )

}

export default ReservationFinalConfirmationLodging;