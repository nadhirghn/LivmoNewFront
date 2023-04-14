import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'

import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'

//
import MetaData from '../../shared/metaData'
import Layout from '../../shared/layout'
import Loader from '../../shared/Loader/loader';

//
import { resetPassword, clearErrors } from "../../../actions/userActions";

//Mui Imports
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";



const NewPassword = ({ history, match }) => {

      //Validation

      const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: 'onTouched'
    });

      //

      const [passwordEye, setPasswordEye] = useState(false);

      const handlePasswordClick = () =>{
          setPasswordEye(!passwordEye)
      }
  
      //Confirm
      const [confirmpasswordEye, setConfirmPasswordEye] = useState(false);
  
      const handleConfirmPasswordClick = () =>{
          setConfirmPasswordEye(!confirmpasswordEye)
      }


    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, success } = useSelector(state => state.forgotPassword)

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (success) {
            history.push('/')

            setTimeout(function(){
              window.location.reload(false);
           }, 1000);

        }

    }, [dispatch, alert, error, success, history])

    const submitHandler = (e) => {

        const formData = new FormData();
        formData.set('password', password);
        formData.set('confirmPassword', confirmPassword);

        dispatch(resetPassword(match.params.token, formData))

        alert.success('Password updated successfully')

    }

    const {  loading } = useSelector(state => state.auth);

    return (
      <Layout>
        	{loading ? <Loader /> :(
        <React.Fragment>
            <MetaData title={'New Password Reset'} />

            <CssBaseline />
      <Container maxWidth="sm" style={{marginTop:"10rem"}}>
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
              <h2 style={{marginTop:"0.8rem", marginLeft:"0.8rem"}} >Reset your password :</h2>
            <Grid item xs component="form" onSubmit={handleSubmit(submitHandler)} >
                      <div className='mx-5'>
                     <div className='relative'>
                        <TextField
                             name="newpassword"
                            type={(passwordEye === false)? 'password': 'text'}
                            placeholder="New Password"
                            className="w-full h-14 rounded-lg"
                            {...register("password", { required: "Password is required",
                                    pattern:{
                                        value:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                                        message:'Password should include at least one uppercase & one lowercase, one numeric value and one special character'
                                    },
                                    minLength:{
                                        value:8,
                                        message:'Minimum Required length is 8'
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: "Maximum Required length is 20"
                                    }
                                })}
                                value={password}          
                                onChange={(e) => setPassword(e.target.value)} 
                                    />
                                  
                                    {errors.password && <span className="text-sm text-red-500">
                                        {errors.password.message}</span>}


                                     <div className='text-2xl absolute top-4 right-5'>
                                     {
                                        (passwordEye === false)? <AiFillEyeInvisible onClick={handlePasswordClick}/>:
                                        <AiFillEye onClick={handlePasswordClick}/>
                                    }
                                    
                                     
                                     </div>
                                     </div>
                                     </div>
                                     <br/>
                     {/* secend */}
                     <div className='mx-5'>
                     <div className='relative'>
                     <TextField
                            className={`w-full h-14 rounded-lg ${ errors.password && 
                                "focus:border-red-500 focus:ring-red-500 border-red-500" } `}
                            type={(confirmpasswordEye === false)? 'password': 'text'}
                            placeholder="Confirm New Password"
                            
                            {...register("confirmpassword", { required: "Confirm Password is required",
                              validate: (value) =>
                              value === password || "The passwords do not match"
                                    })}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                            {errors.confirmpassword && <span className="text-sm text-red-500">
                                        {errors.confirmpassword.message}</span>}
                                    
                             <div className='text-2xl absolute top-4 right-5' >
                            {
                                (confirmpasswordEye === false)? <AiFillEyeInvisible onClick={handleConfirmPasswordClick}/>:
                                 <AiFillEye onClick={handleConfirmPasswordClick}/>
                                    }
                                    
                                     
                                     </div>
                                     </div>
                                     </div>

                              
            <Box
              m={1}
              mt={2}
            //margin
              display="flex"
              justifyContent="flex-end"
              alignItems="flex-end"
            >                    
          <Button variant="contained" color="secondary" type="submit"  >Save</Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      </Grid>
    </Paper>
      </Container>
        </ React.Fragment>
        )}
        </Layout>
    )
}

export default NewPassword