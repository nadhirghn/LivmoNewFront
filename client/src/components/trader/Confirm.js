import * as React from 'react';
import { useState } from "react";


//MUI IMPORTS

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BadgeIcon from '@mui/icons-material/Badge';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import NumbersIcon from '@mui/icons-material/Numbers';

import './becometrader.scss'




const Confirm = ({ informationFormValues, changeInformationValue,  compteFormValues, changeCompteValue,
  documentFormValues, changeDocumentValue, generalFormValues, changeGeneralValue, detailedFormValues, changeDetailedValue
}) => {




  const color = "#fff"
  const colors = "#E42651"


  
    
  return (
    <React.Fragment>
      <Grid container   spacing={3}>
      <Grid item xs={12} md={4}>
         <Typography  style={{ color:"black", textAlign: "left" }}>Type of Service :</Typography> 
          <TextField
        id="input-with-icon-textfield"
		name="fullname"
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
				   <ManageAccountsIcon sx={{ color: "#E42651"}} />
					</InputAdornment>
				  ),
				}}
        required
        fullWidth
        variant="standard"
	
              />
        </Grid>
        <Grid item xs={12} md={4}>
         <Typography  style={{ color:"black", textAlign: "left", }}>Company’s Legal Name :</Typography> 
          <TextField
        id="outlined-read-only-input"
		    name="fullname"
        value={informationFormValues.name}
        sx={{
          background:color,
          svg: { colors },
          input: { colors },
          label: { colors },
          width:"100%",
          textAlign: "left",
        }}
				InputProps={{
          readOnly: true,
				  startAdornment: (
					<InputAdornment position="start">
				   <EmojiTransportationIcon sx={{ color: "#E42651"}} />
					</InputAdornment>
				  ),
				}}
        required
        fullWidth
        variant="standard"
	
              />
        </Grid>
        <Grid item xs={12} md={4}>
         <Typography  style={{ color:"black", textAlign: "left", }}>Contact Person :</Typography> 
          <TextField
        id="input-with-icon-textfield"
		name="fullname"
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
				   <BadgeIcon sx={{ color: "#E42651"}} />
					</InputAdornment>
				  ),
				}}
        required
        fullWidth
        variant="standard"
	
              />
        </Grid>
        <Grid item xs={12} md={4}>
         <Typography  style={{ color:"black", textAlign: "left", }}>Phone Number :</Typography> 
          <TextField
        id="input-with-icon-textfield"
		name="fullname"
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
				   <PhoneIcon sx={{ color: "#E42651"}} />
					</InputAdornment>
				  ),
				}}
        required
        fullWidth
        variant="standard"
	
              />
        </Grid>
        <Grid item xs={12} md={4}>
         <Typography  style={{ color:"black", textAlign: "left", }}>Email :</Typography> 
          <TextField
        id="input-with-icon-textfield"
		name="fullname"
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
				   <MailOutlineIcon sx={{ color: "#E42651"}} />
					</InputAdornment>
				  ),
				}}
        required
        fullWidth
        variant="standard"
	
              />
        </Grid>
        <Grid item xs={12} md={4}>
         <Typography  style={{ color:"black", textAlign: "left", }}>Country :</Typography> 
          <TextField
        id="input-with-icon-textfield"
		name="fullname"
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
				   <BadgeIcon sx={{ color: "#E42651"}} />
					</InputAdornment>
				  ),
				}}
        required
        fullWidth
        variant="standard"
	
              />
        </Grid>
        <Grid item xs={12} md={4}>
         <Typography  style={{ color:"black", textAlign: "left", }}>Governorate : </Typography> 
          <TextField
        id="input-with-icon-textfield"
		name="fullname"
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
				   <BadgeIcon sx={{ color: "#E42651"}} />
					</InputAdornment>
				  ),
				}}
        required
        fullWidth
        variant="standard"
	
              />
        </Grid>
        <Grid item xs={12} md={4}>
         <Typography  style={{ color:"black", textAlign: "left", }}>Address :</Typography> 
          <TextField
        id="input-with-icon-textfield"
		name="fullname"
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
				   <LocationOnIcon sx={{ color: "#E42651"}} />
					</InputAdornment>
				  ),
				}}
        required
        fullWidth
        variant="standard"
	
              />
        </Grid>
        <Grid item xs={12} md={4}>
         <Typography  style={{ color:"black", textAlign: "left", }}>ZIP Code :</Typography> 
          <TextField
        id="input-with-icon-textfield"
		name="fullname"
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
				   <MarkunreadMailboxIcon sx={{ color: "#E42651"}} />
					</InputAdornment>
				  ),
				}}
        required
        fullWidth
        variant="standard"
	
              />
        </Grid>
        <Grid item xs={12} md={4}>
         <Typography  style={{ color:"black", textAlign: "left", }}>Activity :</Typography> 
          <TextField
        id="input-with-icon-textfield"
		name="fullname"
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
				   <BadgeIcon sx={{ color: "#E42651"}} />
					</InputAdornment>
				  ),
				}}
        required
        fullWidth
        variant="standard"
	
              />
        </Grid>
        <Grid item xs={12} md={4}>
         <Typography  style={{ color:"black", textAlign: "left", }}>CNSS affiliation number :</Typography> 
          <TextField
        id="input-with-icon-textfield"
		name="fullname"
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
        variant="standard"
	
              />
        </Grid>
        <Grid item xs={12} md={4}>
         <Typography  style={{ color:"black", textAlign: "left", }}>Tax Registration Number :</Typography> 
          <TextField
        id="input-with-icon-textfield"
		name="fullname"
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
        variant="standard"
	
              />
        </Grid>
        <Grid item xs={12} md={4}>
            <div>
        <Typography  style={{ color:"black" ,textAlign:"left"}}>Copy of License :</Typography>                              
                
                            </div>
        </Grid>

        <br/>
        <Grid  item xs={12} md={4} >			
      <Typography  style={{ color:"black", textAlign: "left" }}>Copy of the RNE :</Typography> 
 

		  				</Grid>

                          <br/>
        <Grid  item xs={12} md={4}  >			
      <Typography  style={{ color:"black", textAlign: "left" }}>CAD Tourist Transport :</Typography> 
              
		  				</Grid>
    


      </Grid>
      <br/>
	<br/>
    </React.Fragment>
  );
}

export default Confirm