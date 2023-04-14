import React, { Fragment, useEffect, useState } from 'react'

import Loader from '../shared/Loader/loader'

import ListReviews from '../review/ListReviews'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleExperience, clearErrors, newReview } from '../../actions/experienceActions'


//Slider
import '../lodging/Slider/Slider.scss'
import BtnSlider from '../lodging/Slider/BtnSlider'


//MUI Imports
import Rating from '@mui/material/Rating';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material' 
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import PeopleIcon from '@mui/icons-material/People';
import Layout from '../shared/layout'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import SendIcon from '@mui/icons-material/Send';





const options = ['1 Person', '2 Persons', '3-10 Persons', '10+ Persons'];


const ExperienceDetails = ({ match }) => {

  //Comment
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');


  
const reviewHandler = () => {
  const formData = new FormData();

  formData.set('rating', rating);
  formData.set('comment', comment);
  formData.set('experienceId', match.params.id);
  window.location.reload(false);
  dispatch(newReview(formData));

}
//////////////////



    const [people, setPeople] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');
    //Slider
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== experience.YourIdeaImage.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === experience.YourIdeaImage.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(experience.YourIdeaImage.length)
        }
    }


       





    const dispatch = useDispatch();
    const alert = useAlert()

    const { loading, error, experience } = useSelector(state => state.experienceDetails)
    const { user } = useSelector(state => state.auth)
    const { error: reviewError, success } = useSelector(state => state.newReview)

    useEffect(() => {
        dispatch(getSingleExperience(match.params.id))

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (reviewError) {
            alert.error(reviewError);
            dispatch(clearErrors())
        }

        if (success) {
            alert.success('Reivew posted successfully')
            dispatch({  })
        }

    }, [dispatch, alert, error, reviewError, success, match.params.id])


