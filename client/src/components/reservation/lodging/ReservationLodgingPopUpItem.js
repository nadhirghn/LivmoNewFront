import React from "react";
import {Box, Button, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useDispatch, useSelector} from "react-redux";
import { setReservationChosenLodging} from "../../../actions";


//Styles
const nameStyle={
    fontWeight: '600',
    fontSize: '14px',
    background: 'linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)',
    WebkitBackgroundClip:'text',
    WebkitTextFillColor: 'transparent',
}
const lodgingStyle={
    fontWeight: '700',
    fontSize: '12px',
}
const locationStyle={
    fontWeight: '500',
    fontSize: '12px',
}
const priceStyle={
    fontWeight: '400',
    fontSize: '12px',
    fontFamily: ''
}



const ReservationLodgingPopUpItem = ({data}) =>{

    //Data from redux
    const reduxLodgingData= useSelector(state => state.reservationConfirmedLodging)
    const dispatch = useDispatch()

    //Lodging booking handler
    function handleBook (data) {
        dispatch(setReservationChosenLodging(data))
    }

    return(
        <Box sx={{margin: '5px', position: 'relative'}}>
            <img src={data.image} alt={data.name} className="w-72 h-60 rounded-xl relative" />
            <Stack sx={{position: 'absolute', transform: 'translate(100%, -190%)'}} spacing={1}>
                {/* Modify the href */}
                <Button
                    sx={{color:'white',
                        background: 'linear-gradient(270deg, #0C1424 -0.34%, #143880 100%)',
                        ':hover':{color:  'white'}
                    }}
                    component="a" href={data.image} target='_blank'
                >See more</Button>
                {
                    /* Test if the lodging is booked or not: isBooked=> button 'Booked' else => button 'Book */
                    reduxLodgingData.lodging!== undefined && data.id===(reduxLodgingData.lodging.id)?
                        <Button
                            sx={{
                                color:'white!important',
                                background: 'linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)',
                            }}
                            disabled
                        >Booked</Button>:
                        <Button
                            sx={{
                                color:'white',
                                background: 'linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)',
                            }}
                            onClick={()=>handleBook(data)}
                        >Book</Button>
                }

            </Stack>
            <Box sx={{position: 'relative', width: '100%'}}>
                {/* Lodging data */}
                <Box sx={{position: 'absolute'}}  className="text-left">
                    <Typography style={nameStyle} component='div' >{data.name}</Typography>
                    <Typography style={lodgingStyle} component='div' >{data.lodging}</Typography>
                </Box>
                <Box sx={{ float: 'right'}}  className="text-right">
                    <Typography style={locationStyle} component='div' >{data.location}, Tunisia</Typography>
                    <Typography style={priceStyle} component='div' >{data.price} DT/ Night</Typography>
                </Box>
            </Box>

        </Box>
    )
}

export default ReservationLodgingPopUpItem;