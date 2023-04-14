import React, { useState, useEffect } from 'react'





//MUI IMPORTS
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';


import { Grid } from '@mui/material';



const YourIdea = ({ compteFormValues, changeCompteValue }) => {

  const onSelect = (e,options) => {
    changeCompteValue('subtheme', e.target.value)
    //essinformationFormValues.country=options.label
    //changeEssInformationValue('e', options)

   };

  const color = "#fff"
  const colors = "#E42651"

  const Changing = () => {
    changeCompteValue('setCheckedd' , true);
    compteFormValues.setCheckedd = true;

};

const Changin = () => {
  changeCompteValue('setCheckedd' , false);
  compteFormValues.setCheckedd = false;

};

const onChanging = () => {
  changeCompteValue('setChecked' , true);
  compteFormValues.setChecked = true;

};

const onChangin = () => {
changeCompteValue('setChecked' , false);
compteFormValues.setChecked = false;

};




const [imagesPreview, setImagesPreview] = useState([]);
compteFormValues.setImagesPreview = useState([])

const onChange = e => {

  const files = Array.from(e.target.files)

  setImagesPreview([]);
  setYourIdeaImage([]);

  compteFormValues.setImagesPreview =[]
  files.forEach(file => {
      const reader = new FileReader();
   
      reader.onload = () => {
          if (reader.readyState === 2) {
              setImagesPreview(oldArray => [...oldArray, reader.result])
              compteFormValues.setImagesPreview = imagesPreview
              changeCompteValue('namee', e.target.files[0].name)
              setYourIdeaImage(oldArray => [...oldArray, reader.result])
             
          }
      }

      reader.readAsDataURL(file)

  })
}


//image 



const [YourIdeaImage, setYourIdeaImage] = useState(() => {
  const saved = localStorage.getItem("YourIdeaImage");
  const initialValue = JSON.parse(saved);
  return initialValue || [];
})


useEffect(() => {
  localStorage.setItem('YourIdeaImage', JSON.stringify(YourIdeaImage));
}, [YourIdeaImage]);




useEffect(() => {
  const YourIdeaImage = JSON.parse(localStorage.getItem('YourIdeaImage'));
  if (YourIdeaImage) {
    setYourIdeaImage(YourIdeaImage);
  }
}, []);



  return (
    <React.Fragment>
    
    <Grid container  style={{textAlign: "center" }} spacing={2}>
  <Grid item xs={12} md={4}>
  <Typography  style={{ color:"white", textAlign: "left", }}>Experience Title :</Typography> 
          <TextField
        id="input-with-icon-textfield"
		name="email"
		    value={compteFormValues.exptitle}
        onChange={(e) => changeCompteValue('exptitle', e.target.value)} 
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
				placeholder='Experience Title'
              />
         
</Grid>
  <Grid item xs={12} md={4}>
  <Typography  style={{ color:"white", textAlign: "left", }}>Theme :</Typography> 
  <FormControl fullWidth>
        <Select
          displayEmpty
          style={{ textAlign: "left", backgroundColor:"white", height:"32px"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={compteFormValues.theme}
          onChange={(e) => changeCompteValue('theme', e.target.value)}
>
          <MenuItem  onClick={Changin}value={"Nature"}>Nature</MenuItem>
          <MenuItem  onClick={Changin}value={"Event"}>Event</MenuItem>
          <MenuItem  onClick={Changin}value={"Culture"}>Culture</MenuItem>
          <MenuItem  onClick={Changing} value={"Other"}>Other</MenuItem>
        </Select>
      </FormControl>
   </Grid>
   {
             compteFormValues.setCheckedd ? (
              <Grid item xs={12} md={4}>
       <Typography  style={{ color:"white", textAlign: "left", }}>Other theme :</Typography> 
          <TextField
        id="input-with-icon-textfield"
		    name="theme"
		    value={compteFormValues.theme}
        onChange={(e) => changeCompteValue('theme', e.target.value)}
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
				placeholder='Other theme'
              />
         
              </Grid>
              ) : (<div></div>)
            }
             <Grid item xs={12} md={4}>
  <Typography  style={{ color:"white", textAlign: "left", }}>Sub-Theme :</Typography> 
  <FormControl fullWidth>
        <Select
          displayEmpty
          style={{ textAlign: "left", backgroundColor:"white", height:"32px"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
           value={compteFormValues.subtheme}
          onChange={onSelect} 
>
          <MenuItem  onClick={onChangin}value={"Hiking"}>Hiking</MenuItem>
          <MenuItem  onClick={onChangin}value={"Kayaking"}>Kayaking</MenuItem>
          <MenuItem  onClick={onChangin}value={"Camping"}>Camping</MenuItem>
          <MenuItem  onClick={onChanging} value={"Other"}>Other</MenuItem>
        </Select>
      </FormControl>
   </Grid>
   {
             compteFormValues.setChecked ? (
              <Grid item xs={12} md={4}>
       <Typography  style={{ color:"white", textAlign: "left", }}>Other sub-theme :</Typography> 
          <TextField
        id="input-with-icon-textfield"
		    name="theme"
		    value={compteFormValues.subtheme}
        onChange={onSelect} 
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
				placeholder='Other sub-theme'
              />
         
              </Grid>
              ) : (<div></div>)
            }
<Grid item xs={12} md={4}>
  <Typography  style={{ color:"white", textAlign: "left", }}>Location :</Typography> 
          <TextField
        id="input-with-icon-textfield"
	    	name="location"
		    value={compteFormValues.location}
        onChange={(e) => changeCompteValue('location', e.target.value)} 
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
				placeholder='Experience location'
              />
         
</Grid>
<Grid item xs={12} md={4}>
<div style={{ textAlign: "left", display:"flex", alignItems:'column'}}>
  <div>
  <Typography  style={{ color:"white", textAlign: "left", }}>Price :</Typography> 
          <TextField
        id="input-with-icon-textfield"
	    	name="location"
        value={compteFormValues.price}
        onChange={(e) => changeCompteValue('price', e.target.value)} 
        sx={{
          background:color,
          svg: { colors },
          input: { colors },
          label: { colors },
          width:"80%",
          textAlign: "left",
        }}
        required
        variant="standard"
				placeholder='Price'
              />
              </div>
    <br/>
    <div>
         <Typography  style={{ color:"white", textAlign: "left", }}>Unit :</Typography> 
          
         <FormControl style={{minWidth: 160}}>
        <Select
          displayEmpty
          style={{ textAlign: "left", backgroundColor:"white", height:"32px" , width:"100%"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={compteFormValues.unit}
        onChange={(e) => changeCompteValue('unit', e.target.value)} 
>
          <MenuItem value={"Hour"}>Hour</MenuItem>
          <MenuItem value={"Day"}>Day</MenuItem>
          <MenuItem value={"Night"}>Night</MenuItem>
          <MenuItem value={"Session"}>Session</MenuItem>
        </Select>
      </FormControl>
         </div>
</div>
</Grid>
<Grid item xs={12} md={4}>
  <Typography  style={{ color:"white", textAlign: "left", }}>Spots :</Typography> 
          <TextField
        id="input-with-icon-textfield"
        name="spots"
		    value={compteFormValues.spots}
        onChange={(e) => changeCompteValue('spots', e.target.value)} 
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
        type='number'
				placeholder='Spots'
              />
         
</Grid>
<Grid item xs={12} md={4}>
       <Typography  style={{ color:"white", textAlign: "left", }}>Maps Link :</Typography>    
       <TextField
        id="input-with-icon-textfield"
        name="spots"
        value={compteFormValues.map}
        onChange={(e) => changeCompteValue('map', e.target.value)} 
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
				placeholder='Maps Link '
              />
               
              </Grid>
     
              <Grid item xs={12} md={4}>
          
          <Typography  style={{ color:"white", textAlign: "left" }}>Experience Photos:</Typography> 
           <div className='form-group'>
           <div>
                <label className="file-label">
                    <input className="file-input" type="file" style={{ color:"white" }}
                  name='experienceimages'
                  accept='image/*,application/pdf' 
                  onChange={onChange}
                  multiple/>
                    <span className="file-cta">
                    <span className="file-icon">
                        <i className="fas fa-upload"></i>
                    </span>
                    <span className="file-label">
                        Choose a file…
                    </span>
                    </span>
                    <span className="file-name" style={{ color:"white" }}>
                    {compteFormValues.namee}
                    </span>
                </label>

                 {YourIdeaImage.map(img => (
                     <img src={img} key={img} alt="Images Preview" className="mt-3 mr-2" width="55" height="52" />
                      ))}
                   </div>
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

export default YourIdea


