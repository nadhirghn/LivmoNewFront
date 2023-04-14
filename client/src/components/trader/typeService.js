import React from 'react';



//MUI IMPORTS
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HotelIcon from '@mui/icons-material/Hotel';
import RestaurantIcon from '@mui/icons-material/Restaurant';

import './becometrader.scss'
import { Grid } from '@mui/material';




const TypeService = ({ compteFormValues, changeCompteValue }) => {

	

  const OnChanging = () => {
    compteFormValues.setChecked= false
    changeCompteValue('setCkeked',false)

    compteFormValues.setCheck= true
    changeCompteValue('setCheck',true)
    
    compteFormValues.setCheckedd= false
    changeCompteValue('setCkeckedd',false)
  
  };
  
  const OnChangin = () => {  
    compteFormValues.setChecked= true
    changeCompteValue('setCkeked',true)
  
    compteFormValues.setCheck= false
    changeCompteValue('setCkeck',false)

    compteFormValues.setCheckedd= false
    changeCompteValue('setCkeckedd',false)
  
  };

  const OnChanges = () => {
    compteFormValues.setChecked= false
    changeCompteValue('setCkeked',false)
  
    compteFormValues.setCheck= false
    changeCompteValue('setCkeck',false)

    compteFormValues.setCheckedd= true
    changeCompteValue('setCkeckedd',true)
  
  };

  const onRadichange = e => {
    changeCompteValue('typeservice', e.target.value)
  };





  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom
	  style={{
	  fontWeight:700,
	  fontSize:"24px",
	  lineHeight:'29px',
	  color:"black"
   }}  >
	   <br/>
	   <br/>
       Choose the type of service you provide
        </Typography>

	 <br/> 
	  <FormControl >
      <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={onRadichange}
        >
			<br/>
            <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 5,
          width: 256,
          height: 124,
        },
      }}
    >
      
            <Paper elevation={0}  style={{background:"#DEDEDE"}}  >
           
          <Grid  
                style={{display: 'flex',
                flexWrap: 'wrap',
                flexDirection:'column',
                 justifyContent:'center',
                 alignItems:"center" }}
                >
            <DirectionsCarIcon  sx={{ fontSize: 50, color:"#E42651"}}/>
        <FormControlLabel  value="Transport" onChange={OnChanging} checked={compteFormValues.setCheck}  control={<Radio style={{
			color:"#E42651"}} />}      
              
			labelPlacement="top" style={{backgroudColor:"black"}}
			label="Transport" 
		
			/>
                    </Grid>
            </Paper>
            <Paper elevation={0} style={{background:"#DEDEDE"}}>
            <Grid  
                style={{display: 'flex',
                flexWrap: 'wrap',
                flexDirection:'column',
                 justifyContent:'center',
                 alignItems:"center" }}
                >
            <HotelIcon  sx={{ fontSize: 50, color:"#E42651"}} />
        <FormControlLabel onChange={OnChangin} checked={compteFormValues.setChecked}   value="Lodging" control={<Radio style={{
			color:"#E42651"}} />} 
			labelPlacement="top" 
			label="Lodging"

			/>
            </Grid>
            </Paper>
            <Paper elevation={0}  style={{background:"#DEDEDE"}} >
            <Grid  
                style={{display: 'flex',
                flexWrap: 'wrap',
                flexDirection:'column',
                 justifyContent:'center',
                 alignItems:"center" }}
                >
            <RestaurantIcon  sx={{ fontSize: 50, color:"#E42651"}} />
              <FormControlLabel onChange={OnChanges} checked={compteFormValues.setCheckedd} t  value="Restaurant" control={<Radio style={{
			color:"#E42651"}} />} 
			labelPlacement="top" 
			label="Restaurant"

			/>
       </Grid>

	    </Paper>	

        </Box>
      </RadioGroup>
    </FormControl>
    <br/>
	<br/>
	<br/>
  <br/>
	<br/>
	<br/>

    </React.Fragment>
  );
}

export default TypeService