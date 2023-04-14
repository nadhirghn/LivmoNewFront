import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

//
import {
  MyDivider,
  MyForm,
  SubGrid,
  MyInput,
  MyTextarea,
  MyStack,
  MyTextField,
  MyButton,
} from "../lodging/CustomStyled";
import Layout from '../shared/layout'
import ImageAdder from "./ImageAdder";
import MetaData from "../shared/metaData"



//
import TextField from '@mui/material/TextField';
import { Grid, Rating } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import { TimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";


//
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updateRestaurant, getSingleRestaurant, clearErrors } from '../../actions/restaurantActions'
import { UPDATE_RESTAURANT_RESET } from '../../constants/restaurantConstants'








function DishForm({match}) {
  const [rules, setRules] = useState("");
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [resto, setResto] = useState("");
  const [recipe, setRecipe] = useState("");
  const [price, setPrice] = useState();
  const [slogan, setSlogan] = useState("");
  const [nbrFourchettes, setNbrFourchettes] = useState();
  const [time, setTime] = useState(new Date());
  const [startTime, setStartTime] = useState();

  // const handleTimeChange = (newValue) => {
  //   setTime(newValue);
  // };
  //multiple selection for days off
  const days = [
    { title: 'Monday' },
    { title: 'Tuesday' },
    { title: 'Wednesday' },
    { title: 'Thursday' },
    { title: 'Friday' },
    { title: 'Saturday' },
    { title: 'Sunday' },
  
  ];
 
  const [offDays, setOffDays] = useState("");

  //for time range selection
  const [endTime, setEndTime] = useState();
  const handleStartTimeChange = (newValue) => {
    setStartTime(newValue);
  };
  const handleEndTimeChange = (newValue) => {
    setEndTime(newValue);
  };

  //yup
  const schema = yup
    .object({
      recipe: yup.string().required(),
      resto: yup.string().required().min(5).max(20),
      website: yup.string().required().url(),
      address: yup.string().required(),
      slogan: yup.string(),
      description: yup.string().required(),
      rules: yup.string().required(),
      price: yup.number().positive().integer().required().min(2).max(20),
      rating: yup.number().required(),
      time: yup.date().required(),
      offDays: yup.array().of(yup.string()).required().min(1),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      recipe,
      website,
      address,
      resto,
      price,
      slogan,
      description,
      rules,
      time,
      offDays,
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    console.log(offDays);
  };

  //   const [value, setValue] = useState(Date)(new Date("2014-08-18T21:11:54"));

  //   const handleChange = (newValue: Date) => {
  //     setValue(newValue);
  //   };


  //
  const alert = useAlert();
  const dispatch = useDispatch();

  const { error, restaurant } = useSelector(state => state.restaurantDetails)
  const { loading, error: updateError, isUpdated } = useSelector(state => state.restaurant);

  const restaurantId = match.params.id;


  useEffect(() => {
    if (restaurant && restaurant._id !== restaurantId) {
        dispatch(getSingleRestaurant(restaurantId));
    } else {
        setResto(restaurant.restaurantName);
        setAddress(restaurant.address);
        setWebsite(restaurant.webSite);
        setPrice(restaurant.price);
        setSlogan(restaurant.slogon);
        setDescription(restaurant.descriptionPlat);
        setRules(restaurant.description);
        setNbrFourchettes(restaurant.nbrFourchettes);
        setRecipe(restaurant.platName);
        setStartTime(restaurant.openingTime);
        setEndTime(restaurant.closingTime);
        setOffDays(restaurant.dayoff)

    }

    if (error) {
        alert.error(error);
        dispatch(clearErrors())
    }

    if (updateError) {
        alert.error(updateError);
        dispatch(clearErrors())
    }


    if (isUpdated) {
       // history.push('/admin/products');
        alert.success('Food updated successfully');
        dispatch({ type: UPDATE_RESTAURANT_RESET })
    }

}, [dispatch, alert, error, isUpdated, updateError, restaurant, restaurantId])

const submitHandler = (e) => {
 
  const formData = new FormData();
  formData.set('platName', );
  formData.set('restaurantName', );
  formData.set('descriptionPlat', );
  formData.set('price', );
  formData.set('slogon', );
  formData.set('webSite', );
  formData.set('address', );
  formData.set('dayoff', );
  formData.set('openingTime', );
  formData.set('closingTime', );
  formData.set('nbrFourchettes', );
  formData.set('description', );

  /*images.forEach(image => {
      formData.append('images', image)
  })*/
   /*images.forEach(image => {
      formData.append('images', image)
  })*/

  dispatch(updateRestaurant(restaurant._id, formData))
}

  return (
    <React.Fragment>
      <MetaData title={'Update Food'} />
        <Layout>
            
    <div style={{marginTop:"4rem"}}>
    <section class="hero is-primary editDish">
  <div class="hero-body">
  <br/>
    <p class="title" style={{textAlign:"center"}}>
   EDIT DISH 
    </p>
    <br/>
  </div>
  <br/>
</section>
<br/>
        
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid container spacing={4}>
          <SubGrid item sm={3} xs={12}>
            <h2 style={{fontWeight: "700", fontSize: "32px", lineHeight: "39px", color:"#E22357"}}>Dishs:</h2>
            <br/>
            <img
              style={{marginLeft:"1.2rem"}}
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </SubGrid>
          <SubGrid item sm={9} xs={12}>
            <MyInput
              {...register("recipe")}
              error={errors.recipe}
              style={{ fontSize: "14pt", fontWeight: "bolder" }}
              type="text"
              value={recipe}
              onChange={(e) => {
                setRecipe(e.target.value);
              }}
            />
            {<p>{errors.recipe?.message}</p>}
            <MyDivider />
            <MyForm onSubmit={handleSubmit(onSubmit)} action="">
              <MyStack>
                <label htmlFor="resto">Restaurant Name :</label>
                <MyInput
                  error={errors.resto}
                  {...register("resto")}
                  id="resto"
                  value={resto}
                  onChange={(e) => {
                    setResto(e.target.value);
                  }}
                  type="text"
                />
                {<p>{errors.resto?.message}</p>}
                <label htmlFor="price">Price :</label>
                <MyInput
                  {...register("price")}
                  id="price"
                  error={errors.price}
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  type="Number"
                />
                {<p>{errors.price?.message}</p>}
                <label htmlFor="address">Address :</label>
                <MyInput
                  {...register("address")}
                  id="address"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  type="text"
                />
                <React.Fragment>
                  <label htmlFor="Open Hours">Open Hours :</label>
                  <TimeRangePicker
                    startTime={startTime}
                    endTime={endTime}
                    handleEndTimeChange={handleEndTimeChange}
                    handleStartTimeChange={handleStartTimeChange}
                  />

                  <label htmlFor="Off Days">Off Days :</label>
                  {/* <DesktopDatePicker
                    error={errors.time}
                    {...register("time")}
                    value={time}
                    onChange={handleTimeChange}
                    renderInput={(params) => <MyTextField {...params} />}
                  /> */}
                  {/* <Controller
                    name="offDays"
                    control={control}
                    render={({ field }) => (
                      <MySelect
                        {...field}
                        id="offDays"
                        multiple
                        value={offDays}
                        onChange={(e) => {
                          setOffDays(e.target.value);
                          console.log(offDays);
                        }}
                      >
                        {days.map((day) => (
                          <MenuItem key={day} value={day}>
                            {day}
                          </MenuItem>
                        ))}
                      </MySelect>
                    )}
                  /> */}
                  <Autocomplete
        multiple
        id="tags-standard"	
          onChange={(event, newValue) => {
            setOffDays(newValue.map((v) => v.title));
          }}
        options={days}
        getOptionLabel={(option) => option.title}
        defaultValue={[days[6]]}
        renderInput={(params) => (
          <TextField
        style={{width:"70%"}}

            {...params}
            variant="standard"
            placeholder="Days Off"
          />
        )}
        
      />
                

                  {/* <Controller
                    name="offDays"
                    control={control}
                    render={({ field: { ref, ...field } }) => (
                      <MultiSelect
                        {...field}
                        options={options}
                        value={selectedOffDays}
                        onChange={setSelectedOffDays}
                        labelledBy="offDays"
                      />
                    )}
                  /> */}

                  {<p>{errors.offDays?.message}</p>}
                </React.Fragment>
                <label htmlFor="stars">Restaurant Rate:</label>
                <Rating
                        defaultValue={3} max={3}
                        name="customized-10" 
                        value={nbrFourchettes}
                        onChange={(event, newValue) => {
                          setNbrFourchettes(newValue);
                        }}
                      />
              </MyStack>
              <MyStack style={{marginRight:'2rem'}}>
                <label htmlFor="website">Website :</label>
                <MyInput
                  {...register("website")}
                  error={errors.website}
                  id="website"
                  value={website}
                  onChange={(e) => {
                    setWebsite(e.target.value);
                  }}
                  type="text"
                />
                {<p>{errors.website?.message}</p>}
                <label htmlFor="slogan">Slogan :</label>
                <MyInput
                  {...register("slogan")}
                  error={errors.slogan}
                  id="slogan"
                  value={slogan}
                  onChange={(e) => {
                    setSlogan(e.target.value);
                  }}
                  type="text"
                />
                {<p>{errors.slogan?.message}</p>}
                <label htmlFor="description">Dish Description :</label>
                <MyTextarea
                  error={errors.description}
                  {...register("description")}
                  id="description"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  rows={7}
                />
                {<p>{errors.description?.message}</p>}
                <label htmlFor="rules">Restaurant Rules :</label>
                <MyTextarea
                  error={errors.rules}
                  {...register("rules")}
                  id="rules"
                  value={rules}
                  onChange={(e) => {
                    setRules(e.target.value);
                  }}
                  rows={7}
                />
                {<p>{errors.rules?.message}</p>}
              </MyStack>
            </MyForm>
          </SubGrid>
          <SubGrid item xs={12}></SubGrid>
        </Grid>
        <ImageAdder text="DISH PHOTOS :" />
        <br/>
        <ImageAdder text="RESTAURANT PHOTOS :" />

      </LocalizationProvider>
      <br/>

      <div style={{textAlign: "center"}}>
      <span>
      <Link to="/merchant/me"><MyButton>Cancel</MyButton></Link>
          <MyButton confirm>Confirm</MyButton>
        </span>
        </div>
      
    </div>
    
    </Layout>
 </React.Fragment>
  );
}

export default DishForm;

const TimeRangePicker = ({
  startTime,
  endTime,
  handleEndTimeChange,
  handleStartTimeChange,
}) => {
  return (
    <div>
      <TimePicker
        label="from"
        value={startTime}
        onChange={handleStartTimeChange}
        renderInput={(params) => <MyTextField {...params} />}
      />
      <TimePicker
        label="to"
        value={endTime}
        onChange={handleEndTimeChange}
        renderInput={(params) => <MyTextField {...params} />}
      />
    </div>
  
  );
};
