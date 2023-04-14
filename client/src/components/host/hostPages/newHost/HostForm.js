import * as React from 'react';
import Account2 from "./Account2"
import Introduction from './Introduction';
import Account from './Account';
import EssentialInformation from './essentialInformation';
import OrganismEssentialInformation from './organismEssentialInformation'
import Document from './Document';
import './becomehost.scss'

//MUI imports
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';


import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';





const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));
const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <LooksOneIcon />,
    2: <LooksTwoIcon />,
    3: <Looks3Icon />,
  };


  return (
    
    <>
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  </>
  );
}
function ColorlibStepIcons(props) {
  const { active, completed, className } = props;

  const icons = {

      1: <LooksOneIcon />,
      2: <LooksTwoIcon />,
      3: <Looks3Icon />,
      4: <Looks4Icon />,
  };

  return (
    
    <>
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  </>
  );
}


const steps = ['Introduction', 'Account' , 'Essential Information'];

function getStepContent(step, formValues1 = null, changeFormValue1 = null) {
  switch (step) {
    case 0:
      return <Introduction compteFormValues={formValues1} changeCompteValue={changeFormValue1} />;
    case 1:
      return <Account informationFormValues={formValues1} changeInformationValue={changeFormValue1}/>;
    case 2:
      return <EssentialInformation informationFormValues={formValues1} changeInformationValue={changeFormValue1} 
      essinformationFormValues={formValues1} changeEssInformationValue={changeFormValue1}
      compteFormValues={formValues1} changeCompteValue={changeFormValue1}/>;
    default:
      throw new Error('Unknown step');
  }
}

const stepss = ['Introduction', 'Account' , 'Essential Information', 'Documents'];

