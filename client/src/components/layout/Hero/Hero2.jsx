import React from 'react'
import './hero.scss'


//MUI IMPORTS
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//IMAGES IMPORTS
import IMG from '../../../img/carthagefestival.png'
import IMG1 from '../../../img/electronic.png'
import IMG2 from '../../../img/marton.png'
import IMG3 from '../../../img/host.png'
import IMG4 from '../../../img/merchant.png'

const theme = createTheme({
  shape: {
    borderRadius: 40,
  },
}) 


const card = (
  <React.Fragment>
    <CardContent>
    <div style={{position: 'relative'}} >
    <CardMedia
        component="img"
        height="194"
        image={IMG}
        alt="Carthage Festival"
      />
      <div style={{
                          position: 'absolute', 
                          color: 'white', 
                          top: '50%', 
                          left: '50%', 
                          transform: 'translateX(-50%)',
                          fontFamily: 'Montserrat',
                          fontWeight: 700,
                          fontSize: '36px',
                          lineHeight: '39px'
                        }} >Carthage Festival</div>
                      </div>
                   
    </CardContent>

  </React.Fragment>
);
const card1 = (
    <React.Fragment>
    <CardContent>
    <div style={{position: 'relative'}} >
    <CardMedia
        component="img"
        height="194"
        image={IMG1}
        alt="The Electronic Dunes"
      />
      <div style={{
                          position: 'absolute', 
                          color: 'white', 
                          top: '50%', 
                          left: '50%', 
                          transform: 'translateX(-50%)',
                          fontFamily: 'Montserrat',
                          fontWeight: 700,
                          fontSize: '36px',
                          lineHeight: '39px'
                        }} >The Electronic Dunes</div>
                      </div>
                   
    </CardContent>
    </React.Fragment>
  );

  const card2 = (
    <React.Fragment>
    <CardContent>
    <Typography
    style={{fontFamily: 'Montserrat',
    fontWeight:700,
    fontSize:"48px",
    lineHeight:'59px',
    marginTop:'4rem',
    marginLeft:'2rem',
 }} 
    align='left'
    variant="h6"
    gutterBottom component="div">
    Explore every corner <br/>
    of the country <br/>
    with us !
      </Typography>
      <Typography
    style={{fontFamily: 'Montserrat',
    marginBottom:'9rem',
    marginLeft:'2rem',
    fontWeight:700,
    fontSize:"20px",
    lineHeight:'24px',
    color:"#DA1D6C",
    letterSpacing:'0.2em'}} 
    align='left'
    variant="h6"
    gutterBottom component="div">
      Discover how it works !
      </Typography>
    </CardContent>
    </React.Fragment>
  );
  

const card3 = (
    <React.Fragment>
    <CardContent>
    <div style={{position: 'relative'}} >
    <CardMedia
        component="img"
        height="194"
        image={IMG2}
        alt="The Electronic Dunes"
      />
      <div style={{
                          position: 'absolute', 
                          color: 'white', 
                          top: '50%', 
                          left: '50%', 
                          transform: 'translateX(-50%)',
                          fontFamily: 'Montserrat',
                          fontWeight: 700,
                          fontSize: '36px',
                          lineHeight: '39px'
                        }} >    <ThemeProvider theme={theme}>
                        <Button variant="contained" style={{
                          background: "white",
                          width: '100%',
                          color: '#DA1D6C',
                        }}>
                        DISCOVER
                        </Button>
                           </ThemeProvider></div>
                      </div>
                   
    </CardContent>
    </React.Fragment>
  );
  const card4 = (
    <React.Fragment>
      <CardContent>
      <div style={{position: 'relative'}} >
      <CardMedia
          component="img"
          height="194"
          image={IMG3}
          alt="Become a Host"
        />
        <div style={{
                            position: 'absolute', 
                            color: 'white', 
                            top: '50%', 
                            left: '50%', 
                            transform: 'translateX(-50%)',
                            fontFamily: 'Montserrat',
                            fontWeight: 700,
                            fontSize: '36px',
                            lineHeight: '39px'
                          }} >Become a Host</div>
                        </div>
                     
      </CardContent>
  
    </React.Fragment>
  );
  const card5 = (
      <React.Fragment>
      <CardContent>
      <div style={{position: 'relative'}} >
      <CardMedia
          component="img"
          height="194"
          image={IMG4}
          alt="Become a Merchant"
        />
        <div style={{
                            position: 'absolute', 
                            color: 'white', 
                            top: '50%', 
                            left: '50%', 
                            transform: 'translateX(-50%)',
                            fontFamily: 'Montserrat',
                            fontWeight: 700,
                            fontSize: '36px',
                            lineHeight: '39px'
                          }} >Become a Merchant</div>
                        </div>
                     
      </CardContent>
      </React.Fragment>
    );
const Hero2 = () => {

    var cardStyle = {
        width: '50vw'
    }

  return (
    <React.Fragment>
<br/>
    <Typography
    style={{fontFamily: 'Montserrat',fontWeight:700,fontSize:"48px",
    lineHeight:'59px' }} 
    align='center'
    variant="h3"
    gutterBottom component="div">
    Discover the scheduled experiences
      </Typography>
      <br />
        <Grid container spacing={2} >
            <Grid xs={12} sm={6} >
                <Box sx={{ p: 2 }}>
                    <Card style={cardStyle} variant="outlined">{card}</Card>
                    </Box>
            </Grid>
            <Grid xs={12} sm={6} >
                <Box sx={{ p: 2 }}>
                    <Card style={cardStyle} variant="outlined">{card1}</Card>
                </Box>

            </Grid>
            </Grid>
            <br/>
            <Grid container spacing={2} >
            <Grid xs={12} sm={6} >
                <Box sx={{ p: 2 }}>
                    <Card style={cardStyle} variant="outlined">{card2}</Card>
                    </Box>
            </Grid>
            <Grid xs={12} sm={6} >
                <Box sx={{ p: 2 }}>
                    <Card style={cardStyle} variant="outlined">{card3}</Card>
                </Box>

            </Grid>
            </Grid>
            <br/>
    <Typography
    style={{fontFamily: 'Montserrat',fontWeight:700,fontSize:"48px",
    lineHeight:'59px' }} 
    align='center'
    variant="h3"
    gutterBottom component="div">
    Become a service provider
      </Typography>
      <br />
        <Grid container spacing={2} >
            <Grid xs={12} sm={6} >
                <Box sx={{ p: 2 }}>
                    <Card style={cardStyle} variant="outlined">{card4}</Card>
                    </Box>
            </Grid>
            <Grid xs={12} sm={6} >
                <Box sx={{ p: 2 }}>
                    <Card style={cardStyle} variant="outlined">{card5}</Card>
                </Box>

            </Grid>
            </Grid>
            <br/>



    </React.Fragment>
  )
}

export default Hero2