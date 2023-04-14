import React, { useState, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from "react-hook-form";

import MetaData from '../../shared/metaData'
import Layout from '../../shared/layout'

import { forgotPassword, clearErrors } from '../../../actions/userActions'


//Mui Imports

import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';



const ForgotPassword = () => {

  
  // Validation

const { register, handleSubmit, formState: {errors} } = useForm();

const emailValidation = errors?.email ? errors.email.message : null;

//

    const [email, setEmail] = useState('')

    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, loading, message } = useSelector(state => state.forgotPassword)

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (message) {
            alert.success(message)
        }

    }, [dispatch, alert, error, message])

    const submitHandler = (e) => {


        const formData = new FormData();
        formData.set('email', email);

        dispatch(forgotPassword(formData))
    }

    return (
      <Layout>
        <React.Fragment>
<MetaData title={'Forgot Password'} />
      <CssBaseline />
      <Container maxWidth="sm" style={{marginTop:"12rem"}}>
      <Paper
      sx={{
        p: 2,
        marginTop: 8,
        maxWidth: 500,
        flexGrow: 1,
        marginBottom: 24,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        
      }}
    >
      <Grid container spacing={2}>
        
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
              <h2 style={{marginTop:"0.8rem", marginLeft:"0.8rem"}}>Reset your password :</h2>
            <Grid item xs component="form" onSubmit={handleSubmit(submitHandler)} >


            <TextField
            id="input-with-icon-textfield"
            label="Email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
               <MailOutlineIcon sx={{ color: "#E42651"}} />
                </InputAdornment>
              ),
            }}
                variant="standard"
                required
                margin="normal"
                fullWidth
                name="email"
                {...register("email", {pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Email is invalid, exemple: example@mail.com' 
                }})}
                {...register("email", {required: 'Email is required',
                 
                })}
                error={!!errors?.email}
                helperText={emailValidation}
                value={email}          
                onChange={(e) => setEmail(e.target.value)} 
              />

              <br/>
              <br/>
              <br/>

          <Button variant="contained" color="secondary" type="submit" disabled={loading ? true : false} >Send an email</Button>

          </Grid>
        </Grid>
      </Grid>
      </Grid>
    </Paper>
      </Container>
    </React.Fragment>
    </Layout>
          


    )
}

export default ForgotPassword