import { createTheme } from '@mui/material/styles';


const bngBlack ="#FFFFFF";
const bngRed ="#E42651";

export default createTheme({
  palette: {
    common: {
      black: `${bngBlack}`,
      red: `${bngRed}`,


    },
    primary: {
      main: `${bngBlack}`
    },
    secondary: {
      main: `${bngRed}`
    },

  },
});