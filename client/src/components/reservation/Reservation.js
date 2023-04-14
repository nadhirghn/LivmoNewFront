import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {formatDuration, intervalToDuration} from "date-fns";

//
import Layout from "../shared/layout"

//MUI Imports
import {
    Box,
    Button, Select,
    Stack,
    Step, StepConnector, StepIcon,
    StepLabel,
    Stepper
} from "@mui/material";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import {SxProps} from "@mui/material";



//Actions
import {addReservationTotalMoney, setReservationTotalCurrency} from "../../actions";
//
import ReservationLodging from "./lodging/ReservationLodging";
import ReservationLodgingConfirmation from "./lodging/ReservationLodgingConfirmation";
import ReservationRestaurant from "./restaurant/ReservationRestaurant";
import ReservationRestaurantConfirmation from "./restaurant/ReservationRestaurantConfirmation";
import ReservationTransport from "./transport/ReservationTransport";
import ReservationTransportConfirmation from "./transport/ReservationTransportConfirmation";
import ReservationFinalConfirmation from "./ReservationFinalConfirmation";


//Styles
const boxStyle={
    width: '',
    marginLeft: 'auto',
    marginRight: 'auto',
}

const connectorStyle={
    borderWidth: '18px',
    position: 'absolute',
    left: '5%',
    right: '5%',
    top: '25%',
    bottom: '87.76%',
    borderColor: '#0C1424',
    backgroundColor: '#0C1424'
}

const connectorSx: SxProps={
    '& .MuiStepConnector-line':{
       borderWidth: '12px',
        position: "absolute",
        width: '75%',
        left: '13%',
        top: '37%',
        borderColor: '#0C1424',
        backgroundColor: '#0C1424'
    }
}

const ss={
    colorStop: '#f12c06',
    colorBot: '#faed34'
}

const stepperSx:SxProps={
    '& .MuiSvgIcon-root':{
        width: '43px',
        height: '43px',
    },
    '& .MuiStepLabel-root':{
        background: 'transparent',
        WebkitBackgroundClip:'text',
        WebkitTextFillColor: 'transparent',
    },
    '& .Mui-active':{
        //color: 'transparent',
        background: 'linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)',
        WebkitBackgroundClip:'text',
        WebkitTextFillColor: 'transparent',
        '& circle':{
            //background: 'linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)',
            fill: '#E22357'
        }
    }
    ,
    '& svg':{
        color: '#0C1424',
    }
    ,


}


