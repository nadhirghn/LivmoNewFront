import React from 'react'
import './hero.scss'

import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {  MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import PeopleIcon from '@mui/icons-material/People';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const color = "#fff"
const colors = "#E42651"

const options = ['1 Person', '2 Persons', '3-10 Persons', '10+ Persons'];

const Hero = () => {

  const theme = createTheme({
    shape: {
      borderRadius: 40,
    },
  }) 

  
  
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');


  return (
    <React.Fragment>
<br/>
<br/>

<section className="hero is-large is-info hero-image">
<Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
                    >
<div className='title' style={{marginTop:"3rem", display: "flex"}}>

        <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment" style={{color:"white", marginLeft:"2rem",}}>
          Where ?
        </InputLabel>
        <Input
          sx={{
            width: 300,
            marginLeft:"2rem",
            svg: { color },
            input: { color },
            label: { color }
          }}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <LocationOnIcon />
            </InputAdornment>
          }
        />
      </FormControl>

<LocalizationProvider dateAdapter={AdapterDateFns}>
				<DatePicker
				renderInput={(params) => {
					return (
					  <TextField
						{...params}
						sx={{
						  svg: { color },
						  input: { color },
						  label: { color },
              marginTop:"0.4rem",
              marginLeft:"2rem"
						}}
					  />
					);
				  }}
					label="When ?"
				/>
				</LocalizationProvider>
<Autocomplete
  id="size-small-standard"
  value={value}
  size="small"
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
  inputValue={inputValue}
  onInputChange={(event, newInputValue) => {
    setInputValue(newInputValue);
  }}

  options={options}
  sx={{
    width: 300,
    marginLeft:"2rem",
    svg: { color },
    input: { color },
    label: { color }
  }}
  renderInput={(params) => (
    <TextField
      {...params}
      InputProps={{
        ...params.InputProps,
        startAdornment: (
          <InputAdornment position="start">
          <PeopleIcon sx={{ color: "#E42651"}}/>
          </InputAdornment>
        )
      }}
      variant="standard"
      label="People ?"
      placeholder="People ?"
      style={{color:"white"}}
      sx={{
        svg: { colors },
        label:{ color },
      }}
    />
    )}
/>
<MenuItem>
<Button variant="contained" color='secondary'>
 <SearchIcon sx={{ color: "#white"}} />
 </Button>
 </MenuItem>

</div>
</Grid>



  <div className="hero-body">
 
    <p className="title"style={{
      fontSize:"60px",
      fontWeight: 700,
      lineHeight:"70px"

	  }}>
    YOU DON’T KNOW<br/>
    WHERE TO GO?<br/>
    PERFECT!
    </p>
    <ThemeProvider theme={theme}>
    <Button variant="contained" style={{
		  background: "linear-gradient(#F02F32,#DA1D6C)",
      width: '10%'
	  }}>
    Let's Go !
    </Button>
       </ThemeProvider>

  </div>
</section>



    </React.Fragment>
  )
}

export default Hero