import * as React from 'react';
import { useState } from "react";


//MUI IMPORTS
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BadgeIcon from '@mui/icons-material/Badge';
import KeyIcon from '@mui/icons-material/Key';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import './becomehost.scss'

const Account = ({ informationFormValues, changeInformationValue }) => {



  const color = "#fff"
  const colors = "#E42651"

  const Input = styled('input')({
    display: 'none',
    });
    const onChangee = e => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          changeInformationValue('avatarPreview', reader.result);
        }	
  
  
      }
      reader.readAsDataURL(e.target.files[0])
  
  }

  return (
    <React.Fragment>
      <Grid container  style={{textAlign: "center" }} spacing={4}>
      <Grid  item xs={12}  >		
	<div className='form-group' style={{display:"flex", alignItems:"center", justifyContent:"center"}} >  
                                    <figure className='avat mr-3 item-rtl'>
                                        <img
                                            src={informationFormValues.avatarPreview}
                                            className='rounded-circle'
                                            alt='Avatar Preview'
                                        />
                                    </figure>
                                </div>
                                <div className='custom-file' style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                                    <input
									    className='custom-file-input'
                                        type='file'
                                        name='avatar'
                                       style={{display : 'none'}}
                                        id='customFile'
                                        accept='image/*'
                                        onChange={onChangee}
                                    />
                                    
								<label className='custom-file-label' htmlFor='customFile'>
								<Input />
								<Button 
					
								component="span"
								style={{
									color: "black",
                 
								}}>
								ADD PHOTO
								</Button>
							</label>
                                </div>
                               
		  				</Grid>
        <Grid item xs={12} md={4}>
         <Typography  style={{ color:"black", textAlign: "left" }}>Full Name :</Typography> 
          <TextField
        id="input-with-icon-textfield"
				name="fullname"
        value={informationFormValues.name}
        onChange={(e) => changeInformationValue('name', e.target.value)} 
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

        <Grid item xs={12} md={4} >
        <Typography  style={{ color:"black", textAlign: "left", }}>Email :</Typography> 
          <TextField
        id="input-with-icon-textfield"
				name="email"
        value={informationFormValues.email}
        onChange={(e) => changeInformationValue('email', e.target.value)} 
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
        <Grid item xs={12} md={4} >
         <Typography  style={{ color:"black", textAlign: "left", }}>Phone :</Typography> 
        <TextField
        id="input-with-icon-textfield"
				name="phone"
        value={informationFormValues.phone}
        onChange={(e) => changeInformationValue('phone', e.target.value)} 
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
				type='Number'
              />

        </Grid>
        <Grid item xs={12} md={6} >
         <Typography  style={{ color:"black", textAlign: "left", }}>Password :</Typography> 
        <TextField
        id="input-with-icon-textfield"
				name="password"
        value={informationFormValues.password}
        onChange={(e) => changeInformationValue('password', e.target.value)} 
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
				   <KeyIcon sx={{ color: "#E42651"}} />
					</InputAdornment>
				  ),
				}}
        required
        fullWidth
        variant="standard"
				type='password'
              />

        </Grid>        
        <Grid item xs={12} md={6} >
         <Typography  style={{ color:"black", textAlign: "left", }}>Confirm Password :</Typography> 
        <TextField
        id="input-with-icon-textfield"
				name="confirmpassword"
        value={informationFormValues.confirmpwd}
        onChange={(e) => changeInformationValue('confirmpwd', e.target.value)} 
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
				   <KeyIcon sx={{ color: "#E42651"}} />
					</InputAdornment>
				  ),
				}}
        required
        fullWidth
        variant="standard"
				type='password'
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

export default Account