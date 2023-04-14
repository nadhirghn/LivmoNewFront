import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import * as yup from "yup";

import MetaData from "../shared/metaData"
import Layout from "../shared/layout";


import { Grid, MenuItem } from "@mui/material";

import ImageAdder from "./ImageAdder";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  MyDivider,
  MyForm,
  SubGrid,
  MyInput,
  MyTextarea,
  MySelect,
  MyStack,
  MyButton,
} from "../lodging/CustomStyled";



//
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updateTransport, getSingleTransport, clearErrors } from '../../actions/transportActions'
import { UPDATE_TRANSPORT_RESET } from '../../constants/transportConstants'




function TransportForm({ match }) {
  const [rules, setRules] = useState("");
  const [seats, setSeats] = useState();
  const [governorate, setGovernorate] = useState("");
  const [regularity, setRegularity] = useState("");
  const [price, setPrice] = useState();
  const [name, setName] = useState("");

  //yup
  const schema = yup
    .object({
      name: yup.string().required(),
      regularity: yup.string().required(),
      governorate: yup.string().required(),
      seats: yup.number().positive().min(1).max(9).required(),
      rules: yup.string().required(),
      price: yup.number().positive().integer().required(),
    })
    .required();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      regularity,
      name,
      seats,
      governorate,
      price,
      rules,
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  const regularities = ["Regular passenger transport, intercity", "Private transport",
   "Public transport", "Urban and suburban transport", "Auxiliary transport service"];
  const govsList = [
    "Ariana",
    "Beja",
    "Ben Arous",
    "Bizerte",
    "Gabes",
    "Gafsa",
    "Jendouba",
    "Kairouan",
    "Kasserine",
    "Kebili",
    "Kef",
    "Mahdia",
    "Manouba",
    "Medenine",
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

  //
  const alert = useAlert();
  const dispatch = useDispatch();

  const { error, transport } = useSelector(state => state.transportDetails)
  const { loading, error: updateError, isUpdated } = useSelector(state => state.transport);

  const transportId = match.params.id;


  useEffect(() => {
    if (transport && transport._id !== transportId) {
        dispatch(getSingleTransport(transportId));
    } else {
        setName(transport.name);
        setRules(transport.rules);
        setGovernorate(transport.governorate);
        setPrice(transport.pricepernight);
        setSeats(transport.nbrePlace);
        setRegularity(transport.activity)
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
        alert.success('Transport updated successfully');
        dispatch({ type: UPDATE_TRANSPORT_RESET })
    }

}, [dispatch, alert, error, isUpdated, updateError, transport, transportId])

const submitHandler = (e) => {
 
  const formData = new FormData();
  formData.set('name', name);
  formData.set('pricepernight', price);
  formData.set('rules', rules);
  formData.set('governorate', governorate);
  formData.set('nbrePlace', seats);
  formData.set('activity', regularity);

  /*images.forEach(image => {
      formData.append('images', image)
  })*/

  dispatch(updateTransport(transport._id, formData))
}


  return (
    <React.Fragment>
      <MetaData title={'Update Transport'} />
        <Layout>

    <div style={{marginTop:"4rem"}}>
    <section class="hero is-primary editTransport">
  <div class="hero-body">
  <br/>
    <p class="title" style={{textAlign:"center"}}>
   EDIT TRANSPORT 
    </p>
    <br/>
  </div>
  <br/>
</section>
<br/>
      <Grid container spacing={4}>
        <SubGrid item sm={3} xs={12}>
          <h2 style={{fontWeight: "700", fontSize: "32px", lineHeight: "39px", color:"#E22357"}}>Transports:</h2>
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
              <label htmlFor="regularity">Activity :</label>
              <MySelect
                {...register("regularity")}
                id="regularity"
                value={regularity}
                onChange={(e) => {
                  setRegularity(e.target.value);
                }}
              >
                {regularities.map((reg) => (
                  <MenuItem key={reg} value={reg}>
                    {reg}
                  </MenuItem>
                ))}
              </MySelect>
              {<p>{errors.regularity?.message}</p>}
              <label htmlFor="governorate">Governorate :</label>
              <MySelect
                {...register("governorate")}
                id="governorate"
                value={governorate}
                onChange={(e) => {
                  setGovernorate(e.target.value);
                }}
              >
                {govsList.map((gov) => (
                  <MenuItem key={gov} value={gov}>
                    {gov}
                  </MenuItem>
                ))}
              </MySelect>

              {<p>{errors.governorate?.message}</p>}
              <label htmlFor="price">Price per Day:</label>
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
              <label htmlFor="seats">seats :</label>
              <MyInput
                {...register("seats")}
                id="seats"
                value={seats}
                onChange={(e) => {
                  setSeats(e.target.value);
                }}
                type="number"
              />
              {<p>{errors.seats?.message}</p>}
            </MyStack>
            <MyStack style={{marginRight:'2rem'}}>
              <label htmlFor="rules">Vehicule Rules :</label>
              <MyTextarea
                error={errors.rules}
                {...register("rules")}
                id="rules"
                rows={7}
                value={rules}
                onChange={(e) => {
                setRules(e.target.value);
                }}
              />
              {<p>{errors.rules?.message}</p>}

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
    <MyButton type='submit' confirm>Confirm</MyButton>
  </span>
  </div>
    </div>
    </Layout>
    </React.Fragment>
  );
}

export default TransportForm;