const Reservation = () =>{


    //Experience presetData
    const presetData={
        name: 'Rtiba Forest Hiking',
        price: 240,
        date: '12 Sept, 14H',
        clientsCount: '2 Clients'
    }

    const dispatch = useDispatch()

    const lodgingData= useSelector(state => state.reservationConfirmedLodging)
    const restaurantData= useSelector(state => state.reservationConfirmedRestaurant)
    const transportData= useSelector(state => state.reservationConfirmedTransport)
    const [activeStep, setStep]= useState(0);
    const [isConfirmation, setConfirmation]= useState(false)
    //Steps labels
    const steps=['Lodging Service', 'Food Service', 'Transport Service', 'Confirm']

    const total= useSelector(state => state.reservationTotal)


    //Currencies labels
    const currencies=['United States Dollar', 'Euro', 'Tunisian Dinar']
    const handleCurrencyChange =(event)=> dispatch(setReservationTotalCurrency(event.target.value))

    // Return steps components
    const stepsComponents= (step)=>{
        switch (step){
            case 0: {
                if (isConfirmation) {
                    return (<ReservationLodgingConfirmation onClick={handleConfirmationFalse} data={lodgingData}/>)
                }
                else return (<ReservationLodging/>)
            }
            case 1: {
                if (isConfirmation)
                    return (
                        <ReservationRestaurantConfirmation onClick={handleConfirmationFalse} data={restaurantData}/>)
                else return (<ReservationRestaurant/>)
            }
            case 2:{
                if (isConfirmation)
                    return (
                        <ReservationTransportConfirmation onClick={handleConfirmationFalse} data={transportData}/>)
                else return (<ReservationTransport/>)
            }
            case 3:{
                    return (<ReservationFinalConfirmation handleStepChange={handleStepChange} />)
            }
        }
    }

    //Confirmation handler
    const handleConfirmationFalse= ()=> setConfirmation(false)

    //Add to total
    const addToTotal = (arrivalDate, departureDate, price)=>{
        let value=+(formatDuration(
            intervalToDuration({
                start: arrivalDate,
                end: departureDate}),
            {format: ['days']}
        ).split(' ')[0])*(+price)
        dispatch(addReservationTotalMoney(value))
    }


    //Step handlers
    const handleStepChange= (step)=> setStep(step)
    const handleNext = ()=>{
        if(isConfirmation) {
            setStep(activeStep + 1)
            setConfirmation(false)
        }else if( (activeStep===0 && lodgingData.lodging.id!==undefined) ||
            (activeStep===1 && restaurantData.restaurant.id!==undefined) ||
            (activeStep===2 && transportData.transport.id!==undefined)){

            //Add total
            switch (activeStep){
                case 0: {
                    addToTotal(lodgingData.arrivalDate, lodgingData.departureDate, lodgingData.lodging.price)
                    break
                }
                case 1: {
                    addToTotal(restaurantData.arrivalDate, restaurantData.departureDate, restaurantData.restaurant.price)
                    break
                }
                case 2: {
                    addToTotal(transportData.arrivalDate, transportData.departureDate, transportData.transport.price)
                    break
                }

            }
            setConfirmation(true)
        }
        else
            setStep(activeStep + 1)
    }
    const handleSkip= ()=> {
        setConfirmation(false)
        setStep(activeStep + 1)
    }
    const handlePrevious= ()=> {
        setConfirmation(false)
        setStep(activeStep - 1)
    }

    return(
        <Layout>
            <br/>
<br/>

        <Box className="bg-white relative mb-12 " sx={{ width: '100%'}}>
            <Box className="pt-10">
                <Typography variant="h4" component="div">
                    <Box sx={{color: '#0C1424'}} className=" text-center font-bold">Let's finalize your reservation!</Box>
                </Typography>

                <Box sx={{ width: '60%' }} style={boxStyle} className="pt-6">
                    {/* Stepper */}
                    <Stack className="relative"spacing={4}>
                        <StepConnector sx={connectorSx}
                                       //style={connectorStyle}
                        />
                        <Stepper sx={stepperSx} alternativeLabel className="relative" connector={null}
                                 activeStep={activeStep}>
                            {steps.map(res=>(
                                <Step completed={false} key={res}>
                                    <StepLabel>{res}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>

                    </Stack>
                    {/* Steps */}
                    <Box sx={{ marginTop: 10, marginBottom: '100px', marginLeft: "69px"}} className="">
                        {
                            activeStep===3?
                            <Button variant="contained"
                                className="w-[120px] h-[50px]"
                                sx={{
                                    fontWeight: '700',
                                    fontSize: '17px',
                                    textTransform: 'none',
                                    background: "linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)",
                                    WebkitBackgroundClip:'text',
                                    WebkitTextFillColor: 'transparent',
                                    border: "4px solid transparent",
                                    borderRadius: '10px',
                                    borderImage: "linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%) 1 round",
                                    WebkitMask:'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                                }}
                                onClick={handlePrevious}>Previous</Button>:<div/>}
                        {stepsComponents(activeStep)}
                    </Box>
                </Box>

                {/* Buttons */}
                <Box className="relative w-[60%] ml-[20%]">

                    {
                        activeStep!==3?
                            <Box>
                                <Box className="absolute left-0 ">
                                {
                                    activeStep!==0?
                                        <Button variant="contained"
                                                className="w-[120px] h-[50px]"
                                                sx={{
                                                    fontWeight: '700',
                                                    fontSize: '17px',
                                                    textTransform: 'none',
                                                    background: "linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)",
                                                    WebkitBackgroundClip:'text',
                                                    WebkitTextFillColor: 'transparent',
                                                    border: "4px solid transparent",
                                                    borderRadius: '10px',
                                                    borderImage: "linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%) 1 round",
                                                    WebkitMask:'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                                                }}
                                                onClick={handlePrevious}
                                        >Previous</Button>
                                        :
                                        <Button sx={{
                                            textTransform: 'none',
                                            color:'white',
                                            background: 'linear-gradient(270deg, #0C1424 -0.34%, #143880 100%)',
                                            width: '210px',
                                            height: '41px',
                                            fontSize: '15px'
                                        }}>Back to experience detail</Button>
                                }
                            </Box>
                                <Box className="absolute right-0">
                                {
                                    isConfirmation?
                                        <div></div>:
                                        <Button sx={{
                                            color:'white',
                                            background: "linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)",
                                            boxShadow: '3.61787px 3.61787px 8.44169px 2.41191px rgba(0, 0, 0, 0.25)',
                                            WebkitBackgroundClip:'text',
                                            WebkitTextFillColor: 'transparent',
                                            width: '121px',
                                            height: '40px',
                                            marginRight: '30px'
                                        }}
                                                onClick={handleSkip}
                                        >Skip</Button>
                                }

                                <Button sx={{
                                    color:'white',
                                    background: 'linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)',
                                    width: '121px',
                                    height: '40px',
                                }}
                                        onClick={handleNext}
                                >Next</Button>
                            </Box>
                            </Box>
                        :
                            <Box className="flex">
                                <Box>
                                    {/* Appears in last confirmation (currency and total)*/}
                                    <Select sx={{
                                        width: '351px',
                                        height: '55px',
                                        boxShadow: '3px 3px 7px 2px rgba(0, 0, 0, 0.25)',
                                        borderRadius: '15px',
                                        marginBottom: '16px'
                                    }} defaultValue={2} onChange={handleCurrencyChange}
                                    >
                                        {
                                            currencies.map((currency,i)=>(
                                                <MenuItem  key={currency} value={i}>
                                                    {currency}
                                                </MenuItem>
                                            ))
                                        }
                                    </Select>
                                    <Box sx={{
                                        background: '#FFFFFF',
                                        boxShadow: '1.05109px 0.525546px 2.62773px 1.05109px rgba(0, 0, 0, 0.4)',
                                        borderRadius: '9px',
                                        width: '545px',
                                        height: '55px',
                                        WebkitBackgroundClip:'text',
                                        border: "4px solid transparent",
                                        borderImage: "linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%) 1 round",
                                        WebkitMask:'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                                    }
                                    } className="border-2">
                                        <Box className="relative text-xl" >
                                            <Box className="absolute left-16 top-2">Total:</Box>
                                            <Box className="absolute right-16 font-bold top-2" >{total.total*total.currency[1]} {total.currency[0]}</Box>
                                            </Box>
                                    </Box>
                                </Box>
                                <Box className="absolute right-0">
                                    <Button sx={{
                                        color:'white',
                                        background: 'linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)',
                                        width: '121px',
                                        height: '40px',
                                    }}
                                            onClick={handleNext}
                                    >Book</Button>
                                </Box>
                            </Box>
                    }
                </Box>
            </Box>
        </Box>
<br/>
<br/>
<br/>
        </Layout>
    )
}

export default Reservation;
