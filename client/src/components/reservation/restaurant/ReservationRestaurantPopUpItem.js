import React from "react";
import {Box, Button, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useDispatch, useSelector} from "react-redux";
import {setReservationChosenRestaurant} from "../../../actions";


//Styles
const nameStyle={
    fontWeight: '600',
    fontSize: '14px',
    background: 'linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)',
    WebkitBackgroundClip:'text',
    WebkitTextFillColor: 'transparent',
}
const typeStyle={
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



const ReservationRestaurantPopUpItem = ({data}) =>{

    //Data from redux
    const reduxRestaurantData= useSelector(state => state.reservationConfirmedRestaurant)
    const dispatch = useDispatch()

    //Restaurant booking handler
    function handleBook (data) {
        dispatch(setReservationChosenRestaurant(data))
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
                    /* Test if the restaurant is booked or not: isBooked=> button 'Booked' else => button 'Book */
                    reduxRestaurantData.restaurant!== undefined && data.id===(reduxRestaurantData.restaurant.id)?
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
                {/* Restaurant data */}
                <Box sx={{position: 'absolute'}}  className="text-left">
                    <Typography style={nameStyle} component='div' >{data.dish}</Typography>
                    <Typography style={typeStyle} component='div' >{data.name}</Typography>
                </Box>
                <Box sx={{ float: 'right'}}  className="text-right">
                    <Typography style={locationStyle} component='div' >{data.location}, Tunisia</Typography>
                    <Typography style={priceStyle} component='div' >{data.workTime}</Typography>
                </Box>
            </Box>

        </Box>
    )
}

export default ReservationRestaurantPopUpItem;