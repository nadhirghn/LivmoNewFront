import React, { useState } from 'react';


//MUI IMPORTS
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Grid, Typography } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Autocomplete from '@mui/material/Autocomplete';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';




const Essential = ({ informationFormValues, changeInformationValue }) => {

	const color = "#FFFFFF"

  const [dayoff, setDayOff] = React.useState("");


    const Change = () => {
        changeInformationValue('setC' , true);
        informationFormValues.setC = true;
        changeInformationValue('setCh' , false);
        informationFormValues.setCh = false;
        changeInformationValue('setChe' , false);
        informationFormValues.setChe = false;
      };

      const onChange = () => {
        changeInformationValue('setCh' , true);
        informationFormValues.setCh = true;
        changeInformationValue('setC' , false);
        informationFormValues.setC = false;
        changeInformationValue('setChe' , false);
        informationFormValues.setChe = false;
      };

      const onChanges = () => {
        changeInformationValue('setChe' , true);
        informationFormValues.setChe = true;
        changeInformationValue('setCh' , false);
        informationFormValues.setCh = false;
        changeInformationValue('setC' , false);
        informationFormValues.setC = false;
      };


  return (
    <React.Fragment>
       
       <Grid container  style={{textAlign: "center" }} spacing={2}>
  <Grid item xs={12} md={6}>
    <Typography style={{ color:"white", textAlign: "left", }} >What are the plans for the participants?</Typography>
    <Typography variant="h6" style={{ color:"white", textAlign: "left",fontSize:"12px" }} >*Offer a precise plan from start to finish.</Typography>
    <Typography style={{ color:"white", textAlign: "left",fontSize:"12px" }} >*Describe how your experience is unique to your participants.</Typography>
   <br />

    <TextareaAutosize
      value={informationFormValues.plan}
      onChange={(e) => changeInformationValue('plan', e.target.value)} 
      aria-label="minimum height"
      minRows={6}
      placeholder="Explain to the participants the course of your experience..."
      style={{ width: "100%" , marginLeft:"" }}
    />
    </Grid>
    {
             informationFormValues.setC ? (
                <Grid item xs={12} md={6}>
      
       <Typography  style={{ color:"white", textAlign: "left" }}>Days Off:</Typography>
      <Autocomplete
        style={{textAlign: "left", backgroundColor:"white", borderRadius:'6.1568px' }}
        multiple
        id="tags-standard"	
          inputValue={informationFormValues.dayoff}
          onChange={(event, newValue) => {
            setDayOff(newValue.map((v) => v.title));
            informationFormValues.dayoff = dayoff
          }}
        options={days}
        getOptionLabel={(option) => option.title}
        defaultValue={[days[6]]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            placeholder="Days Off"
          />
        )}
      />

        
<br />
 <Typography  style={{ color:"white", textAlign: "left" }}>Start & End Time  :</Typography>

<div style={{ textAlign: "left", display:"flex", alignItems:'column'}}>
<TextField
        id="time"
        type="time"
        defaultValue="07:30"
        value={informationFormValues.startime}
        onChange={(e) => changeInformationValue('startime', e.target.value)} 
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
        sx={{ width: 150 }}
        style={{marginLeft:'10px', backgroundColor:"white", borderRadius:'6.1568px' }}
      />


  <br/>
  <TextField
        id="time"
        type="time"
        defaultValue="07:30"
        value={informationFormValues.endtime}
        onChange={(e) => changeInformationValue('endtime', e.target.value)} 
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
          
        }}
        sx={{ width: 150 }}
        style={{marginLeft:'10px', backgroundColor:"white", borderRadius:'6.1568px' }}
      />

    </div>


                </Grid>
                ) : (<div></div>)
            }
    {
             informationFormValues.setCh ? (
                <Grid item xs={12} md={6}>
 <Typography  style={{ color:"white", textAlign: "left" }}>Start & End Date  :</Typography>

                  <div style={{ textAlign: "left", display:"flex", alignItems:'column'}}>
                  <TextField
        id="datetime-local"
        value={informationFormValues.startdate}
        onChange={(e) => changeInformationValue('startdate', e.target.value)}
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        sx={{ width: "40%",
          svg: { color },
          input: { color },
          label: { color },
           }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      
        <TextField
        id="datetime-local"
        value={informationFormValues.enddate}
        onChange={(e) => changeInformationValue('enddate', e.target.value)}
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        sx={{ width: "40%",
          svg: { color },
          input: { color },
          label: { color },
         
           }}
        InputLabelProps={{
          shrink: true,
        }}
      />
                  </div>
                </Grid>
                ) : (<div></div>)
            }

    <Grid item xs={12}  md={12}>
<div style={{ textAlign: "left", display:"flex", alignItems:'column'}}>
  <div>
  <Typography  style={{ color:"white", textAlign: "left", }}>Type of Date :</Typography> 
  <FormControl style={{minWidth: 160}}>
        <Select
          displayEmpty
          style={{ textAlign: "left", backgroundColor:"white", height:"32px" , width:"100%"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={informationFormValues.typeofdate}
          onChange={(e) => changeInformationValue('typeofdate', e.target.value)}
>
          <MenuItem onClick={Change}    value={"Interval Date"}>Interval Date</MenuItem>
          <MenuItem onClick={onChange}  value={"Specific Date"}>Specific Date</MenuItem>
          <MenuItem onClick={onChanges} value={"Open Date"}>Open Date</MenuItem>
        </Select>
      </FormControl>
              </div>
  

    <div>
         <Typography  style={{ color:"white", textAlign: "left", marginLeft:"2rem"}}>Season :</Typography> 
          
         <FormControl style={{minWidth: 160}}>
        <Select
          displayEmpty
          style={{ textAlign: "left", backgroundColor:"white", height:"32px" , width:"100%", marginLeft:"2rem"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={informationFormValues.season}
          onChange={(e) => changeInformationValue('season', e.target.value)}
>
          <MenuItem value={"Summer"}>Summer</MenuItem>
          <MenuItem value={"Winter"}>Winter</MenuItem>
          <MenuItem value={"Spring"}>Spring</MenuItem>
          <MenuItem value={"Autumn"}>Autumn</MenuItem>
        </Select>
      </FormControl>
         </div>
         {
             informationFormValues.setChe ? (
        <>     
  <div style={{marginLeft:"15rem"}}>
  <Typography  style={{ color:"white", textAlign: "left", }}>Duration (days) :</Typography> 
          <TextField
        id="input-with-icon-textfield"
        name="spots"
		    value={informationFormValues.durationdays}
        onChange={(e) => changeInformationValue('durationdays', e.target.value)}
        sx={{
          background:color,
         
          width:"80%",
          textAlign: "left",
        }}
        required
        fullWidth
        variant="standard"
        type='number'
				placeholder='7 Days'
              />
              </div>
<div>
<Typography  style={{ color:"white", textAlign: "left", }}>Duration (hours) :</Typography> 

<TextField
        id="input-with-icon-textfield"
        name="spots"
        value={informationFormValues.durationhours}
        onChange={(e) => changeInformationValue('durationhours', e.target.value)}
        sx={{
          background:color,
          width:"80%",
          textAlign: "left",
        }}
        required
        fullWidth
        variant="standard"
        type='number'
				placeholder='7 Hours'
              />
</div>
</>
          
                ) : (<div></div>)
            }
</div>

</Grid>

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

export default Essential

const days = [
  { title: 'Monday,' },
  { title: 'Tuesday,' },
  { title: 'Wednesday,' },
  { title: 'Thursday,' },
  { title: 'Friday,' },
  { title: 'Saturday,' },
  { title: 'Sunday,' },

];