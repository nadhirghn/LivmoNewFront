import React, { useState, useEffect } from 'react';



//MUI IMPORTS
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import { v4 as uuidv4 } from 'uuid';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';



const Activity = ({ generalFormValues, changeGeneralValue }) => {

  //Dynamic Form
  const [open, setOpen] = React.useState(false);
  
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), activitytitle: ' ', activitydescription: ' ', startactivity: " ", endactivity: " " ,
    activityduration: 0, activityimages : [], activityimagename: ""
   },
  ]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);

  };

  useEffect(() => {
    const inputFields = window.localStorage.getItem("dynamic form")
    setInputFields(JSON.parse(inputFields) || [{ id: uuidv4(), activitytitle: ' ', activitydescription: ' ', startactivity: " ", endactivity: " " ,
    activityduration: 0, activityimages : [], activityimagename: ""
   }])
 
    },[])
    
  useEffect(() => {
    window.localStorage.setItem("dynamic form", JSON.stringify(inputFields))
    })

    
      //image


      
  const [imagesPreview, setImagesPreview] = useState([]);
  const [namee, setNamee] = useState('');



  const handleChangeInput = (id, event) => {
  
if (event.target.name === "activityimages") {
  
  const files = Array.from(event.target.files)

  setImagesPreview([]);

  files.forEach(file => {
      const reader = new FileReader();

      reader.onload = () => {
          if (reader.readyState === 2) {
              setImagesPreview(oldArray => [...oldArray, reader.result])
         
          }
         
      }
      

      reader.readAsDataURL(file)

     
  })

  setNamee(event.target.files[0].name);
  const newInputFields = inputFields.map(i => {

    if(id === i.id) {
    
      i[event.target.name] = imagesPreview
      i["activityimagename"] = namee


    }

    return i;
  })

  setInputFields(newInputFields);
  

}else {
    const newInputFields = inputFields.map(i => {
   
      if(id === i.id) {
  
        i[event.target.name] = event.target.value
    
      }
 
      return i;
    })
    
    setInputFields(newInputFields);
    console.log(newInputFields)
  }
  }
 


  const handleAddFields = () => {
        setInputFields([...inputFields, { id: uuidv4(),  activitytitle: '', activitydescription: "",
        startactivity: "", endactivity: "", activityduration: 0, activityimages : [], activityimagename: ""
        }])


  }

  const handleRemoveFields = id => {
    const values  = [...inputFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields(values);
  }



  const color = "#fff"
  const colors = "#E42651"

  const theme = createTheme({
    shape: {
      borderRadius: 40,
    },
  }) 



  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  



  return (
   
    <React.Fragment>
               <Typography  style={{ color:"white" }}>Fill in this form :</Typography>
               <ThemeProvider theme={theme}>
                 <br />  
         <Button style={{textTransform: 'none', 
     width: '12%', height:'20%', color:"#E22357",
      background: "white"}} variant="outlined" onClick={handleClickOpen}
      >
   Add an activity 
     </Button>
   </ThemeProvider>
       <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle style={{fontStyle: "normal",
        fontWeight: 700,
        fontSize: "24px",
        color:"#DA1D6C",
        lineHeight: "29px"}} id="customized-dialog-title" onClose={handleClose}>
         Activity
        </BootstrapDialogTitle>
       
        { inputFields.map(inputField => (
       <div key={inputField.id}>
   
        <DialogContent dividers>
        
       <Grid container  style={{textAlign: "center" }} spacing={2}>
      
        <Grid item xs={12} >
 <Typography  style={{ color:"black", textAlign: "left" }}>Activity Title :</Typography>
 <div key={inputField.id}>
 <TextField
      name="activitytitle"
      value={inputField.activitytitle}
      onChange={event => handleChangeInput(inputField.id, event)}
        sx={{
          background:color,
          svg: { colors },
          input: { colors },
          label: { colors },
          width:"50%",
          textAlign: "left",
        }}

        fullWidth
        variant="standard"
				placeholder='Activity Title'
              />
              </div>
 </Grid>
 <Grid item xs={12} >
 <Typography  style={{ color:"black", textAlign: "left" }}>Activity’s Description :</Typography>
 <TextareaAutosize
              name="activitydescription"
              label="Activity’s Description"
              value={inputField.activitydescription}
              onChange={event => handleChangeInput(inputField.id, event)}
      aria-label="minimum height"
      minRows={6}
      placeholder="Activity’s Description"
      style={{ width: "50%" }}
    />
 </Grid>
 <Grid item xs={12} >
 <Typography  style={{ color:"black", textAlign: "left" }}>Start (Optional) :</Typography>
 <div style={{ textAlign: "left", display:"flex", alignItems:'column'}}>
  
  <TextField
        id="datetime-local"
        name="startactivity"
        value={inputField.startactivity}
        onChange={event => handleChangeInput(inputField.id, event)}
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        sx={{ width: 250 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
 
    </div>
 </Grid>
 <Grid item xs={12}  >
 <Typography  style={{ color:"black", textAlign: "left" }}>End (Optional) :</Typography>
 <div style={{ textAlign: "left", display:"flex", alignItems:'column'}}>
 <TextField
        id="datetime-local"
        type="datetime-local"
        name="endactivity"
        value={inputField.endactivity}
        onChange={event => handleChangeInput(inputField.id, event)}
        defaultValue="2017-05-24T10:30"
        sx={{ width: 250 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
 </Grid>
 <Grid item xs={12}>
 <Typography  style={{ color:"black", textAlign: "left" }}>Duration hours :</Typography>
 <TextField
        id="input-with-icon-textfield"
        name="activityduration"
        value={inputField.activityduration}
        onChange={event => handleChangeInput(inputField.id, event)}
        sx={{
          background:color,
          svg: "black",
          input: "black",
          label: "black",
          width:"50%",
          textAlign: "left",
        }}
        required
        fullWidth
        variant="standard"
        type='number'
				placeholder='Duration'
              />
 </Grid>
 <Grid item xs={12}>
 <Typography  style={{ color:"black", textAlign: "left" }}>Add photos :</Typography>
 <div className='form-group'>
           <div>
                <label className="file-label">
                    <input className="file-input" type="file" style={{ color:"black" }}
                  name='activityimages'
                  accept='image/*,application/pdf' 
                  onChange={event => handleChangeInput(inputField.id, event)}
                  multiple/>
                    <span className="file-cta">
                    <span className="file-icon">
                        <i className="fas fa-upload"></i>
                    </span>
                    <span className="file-label">
                        Choose a file…
                    </span>
                    </span>
                    <span className="file-name" style={{ color:"black" }}>
                    {inputField.activityimagename}
                    </span>
                </label>
                 {inputField.activityimages.map(img => (
                     <img src={img} key={img} alt="Images Preview" className="mt-3 mr-2" width="100" height="100" />
                      ))}
                         
                   </div>
                 </div>
 </Grid>

<div style={{marginTop:"2rem"}}>
<Stack
        direction="row"
        spacing={2}
      >
  <p style={{marginTop:"0.5rem" , marginLeft:"1rem"}}> Add Activity</p>
 <IconButton
            style={{backgroundColor:"#DA1D6C" ,marginLeft:"2rem"}}
              onClick={handleAddFields}
            >

              <AddIcon />
            </IconButton>
            <p style={{marginTop:"0.5rem"}}>Delete Activity</p>
            <IconButton style={{backgroundColor:"#DA1D6C", marginLeft:"2rem"}}
             disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
          
              <RemoveIcon />
            </IconButton>
            </Stack>
            </div>
 </Grid>

        </DialogContent>
        </div> 

        )) } 

        <DialogActions>
        <ThemeProvider theme={theme}>
          <Button 
          style={{textTransform: 'none', color:"white",
           background: "linear-gradient(#F02F32,#DA1D6C)", width: '20%',height:'50%'}}
           onClick={handleSubmit}
         >
            Confirm
          </Button>

          </ThemeProvider>
        </DialogActions>
      </BootstrapDialog>

   
      <React.Fragment>
      </React.Fragment>
    </div>
    <br/><br/><br/><br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/><br/>

    </React.Fragment>
  );
}

export default Activity


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
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));