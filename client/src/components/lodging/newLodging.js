import React, { useState, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom';
import {  useForm } from "react-hook-form";

//MUI IMPORTS

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Container } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";

//Other imports
import { newLodging, clearErrors } from '../../actions/lodgingActions'
import { NEW_LODGING_RESET } from '../../constants/lodgingConstants'
import './lodging.scss'

const useStyles = makeStyles((theme) => ({

  root: {
    "& > *": {
      margin: theme.spacing(9),
      width: theme.spacing(500),
      height: theme.spacing(0)
    }
  },

}));


const NewLodging = () => {


  //Validation

  const { register , handleSubmit, formState: {errors} } = useForm();
  
  const titleValidation = errors?.title ? errors.title.message : null;
  const addressValidation = errors?.address ? errors.address.message : null;
  const pricepernightValidation = errors?.pricepernight ? errors.pricepernight.message : null;
  const descriptionValidation = errors?.description ? errors.description.message : null;
  const imagesValidation = errors?.images ? errors.images.message : null;
  const lodcategoryValidation = errors?.lodcategory ? errors.lodcategory.message : null;
  const lodtypeValidation = errors?.lodtype ? errors.lodtype.message : null;

 




  const classes = useStyles();

 const [select, setSelect] = useState(false);
 const [selected, setSelected] = useState(false);

 const onSelected = () =>{
  setSelected(true);
}
const onNSelected = () =>{
  setSelected(false);
}
 const onSelect = () =>{
   setSelect(true);
 }
 const onNSelect = () =>{
  setSelect(false);
}



  const [title, setTitle] = useState('');
  const [website, setWebsite] = useState('');
  const [address, setAddress] = useState('');
  const [pricepernight, setPricepernight] = useState(0);
  const [lodgingCategory, setLodgingCategory] = useState('');
  const [lodgingType, setLodgingType] = useState('');
  const [description, setDescription] = useState('');

  const [otherType, setOtherType] = useState('');


  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);



  const [namee, setNamee] = useState('');




    const alert = useAlert();
    const dispatch = useDispatch();

    const {  error, success } = useSelector(state => state.newLodging);
    
  const handleChange = (event) => {
   setLodgingCategory(event.target.value);
  };
  const handleChanges = (event) => {
    setLodgingType(event.target.value);
   };




      
   const onChange = e => {

    const files = Array.from(e.target.files)

    setImagesPreview([]);
    setImages([])

    files.forEach(file => {
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setImagesPreview(oldArray => [...oldArray, reader.result])
                setImages(oldArray => [...oldArray, reader.result])
            }
        }

        reader.readAsDataURL(file)
    })
    setNamee(e.target.files[0]);
}

const history = useHistory()

useEffect(() => {


  if (error) {
      alert.error(error);
      dispatch(clearErrors())
  }

  if (success) {
    history.push('/alllodgings');
      alert.success('Lodging created successfully');
      dispatch({ type: NEW_LODGING_RESET })
  }

}, [dispatch, alert, error, success,history ])


