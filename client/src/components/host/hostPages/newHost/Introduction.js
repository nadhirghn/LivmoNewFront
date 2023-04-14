import React, { useState } from 'react';





import Typography from '@mui/material/Typography';



import FormControl from '@mui/material/FormControl';

import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

import './becomehost.scss'




const Introduction = ({ compteFormValues, changeCompteValue }) => {

	




  const OnChanging = () => {
	

	compteFormValues.setChecked= false
	changeCompteValue('setCkeked',false)
	compteFormValues.setCheck= true
	changeCompteValue('setCheck',true)

};

const OnChangin = () => {
	//setCheck(false)
	//setChecked(true)

	compteFormValues.setChecked= true
	changeCompteValue('setCkeked',true)

	compteFormValues.setCheck= false
	changeCompteValue('setCkeck',false)

};
const onRadichange = e => {
    changeCompteValue('typehost', e.target.value)
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
	  What is a host ?
      </Typography>
	  <Typography variant="h6" gutterBottom
	  style={{
	  fontWeight:700,
	  fontSize:"12px",
	  lineHeight:'15px',
	  color:"black"
   }}  >
	Becoming a host allows you to create experiences
      </Typography>
	  <Typography variant="h6" gutterBottom
	  style={{
	  fontWeight:700,
	  fontSize:"16px",
	  lineHeight:'20px',
	  color:"black"
   }}  >
	  Are you an individual or an organization?
	  </Typography>
	 <br/> 
	  <FormControl >
      <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
		onChange={onRadichange}
		style={{
			color:"black"
		 }}>
			<br/>

        <FormControlLabel  value="Individual"  control={<Radio style={{
			color:"#E22357"}} />}        
			labelPlacement="top" 
			label="Individual" 
			onChange={OnChanging} checked={compteFormValues.setCheck}
			/>

        <FormControlLabel  value="Organization" control={<Radio style={{
			color:"#E22357"}} />} 
			labelPlacement="top" 
			label="Organization"
			onChange={OnChangin} checked={compteFormValues.setChecked}
			/>
		
      </RadioGroup>
    </FormControl>
	<br/>
	<br/><br/>
	<br/><br/>
    </React.Fragment>
  );
}

export default Introduction