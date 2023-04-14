import React, { useState, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom';
import {  useForm } from "react-hook-form";


//MUI Imports
import { Container } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';



import './restaurant.scss'
import { newRestaurant, clearErrors } from '../../actions/restaurantActions'
import { NEW_RESTAURANT_RESET } from '../../constants/restaurantConstants'







const NewRestaurant= () => {



      //Validation

      const { register , handleSubmit, formState: {errors} } = useForm();

  const restaurantNameValidation = errors?.restaurantName ? errors.restaurantName.message : null;
  const platNameValidation = errors?.platName ? errors.platName.message : null;
  const descriptionValidation = errors?.description ? errors.description.message : null;
  const priceValidation = errors?.price ? errors.price.message : null;
  const addressValidation = errors?.address ? errors.address.message : null;
  const rulesValidation = errors?.rules ? errors.rules.message : null;
  const images1Validation = errors?.images1 ? errors.images1.message : null;
  const images2Validation = errors?.images2 ? errors.images2.message : null;
  const restypeValidation = errors?.restype ? errors.restype.message : null;
  const speValidation = errors?.spe ? errors.spe.message : null;











  const useStyles = makeStyles((theme) => ({

    root: {
      "& > *": {
        margin: theme.spacing(2),
        width: theme.spacing(500),
        height: theme.spacing(0)
      }
    },
  
  }));
  
  const [restaurantName, setRestaurantName] = useState('');
  const [slogon, setSlogon] = useState('');
  const [price, setPrice] = useState(0);
  const [webSite, setWebSite] = useState('');
  const [descriptionPlat, setDescriptionPlat] = useState('');
  const [platName, setPlatName] = useState('');
  const [address, setAddress] = useState('');


  const [nbrFourchettes, setNbrFourchettes] = useState(1);
  const [restaurantType, setRestaurantType] = useState([]);
  const [restaurantSpecialty, setRestaurantSpecialty] = useState([]);

  
  const [description, setDescription] = useState('');
  const [namee, setNamee] = useState('');
  const [names, setNames] = useState('');


  const [imagesPlat, setImagesPlat] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const [imagesMenu, setImagesMenu] = useState([]);
  const [imagesMenuPreview, setImagesMenuPreview] = useState([]);

  const [dayoff, setDayOff] = React.useState("");


  const [openingTime, setOpeningTime] = React.useState(null);
  const [closingTime, setClosingTime] = React.useState(null);

    const history = useHistory();
    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, success } = useSelector(state => state.newRestaurant);
    
  const handleChange = (event) => {
   setRestaurantType(event.target.value);
  };
  const handleChanging = (event) => {
    setRestaurantSpecialty(event.target.value);
   };


   const [checked, setChecked] = useState(false);
   const [checkedd, setCheckedd] = useState(false);
   const [checkeddd, setCheckeddd] = useState(false);
   const [check, setCheck] = useState(false);



   const Changing = () => {
    setCheckedd(true);
    setChecked(false);
    setCheckeddd(false);
    setCheck(false);


};

const Changin = () => {
  setCheckedd(false);
  setChecked(false);
  setCheck(false);
  setCheckeddd(true);

};

   const OnChanging = () => {
    setChecked(true);
    setCheck(false);
    setCheckedd(false);
    setCheckeddd(false);

};
const OnChangi = () => {
  setChecked(false);
  setCheck(true);
  setCheckedd(false);
  setCheckeddd(false);

};
const OnChangin = () => {
  setChecked(false);
  setCheck(false);
  setCheckedd(false);
  setCheckeddd(false);


};

      
  const onChange = e => {

    const files = Array.from(e.target.files)

    setImagesPreview([]);
    setImagesPlat([])

    files.forEach(file => {
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setImagesPreview(oldArray => [...oldArray, reader.result])
                setImagesPlat(oldArray => [...oldArray, reader.result])
            }
        }

        reader.readAsDataURL(file)
    })
    setNamee(e.target.files[0]);
}

