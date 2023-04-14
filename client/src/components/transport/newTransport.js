import React, { useState, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import {  Link, useHistory } from 'react-router-dom';
import {  useForm } from "react-hook-form";

//MUI IMPORTS
import { Container } from '@mui/material';
import Radio from '@mui/material/Radio';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { makeStyles } from "@material-ui/core/styles";
import TextareaAutosize from '@mui/material/TextareaAutosize';

//OTHER IMPORTS
import { newTransport, clearErrors } from '../../actions/transportActions'
import { NEW_TRANSPORT_RESET } from '../../constants/transportConstants'
import './transport.scss'







const useStyles = makeStyles((theme) => ({

  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: theme.spacing(500),
      height: theme.spacing(0)
    }
  },

}));


const NewTransport= () => {

  //Validation

  const { register , handleSubmit, formState: {errors} } = useForm();
  
  const governorateValidation = errors?.governorate ? errors.governorate.message : null;
  //const typeTransportValidation = errors?.typeTransport ? errors.typeTransport.message : null;
  const activityValidation = errors?.activity ? errors.activity.message : null;
  const fueltypeValidation = errors?.fueltype ? errors.fueltype.message : null;
  const pricepernightValidation = errors?.pricepernight ? errors.pricepernight.message : null;
  const nameValidation = errors?.name ? errors.name.message : null;
  const rulesValidation = errors?.rules ? errors.rules.message : null;
  const nbrePlaceValidation = errors?.nbrePlace ? errors.nbrePlace.message : null;
  const imagesValidation = errors?.images ? errors.images.message : null;



  const theme = useTheme();

  function getStyles(name, governorat) {
    return {
      fontWeight:
      governorat.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };


  const [governorate, setGovernourat] = useState('');

  const [typeTransport, setTypeTransport] = useState("");
  const [activity, setActivity] = useState("");


  const [fueltype, setFuelType] = useState("");
  const [pricepernight, setPricepernight] = useState("");
  const [name, setName] = useState("");
  const [rules, setRules] = useState("");





  const [nbrePlace, setNbrePlace] = useState(0);








  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

 const history = useHistory();




    const alert = useAlert();
    const dispatch = useDispatch();

    const {  error, success } = useSelector(state => state.newTransport);
    const [namee, setNamee] = useState('');
    
    const [checked, setChecked] = useState(false)
    const [checke, setChecke] = useState(false)


    const OnChangee = () => {
      setChecked(true);
      setChecke(false);

  };

  const OnChanging = () => {
    setChecked(false);
    setChecke(true);



};





   const onRadiochange = e => {
    setTypeTransport(e.target.value)
  };
  const Radiochange = e => {
    setActivity(e.target.value)
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


useEffect(() => {


  if (error) {
      alert.error(error);
      dispatch(clearErrors())
  }

  if (success) {
    history.push('/alltransports')
      alert.success('Transort created successfully');
      dispatch({ type: NEW_TRANSPORT_RESET })
  }

}, [dispatch, alert, error, success,history])


const submitHandler = (e) => {


  const formData = new FormData();
  formData.set('typeTransport', typeTransport);
  formData.set('activity', activity);
  formData.set('name', name);
  formData.set('pricepernight', pricepernight);
  formData.set('fueltype', fueltype);
  formData.set('rules', rules);
  formData.set('governorate', governorate);
  formData.set('nbrePlace', nbrePlace);
  images.forEach(images => {
  formData.append('images', images)

})

  dispatch(newTransport(formData))
}

const classes = useStyles();
const [selected, setSelected] = useState(false);
const [select, setSelect] = useState(false);


const onSelected = () =>{
  setSelected(true);
  setSelect(false);
}
const onNSelected = () =>{
  setSelected(false);
  setSelect(false);
}
const oSelected = () =>{
  setSelected(false);
  setSelect(true);
}
  return (
    <React.Fragment>
        <CssBaseline />
        <section className="hero is-fullheight car">
        <div className={classes.root}>
        <Container component="main" >
        <Grid  style={{textAlign: "left" }}>

      <Typography 
      variant="h6"
      gutterBottom
      style={{
        fontWeight:700,
        fontSize:"42px",
        lineHeight:'42px',
        marginTop:'4rem',
        color:"white"
     }}>
    CREATE A TRANSPORT
      </Typography>
      <br />
          <br/>
      <Grid container component="form" onSubmit={handleSubmit(submitHandler)}   noValidate spacing={4} >
      <Grid item xs={12} md={4}> 
      <Typography  style={{ color:"white", textAlign: "left", }}>Activity :</Typography> 
      <FormControl fullWidth>
        <Select
            style={{ textAlign: "left", backgroundColor:"white", height:"35px"}}
            {...register("activity", { required: "Activity is required",
          })}
          value={activity}
          onChange={Radiochange}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
      
        >
          <MenuItem onClick={onNSelected} value={"Regular passenger transport"}>Regular passenger transport</MenuItem>
          <MenuItem onClick={onNSelected} value={"Private transport"}>Private transport</MenuItem>
          <MenuItem onClick={oSelected} selected={select} value={"Public transport"}>Public transport (“louage”, taxi...)</MenuItem>
          <MenuItem onClick={onNSelected} value={"Urban and suburban transport"}>Urban and suburban transport</MenuItem>
          <MenuItem onClick={onNSelected} value={"Auxiliary transport service"}>Auxiliary transport service</MenuItem>

          <MenuItem onClick={onSelected} selected={selected} value="Other">Other</MenuItem>

        </Select>
      </FormControl>
      <br/>
      {!!errors?.activity && <span className="text-sm text-red-500">
                                        {activityValidation}</span>}
      </Grid>
      { selected ? (
         <Grid item xs={12} md={4}>
         <Typography  style={{ color:"white", textAlign: "left", }}>Other Activity :</Typography> 
	  <TextField
              required
              id="other"
              name="other"
              placeholder="Other"
              fullWidth
              variant="standard"
              {...register("activity", { required: "Activity is required",
            })}
              error={!!errors?.activity}
              helperText={activityValidation}
              value={activity}
              onChange={Radiochange}
              style={{ textAlign: "left", backgroundColor:"white", borderRadius:'8px 8px 8px 8px' }}
            />
         </Grid>

    ):(
      <div></div>
    )
    }
    {/*
    { select ? (
      <Grid item xs={12} md={4}> 
        <FormControl>
        <Typography  style={{ color:"white", textAlign: "left", }}>Regular or non-regular transport?</Typography> 
      <RadioGroup
        row
        style={{ textAlign: "left", color:"white"}}
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
	    	onChange={onRadiochange}
      >
        <FormControlLabel type="checkbox"
          onChange={OnChanging}
          checked={checke} 
          value="Regular"  
          control={<Radio style={{color:"#E42651"}} />} 
          label="Regular" />
        <FormControlLabel type="checkbox"  onChange={OnChangee} checked={checked} value="Non Regular" control={<Radio style={{color:"#E42651"}}/>} label="Non Regular" />
      </RadioGroup>
    </FormControl>
          </Grid>

):(
  <div></div>
)
} */}
      

                 <Grid item xs={12} md={4}>
    <Typography  style={{ color:"white", textAlign: "left", }}>Vehicle Name:</Typography> 
	  <TextField
              required
              id="name"
              name="name"
              placeholder="Vehicle Name"
              fullWidth
              variant="standard"
              {...register("name", {required: "Name is required"})}
              error={!!errors?.name}
              helperText={nameValidation}
    
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ textAlign: "left", backgroundColor:"white", borderRadius:'6.1568px' }}
            />
          </Grid>
          <Grid item xs={12} md={4}> 
             <Typography  style={{ color:"white", textAlign: "left", }}>Governorate :</Typography> 
          <FormControl fullWidth>
        <Select				
          displayEmpty
          style={{ textAlign: "left", backgroundColor:"white", height:"35px"}}
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={governorate}
          onChange={(e) => setGovernourat(e.target.value)}
          input={<OutlinedInput label="Governorate" />}
          MenuProps={MenuProps}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Governorate</em>;
            }
            return selected;
          }}
        >
          <MenuItem disabled value="">
            <em>Governorate</em>
          </MenuItem>
          {countries.map((name) => (
            <MenuItem
            {...register("governorate", { required: "Governorate is required",
          })}

              key={name}
              value={name}
              style={getStyles(name, governorate, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <br/>
      {!!errors?.governorate && <span className="text-sm text-red-500">
                                        {governorateValidation}</span>}
 </Grid>
          <Grid item xs={12} md={4}>
    <Typography  style={{ color:"white", textAlign: "left", }}>Price Per Day: (DTN)</Typography> 
	  <TextField
              required
              id="price"
              name="price"
              placeholder="Price Per Day"
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
              style={{ textAlign: "left", backgroundColor:"white",
               borderRadius:'6.1568px'  }}
            />
          </Grid>
          <Grid item xs={12} md={4}> 
          <Typography  style={{ color:"white", textAlign: "left" }}>Vehicle Photos :</Typography> 
           <div className='form-group'>
           <div>
                <label className="file-label">
                    <input className="file-input" type="file" style={{ color:"white" }}
                  {...register("images", {required: "Vehicle photos is required"})}
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
									 {!!errors?.images && <span className="text-sm text-red-500">
                                        {imagesValidation}</span>}
										</>
									):(<></>)
										}
                          </Grid>
                         

      <Grid item xs={12} md={4}>
    <Typography  style={{ color:"white", textAlign: "left", }}>Number of Seats :</Typography> 
          <TextField
            required
            id="nbrePlace"
			      name="nbrePlace"
            placeholder='Number of Seats'
            fullWidth
            type="number"
            variant="standard"
            {...register("nbrePlace", {required: "Number of Seats is required, Only numbers is allowed",
            valueAsNumber: true,
            pattern:{
                 value: /^(0|[1-9]\d*)(\.\d+)?$/,
                },
          })}
            error={!!errors?.nbrePlace}
            helperText={nbrePlaceValidation}

		      	value={nbrePlace}
            onChange={(e) => setNbrePlace(e.target.value)}
            style={{ textAlign: "left", backgroundColor:"white", borderRadius:'6.1568px' }}
          />
        </Grid>
        <Grid item xs={12} md={4}> 
      <Typography  style={{ color:"white", textAlign: "left", }}>Fuel Type :</Typography> 
      <FormControl fullWidth>
      <Select				

          displayEmpty
          style={{ textAlign: "left", backgroundColor:"white", height:"35px"}}
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={fueltype}
          onChange={(e) => setFuelType(e.target.value)}
          input={<OutlinedInput label="Governorate" />}
          MenuProps={MenuProps}
          renderValue={(selected) => {
            
            if (selected.length === 0) {
              return <em>Fuel Type</em>;
            }
            return selected;
          }}
        >
          <MenuItem disabled value="">
            <em>Fuel Type</em>
          </MenuItem>
          {fuel.map((name) => (
            <MenuItem
            {...register("fueltype", { required: "Fuel Type is required",
          })}
              key={name}
              value={name}
              style={getStyles(name, governorate, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <br/>
{!!errors?.fueltype && <span className="text-sm text-red-500">
                                        {fueltypeValidation}</span>}
      </Grid>
      <Grid item xs={12} >
            <Typography  style={{ color:"white", textAlign: "left" }}> Vehicle Rules</Typography> 
       <TextareaAutosize
      aria-label="maximum height"
      placeholder="Vehicle rules..."
      style={{ width: "65%", height:"100%", borderRadius:'8px 8px 8px 8px'}}
      {...register("rules", {required: "Rules is required"})}

      value={rules}
      onChange={(e) => setRules(e.target.value)}
    />
<br/>
{!!errors?.rules && <span className="text-sm text-red-500">
                                        {rulesValidation}</span>}
</Grid>


      <Grid item xs={12} style={{textAlign:"right"}}>
        <br/>
        <br/>
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

export default NewTransport

const countries = [
  "Ariana",
	"Béja",
	"Ben Arous",
	"Bizerte",
	"Gabès",
	"Gafsa",
	"Jendouba",
	"Kairouan",
	"Kasserine",
	"Kébili",
	"Le Kef",
	"Mahdia",
	"La Manouba",
	"Médenine",
	"Monastir",
	"Nabeul",
    "Sfax",
	"Sidi Bouzid",
	"Siliana",
	"Sousse",
	"Tataouine",
	"Tozeur",
	"Tunis",
	"Zaghouan",
];
const fuel = [
  "Gasoline",
	"Diesel Fuel",
	"Bio-diesel",
	"Ethanol",

];