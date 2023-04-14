import React from "react";
import {Box, Button} from "@mui/material";
import muiButtonSx from "../MuiStyles";

const UserExperienceHistory= ({data})=>{




    return(
        <Box className="itemsBoxRounded flex">

            {/* Left box */}
            <Box className="space-y-3 itemsBoxRoundedLeftBox">
                <Box className="flex space-x-20">
                    {/* Name */}
                    <Box className="itemTitleFont" >{data.name}</Box>

                    {/* Tags (I used tags as string separated by spaces ' ') */}
                    <Box className="flex space-x-16">
                        {
                            data.tags.split(' ').map(tag=>(
                                <Box key={tag} className="pinkGradientBgWhiteText tagItem">{tag}</Box>
                            ))
                        }
                    </Box>
                </Box>

                {/* Description */}
                <Box className="importantItemTextFont">Description :</Box>
                <Box className="normalTextFont">{data.description}</Box>
                {/* Price & dates */}
                <Box className="flex relative">
                    <Box className="importantItemTextFont">{data.price} DT/Person</Box>
                    <Box className="importantItemTextFont" className="absolute right-0"> {data.startDateTime} - {data.endDateTime} </Box>
                </Box>
                {/* Location & details button */}
                <Box className="flex relative">
                    <Box className="importantItemTextFont">{data.location}</Box>
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

export default UserExperienceHistory;