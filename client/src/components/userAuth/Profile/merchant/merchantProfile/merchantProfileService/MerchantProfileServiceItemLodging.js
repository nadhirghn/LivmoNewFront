import React from "react";
import {Box} from "@mui/material";

const MerchantProfileExperienceItemLodging= ({data})=>{


    return(
        <Box className="itemsBoxRounded flex" width="105%" height="260px">

            {/* Left box */}
            <Box className="space-y-3 itemsBoxRoundedLeftBox overflow-hidden">
                <Box className="flex space-x-20">
                    {/* Name */}
                    <Box className="itemTitleFont" >{data.name}</Box>
                </Box>

                {/* Description */}
                <Box className="importantItemTextFont">Description :</Box>
                <Box className="normalTextFont">{data.description.substring(0, 40)}...</Box>
                {/* Price & dates */}
                <Box className="flex relative">
                    <Box className="importantItemTextFont">{data.price} DT/Night  </Box>
                    <Box className="importantItemTextFont absolute right-0">  {data.location} </Box>
                </Box>
                {/* Location & details button */}
                <Box className="flex relative">
                    <Box className="importantItemTextFont">{data.url}</Box>
                    <Box className="absolute right-0"> <a className="importantItemTextFont detailsTextFont">Details</a> </Box>
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

export default MerchantProfileExperienceItemLodging;