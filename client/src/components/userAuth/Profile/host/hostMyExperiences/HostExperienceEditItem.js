import React, {  useEffect } from 'react'

//Mui Imports
import {Box, Button} from "@mui/material";
import muiButtonSx from "../MuiStyles";



import { deleteExperience, clearErrors } from '../../../../../actions/experienceActions'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { DELETE_EXPERIENCE_RESET } from '../../../../../constants/experienceConstants'
import { Link, useHistory } from 'react-router-dom';


const HostExperienceEditItem= ({data})=>{

    const history = useHistory();
    const alert = useAlert()

    const dispatch = useDispatch();

    const { error: deleteError, isDeleted } = useSelector(state => state.experience)

    useEffect(() => {

        if (deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors())
        }

        if (isDeleted) {
            //history.push('/');
        window.location.reload(false)
            dispatch({ type: DELETE_EXPERIENCE_RESET })
        }
    }, [dispatch, alert, deleteError, isDeleted, history])

   
    const deleteExperienceHandler = (id) => {
        dispatch(deleteExperience(id))
        //history.push('/');
        alert.success('Experience deleted successfully')
        

    }
    const goToEditExperience =() => alert("Go to edit experience")
 

    return(
        <Box className="itemsBoxRounded flex">

            {/* Left box */}
            <Box className="space-y-3 itemsBoxRoundedLeftBox">
                <Box className="flex space-x-20">
                    {/* Name */}
                    <Box className="itemTitleFont" >{data.exptitle}</Box>

                    {/* Tags (I used tags as string separated by spaces ' ') */}
                    <Box className="flex space-x-16">

                   <Box className="pinkGradientBgWhiteText tagItem">{data.theme}</Box>
                   <Box className="pinkGradientBgWhiteText tagItem">{data.subtheme}</Box>

                      
                    </Box>
                </Box>

                {/* Description */}
                <Box className="importantItemTextFont">Description :</Box>
                <Box className="normalTextFont">{data.plan}</Box>
                {/* Price & dates */}
                <Box className="flex relative">
                    <Box className="importantItemTextFont">{data.price} DT/Person</Box>
                    <Box className="importantItemTextFont" className="absolute right-0"> {data.startdate} - {data.enddate} </Box>
                </Box>
                {/* Location & details button */}
                <Box className="flex relative">
                    <Box className="importantItemTextFont">{data.location}</Box>
                    <Box className="absolute right-0"> <Link className="importantItemTextFont detailsTextFont">Details</Link> </Box>
                </Box>
                {/* Edit & delete buttons */}
                <Box className="space-x-6 relative text-center">
                    <Link to="/updateexperience"> 
                    <Button sx={muiButtonSx}
                            className="pinkGradientBgWhiteText"
                            >Edit</Button>
                            </Link>
                    <Button sx={muiButtonSx} className=" blueGradientText"
                           onClick={() => deleteExperienceHandler(data._id)}>Delete</Button>
                </Box>

            </Box>

            {/* Right box */}
            <Box className="itemsBoxRoundedRightBox">
                {/* Experience image */}
                <img src={data.YourIdeaImage[0].url} alt={data.exptitle+" image"} className="itemsBoxRoundedRightImage" />
            </Box>

        </Box>
    )
}

export default HostExperienceEditItem;