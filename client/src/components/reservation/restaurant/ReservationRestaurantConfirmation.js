import React from "react";
import {Box, Button, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useDispatch} from "react-redux";
import {resetReservationConfirmedRestaurant, subtractReservationTotalMoney} from "../../../actions";
import {formatDuration, intervalToDuration} from "date-fns";

//Styles
const boldTitleStyle= {
    marginRight: '20px',
    fontSize: '18px'
}

const ReservationRestaurantConfirmation = ({data, onClick}) =>{

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

    const resetRestaurantData =() =>{
        dispatch(resetReservationConfirmedRestaurant())
        subtractFromTotal(data.arrivalDate, data.departureDate, data.restaurant.price)
        onClick()
    }

    return(
        <Box className="relative">
            <Typography component="div">This experience includes food:</Typography>
            {/* Dish 1  */}
            <Stack position="relative" sx={{border: '1px solid' ,borderRadius: '17px', padding: '40px'}}>
                <Box>
                <Typography className='flex' component="div"><Box style={{
                    marginRight: "20px",
                    fontSize: '25px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    background: 'linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                }}>Dish 1:</Box>
                    <Box style={{
                        fontSize: '25px',
                        fontWeight: '700',
                    }}>
                        {data.restaurant.dish}
                    </Box>
                    </Typography>
                <Typography component="div"><b style={boldTitleStyle}>Dish description:</b><br/>
                    {/* Description */}
                    {data.restaurant.description}
                </Typography>
                <Typography component="div" ><Box style={{
                    marginRight: "20px",
                    fontSize: '32px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    background: 'linear-gradient(270deg, #0C1424 -0.34%, #143880 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>Dish photos:</Box>
                    <Box className="flex">
                        <img alt={data.restaurant.name} src={data.restaurant.image} width="238px" className="rounded-xl ml-2 mr-2"/>
                        {/* I've used one variable for the image, you can modify the name if there is 2 */}
                        <img alt={data.restaurant.name} src={data.restaurant.image} width="238px" className="rounded-xl"/>
                    </Box>
                </Typography>
                </Box>
                {/* Dish 2  */}
                <Typography className='flex' component="div"><Box style={{
                    marginRight: "20px",
                    fontSize: '25px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    background: 'linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                }}>Dish 2:</Box>
                    <Box style={{
                        fontSize: '25px',
                        fontWeight: '700',
                    }}>
                        {data.restaurant.dish}
                    </Box>
                </Typography>
                <Typography component="div"><b style={boldTitleStyle}>Dish description:</b><br/>
                    {/* Description */}
                    {data.restaurant.description}
                </Typography>
                <Typography component="div" ><Box style={{
                    marginRight: "20px",
                    fontSize: '32px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    background: 'linear-gradient(270deg, #0C1424 -0.34%, #143880 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>Dish photos:</Box>
                    <Box className="flex">
                        <img alt={data.restaurant.name} src={data.restaurant.image} width="238px" className="rounded-xl ml-2 mr-2"/>
                        {/* I've used one variable for the image, you can modify the name if there is 2 */}
                        <img alt={data.restaurant.name} src={data.restaurant.image} width="238px" className="rounded-xl"/>
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
                        onClick={resetRestaurantData}
                >Delete</Button>
            </Stack>

        </Box>
    )
}

export default ReservationRestaurantConfirmation;