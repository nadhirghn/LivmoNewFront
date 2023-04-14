import React from 'react'

import {Box} from "@mui/material";

import { Link } from 'react-router-dom';


const UserLodgingHistory= ({data})=>{


    return(
        <Box className="itemsBoxRounded flex">

            {/* Left box */}
            <Box className="space-y-3 itemsBoxRoundedLeftBox">
                <Box className="flex space-x-20">
                    {/* Name */}
                    <Box className="itemTitleFont" >{data.name}</Box>

                    {/* Tags */}
                    <Box className="flex space-x-16">

                 <Box  className="pinkGradientBgWhiteText tagItem">Hotel</Box>
                 <Box  className="pinkGradientBgWhiteText tagItem">Full lodging</Box>

                    </Box>
                </Box>

                {/* Description */}
                <Box className="importantItemTextFont">Description :</Box>
                <Box className="normalTextFont">{data.description}</Box>
                {/* Price & dates */}
                <Box className="flex relative" justifyContent="space-between">
                    <Box className="importantItemTextFont">{data.price} DT/Person</Box>
                    <Box className="importantItemTextFont"> {data.location} </Box>
                </Box>
                {/* Link & details button */}
                <Box className="flex relative" justifyContent="space-between">
                    <Box className="importantItemTextFont"><a>{data.link}</a></Box>
                    <Box className="absolute right-0"> <Link className="importantItemTextFont detailsTextFont">Details</Link> </Box>
                </Box>


            </Box>

            {/* Right box */}
            <Box className="itemsBoxRoundedRightBox">
                {/* Experience image */}
                <img src={data.image} alt={data.name+" image"} className="itemsBoxRoundedRightImage" />
            </Box>

        </Box>
    )
}

export default UserLodgingHistory;