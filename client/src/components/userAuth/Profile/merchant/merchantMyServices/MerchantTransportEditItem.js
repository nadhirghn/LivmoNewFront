import React, {  useEffect } from 'react'

import {Box, Button} from "@mui/material";
import {muiButtonSx} from "../MerchantMuiStyles";
import '../merchantStyle.scss';
import { Link } from "react-router-dom";
import { deleteTransport, clearErrors } from '../../../../../actions/transportActions'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { DELETE_TRANSPORT_RESET } from '../../../../../constants/transportConstants'
import { useHistory } from 'react-router-dom';

const MerchantTransportEditItem= ({data})=>{

    const history = useHistory();
    const alert = useAlert()

    const dispatch = useDispatch();

    const { error: deleteError, isDeleted } = useSelector(state => state.transports)

    useEffect(() => {

        if (deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors())
        }

        if (isDeleted) {
            alert.success('Transport deleted successfully');
            history.push('/');
            dispatch({ type: DELETE_TRANSPORT_RESET })
        }
    }, [dispatch, alert, deleteError, isDeleted, history])


   
    const deleteTransportHandler = (id) => {
        dispatch(deleteTransport(id))
        alert.success('Transport deleted successfully')
        history.push('/');
    }

    return(
        <Box className="itemsBoxRounded flex">

            {/* Left box */}
            <Box className="space-y-3 itemsBoxRoundedLeftBox">
                <Box className="flex space-x-20">
                    {/* Name */}
                    <Box className="itemTitleFont" >{data.name}</Box>
                </Box>

                {/* Description */}
                <Box className="importantItemTextFont">Description :</Box>
                <Box className="normalTextFont">{data.rules}</Box>
                {/* Price & seats */}
                <Box className="flex" justifyContent="space-between">
                    <Box className="importantItemTextFont">{data.pricepernight} DT/Person</Box>
                    <Box className="importantItemTextFont">{data.nbrePlace} seats</Box>

                </Box>
                {/* Location & details button */}
                <Box className="flex "  justifyContent="space-between">
                    <Box className="importantItemTextFont">{data.governorate}</Box>
                    <Box className=""> <Link className="importantItemTextFont detailsTextFont">Details</Link> </Box>
                </Box>
                {/* Edit & delete buttons */}
                <Box className="space-x-6 relative text-center">
                    <>
                <Link to={`/merchant/transport/${data._id}`}><Button sx={muiButtonSx} style={{width: '155px', fontSize: '18px',borderRadius: '20px',}}
                            className="pinkGradientBgWhiteText"
                           >Edit</Button>
                </Link>
                    <Button sx={muiButtonSx} style={{width: '155px', fontSize: '18px',borderRadius: '20px',}}
                            className=" blueGradientText"
                          onClick={() => deleteTransportHandler(data._id)}>Delete</Button>
                        </>
                </Box>

            </Box>

            {/* Right box */}
            <Box className="itemsBoxRoundedRightBox">
                {/* Transport image */}
                <img src={data.images[0].url} alt={data.name+" image"} className="itemsBoxRoundedRightImage" />
            </Box>

        </Box>
    )
}

export default MerchantTransportEditItem;