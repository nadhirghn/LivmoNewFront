import React, {  useEffect } from 'react';


import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'

import { RegisterOrganism, clearErrors } from "../../../../actions/userActions";
import { useHistory } from 'react-router-dom';

//MUI IMPORTS

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


import './becomehost.scss'




const Document = ({documentFormValues, changeDocumentValue,
   account2FormValues, organismFormValues, compteFormValues
 }) => {

  //save
  const history = useHistory();

  const alert = useAlert();
  const dispatch = useDispatch();
  const { isAuthenticated, error } = useSelector(state => state.auth);

  useEffect(() => {

    if(isAuthenticated) {
       // history.push('/check');
        alert.success('Inscription Réussie.');
    }
  

  if(error) {
      alert.error(error);
      dispatch(clearErrors());
      
  }
}, [dispatch, alert, isAuthenticated, error, history])

const HandleSubmit = (e) => { 
    

  const formData = new FormData();
         
  formData.set('typehost', compteFormValues.typehost);

  formData.set('name', account2FormValues.name);
  formData.set('contactpersone', account2FormValues.contactpersone);
  formData.set('phone', account2FormValues.phone);
  formData.set('email', account2FormValues.email);
  formData.set('country', account2FormValues.country);
  formData.set('city', account2FormValues.city);
  formData.set('password', account2FormValues.password);
  formData.set('address',account2FormValues.address);
  formData.set('avatar', account2FormValues.avatarPreview);
  formData.set('mfiscale', organismFormValues.mfiscale);
  formData.set('cnss', organismFormValues.cnss);
  formData.set('femme', organismFormValues.femme);
  formData.set('homme', organismFormValues.homme);



  formData.set('rne', documentFormValues.setRne);
  formData.set('patente', documentFormValues.setPatente);




  dispatch(RegisterOrganism(formData));


};

  const  theme = createTheme({
    shape: {
      borderRadius: 40,
    },
    }) 




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


const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};


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
        BECOME A HOST : Confirmation
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Grid container   spacing={2} component="form"  onSubmit={HandleSubmit} 
        >
        <Grid  item xs={12}  >		
        <Typography  style={{ color:"black", textAlign: "center", marginRight:"6rem" }}>Photo :</Typography> 

	<div className='form-group'   style={{display:"flex", alignItems:"center", justifyContent:"center"}}>  
                                    <figure className='avat mr-3 item-rtl'>
                                        <img
                                            src={account2FormValues.avatarPreview}
                                            className='rounded-circle'
                                            alt='Avatar Preview'
                                        />
                                    </figure>
                                </div>
                                </Grid>
      <Grid item xs={12} md={3}>
         <Typography  style={{ color:"black", textAlign: "left" }}>Type of Host :</Typography> 
      <p>{compteFormValues.typehost}</p>
        </Grid>
        <Grid item xs={12} md={3}>
         <Typography  style={{ color:"black", textAlign: "left", }}>Company’s Name :  </Typography> 
         <p>{account2FormValues.name}</p>

        </Grid>
        <Grid item xs={12} md={3}>
         <Typography  style={{ color:"black", textAlign: "left", }}>Contact Person :</Typography> 
         <p>{account2FormValues.contactpersone}</p>

        </Grid>
        <Grid item xs={12} md={3}>
         <Typography  style={{ color:"black", textAlign: "left", }}>Phone Number :</Typography> 
         <p>{account2FormValues.phone}</p>
        </Grid>
        <Grid item xs={12} md={3}>
         <Typography  style={{ color:"black", textAlign: "left", }}>Email :</Typography> 
         <p>{account2FormValues.email}</p>
        </Grid>
        <Grid item xs={12} md={3}>
         <Typography  style={{ color:"black", textAlign: "left", }}>Country :</Typography> 
         <p>{account2FormValues.country}</p>
        </Grid>
        <Grid item xs={12} md={3}>
         <Typography  style={{ color:"black", textAlign: "left", }}>Governorate : </Typography> 
         <p>{account2FormValues.city}</p>
        </Grid>
        <Grid item xs={12} md={3}>
         <Typography  style={{ color:"black", textAlign: "left", }}>Address :</Typography> 
         <p>{account2FormValues.address}</p>
        </Grid>
        {/*<Grid item xs={12} md={3}>
         <Typography  style={{ color:"black", textAlign: "left", }}>ZIP Code :</Typography> 
         <p></p>
        </Grid>
*/}
        <Grid item xs={12} md={3}>
         <Typography  style={{ color:"black", textAlign: "left", }}>CNSS affiliation number :</Typography> 
         <p>{organismFormValues.cnss}</p>
        </Grid>
        <Grid item xs={12} md={3}>
         <Typography  style={{ color:"black", textAlign: "left", }}>Tax Registration Number :</Typography> 
         <p>{organismFormValues.mfiscale}</p>
        </Grid>
        <Grid item xs={12} md={3} >
         <Typography  style={{ color:"black", textAlign: "left", }}>Male Workforce :</Typography> 
         <p>{organismFormValues.homme}</p>
        </Grid>        
        <Grid item xs={12} md={3} >
         <Typography  style={{ color:"black", textAlign: "left", }}>Female Workface :</Typography> 
         <p>{organismFormValues.femme}</p>
        </Grid>
        <Grid item xs={12} md={3}>
        <Typography  style={{ color:"black" ,textAlign:"left"}}>Copy of License :</Typography>                              
        <p>{documentFormValues.namee}</p>
     
        </Grid>

        <br/>
        <Grid  item xs={12} md={3} >			
      <Typography  style={{ color:"black", textAlign: "left" }}>Copy of the RNE :</Typography> 
      <p>{documentFormValues.namecin}</p>
		  	</Grid>

                


      </Grid>
        </DialogContent>
        <DialogActions>
        <ThemeProvider theme={theme}>
           <Button //onClick={HandleSubmit}
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

      </Grid>
      <br/>
	<br/>
  <br/>
  <br/>

  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
  <ThemeProvider theme={theme}>
         <Button
         onClick={handleClickOpen}
         sx={{ mr: 3 }}
         variant="contained"
         style={{textTransform: 'none', marginLeft:"20rem",
          background: "linear-gradient(270deg, #0C1424 -0.34%, #143880 100%)",
         borderRadius: "19.546px", width: '12%',height:'20%'}}
       >
         Verify
       </Button>

       <Button
                 onClick={HandleSubmit}
                type="submit" 
                variant="contained"
                style={{textTransform: 'none', marginRight:'10rem',
                 background: "linear-gradient(#F02F32,#DA1D6C)", width: '12%',height:'20%'}}
              >
                  Confirm
              </Button>
              </ThemeProvider>
              </Box>
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