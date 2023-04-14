import React from 'react'

import {Box} from "@mui/material";

import '../userStyle.scss';

import { Link } from "react-router-dom";


const UserTransportHistory= ({data})=>{


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
                <Box className="normalTextFont">{data.description}</Box>
                {/* Price & seats */}
                <Box className="flex" justifyContent="space-between">
                    <Box className="importantItemTextFont">{data.price} DT/Person</Box>
                    <Box className="importantItemTextFont">{data.seats} seats</Box>

                </Box>
                {/* Location & details button */}
                <Box className="flex "  justifyContent="space-between">
                    <Box className="importantItemTextFont">{data.location}</Box>
                    <Box className=""> <Link className="importantItemTextFont detailsTextFont">Details</Link> </Box>
                </Box>


            </Box>

            {/* Right box */}
            <Box className="itemsBoxRoundedRightBox">
                {/* Transport image */}
                <img src={data.image} alt={data.name+" image"} className="itemsBoxRoundedRightImage" />
            </Box>

        </Box>
    )
}


export default UserTransportHistory;