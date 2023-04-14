import React from "react";
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";

// Styles
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

const ReservationChosenTransport = ({data}) =>{

    return(
            <Box sx={{margin: '5px', position: 'relative', left:'30%'}} className="w-72">
                <img src={data.image} alt={data.name} className="w-72 h-60 rounded-xl relative" />
                <Box sx={{position: 'relative'}}>
                    <Box sx={{position: 'absolute'}}  className="text-left">
                        <Typography style={nameStyle} component='div' >{data.name}</Typography>
                        <Typography style={typeStyle} component='div' >{data.type}</Typography>
                    </Box>
                    <Box sx={{ float: 'right'}}  className="text-right">
                        <Typography style={locationStyle} component='div' >{data.location}, Tunisia</Typography>
                        <Typography style={priceStyle} component='div' >{data.price} DT/ Night</Typography>
                    </Box>
                </Box>
            </Box>
    )
}

export default ReservationChosenTransport;