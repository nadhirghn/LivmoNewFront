import {SxProps} from "@mui/material";

// Contains Mui SxProps

export const muiButtonSx:SxProps={
    '&.MuiButton-root':{
        height: '44px',
        boxShadow: '1.57533px 0.787666px 3.93833px 1.57533px rgba(0, 0, 0, 0.4)',
        borderRadius: '11px',
        fontWeight: '600',
    }
}

export const textFieldSx: SxProps={
    '& fieldset': {
        borderRadius: '12.6757px',
        boxShadow: '3.61787px 3.61787px 8.44169px 2.41191px rgba(0, 0, 0, 0.25)',
        height: "100%",
    }
    ,
}

export const textAreaSx: SxProps={
    '& fieldset': {
        borderRadius: '12.6757px',
        boxShadow: '3.61787px 3.61787px 8.44169px 2.41191px rgba(0, 0, 0, 0.25)',
        height: "116px",
    }
    ,
}

export const dateTextFieldSx: SxProps={
    '& fieldset': {
        borderRadius: '12.6757px',
        boxShadow: '3.61787px 3.61787px 8.44169px 2.41191px rgba(0, 0, 0, 0.25)',
        height: "100%",
    },
    '& svg':{
        color: "#E22357",
    }
    ,
}

export const popperSx: SxProps={
    "& .MuiCalendarPicker-root": {// All background
        //backgroundColor: "rgb(241,5,48)",
    },
    "& .MuiPickersDay-dayWithMargin": {//All days
        color: "#F02F32",
        fontSize: "20px"
    },
    "& .MuiIcon-root": { //The year
        //    color: "rgb(8,232,12)",
    },
    "& .Mui-selected": { //Selected
        background: "linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)",
        color: "white",
    },
    "& .css-1dozdou": { //
        background: "linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)",
        marginTop: '0px',
        marginBottom: '0px',
        paddingTop: '8px',
        paddingBottom: '8px',
        maxHeight: '50px',
    },"& .MuiTypography-root": { //Days
        fontSize: "20px",
        color: "#F02F32",
    },"& .css-1v994a0": { // Month-year picked
        fontSize: "20px",
    },

}

export const bookedExpSwitchSx: SxProps={
    '& .MuiSwitch-thumb': {
        background: 'gray'
    },
    '& .Mui-checked+ .MuiSwitch-track': {
        background: 'linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)!important'
    },
    '& .Mui-checked .MuiSwitch-thumb': {
        background: 'linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)'
    }
}

export const selectSx: SxProps={
    '& fieldset': {
        borderRadius: '12.6757px',
        boxShadow: '3.61787px 3.61787px 8.44169px 2.41191px rgba(0, 0, 0, 0.25)',
    },
    '& svg':{
        color: "#E22357",
    }
    ,
}
