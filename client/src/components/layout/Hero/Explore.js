import React, { Component } from 'react'


import './hero.scss'

import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Grid } from '@mui/material';

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1478827536114-da961b7f86d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
      title: 'Tent',
    },
    {
      img: 'https://images.unsplash.com/photo-1496337589254-7e19d01cec44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGRqfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
      title: 'Event',
    },
    {
      img: 'https://images.unsplash.com/photo-1613946069412-38f7f1ff0b65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
      title: 'Restaurant',
    },
    {
      img: 'https://images.unsplash.com/photo-1499916078039-922301b0eb9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZXhwZW5zaXZlJTIwYmVkcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
      title: 'Lodging',
    },

  ];
  const style = {

    height: '100%',
    width: '100%',

};

export default class Explore extends Component {
    
    render() {
        return (
            <React.Fragment>
            <Typography
            style={{fontFamily: 'Montserrat',fontWeight:700,fontSize:"48px",
            lineHeight:'59px' }} 
            align='center'
            variant="h3"
            gutterBottom component="div">
            Why book with LIVMO ?
              </Typography>
            <div className="explore__container">
                <h1>
                   {this.props.title}
                </h1>
            <div className="explore__container--inner">
             {this.props.data.map((item,index) =>{return(
                    <div key={index} className="explore__container--inner-card">
                        <img src={item.url} alt="item"/>
                        <h2>{item.title}</h2>
                        <p className='exp'>{item.description}</p>
                    </div>
                )})}
                </div>
            </div>
            <br/>
            <h2 className='Followus'><span>FOLLOW US #LIVMO</span></h2>
            <br/>
            <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
                    >
            <ImageList sx={{ width: 900, height: 300 }}
                variant="woven" cols={4} >
            {itemData.map((item) => (
                <ImageListItem key={item.img} >
                <img
                    src={`${item.img}?w=161&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    style={style}
                    
                />
                </ImageListItem>
            ))}
            </ImageList>
                </Grid>
            <br/>
            </React.Fragment>
        )
    }
}