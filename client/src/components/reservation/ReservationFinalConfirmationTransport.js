import React, {useState} from "react";
import {Box, Button, Stack} from "@mui/material";
import reservationTransportIcon from "../img/reservationTransportIcon.png";
import Typography from "@mui/material/Typography";
import {CalendarMonth, Person} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {format, formatDuration, intervalToDuration} from "date-fns";
import closeIcon from "../img/closeIcon.png";
import ReservationCancelPopUp from "./ReservationCancelPopUp";
import {resetReservationConfirmedTransport, subtractReservationTotalMoney} from "../../actions";


const ReservationFinalConfirmationTransport = ({handleStepChange })=>{

    const transportData= useSelector(state=> state.reservationConfirmedTransport)
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
        dispatch(resetReservationConfirmedTransport())
        subtractFromTotal(transportData.arrivalDate, transportData.departureDate, transportData.transport.price)
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

                <img style={{marginLeft: '40%'}} src={reservationTransportIcon} width="38px" height="36px"/>
                <Typography component='div' ><Box sx={{fontWeight: '400', fontSize: '18px'}}>{transportData.transport.name}</Box></Typography>
                <Typography component='div'><Box sx={{fontWeight: '700', fontSize: '21px'}}>
                    {
                        +(formatDuration(
                            intervalToDuration({
                                start: transportData.arrivalDate,
                                end: transportData.departureDate}),
                            {format: ['days']}
                        ).split(' ')[0])*(transportData.transport.price)
                    } DT
                </Box></Typography>
                <Typography component='div'><Box className="text-left" sx={{fontWeight: '400', fontSize: '13px'}}>
                    <CalendarMonth sx={{marginLeft:'11%', marginRight: '10px'}}/>
                    {format(transportData.arrivalDate, 'dd MMM')} -
                    {format(transportData.departureDate, 'dd MMM')}
                </Box></Typography>
                <Typography component='div'><Box className="text-left" sx={{fontWeight: '400', fontSize: '13px'}}><Person sx={{marginLeft:'11%', marginRight: '10px'}}/>{transportData.clientsCount}</Box></Typography>

                <Button style={buttonStyle} onClick={()=>handleStepChange(2)}>Edit</Button>
            </Stack>
        </Box>
    )

}

export default ReservationFinalConfirmationTransport;