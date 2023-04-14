import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

//
import ImageAdder from "./ImageAdder";
import {
  MyDivider,
  MyForm,
  SubGrid,
  MyInput,
  MyTextarea,
  MySelect,
  MyStack,
  MyButton,
} from "./CustomStyled";

//Mui Imports
import { Grid, MenuItem } from "@mui/material";


//
import Layout from "../shared/layout";
import MetaData from "../shared/metaData"

//
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updateLodging, getSingleLodging, clearErrors } from '../../actions/lodgingActions'
import { UPDATE_LODGING_RESET } from '../../constants/lodgingConstants'




function LogdingForm({match}) {
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState();


  //yup
  const schema = yup
    .object({
      name: yup.string().required(),
      category: yup.string().required(),
      type: yup.string().required().min(5).max(20),
      website: yup.string().required().url(),
      address: yup.string().required(),
      description: yup.string().required(),
      price: yup.number().positive().integer().required(),
      rating: yup.number().required().min(1).max(5),
    })
    .required();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name,
      category,
      website,
      address,
      type,
      price,
      description,
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  const types = ["House", "Apartment", "Hotel", "House hotel", "Residence", "Motel"];
  const categories = ["Whole house", "Private room", "Shared room"];


  //
  const alert = useAlert();
  const dispatch = useDispatch();

  const { error, lodging } = useSelector(state => state.lodgingDetails)
  const { loading, error: updateError, isUpdated } = useSelector(state => state.lodging);

  const lodgingId = match.params.id;


  useEffect(() => {
    if (lodging && lodging._id !== lodgingId) {
        dispatch(getSingleLodging(lodgingId));
    } else {
        setName(lodging.title);
        setPrice(lodging.pricepernight);
        setWebsite(lodging.website);
        setDescription(lodging.description);
        setAddress(lodging.address)
        setType(lodging.lodgingType)
        setCategory(lodging.lodgingCategory)
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
        alert.success('Lodging updated successfully');
        dispatch({ type: UPDATE_LODGING_RESET })
    }

}, [dispatch, alert, error, isUpdated, updateError, lodging, lodgingId])


const submitHandler = (e) => {
 
  const formData = new FormData();
  formData.set('lodgingCategory', category);
  formData.set('lodgingType', type );
  formData.set('title', name);
  formData.set('address', address);
  formData.set('pricepernight', price);
  formData.set('description', description);
  formData.set('website', website);


  /*images.forEach(image => {
      formData.append('images', image)
  })*/


  dispatch(updateLodging(lodging._id, formData))
}



  return (
    <React.Fragment>
      <MetaData title={'Update Lodging'} />
        <Layout>
    <div style={{marginTop:"4rem"}}>
        <section class="hero is-primary editHero">
  <div class="hero-body">
  <br/>
    <p class="title" style={{textAlign:"center"}}>
   EDIT LODGING 
    </p>
    <br/>
  </div>
  <br/>
</section>
<br/>
      <Grid container spacing={4}>
        <SubGrid item sm={3} xs={12}>
          <h2 style={{fontWeight: "700", fontSize: "32px", lineHeight: "39px", color:"#E22357"}}>Logdings:</h2>
          <br/>
          <img
          style={{marginLeft:"1.2rem"}}
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </SubGrid>
        <SubGrid item sm={9} xs={12}>
          <MyInput
            {...register("name")}
            name="name"
            style={{ fontSize: "14pt", fontWeight: "bolder" }}
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          {<p>{errors.name?.message}</p>}
          <MyDivider />
          <MyForm onSubmit={handleSubmit(onSubmit)} action="">
            <MyStack>
              <label htmlFor="category">Lodging Category:</label>
              <MySelect
                {...register("category")}
                id="category"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </MySelect>
              {<p>{errors.category?.message}</p>}

              <label htmlFor="price">Price per night:</label>
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
            </MyStack>
            <MyStack style={{marginRight:'2rem'}}>
              <label htmlFor="type">Lodgin type :</label>
              <MySelect
                {...register("type")}
                id="type"
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                  console.log(type);
                }}
              >
                {types.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </MySelect>
              {<p>{errors.type?.message}</p>}
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

              <label htmlFor="description">Description :</label>
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
            </MyStack>
          </MyForm>
        </SubGrid>
        <SubGrid item xs={12}></SubGrid>
      </Grid>
      <ImageAdder text="PHOTOS :" />
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

export default LogdingForm;
