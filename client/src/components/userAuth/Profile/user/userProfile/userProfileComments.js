import React from "react";

//Mui Imports
import Box from "@mui/material/Box";


const UserProfileComments =({data})=>{

    return(
        <Box className="itemsBoxRounded p-6 pl-9 space-y-12" width="105%">

            {/* Profile and time */}
            <Box className="flex">
                <img src={data.image} alt={data.name +' picture'} className="profilePictureImage"
                     style={{width:"117px", height:"117px"}}/>
                <Box className="pl-[14px] pt-3">
                    <Box className="itemTitleFont">
                        {data.name}
                    </Box>
                    <Box className="learnMoreText" style={{fontSize: '15px'}}>
                        {data.dateTime}
                    </Box>
                </Box>
            </Box>

            {/* Text */}
            <Box className="normalTextFont overflow-hidden">
                {data.text}
            </Box>

        </Box>
    )
}

export default UserProfileComments;