import * as React from 'react';
import { useState } from "react";

import './becometrader.scss'

//MUI IMPORTS
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import NumbersIcon from '@mui/icons-material/Numbers';
import MenuItem from '@mui/material/MenuItem';

import Select from '@mui/material/Select';







const DetailedInformation = ({ compteFormValues, changeCompteValue ,detailedFormValues, changeDetailedValue }) => {



  const onSelect = () =>{
    detailedFormValues.setSelect= true
    changeDetailedValue('setSelect',true)

  }
  const onNSelect = () =>{
    detailedFormValues.setSelect= false
    changeDetailedValue('setSelect',false)

  }


  const onChecking = () => {
    detailedFormValues.setInspect= true
    changeDetailedValue('setInspect',true)
    detailedFormValues.setInspected= false
    changeDetailedValue('setInspected',false)
    detailedFormValues.setInspectedd= false
    changeDetailedValue('setInspectedd',false)
    detailedFormValues.setInspecteddd= false
    changeDetailedValue('setInspecteddd',false)
    detailedFormValues.setCheckin= false
    changeDetailedValue('setCheckin',false)
  }
  const onCheckings = () => {
    detailedFormValues.setInspected= true
    changeDetailedValue('setInspected',true)
    detailedFormValues.setInspectedd= false
    changeDetailedValue('setInspectedd',false)
    detailedFormValues.setInspecteddd= false
    changeDetailedValue('setInspecteddd',false)
    detailedFormValues.setCheckin= false
    changeDetailedValue('setCheckin',false)
    detailedFormValues.setInspect= false
    changeDetailedValue('setInspect',false)
  }
  const onCheckingss = () => {
    detailedFormValues.setInspectedd= true
    changeDetailedValue('setInspectedd',true)
    detailedFormValues.setInspect= false
    changeDetailedValue('setInspect',false)
    detailedFormValues.setInspected= false
    changeDetailedValue('setInspected',false)
    detailedFormValues.setInspecteddd= false
    changeDetailedValue('setInspecteddd',false)
    detailedFormValues.setCheckin= false
    changeDetailedValue('setCheckin',false)
  }
  const onCheckingsss = () => {
    detailedFormValues.setInspecteddd= true
    changeDetailedValue('setInspecteddd',true)
    detailedFormValues.setInspectedd= false
    changeDetailedValue('setInspectedd',false)
    detailedFormValues.setInspect= false
    changeDetailedValue('setInspect',false)
    detailedFormValues.setInspected= false
    changeDetailedValue('setInspected',false)
    detailedFormValues.setCheckin= false
    changeDetailedValue('setCheckin',false)
  }
  const onCheckin = () => {
    detailedFormValues.setCheckin= true
    changeDetailedValue('setCheckin',true)
    detailedFormValues.setInspecteddd= false
    changeDetailedValue('setInspecteddd',false)
    detailedFormValues.setInspectedd= false
    changeDetailedValue('setInspectedd',false)
    detailedFormValues.setInspect= false
    changeDetailedValue('setInspect',false)
    detailedFormValues.setInspected= false
    changeDetailedValue('setInspected',false)

  }


  const color = "#fff"
  const colors = "#E42651"




  const onRadichange = e => {
    changeDetailedValue('forme', e.target.value)
  };
  const onRadichangin = e => {
    changeDetailedValue('activity', e.target.value)
  };
  const onRadichangins = e => {
    changeDetailedValue('typerestaurant', e.target.value)
  };
  const onRadichanginss = e => {
    changeDetailedValue('specialty', e.target.value)
  };
  return (
     <React.Fragment> 
      <Grid container  style={{textAlign: "center" }} spacing={2}>
    
      <Grid  item xs={12}  md={6} >	
      <Typography  style={{ color:"black", textAlign: "left" }}>Legal Status :</Typography> 
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        style={{color:"black"}}
        onChange={onRadichange}
      >
        <FormControlLabel value="SAS" onChange={onChecking} 
        checked={detailedFormValues.setInspect} control={<Radio style={{color:"#E42651"}} />} label="SAS" />
        <FormControlLabel value="SA" onChange={onCheckings}
        checked={detailedFormValues.setInspected} control={<Radio style={{color:"#E42651"}} />} label="SA" />
        <FormControlLabel value="SUARL" onChange={onCheckingss}
         checked={detailedFormValues.setInspectedd} control={<Radio style={{color:"#E42651"}} />} label="SUARL" />
        <FormControlLabel value="SARL" onChange={onCheckingsss}
         checked={detailedFormValues.setInspecteddd} control={<Radio style={{color:"#E42651"}} />} label="SARL" />
        <FormControlLabel value="" onChange={onCheckin} 
        checked={detailedFormValues.setCheckin} control={<Radio style={{color:"#E42651"}} />} label="Other" />



      </RadioGroup>
      </Grid>

      { detailedFormValues.setCheckin ? (
       <Grid item xs={12} md={6}>
            <Typography  style={{ color:"black", textAlign: "left" }}>Other :</Typography> 
           <TextField
        id="input-with-icon-textfield"
				name="legalstatus"
        value={detailedFormValues.forme}
        onChange={onRadichange}
        sx={{
          background:color,
          svg: { colors },
          input: { colors },
          label: { colors },
          width:"100%",
          textAlign: "left",
        }}
        required
        fullWidth
        variant="standard"
	
              />
       </Grid>
        ) : ( <div></div> 
        )
      }

{
     compteFormValues.setCheckedd ? ( 
      <Grid item xs={12} md={6}>
         <Typography  style={{ color:"black", textAlign: "left" }}>Activity :</Typography> 
         <FormControl sx={{ minWidth: '100%' }} size="small">
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={detailedFormValues.activity}
              label="activity"
              onChange={onRadichangin}
              sx={{
                background:color,
                svg: { colors },
                input: { colors },
                label: { colors },
                textAlign: "left",
              }}
            >
          <MenuItem onClick={onNSelect} value={"Liquor store"}>Liquor store</MenuItem>
          <MenuItem onClick={onNSelect} value={"Coffee Shop"}>Coffee Shop</MenuItem>
          <MenuItem onClick={onNSelect} value={"Catering service"}>Catering service</MenuItem>
          <MenuItem onClick={onNSelect} value={"Fast Food"}>Fast Food</MenuItem>
          <MenuItem onClick={onNSelect} value={"Traditional Food"}>Traditional Food</MenuItem>
          <MenuItem onClick={onSelect} selected={detailedFormValues.setSelect} value={"Other"}>Other</MenuItem>
            </Select>
          </FormControl>
        </Grid>
           ) : ( <div></div> 
           )
         }
        {
             compteFormValues.setChecked ? ( 
        <Grid item xs={12} md={6}>
         <Typography  style={{ color:"black", textAlign: "left" }}>Activity :</Typography> 
         <FormControl sx={{ minWidth: '100%' }} size="small">
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={detailedFormValues.activity}
              label="activity"
              onChange={onRadichangin}
              sx={{
                background:color,
                svg: { colors },
                input: { colors },
                label: { colors },
                textAlign: "left",
              }}
            >
          <MenuItem onClick={onNSelect} value={"Campgrounds and trailer parks"}>Campgrounds and trailer parks</MenuItem>
          <MenuItem onClick={onNSelect} value={"Hotels and similar services "}>Hotels and similar services</MenuItem>
          <MenuItem onClick={onNSelect} value={"Tourist and other similar short-term accommodation"}>Tourist and other similar short-term accommodation</MenuItem>
          <MenuItem onClick={onNSelect} value={"Housing rental"}>Housing rental</MenuItem>
          <MenuItem onClick={onNSelect} value={"Real estate agency"}>Real estate agency</MenuItem>
          <MenuItem onClick={onSelect} selected={detailedFormValues.setSelect} value={"Other"}>Other</MenuItem>
          
            </Select>
          </FormControl>
        </Grid>
          ) : ( <div></div> 
          )
        }
         { detailedFormValues.setSelect ? (
         <Grid item xs={12} md={4}>
         <Typography  style={{ color:"black", textAlign: "left", }}>Other Activity :</Typography> 
	  <TextField
              required
              id="other"
              name="other"
              placeholder="Other"
              fullWidth
              variant="standard"
              value={detailedFormValues.activity}
              onChange={onRadichangin}
              style={{ textAlign: "left", backgroundColor:"white", borderRadius:'8px 8px 8px 8px' }}
            />
         </Grid>

    ):(
      <div></div>
    )
    }
  
        {
             compteFormValues.setCheck ? ( 
        <Grid item xs={12} md={6}>
       
         <Typography  style={{ color:"black", textAlign: "left" }}>Activity :</Typography> 
         <FormControl sx={{ minWidth: '100%' }} size="small">
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={detailedFormValues.activity}
              label="activity"
              onChange={onRadichangin}
              sx={{
                background:color,
                svg: { colors },
                input: { colors },
                label: { colors },
                textAlign: "left",
              }}
            >
                  <MenuItem onClick={onNSelect} value={"Tourist Transport"}>Tourist Transport</MenuItem>
                  <MenuItem onClick={onNSelect} value={"Private Transport"}>Private Transport</MenuItem>
                  <MenuItem onClick={onNSelect} value={"Occasional transportation (Collective)"}>Occasional transportation (Collective)</MenuItem>
                  <MenuItem onClick={onSelect} selected={detailedFormValues.setSelect} value={"Other"}>Other</MenuItem>

            </Select>
          </FormControl>
        </Grid>
                ) : ( <div></div>
                )}
      <Grid item xs={12} md={6}>
         <Typography  style={{ color:"black", textAlign: "left", }}>CNSS affiliation number :</Typography> 
          <TextField
        id="input-with-icon-textfield"
				name="cnss"
        value={detailedFormValues.cnss}
        onChange={(e) => changeDetailedValue('cnss', e.target.value)} 
        sx={{
          background:color,
          svg: { colors },
          input: { colors },
          label: { colors },
          width:"100%",
          textAlign: "left",
        }}
				InputProps={{
				  startAdornment: (
					<InputAdornment position="start">
				   <NumbersIcon sx={{ color: "#E42651"}} />
					</InputAdornment>
				  ),
				}}
        required
        fullWidth
        type="Number"
        variant="standard"
	
              />
        </Grid>
        <Grid item xs={12} md={6}>
         <Typography  style={{ color:"black", textAlign: "left", }}>Tax Registration Number :</Typography> 
          <TextField
        id="input-with-icon-textfield"
				name="mfiscale"
        value={detailedFormValues.mfiscale}
        onChange={(e) => changeDetailedValue('mfiscale', e.target.value)} 
        sx={{
          background:color,
          svg: { colors },
          input: { colors },
          label: { colors },
          width:"100%",
          textAlign: "left",
        }}
				InputProps={{
				  startAdornment: (
					<InputAdornment position="start">
				   <NumbersIcon sx={{ color: "#E42651"}} />
					</InputAdornment>
				  ),
				}}
        required
        fullWidth
        type="Number"
        variant="standard"
	
              />
        </Grid>
        {
     compteFormValues.setCheckedd ? ( 
       <>
       <Grid item xs={12} md={6}>
<Typography  style={{ color:"black", textAlign: "left" }}>Type of restaurant : </Typography> 
         <FormControl sx={{ minWidth: '100%' }} size="small">
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={detailedFormValues.typerestaurant}
              label="activity"
              onChange={onRadichangins}
              sx={{
                background:color,
                svg: { colors },
                input: { colors },
                label: { colors },
                textAlign: "left",
              }}
            >
                  <MenuItem value={"Restaurant"}>Restaurant</MenuItem>
                  <MenuItem value={"Resto Bar"}>Resto Bar</MenuItem>
                  <MenuItem value={"Fast Food"}>Fast Food</MenuItem>
            </Select>
          </FormControl>
       </Grid>
         <Grid item xs={12} md={6}>
         <Typography  style={{ color:"black", textAlign: "left" }}>Specialty :</Typography> 
         <FormControl sx={{ minWidth: '100%' }} size="small">
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={detailedFormValues.specialty}
              label="activity"
              onChange={onRadichanginss}
              sx={{
                background:color,
                svg: { colors },
                input: { colors },
                label: { colors },
                textAlign: "left",
              }}
            >
                  <MenuItem value={"Burgers"}>Burgers</MenuItem>
                  <MenuItem value={"Sushi"}>Sushi</MenuItem>
                  <MenuItem value={"Traditional"}>Traditional</MenuItem>
                  <MenuItem value={"Grill"}>Grill</MenuItem>

            </Select>
          </FormControl>
         </Grid>
         </>
      ) : ( <div></div> 
      )
    }
      </Grid>
      <br/>
	<br/>
	<br/>
  <br/>
	<br/>
	<br/>
  </React.Fragment>

  );
}

export default DetailedInformation