import React, {useState} from "react";
import Box from "@mui/material/Box";

import MerchantNewRequestItemTransport from "./merchantNewRequest/MerchantNewRequestItemTransport";
import MerchantNewRequestItemLodging from "./merchantNewRequest/MerchantNewRequestItemLodging";
import MerchantNewRequestItemFood from "./merchantNewRequest/MerchantNewRequestItemFood";
import MerchantAcceptedRequestItemTransport from "./merchantAcceptedRequest/MerchantAcceptedRequestItemTransport";
import MerchantAcceptedRequestItemLodging from "./merchantAcceptedRequest/MerchantAcceptedRequestItemLodging";
import MerchantAcceptedRequestItemFood from "./merchantAcceptedRequest/MerchantAcceptedRequestItemFood";
import MerchantDeclinedRequestItemTransport from "./merchantDeclinedRequest/MerchantDeclinedRequestItemTransport";
import MerchantDeclinedRequestItemFood from "./merchantDeclinedRequest/MerchantDeclinedRequestItemFood";
import MerchantDeclinedRequestItemLodging from "./merchantDeclinedRequest/MerchantDeclinedRequestItemLodging";


//img
import experienceIcon from "../../../../img/reservationExperienceIcon.png";
import plusIcon from "../../../../img/plusIcon.png";

const MerchantRequests = () =>{

    //Preset data
    const services=[
        {id: '1', type: "transport", name: 'Seat Ibiza', price: '120', location: 'Bizerte', seats: 5, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'},
        {id: '2', type: "lodging", name: 'Movenpick Hotel', price: '120', location: 'Bizerte', url:"www.movenpick.com", tags: ['Hotel', 'Full lodging'],description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'},
        {id: '3', type: "food", name: 'All Salmon', price: '80', location: 'Tunis', company:'Sushi Go!', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'},
        ]
    const users=[
        {id: '1', firstName: 'Sarah', lastName: 'Ben Mansour', image: 'https://t3.ftcdn.net/jpg/03/67/46/48/240_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg'},
        {id: '2', firstName: 'Ahmed', lastName: 'Hedi', image: 'https://t4.ftcdn.net/jpg/03/64/21/11/240_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'},
        {id: '3', firstName: 'Ons', lastName: 'MansourI', image: 'https://t4.ftcdn.net/jpg/01/29/91/19/240_F_129911911_4zgnIdibNhZXLDVGhQ4Dl0rwAcp6gkIa.jpg'},
        {id: '4', firstName: 'Sarah', lastName: 'Ben Mansour', image: 'https://t3.ftcdn.net/jpg/03/67/46/48/240_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg'},
    ]
    // I used array of reservation with experience
    const reservations= [
        {id:'1', service: services[0], user: users[0], clientsCount: '2 Persons', startDateTime: '22/06/2022 12:00', endDateTime: '22/06/2022 18:00', totalPrice: 160},
        {id:'2', service: services[1], user: users[1], clientsCount: '2 Persons', startDateTime: '22/06/2022 12:00', endDateTime: '22/06/2022 18:00', totalPrice: 160},
        {id:'3', service: services[2], user: users[2], clientsCount: '2 Persons', startDateTime: '22/06/2022 12:00', endDateTime: '22/06/2022 18:00', totalPrice: 160},
    ]

    // I used array of requests that has reservation as an object
    const requests=[
        {id:'1', reservation: reservations[0], state: 'Pending', payment: null},
        {id:'2', reservation: reservations[1], state: 'Pending', payment: null},
        {id:'3', reservation: reservations[2], state: 'Pending', payment: null},

        {id:'4', reservation: reservations[0], state: 'Accepted', payment: true},
        {id:'5', reservation: reservations[1], state: 'Accepted', payment: true},
        {id:'6', reservation: reservations[2], state: 'Accepted', payment: true},

        {id:'7', reservation: reservations[0], state: 'Accepted', payment: false},
        {id:'8', reservation: reservations[1], state: 'Accepted', payment: false},
        {id:'9', reservation: reservations[2], state: 'Accepted', payment: false},

        {id:'10', reservation: reservations[0], state: 'Declined', payment: null},
        {id:'11', reservation: reservations[1], state: 'Declined', payment: null},
        {id:'12', reservation: reservations[2], state: 'Declined', payment: null},
    ]

    const [newRequests, setNewRequests]= useState(requests.filter(request=> request.state === 'Pending'))
    const [acceptedRequests, setAcceptedRequests]= useState(requests.filter(request=> request.state === 'Accepted'))
    const [declinedRequests, setDeclinedRequests]= useState(requests.filter(request=> request.state === 'Declined'))

    const handleNewRequestsChange = (newValue) => setNewRequests(newValue)
    const handleAcceptedRequestsChange = (newValue) => setAcceptedRequests(newValue)
    const handleDeclinedRequestsChange = (newValue) => setDeclinedRequests(newValue)

    return(
        <Box>

            {/* New requests */}
            <Box>
                <Box className="flex">
                    <Box className="pinkGradientText titleFont" >New Requests</Box>
                </Box>

                <Box className="mt-[50px] space-y-5">
                    {
                        newRequests.length?
                        newRequests.map(item=>(
                            <Box key={item.id}>
                                {item.reservation.service.type==="transport"?
                                    <MerchantNewRequestItemTransport data={item}/>
                                    : item.reservation.service.type==="lodging"?
                                        <MerchantNewRequestItemLodging data={item}/>:
                                        <MerchantNewRequestItemFood data={item}/>
                                }

                            </Box>
                        )):
                            //If new requests is empty show this
                            <Box className="arrayEmptyBox blueGradientText">
                                You have no new requests.
                            </Box>
                    }
                </Box>

            </Box>


            {/* Divider */}
            <Box>
                <hr className="divider" />
            </Box>

            {/* Accepted requests */}
            <Box>
                <Box className="flex">
                    <Box className="pinkGradientText titleFont" >Accepted Requests</Box>
                </Box>

                <Box className="mt-[50px] space-y-5">
                    {
                        acceptedRequests.length?
                            acceptedRequests.map(item=>(
                                <Box key={item.id}>
                                    {item.reservation.service.type==="transport"?
                                        <MerchantAcceptedRequestItemTransport data={item}/>
                                        : item.reservation.service.type==="lodging"?
                                            <MerchantAcceptedRequestItemLodging data={item}/>:
                                            <MerchantAcceptedRequestItemFood data={item}/>
                                    }
                                </Box>
                            )):
                            //If new requests is empty show this
                            <Box className="arrayEmptyBox blueGradientText">
                                You have no new requests.
                            </Box>
                    }
                </Box>

            </Box>

            {/* Divider */}
            <Box>
                <hr className="divider" />
            </Box>

            {/* Declined requests */}
            <Box>
                <Box className="flex">
                    <Box className="pinkGradientText titleFont" >Declined Requests</Box>
                </Box>

                <Box className="mt-[50px] space-y-5">
                    {
                        declinedRequests.length?
                            declinedRequests.map(item=>(
                                <Box key={item.id}>
                                    {item.reservation.service.type==="transport"?
                                        <MerchantDeclinedRequestItemTransport data={item}/>
                                        : item.reservation.service.type==="lodging"?
                                            <MerchantDeclinedRequestItemLodging data={item}/>:
                                            <MerchantDeclinedRequestItemFood data={item}/>
                                    }
                                </Box>
                            )):
                            //If new requests is empty show this
                            <Box className="arrayEmptyBox blueGradientText">
                                You have no new requests.
                            </Box>
                    }
                </Box>

            </Box>

        </Box>
    )
}

export default MerchantRequests;