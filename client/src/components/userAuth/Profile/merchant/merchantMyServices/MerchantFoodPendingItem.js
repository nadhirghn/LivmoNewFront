import React from "react";
import {Box, Button} from "@mui/material";
import "../merchantStyle.scss"
import {muiButtonSx} from "../MerchantMuiStyles";
import { Link } from "react-router-dom";

const MerchantFoodPendingItem = ({data}) =>{

    return(
        <Box className="itemsBoxRounded flex">

            {/* Left box */}
            <Box className="space-y-5 itemsBoxRoundedLeftBox">
                <Box className="flex space-x-20">
                    {/* Name */}
                    <Box className="itemTitleFont" >{data.restaurantType}</Box>

                </Box>

                {/* Description */}
                <Box className="importantItemTextFont">Description :</Box>
                <Box className="normalTextFont">{data.description}</Box>
                {/* Price & dates */}
                <Box className="flex" style={{justifyContent: 'space-between'}}>
                    <Box className="importantItemTextFont">{data.price} DT/Dish</Box>
                    <Box className="importantItemTextFont">{data.restaurantName}</Box>
                </Box>
                {/* Location & details button */}
                <Box className="flex" style={{justifyContent: 'space-between'}}>
                    <Box className="importantItemTextFont">{data.address}</Box>
                    <Box className=""> <Link className="importantItemTextFont detailsTextFont">Details</Link> </Box>
                </Box>
            </Box>

            {/* Right box */}
            <Box className="itemsBoxRoundedRightBox bg-[#0C1424] space-y-4">
                <Box className="itemsBoxRoundedBlueBoxTextFont">
                    Your request is being processed by the administrator
                </Box>
                {/* Delete Button */}
                <Box className="bg-white"
                     sx={{
                    width: '155px',
                    height: '44px',
                    boxShadow: '1.57533px 0.787666px 3.93833px 1.57533px rgba(0, 0, 0, 0.4)',
                    borderRadius: '20px',
                    marginLeft:'27%',

                    fontSize: '17px',
                    fontWeight: '700',}}>
                    <Button sx={muiButtonSx} style={{width:'100%'}} className=" blueGradientText" >
                        Delete
                    </Button>
                </Box>
            </Box>
        </Box>
    )

}

export default MerchantFoodPendingItem;