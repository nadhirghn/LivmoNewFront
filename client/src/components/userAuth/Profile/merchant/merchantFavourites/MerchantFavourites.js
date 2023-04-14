import React from "react";
import { Link } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { removeItemFromCart, removeLodgingFromCart, removeTransportFromCart, removeRestaurantFromCart  } from '../../../../../actions/favouriteActions'


import { useDispatch, useSelector } from 'react-redux'


//
import experienceIcon from "../../../../img/reservationExperienceIcon.png";


//
import {Grid} from "@mui/material";
import Box from "@mui/material/Box";
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import FastfoodIcon from '@mui/icons-material/Fastfood';
//

import "../../host/hostStyle.scss";


//fv
import HighlightOffIcon from '@mui/icons-material/HighlightOff';




const MerchantFavourites =() =>{
    //Fav
    const dispatch = useDispatch();
    const alert = useAlert()
//exp
    const { cartItems } = useSelector(state => state.cart)

    const removeCartItemHandler = (id) => {
        dispatch(removeItemFromCart(id))
        alert.success('Experience Removed From Favourites')

    }

//lodging
    const { cartLodging } = useSelector(state => state.cartLodging)

    const removeCartLodgingHandler = (id) => {
        dispatch(removeLodgingFromCart(id))
        alert.success('Lodging Removed From Favourites')

    }

    
//transport
const { cartTransport } = useSelector(state => state.cartTransport)

const removeCartTransportHandler = (id) => {
    dispatch(removeTransportFromCart(id))
    alert.success('Transport Removed From Favourites')

}
//restaurant
const { cartRestaurant } = useSelector(state => state.cartRestaurant)

const removeCartRestaurantHandler = (id) => {
    dispatch(removeRestaurantFromCart(id))
    alert.success('Food Removed From Favourites')

}
  

   

    return(
        <Box>


            {/* Experiences */}
            <Box>
            {cartItems.length === 0 ? <>

                            <Box className="arrayEmptyBox blueGradientText">
                                You don't have any favourite experience yet,
                                {/* A link to lodgings' list, opens in new tab */}
                                <Link to= {`/allexperiences`}  className="pinkGradientText" target="_blank">  check experiences!</Link>
                            </Box>
            
            </>

            :( <>
             <Box className="flex">
                    <img width={45}  src={experienceIcon} alt="Experience icon"/>
                    <Box className="pinkGradientText titleFont ml-7" >Experiences</Box>
                </Box>

                <Grid container justifyContent="left">
                <>
        {cartItems.map(item => (
        
        <Box className="hostFavouriteItem" key={item.experience}>
            <Box className="relative flex">
                <img src={item.image} alt={item.name+' image'}  />
                <HighlightOffIcon className="favouriteHeart " fontSize="large"  onClick={() => removeCartItemHandler(item.experience)}/>
            </Box>
            <Box sx={{position: 'relative', width: '100%'}}>
                {/* experience data */}
                <Box sx={{position: 'absolute'}}  className="text-left space-y-1">
                <Link to={`/experience/${item.experience}`}>
                    <Box className="pinkGradientText hostFavouriteItemNameFont" >{item.name}</Box>
                    </Link>
                    <Box className="hostFavouriteItemLodgingTypeFont" >{item.theme}</Box>
                </Box>
                <Box sx={{ float: 'right'}}  className="text-right mt-1 space-y-1">
                    <Box className="hostFavouriteItemLocationPriceFont" >{item.place}, Tunisia</Box>
                    <Box className="hostFavouriteItemLocationPriceFont">{item.price} DT</Box>
                </Box>
            </Box>

        </Box>
         ))}
         </>
                </Grid>
            </>)
    }
               
            </Box>

            {/* Divider */}
            <Box>
                <hr className="divider" />
            </Box>

            {/* Lodging */}
            <Box>
            {cartLodging.length === 0 ? <>

                <Box className="arrayEmptyBox blueGradientText">
                    You don't have any favourite lodging yet,
                    {/* A link to lodgings' list, opens in new tab */}
                    <Link to= {`/alllodgings`}  className="pinkGradientText" target="_blank">  check lodgings!</Link>
                </Box>

                </>

                :( <>
                <Box className="flex">
               <LocalHotelIcon sx={{ fontSize: 60 , color: "#DA1D6C"}}></LocalHotelIcon>
                <Box className="pinkGradientText titleFont ml-7" >Lodging</Box>
                </Box>

                <Grid container justifyContent="left">
                <>
                {cartLodging.map(item => (

                <Box className="hostFavouriteItem" key={item.lodging}>
                <Box className="relative flex">
                <img src={item.image} alt={item.title+' image'}  />
                <HighlightOffIcon className="favouriteHeart " fontSize="large"  onClick={() => removeCartLodgingHandler(item.lodging)}/>
                </Box>
                <Box sx={{position: 'relative', width: '100%'}}>
                {/* Lodging data */}
                <Box sx={{position: 'absolute'}}  className="text-left space-y-1">
                <Link to={`/lodging/${item.lodging}`}>
                <Box className="pinkGradientText hostFavouriteItemNameFont" >{item.title}</Box>
                </Link>
                <Box className="hostFavouriteItemLodgingTypeFont" >{item.lodgingType}</Box>
                </Box>
                <Box sx={{ float: 'right'}}  className="text-right mt-1 space-y-1">
                <Box className="hostFavouriteItemLocationPriceFont" >{item.address}, Tunisia</Box>
                <Box className="hostFavouriteItemLocationPriceFont">{item.pricepernight} DT</Box>
                </Box>
                </Box>

                </Box>
                ))}
                </>
                </Grid>
                </>)
                }

          </Box>

            {/* Divider */}
            <Box>
                <hr className="divider" />
            </Box>

            {/* Transport */}
            <Box>
            {cartTransport.length === 0 ? <>

                <Box className="arrayEmptyBox blueGradientText">
                    You don't have any favourite transport yet,
                    {/* A link to lodgings' list, opens in new tab */}
                    <Link to= {`/alltransports`}  className="pinkGradientText" target="_blank">  check transports!</Link>
                </Box>

                </>

                :( <>
                <Box className="flex">
               <LocalTaxiIcon  sx={{fontSize: 60, color: "#DA1D6C"}}></LocalTaxiIcon>
                <Box className="pinkGradientText titleFont ml-7" >Transport</Box>
                </Box>

                <Grid container justifyContent="left">
                <>
                {cartTransport.map(item => (

                <Box className="hostFavouriteItem" key={item.transport}>
                <Box className="relative flex">
                <img src={item.image} alt={item.name+' image'}  />
                <HighlightOffIcon className="favouriteHeart " fontSize="large"  onClick={() => removeCartTransportHandler(item.transport)}/>
                </Box>
                <Box sx={{position: 'relative', width: '100%'}}>
                {/* Transport data */}
                <Box sx={{position: 'absolute'}}  className="text-left space-y-1">
                <Link to={`/transport/${item.transport}`}>
                <Box className="pinkGradientText hostFavouriteItemNameFont" >{item.name}</Box>
                </Link>
                <Box className="hostFavouriteItemLodgingTypeFont" >{item.activity}</Box>
                </Box>
                <Box sx={{ float: 'right'}}  className="text-right mt-1 space-y-1">
                <Box className="hostFavouriteItemLocationPriceFont" >{item.governorate}, Tunisia</Box>
                <Box className="hostFavouriteItemLocationPriceFont">{item.pricepernight} DT</Box>
                </Box>
                </Box>

                </Box>
                ))}
                </>
                </Grid>
                </>)
                }

          </Box>


            {/* Divider */}
            <Box>
                <hr className="divider" />
            </Box>
          
            {/* Restaurant */}
            <Box>
            {cartRestaurant.length === 0 ? <>

                <Box className="arrayEmptyBox blueGradientText">
                    You don't have any favourite restaurant yet,
                    {/* A link to lodgings' list, opens in new tab */}
                    <Link to= {`/allrestaurants`}  className="pinkGradientText" target="_blank">  check restaurants!</Link>
                </Box>

                </>

                :( <>
                <Box className="flex">
               <FastfoodIcon  sx={{fontSize: 60, color: "#DA1D6C"}}></FastfoodIcon>
                <Box className="pinkGradientText titleFont ml-7" >Food</Box>
                </Box>

                <Grid container justifyContent="left">
                <>
                {cartRestaurant.map(item => (

                <Box className="hostFavouriteItem" key={item.restaurant}>
                <Box className="relative flex">
                <img src={item.image} alt={item.name+' image'}  />
                <HighlightOffIcon className="favouriteHeart " fontSize="large"  onClick={() => removeCartRestaurantHandler(item.restaurant)}/>
                </Box>
                <Box sx={{position: 'relative', width: '100%'}}>
                {/* cartRestaurant data */}
                <Box sx={{position: 'absolute'}}  className="text-left space-y-1">
                <Link to={`/restaurant/${item.restaurant}`}>
                <Box className="pinkGradientText hostFavouriteItemNameFont" >{item.name}</Box>
                </Link>
                <Box className="hostFavouriteItemLodgingTypeFont" >{item.activity}</Box>
                </Box>
                <Box sx={{ float: 'right'}}  className="text-right mt-1 space-y-1">
                <Box className="hostFavouriteItemLocationPriceFont" >{item.governorate}, Tunisia</Box>
                <Box className="hostFavouriteItemLocationPriceFont">{item.pricepernight} DT</Box>
                </Box>
                </Box>

                </Box>
                ))}
                </>
                </Grid>
                </>)
                }

          </Box>

        </Box>



    )

}

export default MerchantFavourites;