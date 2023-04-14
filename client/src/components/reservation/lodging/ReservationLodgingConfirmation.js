import React from "react";
import {Box, Button, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import {format, formatDuration, intervalToDuration} from "date-fns";
import {useDispatch} from "react-redux";
import {addReservationTotalMoney, resetReservationConfirmedLodging, subtractReservationTotalMoney} from "../../../actions";

//Styles
const boldTitleStyle= {
    marginRight: '20px',
    fontSize: '18px'
}

const ReservationLodgingConfirmation = ({data, onClick}) =>{

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

    const resetLodgingData =() =>{
        dispatch(resetReservationConfirmedLodging())
        subtractFromTotal(data.arrivalDate, data.departureDate, data.lodging.price)
        onClick()
    }



    return(
        <Box className="relative">
            <Typography component="div">This experience includes lodging:</Typography>
            <Stack className="space-y-3.5" position="relative" sx={{border: '1px solid' ,borderRadius: '17px', padding: '40px'}}>
                {/* data.lodging.lodging => Hotel/Villa...  */}
                <Typography component="div"><b style={boldTitleStyle}>Lodging category:</b>{data.lodging.lodging}</Typography>
                {/* 'Lodging type' was unclear  */}
                <Typography component="div"><b style={boldTitleStyle}>Lodging type:</b>{data.lodging.lodging}</Typography>
                <Typography component="div"><b style={boldTitleStyle}>Address:</b>{data.lodging.location}, Tunisia</Typography>
                <Typography component="div">
                    {/* I changed the date format in display, hover they still saved in redux as the default for datefns */}
                    <b style={boldTitleStyle}>Arrival:</b>{format(data.arrivalDate, 'dd/MM/yyyy HH:mm')}
                    <b style={{marginLeft: '20px', marginRight: "20px"}}>Departure:</b>{format(data.departureDate, 'dd/MM/yyyy HH:mm')}
                </Typography>
                <Typography component="div"><b style={boldTitleStyle}>Lodging description:</b><br/>
                    {/* Description */}
                    {data.lodging.description}
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
                        Lodging photos:</Box>
                    <Box className="flex">
                        <img alt={data.lodging.name} src={data.lodging.image} width="238px" className="rounded-xl ml-2 mr-2"/>
                        {/* I've used one variable for the image, you can modify the name if there is 2 */}
                        <img alt={data.lodging.name} src={data.lodging.image} width="238px" className="rounded-xl"/>
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
                        onClick={resetLodgingData}
                >Delete</Button>
            </Stack>

        </Box>
    )
}

export default ReservationLodgingConfirmation;