const color = "#E42651"

  


   

   
    return (
        
        <Layout>
     {loading ? <Loader /> : (
            <Fragment>
<br />
<br />

<br />
<h3 style={{fontFamily: "normal",fontWeight: 700, fontSize: "32px",
 lineHeight: "39px", margin: "20px 290px 0", color:"#DA1D6C"}}>{experience.exptitle}</h3>
            <div className="container-slider">
       {experience.YourIdeaImage && experience.YourIdeaImage.map((image , index) => (
                    <div
                    key={image.public_id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img className="d-block w-100" src={image.url} alt={experience.exptitle}/>
                    </div>
            ))}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
        </div>
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 5,
          width: 150,
          height: 30,
        },
      }}
    >
            
        <Paper elevation={0}  style={{background:"white",  borderRadius:"25px",
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
    border: "2px solid #D7E1EC", marginLeft: "350px "}}  >
        <Grid  
                style={{display: 'flex',
                flexWrap: 'wrap',
                flexDirection:'column',
                 justifyContent:'center',
                 alignItems:"center", 
                 
               }}
                >

      <Typography style={{fontStyle: "normal",fontSize: "16px",  color:"black"}} >
        {experience.lodgingCategory}
      </Typography>
</Grid>
</Paper>
<Paper elevation={0}  style={{background:"white",  borderRadius:"25px",
                border: "2px solid #D7E1EC",boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",}} >
            <Grid  
                style={{display: 'flex',
                flexWrap: 'wrap',
                flexDirection:'column',
                 justifyContent:'center',
                 alignItems:"center" }}
                >
     <Typography style={{fontStyle: "normal",fontSize: "16px",  color:"black"}}>
        {experience.lodgingType}
      </Typography>
 </Grid>
 </Paper>
 </Box>
 <Fragment>
 <div style={{ display: 'flex',
        flexWrap: 'wrap'}}>
      
 <Box
      sx={{

        '& > :not(style)': {
          m: 5,
          width: 780,
          height: 239,
        },
      }}
    >
 <Paper elevation={0}  style={{background:"white",  borderRadius:"25px",
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
    border: "2px solid #D7E1EC", marginLeft: "30px"}}  >
        <h4 style={{color: "#0C1424", fontStyle: "normal", fontWeight: 700, fontSize: "16px",
lineHeight: "29px", margin: "10px 10px 0"}}>About the lodging</h4>
<br />
        <p style={{fontFamily: 'Roboto',
fontStyle: "normal", fontWeight: 400, fontSize: "18px",
lineHeight: "21px",margin: "10px 10px 0",
letterSpacing: "0.02em",}}>{experience.lodgingdescription}</p>
        </Paper>
        </Box>
        <Box
      sx={{

        '& > :not(style)': {
          m: 5,
          ml:30,
          width: 406,
          height: 300,
        },
      }}
    >
        <Paper elevation={0}  style={{background:"white",  borderRadius:"25px",
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
    border: "2px solid #D7E1EC", }}  >
    
    <Box
      sx={{
        '& > :not(style)': {
          width: 404,
          height: 45,
        },
      }}>
      <Paper elevation={0}  style={{background:"linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)", }}  >
       <div >
       <h4 style={{fontStyle: "normal", color:"white",
fontWeight: 700,
fontSize: "28px",
textAlign:"center",
lineHeight: "39px"}}>{experience.price} DT / Night</h4>
<br/>
<br/>
<br/>
<br/>



            <div style={{marginLeft:"6.5rem"}}>
            <Autocomplete
  id="size-small-standard"
  value={people}
  size="small"
  onChange={(event, newValue) => {
    setPeople(newValue);
  }}
  inputValue={inputValue}
  onInputChange={(event, newInputValue) => {
    setInputValue(newInputValue);
  }}

  options={options}
  sx={{
    width: 200,
    svg: { color },
    input: { color },
    label: { color }
  }}
  renderInput={(params) => (
    <TextField
      {...params}
      InputProps={{
        ...params.InputProps,
        startAdornment: (
          <InputAdornment position="start">
          <PeopleIcon sx={{ color: "#E42651"}}/>
          </InputAdornment>
        )
      }}
      variant="standard"
      placeholder="People ?"
      style={{color:"white"}}
      sx={{
        svg: { color },
        label:{ color },
      }}
    />
    )}
/>
            </div>
</div>
<br/>
<br/>
<br/>
<br/>


<Button  style={{width:"100%",color:"white", 
background:"linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)"}} variant="contained">BOOK NOW !</Button>
<br/>
<br/>

<Button  style={{width:"100%",color:"white", borderRadius:"25px",
background: "linear-gradient(270deg, #0C1424 -0.34%, #143880 100%)"}} variant="contained">Add to calendar</Button>
    </Paper>
    
    </Box>
      
</Paper>   
</Box>

</div>


</Fragment>
<br/>
<br/>

<div>
<h3 style={{fontStyle: "normal",
fontWeight: 700,
fontSize: "24px",
lineHeight: "29px", margin:"0 30px 0"}}>Talking about it !</h3>
<br/>
{ user ? 

                        <Paper style={{ width:"50%", marginLeft:'15px'}}>
                                 
                                      <Grid item >
                                  
                              <Rating name="size-large" defaultValue={2} 
                                value={rating}
                                onChange={(event, newValue) => {
                                  setRating(newValue);
                                }}size="large" />

                            </Grid>
           

                        <Grid  item xs zeroMinWidth>
                        <TextareaAutosize
                          aria-label="minimum height"
                          minRows={3}
                          placeholder="Say Something..."
                          style={{ width: "100%" , height:"40%" }}
                          name="review"
                          id="review" 
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        />
                         
                                        
                    </Grid>
                    <br/>
                    <Grid  item xs >
                    <Button endIcon={<SendIcon />} variant="contained" style={{background: "linear-gradient(270deg, #0C1424 -0.34%, #143880 100%)",
                    color:"white", marginLeft:"85%"}} 
                             onClick={reviewHandler} 
                             type="submit"
                            >
                                 Post</Button>
                      </Grid>
                          
</Paper>

                    :
                    <Stack sx={{ width: '20%', marginLeft:"30px" }} spacing={2}>
                    <Alert severity="warning">Login first to post your review.</Alert>
                    </Stack>
                    }
                    
                    <div>
                    {experience.reviews && experience.reviews.length > 0 && (
                       <ListReviews reviews={experience.reviews} />
           
                    )}
                    </div>
                    
                    </div>   
        <br />
<br />

<br /><br />
<br />

<br />
            </Fragment>

            )}
        </Layout>
    )
}

export default ExperienceDetails

