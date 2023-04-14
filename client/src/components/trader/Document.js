import React, {  useEffect } from 'react';



//MUI IMPORTS
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import Box from '@mui/material/Box';


import './becometrader.scss'

//Save


import { useDispatch, useSelector } from 'react-redux'

import { useAlert } from 'react-alert'


import { registerTrader, clearErrors } from "../../actions/userActions";


import { useHistory } from 'react-router-dom';



const Document = ({ informationFormValues,  compteFormValues,
    documentFormValues, changeDocumentValue, generalFormValues,  detailedFormValues, 
     }) => {

      
        //Saving 

  const history = useHistory();
  const alert = useAlert();
  const dispatch = useDispatch();
  const { isAuthenticated, error} = useSelector(state => state.auth);



  useEffect(() => {

    if(isAuthenticated) {
        //history.push('/');
        alert.success('Inscription Réussie.');
    }
  

  if(error) {
      alert.error(error);
      dispatch(clearErrors());
      
  }
}, [dispatch, alert, isAuthenticated, error, history])




const HandleSubmit = (e) => { 
    
    const formData = new FormData();
    formData.set('typeservice', compteFormValues.typeservice);
    formData.set('name', informationFormValues.name);
    formData.set('contactpersone', informationFormValues.contactpersone);
    formData.set('email', informationFormValues.email);
    formData.set('password', informationFormValues.password);
    formData.set('avatar', informationFormValues.avatarPreview);
    formData.set('country', generalFormValues.country);
    formData.set('city', generalFormValues.city);
    formData.set('phone', informationFormValues.phone);
    formData.set('codepostale', generalFormValues.codepostale);
    formData.set('address', generalFormValues.address);
    formData.set('mfiscale', detailedFormValues.mfiscale);
    formData.set('cnss', detailedFormValues.cnss);
    formData.set('typerestaurant', detailedFormValues.typerestaurant);
    formData.set('specialty', detailedFormValues.specialty);
    formData.set('activity', detailedFormValues.activity);
    formData.set('homme', generalFormValues.homme);
    formData.set('femme', generalFormValues.femme);
    formData.set('forme', detailedFormValues.forme);
    formData.set('rne',documentFormValues.setRne);
    formData.set('patente', documentFormValues.setPatente);
    formData.set('cad', documentFormValues.setCad);


    dispatch(registerTrader(formData));
};


    const theme = createTheme({
        shape: {
          borderRadius: 40,
        },
      }) 

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };





    const onChangeee = e => {
        const reader = new FileReader();
    
        reader.onload = () => {
            if (reader.readyState === 2) {
                changeDocumentValue('rnePreview', reader.result)
                documentFormValues.setRne = reader.result
                changeDocumentValue('namecin', e.target.files[0].name)
                
            }
     
        }
 
    
        reader.readAsDataURL(e.target.files[0])
    

        
    }
    const onChangee = e => {
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {

                changeDocumentValue('patentePreview', reader.result)
                documentFormValues.setPatente = reader.result
                changeDocumentValue('namee', e.target.files[0].name)
            }
     
        }
    
        reader.readAsDataURL(e.target.files[0])
   



    }
    documentFormValues.setCad = ""

    const onChange = e => {
      const reader = new FileReader();


      reader.onload = () => {
          if (reader.readyState === 2) {

              changeDocumentValue('cadPreview', reader.result)
              documentFormValues.setCad = reader.result
              changeDocumentValue('namecad', e.target.files[0].name)
          }
   
      }
  
      reader.readAsDataURL(e.target.files[0])
 
   


  }

  return (
      <React.Fragment>

          <React.Fragment>
               {/* Verify Dialog */}
         <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
        maxWidth="100%"
      >
        <BootstrapDialogTitle
        style={{color: "#E42651"}} id="customized-dialog-title" onClose={handleClose}>
        BECOME A MERCHANT : Confirmation
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Grid container   spacing={2} component="form"  onSubmit={HandleSubmit} >
        <Grid  item xs={12}  >		
        <Typography  style={{ color:"black", textAlign: "center", marginRight:"6rem" }}>Photo :</Typography> 

	<div className='form-group'   style={{display:"flex", alignItems:"center", justifyContent:"center"}}>  
                                    <figure className='avat mr-3 item-rtl'>
                                        <img
                                            src={informationFormValues.avatarPreview}
                                            className='rounded-circle'
                                            alt='Avatar Preview'
                                        />
                                    </figure>
                                </div>
                                </Grid>
      <Grid item xs={12} md={3}>
         <Typography  style={{ color:"black", textAlign: "left" }}>Type of Service :</Typography> 
		<p>{compteFormValues.typeservice}</p>
        </Grid>
        <Grid item xs={12} md={3}>
         <Typography  style={{ color:"black", textAlign: "left", }}>Company’s Legal Name :  </Typography> 
      <p>{informationFormValues.name}</p> 
        </Grid>
        <Grid item xs={12} md={3}>
         <Typography  style={{ color:"black", textAlign: "left", }}>Contact Person :</Typography> 
          <p>{informationFormValues.contactpersone}</p>
        </Grid>
        <Grid item xs={12} md={3}>
         <Typography  style={{ color:"black", textAlign: "left", }}>Phone Number :</Typography> 
          <p>{informationFormValues.phone}</p>
        </Grid>
        <Grid item xs={12} md={3}>
         <Typography  style={{ color:"black", textAlign: "left", }}>Email :</Typography> 
         <p>{informationFormValues.email}</p>
        </Grid>
        <Grid item xs={12} md={3}>
         <Typography  style={{ color:"black", textAlign: "left", }}>Country :</Typography> 
        <p>{generalFormValues.country}</p>
        </Grid>
        <Grid item xs={12} md={3}>
         <Typography  style={{ color:"black", textAlign: "left", }}>Governorate : </Typography> 
        <p>{generalFormValues.city}</p>
        </Grid>
        <Grid item xs={12} md={3}>
         <Typography  style={{ color:"black", textAlign: "left", }}>Address :</Typography> 
       <p>{generalFormValues.address}</p>
        </Grid>
        <Grid item xs={12} md={3}>
         <Typography  style={{ color:"black", textAlign: "left", }}>ZIP Code :</Typography> 
         <p>{generalFormValues.codepostale}</p>
        </Grid>
        {
     compteFormValues.setCheckedd ? ( 
       <>
      <Grid item xs={12} md={3} >
      <Typography  style={{ color:"black", textAlign: "left", }}>Type of restaurant :</Typography> 
      <p>{detailedFormValues.typerestaurant}</p>

        </Grid>
        <Grid item xs={12} md={3} >
      <Typography  style={{ color:"black", textAlign: "left", }}>Specialty :</Typography> 
      <p>{detailedFormValues.specialty}</p>

        </Grid>
        </>
          ) : ( <div></div> 
          )
        }
        <Grid item xs={12} md={3} >
         <Typography  style={{ color:"black", textAlign: "left", }}>Male Workforce :</Typography> 
        <p>{generalFormValues.homme}</p>
        </Grid>        
        <Grid item xs={12} md={3} >
         <Typography  style={{ color:"black", textAlign: "left", }}>Female Workface :</Typography> 
        <p>{generalFormValues.femme}</p>
        </Grid>
        <Grid item xs={12} md={3}>
         <Typography  style={{ color:"black", textAlign: "left", }}>Legal Status : </Typography> 
        <p>{detailedFormValues.forme}</p>
        </Grid>
        <Grid item xs={12} md={3}>
         <Typography  style={{ color:"black", textAlign: "left", }}>Activity :</Typography> 
          <p>{detailedFormValues.activity}</p>
        </Grid>
        <Grid item xs={12} md={3}>
         <Typography  style={{ color:"black", textAlign: "left", }}>CNSS affiliation number :</Typography> 
        <p>{detailedFormValues.cnss}</p>
        </Grid>
        <Grid item xs={12} md={3}>
         <Typography  style={{ color:"black", textAlign: "left", }}>Tax Registration Number :</Typography> 
          <p>{detailedFormValues.mfiscale}</p>
        </Grid>
        <Grid item xs={12} md={3}>
        <Typography  style={{ color:"black" ,textAlign:"left"}}>Copy of License :</Typography>                              
       <p>{documentFormValues.namee}</p>
        </Grid>

        <br/>
        <Grid  item xs={12} md={3} >			
      <Typography  style={{ color:"black", textAlign: "left" }}>Copy of the RNE :</Typography> 
      <p>{detailedFormValues.namecin}</p>
		  				</Grid>

                          <br/>
                          {
             compteFormValues.setCheck ? ( 
        <Grid  item xs={12} md={3}  >			
      <Typography  style={{ color:"black", textAlign: "left" }}>CAD Tourist Transport :</Typography> 
 <p>{documentFormValues.namecad}</p>
       
		  				</Grid>
                          ) : ( <div></div>
                )}


      </Grid>
        </DialogContent>
        <DialogActions>
        <ThemeProvider theme={theme}>
           <Button onClick={HandleSubmit}
                    type="submit" 
                    variant="contained"
                    style={{textTransform: 'none', background: "linear-gradient(#F02F32,#DA1D6C)", width: '12%',height:'30%'}}
                  >
                      Confirm
                  </Button>
                  </ThemeProvider>
        </DialogActions>
      </BootstrapDialog>
    </div>
   
          </React.Fragment>
    <React.Fragment>
      <Grid container  style={{textAlign: "center" }} spacing={2}>

        <Grid item xs={12}   style={{marginLeft:"29rem" }}>
            <div>
        <Typography  style={{ color:"black" ,textAlign:"left"}}>Add Copy of License :</Typography>                              
                <div className="file has-name is-center">
                <label className="file-label">
                    <input className="file-input" type="file" style={{ color:"white" }}
                  name='patente'
                  accept='image/*,application/pdf' 
                  onChange={onChangee} 
                  />
                    <span className="file-cta">
                    <span className="file-icon">
                        <i className="fas fa-upload"></i>
                    </span>
                    <span className="file-label">
                        Choose a file…
                    </span>
                    </span>
                    <span className="file-name" style={{ color:"black" }}>
                    <p>{documentFormValues.namee}</p>
                    </span>
  

                </label>

                        </div>
                        <p style={{color:"black", fontSize:"11px"}}>Supported files: pdf, jpeg, xls ...</p>

                            </div>
        </Grid>

        <br/>
        <Grid  item xs={12} style={{marginLeft:"29rem" }} >			
      <Typography  style={{ color:"black", textAlign: "left" }}>Add Copy of the RNE :</Typography> 
              <div className="file has-name is-center">
                <label className="file-label">
                    <input className="file-input" type="file" style={{ color:"white" }}
                  name='rne'
                  accept='image/*,application/pdf' 
                  onChange={onChangeee} />
                    <span className="file-cta">
                    <span className="file-icon">
                        <i className="fas fa-upload"></i>
                    </span>
                    <span className="file-label">
                        Choose a file…
                    </span>
                    </span>
                    <span className="file-name" style={{ color:"black" }}>
                    {documentFormValues.namecin}
                    </span>
  

                </label>

                </div>
                <p style={{color:"black", fontSize:"11px"}}>Supported files: pdf, jpeg, xls ...</p>

		  				</Grid>

                          <br/>
                          {
             compteFormValues.setCheck ? ( 
        <Grid  item xs={12} style={{marginLeft:"29rem" }} >			
      <Typography  style={{ color:"black", textAlign: "left" }}>CAD Tourist Transport :</Typography> 
              <div className="file has-name is-center">
                <label className="file-label">
                    <input className="file-input" type="file" style={{ color:"white" }}
                  name='cad'
                  accept='image/*,application/pdf' 
                  onChange={onChange} />
                    <span className="file-cta">
                    <span className="file-icon">
                        <i className="fas fa-upload"></i>
                    </span>
                    <span className="file-label">
                        Choose a file…
                    </span>
                    </span>
                    <span className="file-name" style={{ color:"black" }}>
                    {documentFormValues.namecad}
                    </span>
  

                </label>

                </div>
                <p style={{color:"black", fontSize:"11px"}}>Supported files: pdf, jpeg, xls ...</p>

		  				</Grid>
    
    ) : ( <div></div>
    )}

      </Grid>
      <br/>
	<br/>
	<br/>


  
  <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
    <ThemeProvider theme={theme}>

             <Button
             onClick={handleClickOpen}
             sx={{ mr: 3 }}
             variant="contained"
             style={{textTransform: 'none',
              background: "linear-gradient(270deg, #0C1424 -0.34%, #143880 100%)",
             borderRadius: "19.546px", width: '12%',height:'20%'}}
           >
             Verify
           </Button>

           <Button
                     onClick={HandleSubmit}
                    type="submit" 
                    variant="contained"
                    style={{textTransform: 'none', background: "linear-gradient(#F02F32,#DA1D6C)", width: '12%',height:'20%'}}
                  >
                      Confirm
                  </Button>
                  </ThemeProvider>
                  </div>

    </React.Fragment>

 

    </React.Fragment>

  );
}

export default Document



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(8),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(8),
    },
  }));
  
  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };