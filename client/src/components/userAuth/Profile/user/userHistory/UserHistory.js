import React from "react";
import {Box} from "@mui/material";
import experienceIcon from '../../../../img/reservationExperienceIcon.png';

import "../userStyle.scss";

import UserExperienceHistory from "./UserExperienceHistory";
import UserFoodHistory from "./UserFoodHistory";
import UserLodgingHistory from "./UserLodgingHistory";
import UserTransportHistory from "./UserTransportHistory";



//Icons
import lodgingIcon from '../../../../img/reservationLodgingIcon.png';
import foodIcon from '../../../../img/reservationRestaurantIcon.png';
import transportIcon from '../../../../img/reservationTransportIcon.png';

const UserHistory =()=>{


    //Preset data
    //experience
    const presetExperiencesData=[
        {id: '1', name: 'Jbal Rsas Hiking', price: '120', location: 'Mornak', startDateTime: '25/06/2022 12:00', endDateTime: '27/06/2022 18:00', tags: 'Nature Hiking', image: 'https://t4.ftcdn.net/jpg/02/12/62/79/240_F_212627923_L2vmREAE9lGLnmFbNPhf2TfCRT44z6PB.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'}
    ]
    //transport
    const presetTransportData=[
        {id: '1', name: 'Seat Ibiza', price: '300', seats: 5,location: 'Bizerte', image: 'https://t3.ftcdn.net/jpg/03/90/32/16/240_F_390321632_gbpPQS44ZlUOJ6DgWyDxzUAKEfmC5xec.jpg', description: 'Lorem ipsum dolor sit amet et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'}
    ]
    //lodging
    const presetLodgingData=[
        {id: '1', name: 'Dar Nour', price: '250', location: 'Hammamet', link: "www.nour.com", tags: ['Hotel ', 'Full lodging'], image: 'https://t4.ftcdn.net/jpg/04/94/76/01/240_F_494760101_uDYrDBavlxK8P7OLf0tKzTqqWH6QHkcm.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'}
    ]
    //food
    const presetFoodData=[
        {id: '1', name: 'All salmon', company: 'Go Sushi!',location: 'Tunis', price: '50', link: 'www.gosushi.com', image: 'https://as2.ftcdn.net/v2/jpg/02/81/34/47/1000_F_281344776_BU8Z7Yr6TM3cdjrwu3zsa0OqE0YbXJTY.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'}
    ]

    return (
        <Box>
            <Box className="flex">
                <img width={45}  src={experienceIcon} alt="Experience icon"/>
                <Box className="pinkGradientText titleFont ml-7" >Experiences</Box>
            </Box>

            {/* Divider */}
            <Box>
                <hr className="divider" />
            </Box>


            {/* experiences */}
            <Box>
                {
                    presetExperiencesData.map(item=>(
                        <Box key={item.id}>
                            <UserExperienceHistory data={item}/>
                        </Box>
                    ))
                }
            </Box>
<br/>
            <Box>
                <Box className="flex">
                    <img width={45}  src={transportIcon} alt="Experience icon"/>
                    <Box className="pinkGradientText titleFont ml-7" >Transport</Box>
                </Box>

                {/* Divider */}
            <Box>
                <hr className="divider" />
            </Box>
            <Box>
                {
                    presetTransportData.map(item=>(
                        <Box key={item.id}>
                            <UserTransportHistory data={item}/>
                        </Box>
                    ))
                }
            </Box>
              <br/>
                </Box>

                {/* Lodging */}
            <Box>

                <Box className="flex">
                    <img width={45}  src={lodgingIcon} alt="Experience icon"/>
                    <Box className="pinkGradientText titleFont ml-7" >Lodging</Box>
                </Box>

                     {/* Divider */}
            <Box>
                <hr className="divider" />
            </Box>
            <Box>
                {
                    presetLodgingData.map(item=>(
                        <Box key={item.id}>
                            <UserLodgingHistory data={item}/>
                        </Box>
                    ))
                }
            </Box>
              <br/>
                </Box>

                    {/* Food */}
            <Box>

                <Box className="flex">
                    <img width={45}  src={foodIcon} alt="Experience icon"/>
                    <Box className="pinkGradientText titleFont ml-7" >Food</Box>
                </Box>

                     {/* Divider */}
            <Box>
                <hr className="divider" />
            </Box>
            <Box>
                {
                    presetFoodData.map(item=>(
                        <Box key={item.id}>
                            <UserFoodHistory data={item}/>
                        </Box>
                    ))
                }
            </Box>
              <br/>
                </Box>
        </Box>
    )
}

export default UserHistory;