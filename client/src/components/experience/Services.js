import React, { useState, useEffect } from 'react';



//MUI IMPORTS

import OutlinedInput from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { makeStyles } from "@material-ui/core/styles";
import { Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { v4 as uuidv4 } from 'uuid';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


 //
 import '../restaurant/restaurant.scss'
 import '../transport/transport.scss'
 import '../lodging/lodging.scss'

const GreenSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: pink[600],
    '&:hover': {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: pink[600],
  },
}));

const useStyles = makeStyles((theme) => ({

  root: {
    "& > *": {
      margin: theme.spacing(0),
      width: theme.spacing(500),
      height: theme.spacing(0)
    }
  },

}));

const Services = ({ detailedFormValues, changeDetailedValue }) => {
  //Lodging Images
       //Lodging image local storage
       const [LdImage, setLdImage] = useState(() => {
        const saving = localStorage.getItem("LdImage");
        const initialValue = JSON.parse(saving);
        return initialValue || [];
      });
      useEffect(() => {
        localStorage.setItem('LdImage', JSON.stringify(LdImage));
      }, [LdImage]);
      
      
      
      
      useEffect(() => {
        const LdImage = JSON.parse(localStorage.getItem('LdImage'));
        if (LdImage) {
          setLdImage(LdImage);
        }
      }, []);

  //Transport Images
  const [TrImage, setTrImage] = useState(() => {
    const save = localStorage.getItem("TrImage");
    const initialValue = JSON.parse(save);
    return initialValue || [];
  });
  
  useEffect(() => {
    localStorage.setItem('TrImage', JSON.stringify(TrImage));
  }, [TrImage]);
  
  
  
  
  useEffect(() => {
    const TrImage = JSON.parse(localStorage.getItem('TrImage'));
    if (TrImage) {
      setTrImage(TrImage);
    }
  }, []);
  
  //Logding Dialog

  const [select, setSelect] = useState(false);
  const [selected, setSelected] = useState(false);
 
  const onSelected = () =>{
   setSelected(true);
 }
 const onNSelected = () =>{
   setSelected(false);
 }
  const onSelect = () =>{
    setSelect(true);
  }
  const onNSelect = () =>{
   setSelect(false);
 }
 const handleChange = (event) => {
  changeDetailedValue("lodgingCategory" , event.target.value)
 
 };
 const handleChanges = (event) => {
  changeDetailedValue("lodgingType" , event.target.value)

  };
 

  //



  //City
  const [governorate, setGovernourat] = useState('');
  
  const ITEM_HEIGHT = 30;
  const ITEM_PADDING_TOP = 0;

  

  function getStyles(name, governorat) {
    return {
      fontWeight:
      governorat.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  //

  const [dishinputFields, setDishInputFields] = useState([
    { id: uuidv4(), dishName: '' , dishImages: [], dishDescription: '', dishimagename: '' },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("dishinputFields", dishinputFields);
  };

  const handleChangeInput = (id, event) => {
    if (event.target.name === "dishImages") {     
   
          const files = Array.from(event.target.files)
          setImagesPreview([]);

   
          files.forEach(file => {
              const reader = new FileReader();
        
              reader.onload = () => {
   
                  
                  if (reader.readyState === 2) {
                
                        setImagesPreview(oldArray => [...oldArray, reader.result])
                        setNamee(event.target.files[0].name);
                        const newDishInputFields = dishinputFields.map(i => {
                 
                          if(id === i.id) {
                        i["dishImages"] = imagesPreview
                        i["dishimagename"] = namee
                      }
                      
                    
                      return i;
                      
                    })
                    setDishInputFields(newDishInputFields);
                  }
              
              }
         
              reader.readAsDataURL(file)
        
          })
       
    
    }else{
    const newDishInputFields = dishinputFields.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      
      }
 
      return i;
    })
    
    setDishInputFields(newDishInputFields);
  }}

  const handleAddFields = () => {
    setDishInputFields([...dishinputFields, { id: uuidv4(),  dishName: '' , dishImages: [],
     dishDescription: '' , dishimagename:"" }])

  }
  useEffect(() => {
    const dishinputFields = window.localStorage.getItem("dynamic form Dish")
    setDishInputFields(JSON.parse(dishinputFields) || [{  id: uuidv4(),  dishName: '' , dishImages: [],
     dishDescription: '', dishimagename: '' }])
 
    },[])
    
  useEffect(() => {
    window.localStorage.setItem("dynamic form Dish", JSON.stringify(dishinputFields))
    })
  const handleRemoveFields = id => {
    const values  = [...dishinputFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setDishInputFields(values);
  }

  //image
  const [imagesPreview, setImagesPreview] = useState([]);
  const [namee, setNamee] = useState('');

  const [imagesPreviews, setImagesPreviews] = useState([]);

  const [imagesPreviewe, setImagesPreviewe] = useState([]);




detailedFormValues.setImagesTransport = useState([])

const onChangee = e => {
//Transport image
  const files = Array.from(e.target.files)

  setImagesPreviews([]);
  setTrImage([]);
  files.forEach(file => {
      const reader = new FileReader();

      reader.onload = () => {
          if (reader.readyState === 2) {
              setImagesPreviews(oldArray => [...oldArray, reader.result])
              setTrImage(oldArray => [...oldArray, reader.result])
              detailedFormValues.setImagesTransport = imagesPreview
              changeDetailedValue('nameTransport', e.target.files[0].name)
          }
      }

      reader.readAsDataURL(file)
  })

}
detailedFormValues.setImagesLodging = useState([])

const onChangeee = e => {
//lodging
  const files = Array.from(e.target.files)

  setImagesPreviewe([]);
  setLdImage([]);
  files.forEach(file => {
      const reader = new FileReader();

      reader.onload = () => {
          if (reader.readyState === 2) {
              setImagesPreviewe(oldArray => [...oldArray, reader.result])
              setLdImage(oldArray => [...oldArray, reader.result])
              detailedFormValues.setImagesLodging = imagesPreviewe
              changeDetailedValue('nameLodging', e.target.files[0].name)
          }
      }

      reader.readAsDataURL(file)
  })

}
  const color = "#fff"
  const colors = "#E42651"


  const theme = createTheme({
    shape: {
      borderRadius: 40,
    },
  }) 
  // Dish Dialog 
const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // Transport Dialog 
  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  // Lodging Dialog 
const [open2, setOpen2] = React.useState(false);

const handleClickOpen2 = () => {
  setOpen2(true);
};
const handleClose2 = () => {
  setOpen2(false);
};
//Switch
const Change = (event) => { 
  changeDetailedValue('detailedFormValues.value' , event.target.checked);
  detailedFormValues.value = event.target.checked;
  if (detailedFormValues.value === true) {
  changeDetailedValue('setCheckedd' , true);
  detailedFormValues.setCheckedd = true;
}else {
  changeDetailedValue('setCheckedd' , false);
  detailedFormValues.setCheckedd = false;
}
};
const Changes = (event) => {
  changeDetailedValue('detailedFormValues.values' , event.target.checked);
  detailedFormValues.values = event.target.checked;
  if (detailedFormValues.values === true) {
    changeDetailedValue('setCheckedy' , true);
    detailedFormValues.setCheckedy = true;
}else {
  changeDetailedValue('setCheckedy' , false);
  detailedFormValues.setCheckedy = false;
}


};
const Changin = (event) => {
  changeDetailedValue('detailedFormValues.valuess' , event.target.checked);
  detailedFormValues.valuess = event.target.checked;
  if (detailedFormValues.valuess === true) {
    changeDetailedValue('setCheck' , true);
    detailedFormValues.setCheck = true;
}else {
  changeDetailedValue('setCheck' , false);
  detailedFormValues.setCheck = false;
}

};

  return (
    <React.Fragment>
    <Grid container  style={{textAlign: "center" }} spacing={6}>
    <Grid item xs={12} >
    <div style={{ textAlign: "left", display:"flex", alignItems:'column'}}>
 <Typography  style={{ color:"white", textAlign: "left" }}>Does your experience include food ?</Typography>
 <GreenSwitch   onChange={Change} checked={detailedFormValues.value} />
</div>
{
             detailedFormValues.setCheckedd ? (
              <div>
              <ThemeProvider theme={theme}>
    
         <Button style={{textTransform: 'none', 
     width: '12%', height:'20%', color:"#E22357",
      background: "white"}} variant="outlined" onClick={handleClickOpen}
      >
   DISH 
     </Button>
   </ThemeProvider>
      <BootstrapDialog
      fullWidth="500%"
      maxWidth={"500%"}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
   <section className="hero is-fullheight restaurant" >
   <div className={classes.root}>
   <Container component="main">
        <BootstrapDialogTitle style={{fontStyle: "normal",
        fontWeight: 700,
        fontSize: "24px",
        color:"#DA1D6C",
        lineHeight: "29px"}} id="customized-dialog-title" onClose={handleClose}>
     DISH
        </BootstrapDialogTitle>
      
        <Stack
           direction="row"
           spacing={2}
         >
     <p style={{marginTop:"0.5rem" , marginLeft:"1rem", color:"white"}}> Add Dish</p>
    <IconButton
               style={{backgroundColor:"#DA1D6C" ,marginLeft:"2rem"}}
                 onClick={handleAddFields}
               >
   
                 <AddIcon />
               </IconButton>
               <p style={{marginTop:"0.5rem", color:"white"}}>Delete Dish</p>
               <IconButton style={{backgroundColor:"#DA1D6C", marginLeft:"2rem"}}
                disabled={dishinputFields.length === 1} onClick={() => handleRemoveFields()}>
             
                 <RemoveIcon />
               </IconButton>
               </Stack>
      
        <DialogContent dividers>
      
        <Grid container  component="form"  spacing={2}>
        { dishinputFields.map(inputField => (
          
          <div key={inputField.id}>
           
          <Grid item xs={12}  style={{ marginLeft:"2rem" }}>
  <Typography  style={{ color:"white", textAlign: "left"}}>Dish Name :</Typography> 
  <TextField
        id="input-with-icon-textfield"
		    name="dishName"
        value={inputField.dishName}
        onChange={event => handleChangeInput(inputField.id, event)}
        sx={{
          background:color,
          svg: { colors },
          input: { colors },
          label: { colors },
          width:"100%",
          textAlign: "left",
        }}
        required
        fullWidth
        variant="standard"
				placeholder='Dish Name'
              />
<br/>
 <Typography  style={{ color:"white", textAlign: "left" }}>Add photos :</Typography>
 <div className='form-group'>
           <div>
                <label className="file-label">
                    <input className="file-input" type="file" style={{ color:"black" }}
                  name='dishImages'
                  accept='image/*' 
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
                    <span className="file-name" style={{ color:"white" }}>
                    {/*{inputField.dishimagename} */}
                    </span>
                </label>

                {inputField.dishImages.map((dishImages) => (
                     <img src={dishImages} key={inputField.id} alt="Images Preview" className="mt-3 mr-2" width="100" height="100" />
                      ))}
                   </div>
                 </div>
                 <br/>
  <Typography  style={{ color:"white", textAlign: "left", }}>Dish Description :</Typography> 
                 <TextareaAutosize
      name="dishDescription"
      value={inputField.dishDescription}
      onChange={event => handleChangeInput(inputField.id, event)}
      aria-label="minimum height"
      minRows={3}
      placeholder="Dish Description"
      style={{ width: 200 }}
    />

</Grid>
</div> 
       )) } 
</Grid>


        </DialogContent>


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
        </Container>
        </div>
        </section>
      </BootstrapDialog>
      </div>
              ) : (<div></div>)
            }
      </Grid>
      
  
      <Grid item xs={12} >
      <div style={{ textAlign: "left", display:"flex", alignItems:'column'}}>
      <Typography  style={{ color:"white", textAlign: "left" }}>Does your experience include transport ?</Typography>
      <GreenSwitch   onChange={Changes} checked={detailedFormValues.values}  />
  
    </div>
    {
             detailedFormValues.setCheckedy ? (  <div>
              <ThemeProvider theme={theme}>
            
         <Button style={{textTransform: 'none', 
     width: '12%', height:'20%', color:"#E22357",
      background: "white"}} variant="outlined" onClick={handleClickOpen1}
      >
   TRANSPORT 
     </Button>
   </ThemeProvider>
      <BootstrapDialog
      fullWidth="300%"
       maxWidth={"300%"}
        onClose={handleClose1}
        aria-labelledby="customized-dialog-title"
        open={open1}
      >
          <section className="hero is-fullheight car" >
   <div className={classes.root}>
   <Container component="main">
        <BootstrapDialogTitle style={{fontStyle: "normal",
        fontWeight: 700,
        fontSize: "24px",
        color:"#DA1D6C",
        lineHeight: "29px"}} id="customized-dialog-title" onClose={handleClose1}>
         TRANSPORT
        </BootstrapDialogTitle>
       
       <div>
   
        <DialogContent dividers>
        <Grid container  component="form"  spacing={2}>
         
          <Grid item xs={12} >
    <Typography  style={{ color:"white", textAlign: "left", }}>Vehicle Name:</Typography> 
	  <TextField
              required
              id="name"
              name="name"
              placeholder="Vehicle Name"
              fullWidth
              variant="standard"
              value={detailedFormValues.vname}
              onChange={(e) => changeDetailedValue('vname', e.target.value)} 
             
              style={{ textAlign: "left", backgroundColor:"white", borderRadius:'6.1568px', width:"30%" }}
            />
     
          </Grid>
          <Grid item xs={12} md={4} > 
          <br/>
          
          
          <Typography  style={{ color:"white", textAlign: "left" }}>Vehicle Photos :</Typography> 
         
           <div className='form-group' style={{marginTop:"1rem"}}>
           <div>
                <label className="file-label">
                    <input className="file-input" type="file" style={{ color:"white" }}
                  name='patente'
                  accept='image/*,application/pdf' 
                  onChange={onChangee}
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
                    {detailedFormValues.nameTransport}
                    </span>
                </label>

                 {TrImage.map(imgs => (
                   <img src={imgs} key={imgs} alt="Images Preview" className="mt-3 mr-2" width="55" height="52" />
                    ))}

                          </div>
                            </div>
                          </Grid>
       
                          <Grid item xs={12} md={4}>
                          <Typography  style={{ color:"white", textAlign: "left", marginLeft:"2rem" }}>The Go :</Typography> 
                          <Stack direction="row" spacing={2}>
                          <Stack  spacing={2}>

          <Typography  style={{ color:"white", textAlign: "left" }}>From :</Typography> 
          <FormControl  size="small">
        <Select				
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={detailedFormValues.gofrom}
          onChange={(e) => changeDetailedValue('gofrom', e.target.value)} 
          input={<OutlinedInput  />}
          MenuProps={MenuProps}
          style={{backgroundColor:"white"}}
        >
          {states.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, governorate, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
</FormControl>
</Stack>
<Stack spacing={2} style={{marginLeft:"4rem"}}>

          <Typography  style={{ color:"white", textAlign: "left" }}>To :</Typography> 
     
          <FormControl  size="small">
        <Select				
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={detailedFormValues.goto} 
          onChange={(e) => changeDetailedValue('goto', e.target.value)} 
          input={<OutlinedInput  />}
          MenuProps={MenuProps}
          style={{backgroundColor:"white"}}
        >
          {states.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, governorate, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
</FormControl>
                            </Stack>
                          </Stack>
                            </Grid> 
                        

         <Grid item xs={12} md={4}>
         <Typography  style={{ color:"white", textAlign: "left", marginLeft:"2rem" }}>The Return :</Typography> 
                      
         <Stack direction="row" spacing={2}>
            <Stack  spacing={2}>

          <Typography  style={{ color:"white", textAlign: "left" }}>From :</Typography> 
          <FormControl size="small">
        <Select				
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={detailedFormValues.returnfrom}
          onChange={(e) => changeDetailedValue('returnfrom', e.target.value)} 
          input={<OutlinedInput  />}
          MenuProps={MenuProps}
          style={{backgroundColor:"white"}}
        >
          {states.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, governorate, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
</FormControl>
</Stack>
<Stack spacing={2} style={{marginLeft:"4rem"}}>

          <Typography  style={{ color:"white", textAlign: "left" }}>To :</Typography> 
     
          <FormControl  size="small">
        <Select				
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={detailedFormValues.returnto}
          onChange={(e) => changeDetailedValue('returnto', e.target.value)} 
          input={<OutlinedInput  />}
          MenuProps={MenuProps}
          style={{backgroundColor:"white"}}
        >
          {states.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, governorate, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
</FormControl>
                            </Stack>
                          </Stack>
                            </Grid> 
    
                            <Grid item xs={12} md={4} >
    <Typography  style={{ color:"white", textAlign: "left", }}>Number of Seats:</Typography> 
    <br/>
	  <TextField
              required
              id="name"
              name="name"
              placeholder="Number of Seats"
              fullWidth
              variant="standard"
              type="number"
              value={detailedFormValues.nbreseats}
              onChange={(e) => changeDetailedValue('nbreseats', e.target.value)} 
              style={{ textAlign: "left", backgroundColor:"white", borderRadius:'6.1568px', width:"90%" }}
            />
     
          </Grid>
          <Grid item xs={12} md={4}>
                          
                          <Stack direction="row" spacing={2}>
                          <Stack  spacing={2}>

          <Typography  style={{ color:"white", textAlign: "left" }}>Departure :</Typography> 
          <TextField
        id="time"
        type="time"
        defaultValue="07:30"
        value={detailedFormValues.departurego}
        onChange={(e) => changeDetailedValue('departurego', e.target.value)} 
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
        sx={{ width: 150 }}
        style={{marginLeft:'10px', backgroundColor:"white", borderRadius:'6.1568px' }}
      />
         
  
</Stack>
<Stack spacing={2} >

          <Typography  style={{ color:"white", textAlign: "left" }}>Arrival :</Typography> 
          <TextField
        id="time"
        type="time"
        defaultValue="07:30"
        value={detailedFormValues.arrivalgo}
        onChange={(e) => changeDetailedValue('arrivalgo', e.target.value)} 
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
        sx={{ width: 150 }}
        style={{marginLeft:'10px', backgroundColor:"white", borderRadius:'6.1568px' }}
      />

                            </Stack>
                          </Stack>
                            </Grid> 
                        

         <Grid item xs={12} md={4}>
      
                      
         <Stack direction="row" spacing={2}>
            <Stack  spacing={2} style={{marginLeft:"2rem"}}>
          <Typography  style={{ color:"white", textAlign: "left" }}>Departure :</Typography> 
          <TextField
        id="time"
        type="time"
        defaultValue="07:30"
        value={detailedFormValues.departurereturn}
        onChange={(e) => changeDetailedValue('departurereturn', e.target.value)} 
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
        sx={{ width: 150 }}
        style={{marginLeft:'10px', backgroundColor:"white", borderRadius:'6.1568px',  }}
      />
      
</Stack>
<Stack spacing={2} >
          <Typography  style={{ color:"white", textAlign: "left" }}>Arrival :</Typography> 
          <TextField
        id="time"
        type="time"
        defaultValue="07:30"
        value={detailedFormValues.arrivalreturn}
        onChange={(e) => changeDetailedValue('arrivalreturn', e.target.value)} 
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
        sx={{ width: 150 }}
        style={{marginLeft:'10px', backgroundColor:"white", borderRadius:'6.1568px' }}
      />
          
                            </Stack>
                          </Stack>
                            </Grid> 


<Grid item xs={12} >
<Typography  style={{ color:"white", textAlign: "left" }}>Vehicle Rules :</Typography> 
<TextareaAutosize
value={detailedFormValues.vehiclerules}
onChange={(e) => changeDetailedValue('vehiclerules', e.target.value)}
      aria-label="minimum height"
      minRows={4}
      placeholder="Some rules that you should definently write here, you know!"
      style={{ width: 600 }}
    />
</Grid>
                      </Grid> 
     

        </DialogContent>
        </div> 


        <DialogActions>
        <ThemeProvider theme={theme}>
          <Button 
          style={{textTransform: 'none', color:"white",
           background: "linear-gradient(#F02F32,#DA1D6C)", width: '20%',height:'50%',marginTop:"-3rem"}}
          // onClick={handleSubmit}
         >
            Confirm
          </Button>

          </ThemeProvider>
        </DialogActions>
        </Container>
        </div>
        </section>
      </BootstrapDialog>
      </div>
              ) : (<div></div>)
            }
      </Grid>


      <Grid item xs={12} >
      <div style={{ textAlign: "left", display:"flex", alignItems:'column'}}>
 <Typography  style={{ color:"white", textAlign: "left" }}>Does your experience include Lodging ?</Typography>
 <GreenSwitch   onChange={Changin}  checked={detailedFormValues.valuess} />
 
</div>
{
             detailedFormValues.setCheck ? (  <div>
              <ThemeProvider theme={theme}>
                
         <Button style={{textTransform: 'none', 
     width: '12%', height:'20%', color:"#E22357",
      background: "white"}} variant="outlined" onClick={handleClickOpen2}
      >
   LODGING
     </Button>
   </ThemeProvider>
      <BootstrapDialog
      fullWidth="300%"
      maxWidth={"300%"}
        onClose={handleClose2}
        aria-labelledby="customized-dialog-title"
        open={open2}
      >
         <section className="hero is-fullheight he" >
   <div className={classes.root}>
   <Container component="main">
        <BootstrapDialogTitle style={{fontStyle: "normal",
        fontWeight: 700,
        fontSize: "24px",
        color:"#DA1D6C",
        lineHeight: "29px"}} id="customized-dialog-title" onClose={handleClose2}>
         LODGING
        </BootstrapDialogTitle>
       
       <div //key={inputField.id}
       >
   
        <DialogContent dividers>

       <Grid container  style={{textAlign: "left" }} spacing={2}>
       <Grid item xs={12} md={4}> 
      <Typography  style={{ color:"white", textAlign: "left", }}>Lodging Category :</Typography> 
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          displayEmpty
          value={detailedFormValues.lodgingCategory}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'Without label' }}
          style={{ textAlign: "left", backgroundColor:"white", height:"35px"}}
        >
          <MenuItem  onClick={onNSelect}value={"Whole house"}>Whole house </MenuItem>
          <MenuItem  onClick={onNSelect}value={"Private room"}>Private room</MenuItem>
          <MenuItem  onClick={onNSelect} value={"Shared room"}>Shared room</MenuItem>
          <MenuItem  onClick={onSelect} selected={select} value="Other">Other</MenuItem>

        </Select>
      </FormControl>
      </Grid>
    { select ? (
         <Grid item xs={12} md={4}>
         <Typography  style={{ color:"white", textAlign: "left", }}>Other lodging category :</Typography> 
	  <TextField
              required
              id="other"
              name="other"
              placeholder="Other"
              fullWidth
              variant="standard"
              value={detailedFormValues.lodgingCategory}
              onChange={handleChange}
              style={{ textAlign: "left", backgroundColor:"white", borderRadius:'8px 8px 8px 8px' }}
            />
         </Grid>

    ):(
      <div></div>
    )
    }
    <br />
    <Grid item xs={12} md={4}> 
    <Typography  style={{ color:"white", textAlign: "left", }}>Lodging Type :</Typography> 
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          displayEmpty
          value={detailedFormValues.lodgingType}
          label="Type Logement"
          onChange={handleChanges}
          style={{ textAlign: "left", backgroundColor:"white", height:"35px" }}
>
          <MenuItem onClick={onNSelected} value={"House"}>House</MenuItem>
          <MenuItem onClick={onNSelected} value={"Apartment"}>Apartment</MenuItem>
          <MenuItem onClick={onNSelected} value={"Hotel"}>Hotel</MenuItem>
          <MenuItem onClick={onNSelected} value={"House hotel"}>House hotel</MenuItem>
          <MenuItem onClick={onNSelected}value={"Residence"}>Residence</MenuItem>
          <MenuItem onClick={onNSelected} value={"Motel"}>Motel</MenuItem>
          <MenuItem onClick={onSelected} selected={selected} value="Other">Other</MenuItem>

        </Select>
      </FormControl>
    </Grid>
    { selected ? (
         <Grid item xs={12} md={4}>
         <Typography  style={{ color:"white", textAlign: "left", }}>Other lodging type :</Typography> 
	  <TextField
              required
              id="other"
              name="other"
              placeholder="Other"
              fullWidth
              variant="standard"
              value={detailedFormValues.lodgingType}
              onChange={handleChanges}
              style={{ textAlign: "left", backgroundColor:"white", borderRadius:'8px 8px 8px 8px' }}
            />
         </Grid>

    ):(
      <div></div>
    )
    }
    <Grid item xs={12} md={4}>

  <Typography  style={{ color:"white", textAlign: "left" }}>Lodging Photos:</Typography> 

  <div>
              <label className="file-label">
                  <input className="file-input" type="file" style={{ color:"white" }}
                name='patente'
                accept='image/*,application/pdf' 
                onChange={onChangeee}
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
                  {detailedFormValues.nameLodging}
                  </span>
              </label>
                                  {LdImage.map(imge => (
                                      <img src={imge} key={imge} alt="Images Preview" className="mt-3 mr-2" width="55" height="52" />
                                  ))}

                              </div>
  
        

                      </Grid>

                      <Grid item xs={12} md={4}>
      
         <Typography  style={{ color:"white", textAlign: "left" }}>Begin :</Typography> 
                      
       
            <TextField
        id="datetime-local"
        style={{ textAlign: "left", backgroundColor:"white", borderRadius:'8px 8px 8px 8px' }}
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        value={detailedFormValues.begindate}
        onChange={(e) => changeDetailedValue('begindate', e.target.value)}
        sx={{ width: 250 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      </Grid> 

         <Grid item xs={12} md={4}>
      
      <Typography  style={{ color:"white", textAlign: "left" }}>End :</Typography> 
      <TextField
      style={{ textAlign: "left", backgroundColor:"white", borderRadius:'8px 8px 8px 8px' }}
        id="datetime-local"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        value={detailedFormValues.enddate}
        onChange={(e) => changeDetailedValue('enddate', e.target.value)}
        sx={{ width: 250 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
                   
     
                         </Grid> 
                         <Grid item xs={12} md={4}>
    <Typography  style={{ color:"white", textAlign: "left" }}>Address:</Typography> 
	  <TextField
              required
              id="address"
              name="address"
              placeholder='Lodging Address'
              fullWidth
              autoFocus
              variant="standard"
              value={detailedFormValues.lodgingaddress}
              onChange={(e) => changeDetailedValue('lodgingaddress', e.target.value)} 
              style={{ textAlign: "left", backgroundColor:"white", borderRadius:'8px 8px 8px 8px' }}

            />
          </Grid>
          <Grid item xs={12} >
            <Typography  style={{ color:"white", textAlign: "left" }}>Description: </Typography> 
       <TextareaAutosize
      aria-label="maximum height"
      placeholder="Lodging’s description..."
      style={{ width: "65%", height:"100%", borderRadius:'8px 8px 8px 8px'}}
      value={detailedFormValues.lodgingdescription}
      onChange={(e) => changeDetailedValue('lodgingdescription', e.target.value)} 
    />
</Grid>
<Grid item xs={12} md={6}>
  <br/>
            <Typography  style={{ color:"white", textAlign: "left" }}>Instructions : </Typography> 
       <TextareaAutosize
      aria-label="maximum height"
      placeholder="Lodging’s Instructions..."
      style={{ width: "100%", height:"100%", borderRadius:'8px 8px 8px 8px'}}
      value={detailedFormValues.lodginginstructions}
      onChange={(e) => changeDetailedValue('lodginginstructions', e.target.value)} 
    />
</Grid>
<Grid item xs={12} md={6}>
<br/>

            <Typography  style={{ color:"white", textAlign: "left" }}>Criteria : </Typography> 
       <TextareaAutosize
      aria-label="maximum height"
      placeholder="Lodging’s Criteria..."
      style={{ width: "100%", height:"100%", borderRadius:'8px 8px 8px 8px'}}
      value={detailedFormValues.lodgingCriteria}
      onChange={(e) => changeDetailedValue('lodgingCriteria', e.target.value)} 
    />
</Grid>
</Grid>

        </DialogContent>
        </div> 


        <DialogActions>
        <ThemeProvider theme={theme}>
          <Button 
          style={{textTransform: 'none', color:"white",
           background: "linear-gradient(#F02F32,#DA1D6C)", width: '20%',height:'50%'}}
          // onClick={handleSubmit}
         >
            Confirm
          </Button>

          </ThemeProvider>
        </DialogActions>
        </Container>
        </div>
        </section>
      </BootstrapDialog>
      </div>
              ) : (<div></div>)
            }
      </Grid>
    </Grid>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </React.Fragment>
  );
}

export default Services


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
    padding: theme.spacing(12),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


const states = [
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