function getStepContents(stepss, formValues = null, changeFormValue = null) {
  switch (stepss) {
    case 0:
      return <Introduction compteFormValues={formValues} changeCompteValue={changeFormValue} />;
    case 1:
      return <Account2 account2FormValues={formValues} changeAccount2Value={changeFormValue}/>;
    case 2:
      return <OrganismEssentialInformation organismFormValues={formValues} changeOrganismValue={changeFormValue}/>;
    case 3:
      return <Document 
      compteFormValues={formValues} changeCompteValue={changeFormValue}
      account2FormValues={formValues} changeAccount2Value={changeFormValue}
      organismFormValues={formValues} changeOrganismValue={changeFormValue}
      documentFormValues={formValues} changeDocumentValue={changeFormValue}/>;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme({
  shape: {
    borderRadius: 40,
  },
}) 
const useStyles = makeStyles((theme) => ({
  typography: {
  
  },    
 
  root: {
    "& > *": {
      margin: theme.spacing(9),
      width: theme.spacing(500),
      height: theme.spacing(0)
    }
  },
  bluePaper: {
    background: "linear-gradient(270deg, #0C1424 100%, #143880 90%)",
  },
  text: {
    primary: "#000"
  }
}));

export default function HostForm(props) {
  const classes = useStyles();
   //Indiv
  const [compteFormValues, setCompteFormValues] = React.useState({});
  const [informationFormValues, setInformationFormValues] = React.useState({});
  const [essinformationFormValues, setEssInformationFormValues] = React.useState({});
  const [activeStep, setActiveStep] = React.useState(0);

  //Organism
  const [account2FormValues, setAccount2FormValues] = React.useState({});
  const [organismFormValues, setOrganismFormValues] = React.useState({});
  const [documentFormValues, setDocumentFormValues] = React.useState({});



  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const changeCompteValue = (key, value) => {
    let values = { ...compteFormValues };
    values[key] = value;
    setCompteFormValues(values);
  };

  const changeInformationValue = (key, value) => {
    let values = { ...informationFormValues };
    values[key] = value;
    setInformationFormValues(values);
  };
  const changeESSInformationValue = (key, value) => {
    let values = { ...essinformationFormValues };
    values[key] = value;
    setEssInformationFormValues(values);
  };

//Organism

const changeAccount2Value = (key, value) => {
  let values = { ...account2FormValues };
  values[key] = value;
  setAccount2FormValues(values);
};
const changeOrganismValue = (key, value) => {
  let values = { ...organismFormValues };
  values[key] = value;
  setOrganismFormValues(values);
};
const changeDocumentValue = (key, value) => {
  let values = { ...documentFormValues };
  values[key] = value;
  setDocumentFormValues(values);
};


  return (
    <React.Fragment>
      <CssBaseline />
     
      <div className={classes.root}>
      <Container component="main" >
        <Grid item style={{textAlign: "center" }} >
          <Typography component="h1" variant="h3"
           style={{
           color: '#E22357',
           fontWeight:700,
           fontSize:"42px",
           lineHeight:'42px',
           marginTop:'4rem',
           
        }} 
          align="center" >
          BECOME A HOST
          </Typography>
          <br/>
        
          <Typography component="h1"
           variant="h6" 
           className={classes.typography}
            align="center"
            style={{
            fontWeight:700,
            fontSize:"20px",
            lineHeight:'20px',

            
         }}  >
          Hi! we will help you become a host.
          </Typography>
          <br />
          {/* Individu stepper*/}
          {
             compteFormValues.setCheck ? ( 
          <React.Fragment>
      <Stepper alternativeLabel activeStep={activeStep}  connector={<ColorlibConnector />} sx={{ pt: 3, pb: 5 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}><Typography style={{
                  color:"black"
         }} >{label}
         </Typography></StepLabel>
          </Step>
        ))}
      </Stepper>
     
    
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom  style={{ color:"black" }}>
                  Thank you for your inscription.
                </Typography>
                <Typography variant="subtitle1" style={{ color:"black"}}>
                  Welcome To livmo ...
                </Typography>
                <br />
                <Button variant="contained" disableElevation style={{textTransform: 'none'}}>
                Creer une experience
                </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {/* individu*/}
                {getStepContent(activeStep, compteFormValues, changeCompteValue ,
                   informationFormValues, changeInformationValue, essinformationFormValues,changeESSInformationValue)}
         <Box sx={{ display: 'flex', justifyContent: 'flex-end' , marginTop:"-2.4rem" }}>
                <ThemeProvider theme={theme}>
                  {activeStep !== 0 && (
                    
                    <Button 
                    sx={{ mr: 100 }}
                    variant="outlined"
                    onClick={handleBack}
                    style={{textTransform: 'none', 
                    width: '12%', height:'20%', color:"#E22357", background: "white", border: '2px solid'}}>
                      Previous
                    </Button>
                  )}
                     
                  {activeStep !== steps.length - 1  && (
                     
                  <Button
                    onClick={handleNext}
                    sx={{ mr: 9 }}
                    type="submit" 
                    variant="contained"
                    style={{textTransform: 'none', background: "linear-gradient(#F02F32,#DA1D6C)", width: '12%',height:'20%'}}
                  >
                      Next
                  </Button>
                  )}
                  </ThemeProvider>
                </Box>
              </React.Fragment>
         
            )}
          </React.Fragment>
           ) : ( <div>
              {/* Organism stepper*/}
          <React.Fragment>
      <Stepper alternativeLabel activeStep={activeStep}  connector={<ColorlibConnector />} sx={{ pt: 3, pb: 5 }}>
        {stepss.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcons}><Typography style={{
                  color:"black"
         }} >{label}
         </Typography></StepLabel>
          </Step>
        ))}
      </Stepper>
     
    
            {activeStep === stepss.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your inscription.
                </Typography>
                <Typography variant="subtitle1">
                  Welcome To livmo ...
                </Typography>
                <br />
                <Button variant="contained" disableElevation style={{textTransform: 'none'}}>
                Creer une experience
                </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContents(activeStep, compteFormValues, changeCompteValue ,
                  account2FormValues , changeAccount2Value,
                  changeOrganismValue, organismFormValues,
                  changeDocumentValue, documentFormValues  )}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' , marginTop:"-2.4rem" }}>
                <ThemeProvider theme={theme}>
                  {activeStep !== 0 && (
                    
                    <Button 
                    sx={{ mr: 100 }}
                    variant="outlined"
                    onClick={handleBack}
                    style={{textTransform: 'none', 
                    width: '12%', height:'20%', color:"#E22357", background: "white", border: '2px solid'}}>
                      Previous
                    </Button>
                  )}
                     
                  {activeStep !== steps.length   && (
                     
                  <Button
                    onClick={handleNext}
                    sx={{ mr: 9 }}
                    type="submit" 
                    variant="contained"
                    style={{textTransform: 'none', background: "linear-gradient(#F02F32,#DA1D6C)", width: '12%',height:'20%'}}
                  >
                      Next
                  </Button>
                  )}
                  </ThemeProvider>
                </Box>
              </React.Fragment>
         
            )}
          </React.Fragment>
    
           </div>)
          }

         
          </Grid>
      </Container>
  </div>

    </React.Fragment>
  );
}