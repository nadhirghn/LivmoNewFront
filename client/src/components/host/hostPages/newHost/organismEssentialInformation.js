import * as React from 'react';
import { useState } from "react";

import './becomehost.scss'

//MUI IMPORTS
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import BoyIcon from '@mui/icons-material/Boy';
import GirlIcon from '@mui/icons-material/Girl';
import NumbersIcon from '@mui/icons-material/Numbers';








const OrganismEssentialInformation = ({organismFormValues , changeOrganismValue }) => {





  const color = "#fff"
  const colors = "#E42651"





  return (
     <React.Fragment> 
      <Grid container  style={{textAlign: "center" }} spacing={2}>
      <Grid item xs={12} md={6}>
         <Typography  style={{ color:"black", textAlign: "left", }}>CNSS affiliation number :</Typography> 
          <TextField
        id="input-with-icon-textfield"
				name="cnss"
        value={organismFormValues.cnss}
        onChange={(e) => changeOrganismValue('cnss', e.target.value)} 
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
				name="cnss"
        value={organismFormValues.mfiscale}
        onChange={(e) => changeOrganismValue('mfiscale', e.target.value)} 
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
        <Grid item xs={12} md={6} >
         <Typography  style={{ color:"black", textAlign: "left", }}>Male Workforce :</Typography> 
        <TextField
        id="input-with-icon-textfield"
		    name="homme"
	      value={organismFormValues.homme}
        onChange={(e) => changeOrganismValue('homme', e.target.value)} 
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
				   <BoyIcon sx={{ color: "#E42651"}} />
					</InputAdornment>
				  ),
				}}
        required
        fullWidth
        variant="standard"
				type='Number'
              />

        </Grid>        
        <Grid item xs={12} md={6} >
         <Typography  style={{ color:"black", textAlign: "left", }}>Female Workface :</Typography> 
        <TextField
        id="input-with-icon-textfield"
		    name="femme"
		    value={organismFormValues.femme}
        onChange={(e) => changeOrganismValue('femme', e.target.value)} 
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
				   <GirlIcon sx={{ color: "#E42651"}} />
					</InputAdornment>
				  ),
				}}
        required
        fullWidth
        variant="standard"
				type='Number'
              />

        </Grid>
      </Grid>
      <br/>
	<br/>
  <br/>
	<br/>
  </React.Fragment>

  );
}

export default OrganismEssentialInformation