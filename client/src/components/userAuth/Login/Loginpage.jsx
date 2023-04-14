import * as React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'

import { login, clearErrors } from "../../../actions/userActions";
import Loader from '../../shared/Loader/loader';
import './login.scss'

import IMG from '../../../img/logo.png';
import IMG1 from '../../../img/logoo.png';


//MUI IMPORTS
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import KeyIcon from '@mui/icons-material/Key';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';





function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        livmo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Login = (props) => {


  const [passwordEye, setPasswordEye] = useState(false);

  const handlePasswordClick = () =>{
      setPasswordEye(!passwordEye)
  }


  const useStyles = makeStyles({

    button: {
      '&:hover': {
        backgroundColor: '#fff',
        color: '#fff',
    },
  }})
    const history = useHistory();
    const { isAuthenticated, error, loading } = useSelector(state => state.auth);
    const alert = useAlert();
    const dispatch = useDispatch();


  // Validation

const { register, handleSubmit, formState: {errors} } = useForm();


  // Login

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  

    useEffect(() => {

      if(isAuthenticated) {
        history.push('/');
        alert.success('Successfully Connected.'); 


    }
  
     
      if (error) {
          alert.error(error);
          dispatch(clearErrors());
      }
  }, [dispatch, alert, error,isAuthenticated, history])

  const submitHandler = () => {
      dispatch(login(email, password)); 
      
       
  }

  const emailValidation = errors?.email ? errors.email.message : null;
  const pwdValidation = errors?.password ? errors.password.message : null;

  const theme = createTheme();
  const classes = useStyles()
  return (
    <React.Fragment>
            {loading ? <Loader /> :(
        <React.Fragment>
       <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:  `url(${IMG1})` ,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: "452.87px  535.03px",
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >
          <Box
            sx={{
              my: 8,
              mx: 6,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop:'10rem'
            }}
          >

             <div className='loginimg'>
              <Link to="/">
            <img src={IMG} alt='logo' />
              </Link> 
            </div>
            <Box component="form" noValidate onSubmit={handleSubmit(submitHandler)} sx={{ mt: 1 ,  width: 400}}>

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
                 <div className='mx-1'>
                     <div className=' relative'>

              <TextField
               id="input-with-icon-textfield"
               label="Password"
               InputProps={{
                 startAdornment: (
                   <InputAdornment position="start">
                  <KeyIcon sx={{ color: "#E42651"}} />
                   </InputAdornment>
                 ),
               }}
                   variant="standard"
                required
                margin="normal"
                fullWidth
                name="password"
                type={(passwordEye === false)? 'password': 'text'}
              {...register("password", {required: "Password is required"})}
              
                error={!!errors?.password}
                helperText={pwdValidation}
                value={password}          
                onChange={(e) => setPassword(e.target.value)} 
              />

                        <div className='text-2xl absolute top-8 right-1' >
                            {
                                (passwordEye === false)? <AiFillEyeInvisible onClick={handlePasswordClick}/>:
                                 <AiFillEye onClick={handlePasswordClick}/>
                                    }
                                    
                                     
                                     </div>
          </div>
</div>

           <Grid container>
                <Grid item xs style={{marginTop:"2rem"}}>
                <Link to="/password/forgot" style={{color:'black'}} >
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{
                  textTransform: 'none',
                  background: "linear-gradient(#143880,#0C1424)",
              }}
              >
                Log in
              </Button>
              <Button
                component={Link} to="/signup"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                className={classes.button}
                style={{
                  textTransform: 'none',
                  background: "linear-gradient(#F02F32,#DA1D6C)",
                  
              }}
              >
                Create new account
              </Button>

              <Copyright sx={{ mt: 5 }} />
           
            </Box>
          </Box>
        </Grid>
      </Grid>
      
    </ThemeProvider>
    </React.Fragment>
      )}

      
   
    </React.Fragment>
  );
}
export default Login;
