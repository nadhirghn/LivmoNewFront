import React, {  Fragment, useEffect, useState } from 'react'

import {Box} from "@mui/material";
import { Link } from 'react-router-dom'

import "../merchantStyle.scss";

//
import transportIcon from '../../../../img/reservationTransportIcon.png';
import lodgingIcon from '../../../../img/reservationLodgingIcon.png';
import foodIcon from '../../../../img/reservationRestaurantIcon.png';
import plusIcon from '../../../../img/plusIcon.png';


//

import MerchantTransportEditItem from "./MerchantTransportEditItem";
import MerchantLodgingPendingItem from "./MerchantLodgingPendingItem";
import MerchantLodgingEditItem from "./MerchantLodgingEditItem";
import MerchantFoodEditItem from "./MerchantFoodEditItem";
import MerchantFoodPendingItem from "./MerchantFoodPendingItem";
import MerchantTransportPendingItem from "./MerchantTransportPendingItem";

//
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { myTransports,  clearErrors } from '../../../../../actions/transportActions'
import { myLodgings } from '../../../../../actions/lodgingActions'
import { myRestaurants } from '../../../../../actions/restaurantActions'



import Loader from '../../../../shared/Loader/loader'


//Delete


const MerchantMyServices =()=>{

    //Transport
    const alert = useAlert();
    const dispatch = useDispatch();

    const {  restaurants } = useSelector(state => state.listRestaurant);
    const {  loading , error, transports, } = useSelector(state => state.listTransport);
    const {  lodgings } = useSelector(state => state.listLodging);

    useEffect(() => {
        dispatch(myRestaurants());
        dispatch(myLodgings());
        dispatch(myTransports());


        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }
        
    }, [dispatch, alert, error])

    
    const [myArray, setMyArray] = useState(lodgings);
    useEffect(() => {
        setMyArray(lodgings)
    }, [lodgings])
    
    const [myArray2, setMyArray2] = useState(restaurants);
     useEffect(() => {
        setMyArray2(restaurants)
    }, [restaurants])

    console.log('real lodg',lodgings)
    console.log('fake lodg',myArray)

    console.log('real food',restaurants)
    console.log('fake food',myArray2)



    return (
       <>
        { loading ? <Loader /> : (
         
        <Box className="space-y-10">
            {/* Transport */}
            <Box>
                <Box className="flex">
                    <img width={45}  src={transportIcon} alt="Experience icon"/>
                    <Box className="pinkGradientText titleFont ml-7" >Transport</Box>
                </Box>

                {/* Pending Transport */}
                <Box className="mt-[50px] space-y-5">
            {transports.length === 0 ? <>

                <Box className="arrayEmptyBox blueGradientText">
                    You don't have any transport request yet,
                </Box>

                </>

                :( 
                    <>
                {
                        transports.map(item=>(
                            <Box key={item._id}>
                                <MerchantTransportPendingItem data={item}/>
                            </Box>
                        ))
                    }
                    </>
                )}

                    {/* Add Transport */}
                    <Box className="merchantServiceBox">
                    <Link to="/newTransport">
                        <img src={plusIcon} alt="Plus icon" className="plusImage"/>
                        </Link>
                        <Box className="pinkGradientText hostAddExperienceText">Add a Transport</Box>
                    </Box>
                </Box>

                {/* Divider */}
                <Box>
                    <hr className="divider" />
                </Box>


                {/* Edit/Delete Transport */}
                {transports.length === 0 ? <>

                <Box className="arrayEmptyBox blueGradientText">
                    You don't have any transport yet,
                </Box>

                </>

                :( 
                    <>
                <Box className="mt-[50px] space-y-5">
                    {
                        transports.map(item=>(
                            <Box key={item._id}>
                                <MerchantTransportEditItem data={item}/>
                            </Box>
                        ))
                    }
                </Box>
                </>
                )}
            </Box>


            {/* Lodging */}
            <Box>

            
                    <>
                <Box className="flex">
                    <img width={45}  src={lodgingIcon} alt="Experience icon"/>
                    <Box className="pinkGradientText titleFont ml-7" >Lodging</Box>
                </Box>
                </>
              

                {/* Pending Lodging */}
                
                <Box className="mt-[50px] space-y-5">
  {myArray.length === 0 ? <>

                <Box className="arrayEmptyBox blueGradientText">
                    You don't have any lodging request yet,
                </Box>

                </>
                :(<>
                {myArray.map(item => (
                       <Box key={item._id}>
                                <MerchantLodgingPendingItem data={item}/>

                           </Box>
                        ))
                    }
                </> ) }
                    {/* Add Lodging */}
                    <Box className="merchantServiceBox">
                    <Link to="/newLodging">
                        <img src={plusIcon} alt="Plus icon" className="plusImage"/>
                        </Link>
                        <Box className="pinkGradientText hostAddExperienceText">Add a lodging</Box>
                    </Box>
                </Box>

                {/* Divider */}
                <Box>
                    <hr className="divider" />
                </Box>


                {/* Edit/Delete Lodging */}
                
                <Box className="mt-[50px] space-y-5">
                     {myArray.length === 0 ? <>

                <Box className="arrayEmptyBox blueGradientText">
                    You don't have any lodging  yet,
                </Box>

                </>
                :(<>
                    {
                        myArray.map(item=>(
                            <Box key={item._id}>
                                <MerchantLodgingEditItem data={item}/>
                            </Box>
                        ))
                    }
                    </>
                )}
                </Box>
            </Box>

            {/* Food */}
            <Box>
                <Box className="flex">
                    <img width={45}  src={foodIcon} alt="Experience icon"/>
                    <Box className="pinkGradientText titleFont ml-7" >Food</Box>
                </Box>

                {/* Pending Food */}
                <Box className="mt-[50px] space-y-5">
                     {myArray2.length === 0 ? <>

                <Box className="arrayEmptyBox blueGradientText">
                    You don't have any food request  yet,
                </Box>

                </>
                :(<>
                    {
                        myArray2.map(item=>(
                            <Box key={item._id}>
                                <MerchantFoodPendingItem data={item}/>
                            </Box>
                        ))
                    }
                </>
                )}

                       {/* Add Food */}
                <Box className="merchantServiceBox">
                    <Link to="/newRestaurant">
                        <img src={plusIcon} alt="Plus icon" className="plusImage"/>
                        </Link>
                        <Box className="pinkGradientText hostAddExperienceText">Add a Food</Box>
                    </Box>
                    
                </Box>

             
               

       {/* Divider */}
                <Box>
                    <hr className="divider" />
                </Box>

                {/* Edit/Delete Food */}
                <Box className="mt-[50px] space-y-5">
                     {myArray2.length === 0 ? <>

                <Box className="arrayEmptyBox blueGradientText">
                    You don't have any food yet,
                </Box>

                </>
                :(<>
                    {
                        myArray2.map(item=>(
                            <Box key={item._id}>
                                <MerchantFoodEditItem data={item}/>
                            </Box>
                        ))
                    }
                    </>
                )}
                </Box>
            </Box>
        </Box>
        )
    }
        </>

    )
}

export default MerchantMyServices;