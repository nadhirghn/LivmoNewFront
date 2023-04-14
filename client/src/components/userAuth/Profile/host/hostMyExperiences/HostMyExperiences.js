import React, {  Fragment, useEffect, useState } from 'react'

//
import {Box} from "@mui/material";

//
import HostExperienceEditItem from "./HostExperienceEditItem";
import HostExperiencePendingItem from "./HostExperiencePendingItem";
import "../hostStyle.scss";


//IMG 
import plusIcon from '../../../../img/plusIcon.png'
import experienceIcon from '../../../../img/reservationExperienceIcon.png';

import { Link } from "react-router-dom"


//
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { myExperiences,  clearErrors } from '../../../../../actions/experienceActions'

import Loader from '../../../../shared/Loader/loader'



const HostMyExperiences =()=>{

    const alert = useAlert();
    const dispatch = useDispatch();

    const {  loading , error, experiences } = useSelector(state => state.listExperience);



    useEffect(() => {
        dispatch(myExperiences());
 


        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }
        
    }, [dispatch, alert, error])





    const presetEditExperiencesData=[
        {id: '1', name: 'Jbal Rsas Hiking', price: '120', location: 'Mornak', startDateTime: '25/06/2022 12:00', endDateTime: '27/06/2022 18:00', tags: 'Nature Hiking', image: 'https://t4.ftcdn.net/jpg/02/12/62/79/240_F_212627923_L2vmREAE9lGLnmFbNPhf2TfCRT44z6PB.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'}
    ]


    return (
        <>
        { loading ? <Loader /> : (
         
        <Box>
            <Box className="flex">
                <img width={45}  src={experienceIcon} alt="Experience icon"/>
                <Box className="pinkGradientText titleFont ml-7" >Experiences</Box>
            </Box>

            {/* Pending experiences */}
            <Box className="mt-[50px] space-y-5">
                 {experiences.length === 0 ? <>

                <Box className="arrayEmptyBox blueGradientText">
                    You don't have any experience request yet,
                </Box>

                </>

                :( 
                    <>
                
                {
                    experiences.map(item=>(
                        <Box key={item._id}>
                            <HostExperiencePendingItem data={item}/>
                        </Box>
                    ))
                }
                </>
                )
            }

                {/* Add experience */}
                <Box className="hostAddExperienceBox">
                    <Link to="/newexperience">
                    <img src={plusIcon} alt="Plus icon" className="plusImage"/>
                    </Link>
                    <Box className="pinkGradientText hostAddExperienceText">Add an experience</Box>
                </Box>
            </Box>

            {/* Divider */}
            <Box>
                <hr className="divider" />
            </Box>


            {/* Edit/Delete experiences */}
            <Box>
                 {experiences.length === 0 ? <>

                <Box className="arrayEmptyBox blueGradientText">
                    You don't have any experience  yet,
                </Box>

                </>

                :( 
                    <>
                
                {
                    experiences.map(item=>(
                        <Box key={item._id}>
                            <HostExperienceEditItem data={item}/>
                        <br/>

                        </Box>
                    ))
                }
                </>
                )
            }
              
            </Box>

        </Box>
        )
    }
        </>

    )
}

export default HostMyExperiences;