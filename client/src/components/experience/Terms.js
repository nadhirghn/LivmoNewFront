import React, { useState, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'


import { v4 as uuidv4 } from 'uuid';

//
import { newExperience, clearErrors } from '../../actions/experienceActions'
import { NEW_EXPERIENCE_RESET } from '../../constants/experienceConstants'

//MUI IMPORTS
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Terms = ({ compteFormValues ,changeCompteValue,
  detailedFormValues, changeDetailedValue,
    documentFormValues, changeDocumentValue, 
    informationFormValues, changeInformationValue, 
    generalFormValues, changeGeneralValue }) => {

     

      const switchHandler = (event) => {
        documentFormValues.setChecked = event.target.checked;
       if (documentFormValues.setChecked === true) {
      changeDocumentValue('pets', "yes")
      documentFormValues.pets = "yes"
      console.log(documentFormValues.pets)
      
       }else{
        changeDocumentValue('pets', "no")
        documentFormValues.pets = "no"
        console.log(documentFormValues.pets)
       }
      };
      const color = "#fff"
      const colors = "#E42651"

      const theme = createTheme({
        shape: {
          borderRadius: 40,
        },
      }) 
      //Dialog
      const [open, setOpen] = React.useState(false);

      const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
  
      //Activity local storage
      const [inputFields, setInputFields] = useState([
        { id: uuidv4(), activitytitle: ' ', activitydescription: ' ', startactivity: " ", endactivity: " " ,
        activityduration: 0, activityimages : [], activityimagename: ""
       },
      ]);

      useEffect(() => {
        const inputFields = window.localStorage.getItem("dynamic form")
        setInputFields(JSON.parse(inputFields) || [{ id: uuidv4(), activitytitle: ' ', activitydescription: ' ', startactivity: " ", endactivity: " " ,
        activityduration: 0, activityimages : [], activityimagename: ""
       }])
     
        },[])
        //Dish local Storage
        const [dishinputFields, setDishInputFields] = useState([
          { id: uuidv4(), dishName: '' , dishImages: [], dishDescription: '', dishimagename: '' },
        ]);
        

        useEffect(() => {
          const dishinputFields = window.localStorage.getItem("dynamic form Dish")
          setDishInputFields(JSON.parse(dishinputFields) || [{  id: uuidv4(),  dishName: '' , dishImages: [],
           dishDescription: '', dishimagename: '' }])
       
          },[])

          
          

          //experience image local storage
          const [YourIdeaImage, setYourIdeaImage] = useState(() => {
            const saved = localStorage.getItem("YourIdeaImage");
            const initialValue = JSON.parse(saved);
            return initialValue || [];
          });
          //transport image local storage
          const [TrImage, setTrImage] = useState(() => {
            const save = localStorage.getItem("TrImage");
            const initialValue = JSON.parse(save);
            return initialValue || [];
          });
               //Lodging image local storage
               const [LdImage, setLdImage] = useState(() => {
                const saving = localStorage.getItem("LdImage");
                const initialValue = JSON.parse(saving);
                return initialValue || [];
              });
      //add exp
      const alert = useAlert();
      const dispatch = useDispatch();
  
      const { loading, error, success } = useSelector(state => state.newExperience);
      
      useEffect(() => {


        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }
      
        if (success) {
            alert.success('Experience created successfully');
            localStorage.clear();
            dispatch({ type: NEW_EXPERIENCE_RESET })
        }
      
      }, [dispatch, alert, error, success, ])

      

      const submitHandler = (e) => {
        e.preventDefault();
      
        const formData = new FormData();
        /*formData.set('exptitle', compteFormValues.exptitle);
        formData.set('theme', compteFormValues.theme);
        formData.set('subtheme', compteFormValues.subtheme);
        formData.set('location', compteFormValues.location);
        formData.set('price', compteFormValues.price );
        formData.set('unit', compteFormValues.unit);
        formData.set('spots', compteFormValues.spots);
        formData.set('map', compteFormValues.map);
        YourIdeaImage.forEach(image => {
           formData.append('YourIdeaImage', image)
         })
         if (informationFormValues.durationdays !== undefined) {
         formData.set('durationdays', informationFormValues.durationdays);
         }else {
          formData.set('durationdays', "");
         }
         if (informationFormValues.durationhours !== undefined) {
         formData.set('durationhours', informationFormValues.durationhours);
         }else {
          formData.set('durationhours', "");
         }
         if (informationFormValues.startdate !== undefined) {
         formData.set('startdate', informationFormValues.startdate);
         }else {
         formData.set('startdate', "");
         }
         if (informationFormValues.enddate !== undefined) {
         formData.set('enddate', informationFormValues.enddate);
         }else {
         formData.set('enddate', informationFormValues.enddate);
         }
         formData.set('season', informationFormValues.season);
         if (informationFormValues.dayoff !== undefined) {
         formData.set('dayoff', informationFormValues.dayoff);
         }else {
         formData.set('dayoff', "");
         }
         if (informationFormValues.startime !== undefined) {
         formData.set('startime', informationFormValues.startime);
         }else {
         formData.set('startime', "");
         }
         if (informationFormValues.endtime !== undefined) {
         formData.set('endtime', informationFormValues.endtime);
         }else {
         formData.set('endtime', informationFormValues.endtime);
         }
         formData.set('plan', informationFormValues.plan);
         formData.set('parage', documentFormValues.parage);
         formData.set('pets', documentFormValues.pets);
         formData.set('othercriteria', documentFormValues.othercriteria);
         //Transport
         if (detailedFormValues.vname !== undefined) {
         formData.set('vname', detailedFormValues.vname);
         }else {
         formData.set('vname', "");
         }
         if (detailedFormValues.nbreseats !== undefined) {
         formData.set('nbreseats', detailedFormValues.nbreseats);
         }else {
         formData.set('nbreseats', "");
         }
         if (detailedFormValues.vehiclerules !== undefined) {
         formData.set('vehiclerules', detailedFormValues.vehiclerules);
         }else {
         formData.set('vehiclerules', "");
         }
         if (detailedFormValues.gofrom !== undefined) {
         formData.set('gofrom', detailedFormValues.gofrom);
         }else {
         formData.set('gofrom', "");
         }
         if (detailedFormValues.goto !== undefined) {
         formData.set('goto', detailedFormValues.goto);
         }else {
         formData.set('goto', "");
         }
         if (detailedFormValues.departurego !== undefined) {
         formData.set('departurego', detailedFormValues.departurego);
         }else {
         formData.set('departurego', "");
         }
         if (detailedFormValues.arrivalgo !== undefined) {
         formData.set('arrivalgo', detailedFormValues.arrivalgo);
         }else {
         formData.set('arrivalgo', "");
         }
         if (detailedFormValues.returnfrom !== undefined) {
         formData.set('returnfrom', detailedFormValues.returnfrom);
         }else {
         formData.set('returnfrom', "");
         }
         if (detailedFormValues.returnto !== undefined) {
         formData.set('returnto', detailedFormValues.returnto);
         }else {
         formData.set('returnto', "");
         }
         if (detailedFormValues.departurereturn !== undefined) {
         formData.set('departurereturn', detailedFormValues.departurereturn);
         }else {
         formData.set('departurereturn', "");
         }
         if (detailedFormValues.arrivalreturn !== undefined) {
         formData.set('arrivalreturn', detailedFormValues.arrivalreturn);
         }else {
         formData.set('arrivalreturn', "");
         }
         if (TrImage.length !== 0) {
         TrImage.forEach(image => {
          formData.append('TrImage', image)
        })
          }else {
            TrImage.forEach(image => {
              formData.append('TrImage', [])
            })
          }
          //Lodging
          if (detailedFormValues.lodgingCategory !== undefined) {
        formData.set('lodgingCategory', detailedFormValues.lodgingCategory);
          }else {
            formData.set('lodgingCategory', "");
          }
        if (detailedFormValues.lodgingType !== undefined) {
        formData.set('lodgingType', detailedFormValues.lodgingType);
        }else {
        formData.set('lodgingType', "");
        }
        if (detailedFormValues.lodgingaddress !== undefined) {
        formData.set('lodgingaddress', detailedFormValues.lodgingaddress);
        }else {
        formData.set('lodgingaddress', "");
        }
        if (detailedFormValues.begindate !== undefined) {
        formData.set('begindate', detailedFormValues.begindate);
        }else {
        formData.set('begindate', "");
        }
        if (detailedFormValues.enddate !== undefined) {
        formData.set('enddatee', detailedFormValues.enddate);
        }else {
        formData.set('enddatee', "");
        }
        if (detailedFormValues.lodgingdescription !== undefined) {
        formData.set('lodgingdescription', detailedFormValues.lodgingdescription);
        }else {
        formData.set('lodgingdescription', "");
        }
        if (detailedFormValues.lodginginstructions !== undefined) {
        formData.set('lodginginstructions', detailedFormValues.lodginginstructions);
        }else {
        formData.set('lodginginstructions', "");
        }
        if (detailedFormValues.lodgingCriteria !== undefined) {
        formData.set('lodgingCriteria', detailedFormValues.lodgingCriteria);
        }else {
        formData.set('lodgingCriteria', "");
        }
        if (LdImage.length !== 0) {
          LdImage.forEach(image => {
           formData.append('LdImage', image)
         })
           }else {
               LdImage.forEach(image => {
               formData.append('LdImage', [])
             })
           }
*/
      
//Dish Dynamic Form
            formData.append('size',dishinputFields.length )

   
            dishinputFields.forEach(e => {
              formData.append('id', JSON.stringify(e.id))
              formData.append('dishName', JSON.stringify(e.dishName))
              formData.append('dishDescription', JSON.stringify(e.dishDescription))  
              e.dishImages.forEach(f => { 
              formData.append('dishImages', f)
              })
            })
    


//Activity Dynamic Form

      
  
        dispatch(newExperience(formData))
      }

      const [fff , setFff] = useState([dishinputFields.dishImages])
      const ff = () => {
        
        console.log(fff)
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
        {compteFormValues.exptitle}
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Grid container   spacing={2} component="form"  //onSubmit={HandleSubmit} Interval date
         >
          <Grid item xs={12} md={3}>
          <Typography  style={{ color:"black", textAlign: "left" }}>Experience Theme :</Typography> 
           <p>{compteFormValues.theme}</p>
          </Grid>
          <Grid item xs={12} md={3}>
          <Typography  style={{ color:"black", textAlign: "left" }}>Sub-Theme :</Typography> 
             <p>{compteFormValues.subtheme}</p>
          </Grid>

          <Grid item xs={12} md={3}>
          <Typography  style={{ color:"black", textAlign: "left" }}>Experience  Location :</Typography> 
            <p>{compteFormValues.location}</p>
          </Grid>
          <Grid item xs={12} md={3}>
          <Typography  style={{ color:"black", textAlign: "left" }}>Price Per Person :</Typography> 
             <p>{compteFormValues.price} / {compteFormValues.unit}</p>
          </Grid>
          <Grid item xs={12} md={3}>
          <Typography  style={{ color:"black", textAlign: "left" }}>Spots :</Typography> 
             <p>{compteFormValues.spots}</p>
          </Grid>
          <Grid item xs={12} md={3}>
          <Typography  style={{ color:"black", textAlign: "left" }}>Maps Link :</Typography> 
             <p>{compteFormValues.map}</p>
          </Grid>
          {
             informationFormValues.setChe ? (
              <Grid item xs={12} md={3}>
          <Typography  style={{ color:"black", textAlign: "left" }}>Duration :</Typography> 
              <p>{informationFormValues.durationdays} Days , {informationFormValues.durationhours} Hours</p>
                </Grid>
              ) : (<div></div>)
            }
            { informationFormValues.setCh ? (
                 <Grid item xs={12} md={3}>
                  <Typography  style={{ color:"black", textAlign: "left" }}>Experience Date :</Typography>
                  <p>{informationFormValues.startdate} - {informationFormValues.enddate}</p>
                  </Grid>
              ) : (<div></div>)
            }
          <Grid item xs={12} md={3}>
          <Typography  style={{ color:"black", textAlign: "left" }}>Season :</Typography> 
             <p>{informationFormValues.season}</p>
          </Grid>
          {
             informationFormValues.setC ? (
              <>
          <Grid item xs={12} md={3}>
          <Typography  style={{ color:"black", textAlign: "left" }}>Days Off :</Typography> 
             <p>{informationFormValues.dayoff}</p>
          </Grid>
          <Grid item xs={12} >
          <Typography  style={{ color:"black", textAlign: "left" }}>Time Intervals :</Typography> 
             <p>{informationFormValues.startime}-{informationFormValues.endtime}</p>
          </Grid>
          </>
                ) : (<div></div>)
              }
          <Grid item xs={12} >
          <Typography  style={{ color:"black", textAlign: "left" }}>Experience Description :</Typography> 
             <p>{informationFormValues.plan}</p>
          </Grid>
          <Grid item xs={12} md={4}>
          <Typography  style={{ color:"black", textAlign: "left" }}>Minimum Age :</Typography> 
             <p>{documentFormValues.parage}</p>
          </Grid>
          <Grid item xs={12} md={4}>
          <Typography  style={{ color:"black", textAlign: "left" }}>Pets :</Typography> 
             <p>{documentFormValues.pets}</p>
          </Grid>
          <Grid item xs={12} md={4}>
          <Typography  style={{ color:"black", textAlign: "left" }}>Other criteria :</Typography> 
             <p>{documentFormValues.othercriteria}</p>
          </Grid>
          <Grid item xs={12} >
          <Typography  style={{ color:"black", textAlign: "left" }}>Photos :</Typography> 

          <ImageList sx={{ width: "50%", height: "80%" }}>
      {YourIdeaImage.map((item) => (
        <ImageListItem key={item}>
          <img
            src={item}
            srcSet={item}
            alt={item}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
   
          </Grid>
          <DialogContent dividers>
          { inputFields.map(inputField => (
       <div key={inputField.id}>
          <Grid container   spacing={2} component="form"  //onSubmit={HandleSubmit} Interval date
         >
          
          <Grid item xs={12} md={3}>
          <Typography  style={{ color:"black", textAlign: "left" }}>Activity :</Typography> 
          <p>{inputField.activitytitle}</p>
          </Grid>
          <Grid item xs={12} md={3}>
          <Typography  style={{ color:"black", textAlign: "left" }}>Duration :</Typography> 
          <p>{inputField.activityduration}</p>
          </Grid>
          <Grid item xs={12} md={3}>
          <Typography  style={{ color:"black", textAlign: "left" }}>Start :</Typography> 
          <p>{inputField.startactivity}</p>
          </Grid>
          <Grid item xs={12} md={3} >
          <Typography  style={{ color:"black", textAlign: "left" }}>End :</Typography> 
          <p>{inputField.endactivity}</p>
          </Grid>
          <Grid item xs={12} >
          <Typography  style={{ color:"black", textAlign: "left" }}>Activity’s Description :</Typography> 
          <p>{inputField.activitydescription}</p>
          </Grid>
          <Grid item xs={12} >
          <Typography  style={{ color:"black", textAlign: "left" }}>Photos :</Typography> 
          <ImageList sx={{ width: "50%", height: "80%" }}>
      {inputField.activityimages.map((item) => (
        <ImageListItem key={item}>
          <img
            src={item}
            srcSet={item}
            alt={item}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
          
          </Grid>
          

          </Grid>
          </div>
            )) } 
          </DialogContent>
          {
             detailedFormValues.setCheckedd ? (
          <DialogContent dividers>
          { dishinputFields.map(inputField => (
          <div key={inputField.id}>
         
        <Grid container   spacing={2} component="form"  //onSubmit={HandleSubmit} Interval date
       >

      <Grid item xs={12} md={4}>
      <Typography  style={{ color:"black", textAlign: "left" }}>Dish :</Typography> 
      <p>{inputField.dishName}</p>
      </Grid>
      <Grid item xs={12} md={6}>
      <Typography  style={{ color:"black", textAlign: "left" }}>Dish  Description :</Typography> 
      <p>{inputField.dishDescription}</p>
      </Grid>
      <Grid item xs={12}>
      <Typography  style={{ color:"black", textAlign: "left" }}>Photos :</Typography> 
      <ImageList sx={{ width: "50%", height: "80%" }}>
      {inputField.dishImages.map((item) => (
        <ImageListItem key={item}>
          <img
            src={item}
            srcSet={item}
            alt={item}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
      </Grid>
        </Grid>
        </div>
      )) } 
        </DialogContent>
         ) : (<div></div>)
        }

{
             detailedFormValues.setChecked ? ( 
          <DialogContent dividers>
        
          <Grid container   spacing={2} component="form"  //onSubmit={HandleSubmit} Interval date
         >
          <Grid item xs={12} md={4}>
          <Typography  style={{ color:"black", textAlign: "left" }}>Transport :</Typography> 
          <p>{detailedFormValues.vname}</p>
          </Grid>
          <Grid item xs={12} md={4}>
          <Typography  style={{ color:"black", textAlign: "left" }}>Seats :</Typography> 
          <p>{detailedFormValues.nbreseats}</p>
          </Grid>
          <Grid item xs={12} md={4}>
          <Typography  style={{ color:"black", textAlign: "left" }}>Vehicule Rules :</Typography> 
          <p>{detailedFormValues.vehiclerules}</p>
          </Grid>
          <Grid item xs={12} >
          <Typography  style={{ color:"#DA1D6C", textAlign: "left" }}>The Go :</Typography> 
         
          </Grid>
          <Grid item xs={12} md={3} >
          <Typography  style={{ color:"black", textAlign: "left" }}>From :</Typography> 
         <p>{detailedFormValues.gofrom}</p>
          </Grid>
          <Grid item xs={12} md={3} >
          <Typography  style={{ color:"black", textAlign: "left" }}>To :</Typography> 
         <p>{detailedFormValues.goto}</p>
          </Grid>
          <Grid item xs={12} md={3} >
          <Typography  style={{ color:"black", textAlign: "left" }}>Departure :</Typography> 
         <p>{detailedFormValues.departurego}</p>
          </Grid>
          <Grid item xs={12} md={3} >
          <Typography  style={{ color:"black", textAlign: "left" }}>Arrival :</Typography> 
         <p>{detailedFormValues.arrivalgo}</p>
          </Grid>
          <Grid item xs={12} >
          <Typography  style={{ color:"#DA1D6C", textAlign: "left" }}>The Return :</Typography> 
         
          </Grid>
          <Grid item xs={12} md={3} >
          <Typography  style={{ color:"black", textAlign: "left" }}>From :</Typography> 
         <p>{detailedFormValues.returnfrom}</p>
          </Grid>
          <Grid item xs={12} md={3} >
          <Typography  style={{ color:"black", textAlign: "left" }}>To :</Typography> 
         <p>{detailedFormValues.returnto}</p>
          </Grid>
          <Grid item xs={12} md={3} >
          <Typography  style={{ color:"black", textAlign: "left" }}>Departure :</Typography> 
         <p>{detailedFormValues.departurereturn}</p>
          </Grid>
          <Grid item xs={12} md={3} >
          <Typography  style={{ color:"black", textAlign: "left" }}>Arrival :</Typography> 
        <p>{detailedFormValues.arrivalreturn}</p>
         
          </Grid>
          <Grid item xs={12} >
          <Typography  style={{ color:"black", textAlign: "left" }}>Photos :</Typography> 
          <ImageList sx={{ width: "50%", height: "80%" }}>
      {TrImage.map((item) => (
        <ImageListItem key={item}>
          <img
            src={item}
            srcSet={item}
            alt={item}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
          </Grid>
          </Grid>

          </DialogContent>
              ) : (<div></div>)
            }

{
             detailedFormValues.setCheck ? (
          
          <DialogContent dividers>
        
        <Grid container   spacing={2} component="form"  //onSubmit={HandleSubmit} Interval date
       >
      <Grid item xs={12} md={4} >
        <Typography  style={{ color:"black", textAlign: "left" }}>Lodging Category :</Typography> 
      <p>{detailedFormValues.lodgingCategory}</p>
        </Grid>
        <Grid item xs={12} md={4} >
        <Typography  style={{ color:"black", textAlign: "left" }}>Lodging Type :</Typography> 
      <p>{detailedFormValues.lodgingType}</p>
        </Grid>
        <Grid item xs={12} md={4} >
        <Typography  style={{ color:"black", textAlign: "left" }}>Adresse :</Typography> 
      <p>{detailedFormValues.lodgingaddress}</p>
        </Grid>
        <Grid item xs={12} md={4}>
        <Typography  style={{ color:"black", textAlign: "left" }}>Begins :</Typography> 
        <p>{detailedFormValues.begindate}</p>
        </Grid>
        <Grid item xs={12} md={4}>
        <Typography  style={{ color:"black", textAlign: "left" }}>Ends :</Typography> 
        <p>{detailedFormValues.enddate}</p>
        </Grid>
        <Grid item xs={12} md={4}>
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography  style={{ color:"black", textAlign: "left" }}>Lodging Description :</Typography> 
        <p>{detailedFormValues.lodgingdescription}</p>
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography  style={{ color:"black", textAlign: "left" }}>Instructions :</Typography> 
        <p>{detailedFormValues.lodginginstructions}</p>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography  style={{ color:"black", textAlign: "left"}}>Criteria :</Typography> 
        <p>{detailedFormValues.lodgingCriteria}</p>
        </Grid>
        <Grid item xs={12} md={12}>
        <Typography  style={{ color:"black", textAlign: "left" }}>Photos :</Typography> 
        <ImageList sx={{ width: "50%", height: "80%" }}>
      {LdImage.map((item) => (
        <ImageListItem key={item}>
          <img
            src={item}
            srcSet={item}
            alt={item}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
        </Grid>

       </Grid>
      </DialogContent>
          ) : (<div></div>)
        }
      </Grid>

</DialogContent>

        <DialogActions>
        <ThemeProvider theme={theme}>
           <Button onClick={submitHandler}
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
    <Grid container  style={{textAlign: "center" }} spacing={2}>
  <Grid item xs={12}>
    <Typography style={{ color:"white", textAlign: "left", }} >Who can participate in your experience ?</Typography>
    <Typography variant="h6" style={{ color:"white", textAlign: "left",fontSize:"12px" }} >Remember that the person booking your experience can also book for others. </Typography>
   <Typography variant="h6" style={{ color:"white", textAlign: "left",fontSize:"12px" }}>So if there are any age restrictions, certifications, or skill requirements, add them here.</Typography>

</Grid>
<br />
<Grid item xs={12} md={4} >
<Typography  style={{ color:"white", textAlign: "left" }}>Minimum Age :</Typography>
<br />
<TextField
        id="input-with-icon-textfield"
		    value={documentFormValues.parage}
        onChange={(e) => changeDocumentValue('parage', e.target.value)} 
        sx={{
          background: color,
          svg: { colors },
          input: { colors },
          label: { colors },
          width:"50%",
          textAlign: "left",
          marginRight:"16rem"
        }}
        required
        fullWidth
        variant="standard"
        type='number'
				placeholder='10 Years Old'
              />
  </Grid> 
    <br />
    <Grid item xs={12} md={6}>
  <Typography  style={{ color:"white", textAlign: "left" }}>Are pets allowed ?</Typography>
  <br />
  <Stack direction="row" spacing={1} alignItems="center">
        <Typography style={{ color:"white" }} >No</Typography>
        <AntSwitch   checked={documentFormValues.setChecked} onChange={switchHandler} inputProps={{ 'aria-label': 'ant design' }} />
        <Typography style={{ color:"white" }} >Yes</Typography>
      </Stack>
    </Grid>
    <br />

  <Grid item xs={12} md={4}>
  <Typography  style={{ color:"white", textAlign: "left" }}>Other criteria (150 letters max) :</Typography>
  <br />
  <TextareaAutosize
      aria-label="minimum height"
      value={documentFormValues.othercriteria}
      onChange={(e) => changeDocumentValue('othercriteria', e.target.value)} 
      minRows={3}
      placeholder="Remember that the person booking your experience can also book for others. 
      So if there are any age restrictions, certifications, or skill requirements, add them here."
      style={{ width: "120%" }}
    />
    </Grid>
</Grid>
    <br/>
	<br/>
	<br/>
  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>


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
                onClick={submitHandler}
                type="submit"
                variant="contained"
                style={{textTransform: 'none', background: "linear-gradient(#F02F32,#DA1D6C)", width: '12%',height:'20%'}}
              >
                  Confirm
              </Button>
              </ThemeProvider>
              </Box>

    </React.Fragment>
  );
}

export default Terms



const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 30,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

//Dialog
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(8),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
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