const submitHandler = (e) => {
 

  const formData = new FormData();
  formData.set('lodgingCategory', lodgingCategory);
  formData.set('lodgingType', lodgingType);
  formData.set('title', title);
  formData.set('address', address);
  formData.set('website', website);
  formData.set('pricepernight', pricepernight);
  images.forEach(images => {
    formData.append('images', images)
})

  formData.set('description', description);

  formData.set('otherType', otherType);






  dispatch(newLodging(formData))
}
  return (
    <React.Fragment >
        <CssBaseline />
        <section className="hero is-fullheight he" >
      <div className={classes.root}>
        <Container component="main" >

<Grid  style={{textAlign: "left" }}>
      <Typography variant="h6" gutterBottom
      style={{
        fontWeight:700,
        fontSize:"42px",
        lineHeight:'42px',
        marginTop:'4rem',
        color:"white"
     }} >
    CREATE A LODGING
      </Typography>
      <br />
          <br/>
      <Grid container component="form" onSubmit={handleSubmit(submitHandler)}   noValidate spacing={4} >
       
      <Grid item xs={12} md={4}> 
      <Typography  style={{ color:"white", textAlign: "left", }}>Lodging Category :</Typography> 
      <FormControl fullWidth>
        <Select
        {...register("lodcategory", { required: "Lodging Category is required",
      })}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          displayEmpty
          value={lodgingCategory}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'Without label' }}
          style={{ textAlign: "left", backgroundColor:"white", height:"35px"}}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Lodging Category</em>;
            }
            return selected;
          }}
        >
          
          <MenuItem disabled value="">
            <em>Lodging Category</em>
          </MenuItem>
          <MenuItem  onClick={onNSelect}value={"Whole house"}>Whole house </MenuItem>
          <MenuItem  onClick={onNSelect}value={"Private room"}>Private room</MenuItem>
          <MenuItem  onClick={onNSelect} value={"Shared room"}>Shared room</MenuItem>
          <MenuItem  onClick={onSelect} selected={select} value="Other">Other</MenuItem>

        </Select>
      </FormControl>
      <br/>
      {!!errors?.lodcategory && <span className="text-sm text-red-500">
                                        {lodcategoryValidation}</span>}
      </Grid>
    { select ? (
         <Grid item xs={12} md={4}>
         <Typography  style={{ color:"white", textAlign: "left", }}>Other lodging category :</Typography> 
	  <TextField
              required
              id="other"
              name="other"
              placeholder="Other"
              fullWidth
              variant="standard"
              {...register("lodcategory", {required: "Lodging category is required"})}
              error={!!errors?.lodcategory}
              helperText={lodcategoryValidation}

              value={lodgingCategory}
              onChange={handleChange}
              style={{ textAlign: "left", backgroundColor:"white", borderRadius:'8px 8px 8px 8px' }}
            />
         </Grid>

    ):(
      <div></div>
    )
    }
    <br />
    <Grid item xs={12} md={4}> 
    <Typography  style={{ color:"white", textAlign: "left", }}>Lodging Type :</Typography> 
      <FormControl fullWidth>
        <Select
        {...register("lodtype", {required: "Lodging type is required"})}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          displayEmpty
          value={lodgingType}
          label="Type Logement"
          onChange={handleChanges}
          style={{ textAlign: "left", backgroundColor:"white", height:"35px" }}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Lodging Type</em>;
            }
            return selected;
          }}
        >
            <MenuItem disabled value="">
            <em>Lodging Type</em>
          </MenuItem>
          <MenuItem onClick={onNSelected} value={"House"}>House</MenuItem>
          <MenuItem onClick={onNSelected} value={"Apartment"}>Apartment</MenuItem>
          <MenuItem onClick={onNSelected} value={"Hotel"}>Hotel</MenuItem>
          <MenuItem onClick={onNSelected} value={"House hotel"}>House hotel</MenuItem>
          <MenuItem onClick={onNSelected}value={"Residence"}>Residence</MenuItem>
          <MenuItem onClick={onNSelected} value={"Motel"}>Motel</MenuItem>
          <MenuItem onClick={onSelected} selected={selected} value="Other">Other</MenuItem>

        </Select>
      </FormControl>
      <br/>
      {!!errors?.lodtype && <span className="text-sm text-red-500">
                                        {lodtypeValidation}</span>}
    </Grid>
    { selected ? (
         <Grid item xs={12} md={4}>
         <Typography  style={{ color:"white", textAlign: "left", }}>Other lodging type :</Typography> 
	  <TextField
              required
              id="other"
              name="other"
              placeholder="Other"
              fullWidth
              variant="standard"
              {...register("lodtype", {required: "Lodging type is required"})}
              error={!!errors?.lodtype}
              helperText={lodtypeValidation}

              value={otherType}
              onChange={(e) => setOtherType(e.target.value)}
              style={{ textAlign: "left", backgroundColor:"white", borderRadius:'8px 8px 8px 8px' }}
            />
         </Grid>

    ):(
      <div></div>
    )
    }
  <br />
      <Grid item xs={12} md={4}>
    <Typography  style={{ color:"white", textAlign: "left", }}>Price Per Night (DTN) :</Typography> 
	  <TextField
              required
              id="pricepernight"
              name="pricepernight"
              type='number'
              placeholder="Price Per Night"
              fullWidth
              variant="standard"
              {...register("pricepernight", {required: "Price is required, Only numbers is allowed",
              valueAsNumber: true,
              pattern:{
                   value: /^(0|[1-9]\d*)(\.\d+)?$/,
                  },
            })}
              error={!!errors?.pricepernight}
              helperText={pricepernightValidation}

              value={pricepernight}
              onChange={(e) => setPricepernight(e.target.value)}
              style={{ textAlign: "left", backgroundColor:"white", borderRadius:'8px 8px 8px 8px' }}
            />
          </Grid>
          <br />
	  <Grid item xs={12} md={4}>
    <Typography  style={{ color:"white", textAlign: "left" }}>Lodging Name:</Typography> 
	  <TextField
             
              id="lodgingName"
              name="lodgingName"
              placeholder="Lodging Name"
              fullWidth
              variant="standard"
              {...register("title", {required: "Lodging Name is required"})}
              error={!!errors?.title}
              helperText={titleValidation}

              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ textAlign: "left", backgroundColor:"white", borderRadius:'8px 8px 8px 8px' }}
            />
          </Grid>
          <br />
          <Grid item xs={12} md={4}>
    <Typography  style={{ color:"white", textAlign: "left" }}>Address:</Typography> 
	  <TextField
              required
              id="address"
              name="address"
              placeholder='Lodging Address'
              fullWidth
              autoFocus
              variant="standard"
              {...register("address", { required: "Address is required",
            })}
              error={!!errors?.address}
              helperText={addressValidation}

              value={address}
              onChange={(e) => setAddress(e.target.value)}
              style={{ textAlign: "left", backgroundColor:"white", borderRadius:'8px 8px 8px 8px' }}

            />
          </Grid>
		   <br />
       <Grid item xs={12} md={4}>
  
    <Typography  style={{ color:"white", textAlign: "left" }}>Lodging Photos:</Typography> 

    <div>
                <label className="file-label">
                    <input className="file-input" type="file" style={{ color:"white" }}
                    {...register("images", {required: "Lodging photos is required"})}
                  name='patente'
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
                    {namee.name}
                    </span>
                </label>
                                    {imagesPreview.map(img => (
                                        <img src={img} key={img} alt="Images Preview" className="mt-3 mr-2" width="55" height="52" />
                                    ))}

                                </div>
    
                                {namee === "" ? (
										<>
									 {!!errors?.images && <span className="text-sm text-red-500">
                                        {imagesValidation}</span>}
										</>
									):(<></>)
										}

                        </Grid>
          <Grid item xs={12} md={4}>
    <Typography  style={{ color:"white", textAlign: "left" }}>Website: </Typography> 
	  <TextField
              required
              id="Website"
              name="Website"
              placeholder='Link to your Website'
              fullWidth
              autoFocus
              variant="standard"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              style={{ textAlign: "left", backgroundColor:"white", borderRadius:'8px 8px 8px 8px' }}

            />
          </Grid>
            <Grid item xs={12} >
            <Typography  style={{ color:"white", textAlign: "left" }}>Description: </Typography> 
       <TextareaAutosize
      aria-label="maximum height"
      placeholder="Lodging’s description..."
      style={{ width: "65%", height:"100%", borderRadius:'8px 8px 8px 8px'}}
      {...register("description", {required: "Description is required"})}
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />
    <br/>
{!!errors?.description && <span className="text-sm text-red-500">
                                        {descriptionValidation}</span>}
</Grid>

      <Grid item xs={12} style={{textAlign:"center"}}>
      <br />
      <br />
    <Link to="/merchant/me">
      <Button variant="contained"
		   color="secondary" 
      
       style={{textTransform: 'none',
        background: "white", color:"#DA1D6C", borderRadius:'18.5406px',
        width:"143.38px",
        height:"48.21px",
       }}
            >
			CANCEL 
		  </Button>
      </Link>
     <Button variant="contained"
       type='submit'
       style={{textTransform: 'none',
        background: "linear-gradient(#F02F32,#DA1D6C)",
        borderRadius:'18.5406px',
        color:'white',
        width:"143.38px",
        height:"48.21px",
         marginLeft:"3rem"}}
            >
			CONFIRM 
		  </Button>
      </Grid>
     </Grid>

     </Grid>
   </Container>
   </div>
   </section>
    </React.Fragment>
  );
}

export default NewLodging