import React from 'react'

import {Box} from "@mui/material";

import { Link } from 'react-router-dom';





const UserFoodHistory= ({data})=>{


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
                {/* Price & company */}
                <Box className="flex" justifyContent="space-between">
                    <Box className="importantItemTextFont">{data.price} DT/Person</Box>
                    <Box className="importantItemTextFont">{data.company}</Box>

                </Box>
                {/* Location & details button */}
                <Box className="flex "  justifyContent="space-between">
                    <Box className="importantItemTextFont">{data.location}</Box>
                    <Box className=""> <Link className="importantItemTextFont detailsTextFont">Details</Link> </Box>
                </Box>

            </Box>

            {/* Right box */}
            <Box className="itemsBoxRoundedRightBox">
                {/* Food image */}
                <img src={data.image} alt={data.name+" image"} className="itemsBoxRoundedRightImage" />
            </Box>

        </Box>
    )
}
export default UserFoodHistory;