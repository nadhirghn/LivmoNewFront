import React, {  useEffect } from 'react'

import {Box, Button} from "@mui/material";
import {muiButtonSx} from "../MerchantMuiStyles";

import { deleteLodging, clearErrors } from '../../../../../actions/lodgingActions'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { DELETE_LODGING_RESET } from '../../../../../constants/lodgingConstants'
import { Link, useHistory } from 'react-router-dom';

const MerchantLodgingEditItem= ({data})=>{

    const history = useHistory();
    const alert = useAlert()

    const dispatch = useDispatch();

    const { error: deleteError, isDeleted } = useSelector(state => state.lodging)

    useEffect(() => {

        if (deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors())
        }

        if (isDeleted) {
            alert.success('Lodging deleted successfully');
            history.push('/');
            dispatch({ type: DELETE_LODGING_RESET })
        }
    }, [dispatch, alert, deleteError, isDeleted, history])

   
    const deleteLodgingHandler = (id) => {
        dispatch(deleteLodging(id))
        history.push('/');
    }

    

    return(
        <Box className="itemsBoxRounded flex">

            {/* Left box */}
            <Box className="space-y-3 itemsBoxRoundedLeftBox">
                <Box className="flex space-x-20">
                    {/* Name */}
                    <Box className="itemTitleFont" >{data.title}</Box>

                    {/* Tags */}
                    <Box className="flex space-x-16">
                    
                          
                                <Box className="pinkGradientBgWhiteText tagItem">{data.lodgingCategory}</Box>
                                <Box className="pinkGradientBgWhiteText tagItem">{data.lodgingType}</Box>

                   
                    </Box>
                </Box>

                {/* Description */}
                <Box className="importantItemTextFont">Description :</Box>
                <Box className="normalTextFont">{data.description}</Box>
                {/* Price & dates */}
                <Box className="flex relative" justifyContent="space-between">
                    <Box className="importantItemTextFont">{data.pricepernight} DT/Person</Box>
                    <Box className="importantItemTextFont"> {data.address} </Box>
                </Box>
                {/* Link & details button */}
                <Box className="flex relative" justifyContent="space-between">
                    <Box className="importantItemTextFont"><a>{data.link}</a></Box>
                    <Box className="absolute right-0"> <Link className="importantItemTextFont detailsTextFont">Details</Link> </Box>
                </Box>
                {/* Edit & delete buttons */}
                <Box className="space-x-6 relative text-center">
                   <Link to={`/merchant/lodging/${data._id}`}><Button sx={muiButtonSx} style={{width: '155px', fontSize: '18px',borderRadius: '20px',}}
                            className="pinkGradientBgWhiteText"
                           >Edit</Button>
                    </Link> 
                    <Button sx={muiButtonSx} className=" blueGradientText" style={{width: '155px', fontSize: '18px',borderRadius: '20px',}}
                            onClick={() => deleteLodgingHandler(data._id)}>Delete</Button>
                </Box>

            </Box>

            {/* Right box */}
            <Box className="itemsBoxRoundedRightBox">
                {/* Experience image */}
                <img src={data.images[0].url} alt={data.name+" image"} className="itemsBoxRoundedRightImage" />
            </Box>

        </Box>
    )
}

export default MerchantLodgingEditItem;