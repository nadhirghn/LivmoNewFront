import React, {  useEffect } from 'react'

import {Box, Button} from "@mui/material";
import {muiButtonSx} from "../MerchantMuiStyles";

import { deleteRestaurant, clearErrors } from '../../../../../actions/restaurantActions'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { DELETE_RESTAURANT_RESET } from '../../../../../constants/restaurantConstants'
import { Link, useHistory } from 'react-router-dom';



const MerchantFoodEditItem= ({data})=>{

    const history = useHistory();
    const alert = useAlert()

    const dispatch = useDispatch();

    const { error: deleteError, isDeleted } = useSelector(state => state.restaurant)

    useEffect(() => {

        if (deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors())
        }

        if (isDeleted) {
            history.push('/');
            dispatch({ type: DELETE_RESTAURANT_RESET })
        }
    }, [dispatch, alert, deleteError, isDeleted, history])

   
    const deleteRestaurantHandler = (id) => {
        alert.success('Restaurant deleted successfully');
        dispatch(deleteRestaurant(id))
        history.push('/');
    }



    return(
        <Box className="itemsBoxRounded flex">

            {/* Left box */}
            <Box className="space-y-3 itemsBoxRoundedLeftBox">
                <Box className="flex space-x-20">
                    {/* Name */}
                    <Box className="itemTitleFont" >{data.restaurantType}</Box>
                </Box>

                {/* Description */}
                <Box className="importantItemTextFont">Description :</Box>
                <Box className="normalTextFont">{data.description}</Box>
                {/* Price & company */}
                <Box className="flex" justifyContent="space-between">
                    <Box className="importantItemTextFont">{data.price} DT/Person</Box>
                    <Box className="importantItemTextFont">{data.restaurantName}</Box>

                </Box>
                {/* Location & details button */}
                <Box className="flex "  justifyContent="space-between">
                    <Box className="importantItemTextFont">{data.address}</Box>
                    <Box className=""> <Link className="importantItemTextFont detailsTextFont">Details</Link> </Box>
                </Box>
                {/* Edit & delete buttons */}
                <Box className="space-x-6 relative text-center">
                    <Link to={`/merchant/restaurant/${data._id}`}>
                    <Button sx={muiButtonSx} style={{width: '155px', fontSize: '18px',borderRadius: '20px',}}
                            className="pinkGradientBgWhiteText"
                            >Edit</Button>
                    </Link>
                    <Button sx={muiButtonSx} style={{width: '155px', fontSize: '18px',borderRadius: '20px',}}
                            className=" blueGradientText"
                            onClick={() => deleteRestaurantHandler(data._id)}>Delete</Button>
                </Box>

            </Box>

            {/* Right box */}
            <Box className="itemsBoxRoundedRightBox">
                {/* Food image */}
                <img src={data.imagesPlat[0].url} alt={data.name+" image"} className="itemsBoxRoundedRightImage" />
            </Box>

        </Box>
    )
}

export default MerchantFoodEditItem;