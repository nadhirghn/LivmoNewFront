import React from "react";
import {Box, Button, Grid, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import {format, formatDuration, intervalToDuration} from "date-fns";
import {useDispatch} from "react-redux";
import {resetReservationConfirmedTransport, subtractReservationTotalMoney} from "../../../actions";

//Styles
const boldTitleStyle= {
    marginRight: '20px',
    fontSize: '18px'
}

const ReservationTransportConfirmation = ({data, onClick}) =>{

    const dispatch = useDispatch()

    const subtractFromTotal = (arrivalDate, departureDate, price)=>{
        let value=+(formatDuration(
            intervalToDuration({
                start: arrivalDate,
                end: departureDate}),
            {format: ['days']}
        ).split(' ')[0])*(+price)
        dispatch(subtractReservationTotalMoney(value))
    }

    const resetTransportData =() =>{
        dispatch(resetReservationConfirmedTransport())
        subtractFromTotal(data.arrivalDate, data.departureDate, data.transport.price)
        onClick()
    }

    return(
        <Box className="relative">
            <Typography component="div">This experience includes transport:</Typography>
            <Stack className="space-y-3.5" position="relative" sx={{border: '1px solid' ,borderRadius: '17px', padding: '40px'}}>
                <Box style={{
                    marginRight: "20px",
                    fontSize: '25px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    background: 'linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                }}>{data.transport.name}</Box>
                {/* data.transport.type => Taxi...  */}
                <Typography component="div"><Box style={boldTitleStyle}>Number of seats:</Box>{data.transport.numSeats}</Typography>

                {/* Unclear */}
                <Typography component="div"><b style={boldTitleStyle}>The Go:</b></Typography>
                <Box>
                    <Typography >
                        <b style={{marginRight: "20px"}}>From: </b>{data.transport.location}
                        <b style={{marginLeft: '20px',marginRight: "10px"}}>To: </b>{data.transport.location}<br/>
                        <b style={{marginRight: "10px"}}>Departure: </b>{format(data.departureDate, 'dd/MM/yyyy HH:mm')}
                        <b style={{marginLeft: '20px',marginRight: "10px"}}>Arrival: </b>{format(data.arrivalDate, 'dd/MM/yyyy HH:mm')}
                    </Typography>
                </Box>
                <Typography component="div"><b style={boldTitleStyle}>The Return:</b></Typography>
                <Box>
                    <Typography >
                        <b style={{marginRight: "20px"}}>From: </b>{data.transport.location}
                        <b style={{marginLeft: '20px',marginRight: "10px"}}>To: </b>{data.transport.location}<br/>
                        <b style={{marginRight: "10px"}}>Departure: </b>{format(data.departureDate, 'dd/MM/yyyy HH:mm')}
                        <b style={{marginLeft: '20px',marginRight: "10px"}}>Arrival: </b>{format(data.arrivalDate, 'dd/MM/yyyy HH:mm')}
                    </Typography>
                </Box>

                <Typography component="div">
                    {/* I changed the date format in display, hover they still saved in redux as the default for datefns */}
                    <b style={boldTitleStyle}>Arrival:</b>
                    <b style={{marginLeft: '20px', marginRight: "20px"}}>Departure:</b>
                </Typography>
                <Typography component="div"><b style={boldTitleStyle}>Car rules:</b><br/>
                    {/* Description */}
                    {data.transport.description}
                </Typography>
                <Typography component="div" >
                    <Box style={{
                        marginRight: "20px",
                        fontSize: '32px',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        background: 'linear-gradient(270deg, #0C1424 -0.34%, #143880 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Car photos:</Box>
                    <Box className="flex">
                        <img alt={data.transport.name} src={data.transport.image} width="238px" className="rounded-xl ml-2 mr-2"/>
                        {/* I've used one variable for the image, you can modify the name if there is 2 */}
                        <img alt={data.transport.name} src={data.transport.image} width="238px" className="rounded-xl"/>
                    </Box>
                </Typography>
            </Stack>

            <Stack width="99px" height="41px" className="absolute" sx={{
                right: '-30%',
                top: '40%',
                bottom: '69%'
            }}>
                {/* Delete button => Reset redux state & return to previous */}
                <Button variant="outlined"
                        style={{textTransform: 'none',fontWeight: '700', color: 'black', borderColor: 'black'}}
                        onClick={resetTransportData}
                >Delete</Button>
            </Stack>

        </Box>
    )
}

export default ReservationTransportConfirmation;