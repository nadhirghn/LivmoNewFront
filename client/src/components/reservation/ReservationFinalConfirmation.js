import React from "react";
import {Box, Grid} from "@mui/material";
import ReservationFinalConfirmationExperience from "./ReservationFinalConfirmationExperience";
import ReservationFinalConfirmationLodging from "./ReservationFinalConfirmationLodging";
import ReservationFinalConfirmationRestaurant from "./ReservationFinalConfirmationRestaurant";
import ReservationFinalConfirmationTransport from "./ReservationFinalConfirmationTransport";
import {useSelector} from "react-redux";


const ReservationFinalConfirmation = ({handleStepChange}) =>{

    const lodgingData= useSelector(state=> state.reservationConfirmedLodging)
    const restaurantData= useSelector(state=> state.reservationConfirmedRestaurant)
    const transportData= useSelector(state=> state.reservationConfirmedTransport)

    return(
        <Grid justifyContent='center' className='mt-4 flex space-x-12' sx={{marginBottom: '100px'}}>
            <ReservationFinalConfirmationExperience/>
            {lodgingData.lodging.id?<ReservationFinalConfirmationLodging handleStepChange={handleStepChange}/>:null}
            {restaurantData.restaurant.id?<ReservationFinalConfirmationRestaurant handleStepChange={handleStepChange} />:null}
            {transportData.transport.id?<ReservationFinalConfirmationTransport handleStepChange={handleStepChange}/>:null}
        </Grid>
    )
}

export default ReservationFinalConfirmation;