const Change = e => {

  const files = Array.from(e.target.files)

  setImagesMenuPreview([]);
  setImagesMenu([])

  files.forEach(file => {
      const reader = new FileReader();

      reader.onload = () => {
          if (reader.readyState === 2) {
            setImagesMenuPreview(oldArrayy => [...oldArrayy, reader.result])
              setImagesMenu(oldArrayy => [...oldArrayy, reader.result])
          }
      }

      reader.readAsDataURL(file)
  })
  setNames(e.target.files[0]);
}

useEffect(() => {


  if (error) {
      alert.error(error);
      dispatch(clearErrors())
  }

  if (success) {  
    
      history.push('/allrestaurants')
      alert.success('Restaurant created successfully');
      dispatch({ type: NEW_RESTAURANT_RESET })
  }

}, [dispatch, alert, error, success, history])


const submitHandler = (e) => {
  

  const formData = new FormData();
  formData.set('restaurantType', restaurantType);
  formData.set('restaurantSpecialty', restaurantSpecialty);
  formData.set('restaurantName', restaurantName);
  formData.set('platName', platName);
  formData.set('descriptionPlat', descriptionPlat);
  formData.set('price', price);
  imagesPlat.forEach(imagesPlat => {
    formData.append('imagesPlat', imagesPlat)
})
imagesMenu.forEach(imagesMenu => {
  formData.append('imagesMenu', imagesMenu)
})
  formData.set('slogon', slogon);
  formData.set('webSite', webSite);
  formData.set('address', address);


  formData.set('dayoff', dayoff);
  formData.set('openingTime', openingTime);
  formData.set('closingTime', closingTime);


  formData.set('nbrFourchettes', nbrFourchettes);
  formData.set('description', description);




  dispatch(newRestaurant(formData))
}

const classes = useStyles();
  return (
        <React.Fragment>
        <CssBaseline />
        <section className="hero is-fullheight restaurant" >
        <div className={classes.root}>
        <Container component="main">
        <Grid  style={{textAlign: "left" }}>

      <Typography     
      variant="h6"
      gutterBottom
      style={{
        fontWeight:700,
        fontSize:"42px",
        lineHeight:'42px',
     
        color:"white"
     }}>
    CREATE A Dish
      </Typography>
      <Grid container  component="form" onSubmit={handleSubmit(submitHandler)}   noValidate  spacing={3}>

          <Grid item xs={12} md={4}> 
      <FormControl fullWidth>
      <Typography  style={{ color:"white", textAlign: "left", }}>Type of restaurant</Typography> 
        <Select
        {...register("restype", { required: "Type of restaurant is required",
      })}
          displayEmpty
          style={{ textAlign: "left", backgroundColor:"white", height:"35px"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={restaurantType}
          label="Type Restaurant"
          onChange={handleChange}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Type Restaurant</em>;
            }
            return selected;
          }}
        >
          <MenuItem disabled value="">
            <em>Type Restaurant</em>
          </MenuItem>
          <MenuItem onClick={OnChanging} value={"Theme Restaurant"}>Theme Restaurant</MenuItem>
          <MenuItem onClick={Changing} value={"Fast Food"}>Fast Food</MenuItem>
          <MenuItem onClick={Changin} value={"Resto Bar"}>Resto Bar</MenuItem>
          <MenuItem onClick={OnChangin} value={"Bistros"}>Bistros</MenuItem>
          <MenuItem onClick={OnChangin} value={"Roadside Restaurants"}>Roadside Restaurants</MenuItem>
          <MenuItem onClick={OnChangi}  value={"Breweries"}>Breweries</MenuItem>
          <MenuItem onClick={Changin} value={"Gourmet Restaurants"}>Gourmet Restaurants</MenuItem>
        </Select>
      </FormControl>
      <br/>
      {!!errors?.restype && <span className="text-sm text-red-500">
                                        {restypeValidation}</span>}
    </Grid>
    

    {
             checked ? (
              <Grid item xs={12} md={4}> 
              <FormControl fullWidth>
              <Typography  style={{ color:"white", textAlign: "left", }}>Restaurant Speciality</Typography> 
                <Select
                  displayEmpty
                  style={{ textAlign: "left", backgroundColor:"white", height:"35px"}}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={restaurantSpecialty}
                  label="Spécialité Restaurant"
                  onChange={handleChanging}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <em>Restaurant Speciality</em>;
                    }
                    return selected;
                  }}
                >
                  <MenuItem disabled value="">
                    <em>Restaurant Speciality</em>
                  </MenuItem>
                  <MenuItem value={"Kafteji"}>Kafteji</MenuItem>
                  <MenuItem value={"Chicken"}>Chicken</MenuItem>
                  <MenuItem value={"Grill"}>Grill</MenuItem>
                  <MenuItem value={"Fish"}>Fish</MenuItem>
                  <MenuItem value={"Pizza"}>Pizza</MenuItem>
                  <MenuItem value={"Vegan"}>Vegan</MenuItem>
                  <MenuItem value={"Chawarma"}>Chawarma</MenuItem>
                  <MenuItem value={"Ayari"}>Ayari</MenuItem>
                  <MenuItem value={"Leblebi"}>Leblebi</MenuItem>
                </Select>
              </FormControl>
            </Grid>
             ) : (<div></div>)
            }

