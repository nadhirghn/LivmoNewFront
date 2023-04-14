import React from 'react'
import { Fragment } from 'react'

import './reviews.scss'

import moment from 'moment'

import {  Avatar, Grid, Paper } from "@material-ui/core";
import Rating from '@mui/material/Rating';

import Box from "@mui/material/Box";
import {Stack} from "@mui/material";



const ListReviews = ({ reviews }) => {
    return (
       
            <Fragment>   
              <div style={{ padding: 14 }} className="App">

    
          <br/>
          <Box className="flex space-x-6" >
          {reviews && reviews.map(review => (
          <Box className="talkingAboutItBox">
            <Box className="flex">
            <Avatar alt="User Image" src={review.avatar.url} />
                <Stack className="talkingAboutItText">
                    <Box>
                    <Grid justifyContent="left" item xs zeroMinWidth style={{ marginLeft: "1rem", textAlign: "left" }}>
                    <h4 > {review.fname} {review.lname} </h4>
                    <Rating name="read-only" value={review.rating} readOnly />
                      </Grid>
                      </Box>
                    <Box className="talkingAboutItTextDate"><p style={{ textAlign: "left", color: "gray", fontSize:"12px"
                  ,marginLeft:"1rem"}}>
                   {moment(review.created).format('llll')}
                  </p></Box>
                </Stack>
            </Box>
            <br/>

            <Box className="talkingAboutItText">
              {review.comment}
            </Box>


        </Box>
         ))}
          </Box>
          </div>

         
        </Fragment>
      
    )
}

export default ListReviews