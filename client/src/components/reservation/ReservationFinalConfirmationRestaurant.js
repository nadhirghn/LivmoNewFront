import React, {useState} from "react";
import {Box, Button, Stack} from "@mui/material";
import reservationRestaurantIcon from "../img/reservationRestaurantIcon.png";
import Typography from "@mui/material/Typography";
import {CalendarMonth, Person} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {format, formatDuration, intervalToDuration} from "date-fns";
import closeIcon from "../img/closeIcon.png";
import ReservationCancelPopUp from "./ReservationCancelPopUp";
import {resetReservationConfirmedRestaurant, subtractReservationTotalMoney} from "../../actions";


const ReservationFinalConfirmationRestaurant = ({handleStepChange})=>{

    const restaurantData= useSelector(state=> state.reservationConfirmedRestaurant)
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
        dispatch(resetReservationConfirmedRestaurant())
        subtractFromTotal(restaurantData.arrivalDate, restaurantData.departureDate, restaurantData.restaurant.price)
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

                <img style={{marginLeft: '40%'}} src={reservationRestaurantIcon} width="38px" height="36px"/>
                <Typography component='div' ><Box sx={{fontWeight: '400', fontSize: '18px'}}>{restaurantData.restaurant.name}</Box></Typography>
                <Typography component='div'><Box sx={{fontWeight: '700', fontSize: '21px'}}>
                    {
                        +(formatDuration(
                            intervalToDuration({
                                start: restaurantData.arrivalDate,
                                end: restaurantData.departureDate}),
                            {format: ['days']}
                        ).split(' ')[0])*(restaurantData.restaurant.price)
                    } DT
                </Box></Typography>
                <Typography component='div'><Box className="text-left" sx={{fontWeight: '400', fontSize: '13px'}}>
                    <CalendarMonth sx={{marginLeft:'11%', marginRight: '10px'}}/>
                    {format(restaurantData.arrivalDate, 'dd MMM')} -
                    {format(restaurantData.departureDate, 'dd MMM')}
                </Box></Typography>
                <Typography component='div'><Box className="text-left" sx={{fontWeight: '400', fontSize: '13px'}}><Person sx={{marginLeft:'11%', marginRight: '10px'}}/>{restaurantData.clientsCount}</Box></Typography>

                <Button style={buttonStyle} onClick={()=>handleStepChange(1)}>Edit</Button>
            </Stack>
        </Box>
    )

}

export default ReservationFinalConfirmationRestaurant;