{
             checkedd ? (
              <Grid item xs={12} md={4}> 
              <FormControl fullWidth>
              <Typography  style={{ color:"white", textAlign: "left", }}>Restaurant Speciality</Typography> 
                <Select
                  displayEmpty
                  style={{ textAlign: "left", backgroundColor:"white", height:"35px"}}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={restaurantSpecialty}
                  label="Spécialité Restaurant"
                  onChange={handleChanging} 
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <em>Restaurant Speciality</em>;
                    }
                    return selected;
                  }}
                >
                  <MenuItem disabled value="">
                    <em>Restaurant Speciality</em>
                  </MenuItem>
                  <MenuItem value={"Hamburger"}>Hamburger</MenuItem>
                  <MenuItem value={"Sandwich"}>Sandwich</MenuItem>
                  <MenuItem value={"Tacos"}>Tacos</MenuItem>
                  <MenuItem value={"Poissons"}>Burrito</MenuItem>
                  <MenuItem value={"Fried Chicken"}>Fried Chicken</MenuItem>
                  <MenuItem value={"Noddle"}>Noddle</MenuItem>
                  <MenuItem value={"Chawarma"}>Chawarma</MenuItem>
                  <MenuItem value={"Sausage"}>Sausage</MenuItem>
                  <MenuItem value={"Pizza"}>Pizza</MenuItem>
                </Select>
              </FormControl>
            </Grid>
             ) : (<div></div>)
            }
            {
             checkeddd ? (
              <Grid item xs={12} md={4}> 
              <FormControl fullWidth>
              <Typography  style={{ color:"white", textAlign: "left", }}>Restaurant Speciality</Typography> 
                <Select
                  displayEmpty
                  style={{ textAlign: "left", backgroundColor:"white", height:"35px"}}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={restaurantSpecialty}
                  label="Spécialité Restaurant"
                  onChange={handleChanging}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <em>Restaurant Speciality</em>;
                    }
                    return selected;
                  }}
                >
                  <MenuItem disabled value="">
                    <em>Restaurant Speciality</em>
                  </MenuItem>
                  <MenuItem value={"Requirements"}>Requirements</MenuItem>
                  <MenuItem value={"Kitchen"}>Kitchen</MenuItem>
                  <MenuItem value={"Menu"}>Menu</MenuItem>
                </Select>
              </FormControl>
            </Grid>
             ) : (<div></div>)
            }
            {
             check ? (
              <Grid item xs={12} md={4}> 
              <FormControl fullWidth>
              <Typography  style={{ color:"white", textAlign: "left", }}>Restaurant Speciality</Typography>
                <Select
                  displayEmpty
                  style={{ textAlign: "left", backgroundColor:"white", height:"35px"}}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={restaurantSpecialty}
                  label="Spécialité Restaurant"
                  onChange={handleChanging}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <em>Restaurant Speciality</em>;
                    }
                    return selected;
                  }}
                >
                  <MenuItem disabled value="">
                    <em>Restaurant Speciality</em>
                  </MenuItem>
                  <MenuItem value={"With alcoholic beverages"}>With alcoholic beverages</MenuItem>
                  <MenuItem value={"Without alcoholic beverages"}>Without alcoholic beverages</MenuItem>

                </Select>
              </FormControl>
            </Grid>
             ) : (<div></div>)
            }

	  <Grid item xs={12} md={4}>
    <Typography  style={{ color:"white", textAlign: "left", }}>Restaurant Name:</Typography> 
	  <TextField
              required
              id="restaurantName"
              name="restaurantName"
              placeholder='Restaurant Name'
              fullWidth
              autoFocus
              variant="standard"
              {...register("restaurantName", {required: "Restaurant name is required"})}
              error={!!errors?.restaurantName}
              helperText={restaurantNameValidation}

              value={restaurantName}
              onChange={(e) => setRestaurantName(e.target.value)}
              style={{ textAlign: "left", backgroundColor:"white", borderRadius:'6.1568px' }}
            />
          </Grid>
 

      <Grid item xs={12} md={4}>
      <Typography  style={{ color:"white", textAlign: "left", }}>Dish Name:</Typography> 
	  <TextField
              required
              id="platName"
              name="platName"
              placeholder='Dish Name'
              fullWidth
              autoFocus
              variant="standard"
              {...register("platName", {required: "Dish name is required"})}
              error={!!errors?.platName}
              helperText={platNameValidation}

              value={platName}
              onChange={(e) => setPlatName(e.target.value)}
              style={{ textAlign: "left", backgroundColor:"white", borderRadius:'6.1568px' }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
          <Typography  style={{ color:"white", textAlign: "left" }}>Dish Photos :</Typography> 
           <div className='form-group'>
           <div>
                <label className="file-label">
                    <input className="file-input" type="file" style={{ color:"white" }}
                    {...register("images1", {required: "Dish photos is required"})}
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
                 </div>
                 {namee === "" ? (
										<>
									 {!!errors?.images1 && <span className="text-sm text-red-500">
                                        {images1Validation}</span>}
										</>
									):(<></>)
										}
              </Grid>
  <Grid item xs={12} md={4}>
    <Typography  style={{ color:"white", textAlign: "left" }}>Menu:</Typography> 
           <div className='form-group'>
           <div>
                <label className="file-label">
                    <input className="file-input" type="file" style={{ color:"white" }}
                    {...register("images2", {required: "Menu photos is required"})}
                  name='patente'
                  accept='image/*,application/pdf' 
                  onChange={Change}
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
                    {names.name}
                    </span>
                </label>

      {imagesMenuPreview.map(imgs => (
        <img src={imgs} key={imgs} alt="Images Menu Preview" className="mt-3 mr-2" width="55" height="52" />
         ))}
  </div>
         </div>
         {names === "" ? (
										<>
									 {!!errors?.images2 && <span className="text-sm text-red-500">
                                        {images2Validation}</span>}
										</>
									):(<></>)
										}
  </Grid>
          <Grid item xs={12} md={4}>
      <Typography  style={{ color:"white", textAlign: "left" }}>Dish Description:</Typography> 
       <TextareaAutosize
      {...register("description", {required: "Dish description is required"})}
      aria-label="maximum height"
      placeholder="Dish Description"
      style={{ width: "100%", height:"60%", textAlign: "left", backgroundColor:"white", borderRadius:'6.1568px' }}
      value={descriptionPlat}
      onChange={(e) => setDescriptionPlat(e.target.value)}
    />
    <br/>
{!!errors?.description && <span className="text-sm text-red-500">
                                        {descriptionValidation}</span>}
  </Grid>

  <Grid item xs={12} md={4}>
      <Typography  style={{ color:"white", textAlign: "left" }}>Price (DTN):</Typography> 
	  <TextField
              required
              id="price"
              name="price"
              placeholder='Price'
              type='number'
              fullWidth
              variant="standard"
              {...register("price", {required: "Price is required, Only numbers is allowed",
              valueAsNumber: true,
              pattern:{
                   value: /^(0|[1-9]\d*)(\.\d+)?$/,
                  },
            })}
              error={!!errors?.price}
              helperText={priceValidation}

              value={price}
              onChange={(e) => setPrice(e.target.value)}
              style={{textAlign: "left", backgroundColor:"white", borderRadius:'6.1568px' }}

            />
          </Grid>

    <Grid item xs={12} md={4}>
    <Typography  style={{ color:"white", textAlign: "left" }}>Slogon:</Typography>
	  <TextField
              required
              id="slogon"
              name="slogon"
              placeholder='Restaurant’s Slogan'
              fullWidth
              variant="standard"
              value={slogon}
              onChange={(e) => setSlogon(e.target.value)}
              style={{textAlign: "left", backgroundColor:"white", borderRadius:'6.1568px' }}
            />
          </Grid>

       <Grid item xs={12} md={4}>
       <Typography  style={{ color:"white", textAlign: "left" }}>webSite:</Typography>
	  <TextField
              required
              id="site web"
              name="site web"
              placeholder='Link to your Website'
              fullWidth
              autoFocus
              variant="standard"
              value={webSite}
              onChange={(e) => setWebSite(e.target.value)}
              style={{textAlign: "left", backgroundColor:"white", borderRadius:'6.1568px' }}

            />
          </Grid>

          <Grid item xs={12} md={4}>
       <Typography  style={{ color:"white", textAlign: "left" }}>Address:</Typography>
	  <TextField
              required
              id="address"
              name="address"
              placeholder='Restaurant’s Address'
              fullWidth
              autoFocus
              variant="standard"
              {...register("address", { required: "Address is required",
            })}
              error={!!errors?.address}
              helperText={addressValidation}

              value={address}
              onChange={(e) => setAddress(e.target.value)}
              style={{textAlign: "left", backgroundColor:"white", borderRadius:'6.1568px' }}
            />
          </Grid>
          

          <Grid item xs={12} md={4}>
       <Typography  style={{ color:"white", textAlign: "left" }}>Days Off:</Typography>
      <Autocomplete
        style={{textAlign: "left", backgroundColor:"white", borderRadius:'6.1568px' }}
        multiple
        id="tags-standard"			
          onChange={(event, newValue) => {
            setDayOff(newValue.map((v) => v.title));
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
        </Grid>
        
 <Grid item xs={12} md={4}>
 <Typography  style={{ color:"white", textAlign: "left" }}>Open Hours:</Typography>


<div style={{ textAlign: "left", display:"flex", alignItems:'column'}}>
<LocalizationProvider  dateAdapter={AdapterDateFns}>
      <TimePicker
        value={openingTime}
        onChange={(newValue) => {
          setOpeningTime(newValue);
        }}
        renderInput={(params) => <TextField {...params}
        style={{backgroundColor:"white", borderRadius:'6.1568px' }}
        />}
      />
    </LocalizationProvider>

  <br/>
<LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        value={closingTime}
        onChange={(newValue) => {
          setClosingTime(newValue);
        }}
        renderInput={(params) => <TextField {...params} 
        style={{marginLeft:'10px', backgroundColor:"white", borderRadius:'6.1568px' }}
          />}
      />
    </LocalizationProvider>
    </div>

</Grid>
<br/>
<Grid item xs={12} md={4}>
<Typography  style={{ color:"white", textAlign: "left" }}>Number of Stars:</Typography>
<Rating
        defaultValue={1} max={3}
        name="customized-10" 
        value={nbrFourchettes}
        onChange={(event, newValue) => {
          setNbrFourchettes(newValue);
        }}
      />
          </Grid>
<Grid item xs={12} >
<Typography  style={{ color:"white", textAlign: "left" }}>Restaurant Rules:</Typography>
       <TextareaAutosize
      aria-label="maximum height"
      placeholder="Restaurant Rules..."
      style={{ width: "65%", height:"100%", borderRadius:'8px 8px 8px 8px'}}
      {...register("rules", {required: "Restaurant rules is required"})}

      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />
        <br/>
{!!errors?.rules && <span className="text-sm text-red-500">
                                        {rulesValidation}</span>}
</Grid>

<Grid item xs={12} style={{textAlign:"right"}}>
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

export default NewRestaurant


const days = [
  { title: 'Monday' },
  { title: 'Tuesday' },
  { title: 'Wednesday' },
  { title: 'Thursday' },
  { title: 'Friday' },
  { title: 'Saturday' },
  { title: 'Sunday' },

];