import {SxProps} from "@mui/material";

const selectSx: SxProps={
    '& fieldset': {
        borderRadius: '12.6757px',
        boxShadow: '3.61787px 3.61787px 8.44169px 2.41191px rgba(0, 0, 0, 0.25)',
    },
    '& svg':{
        color: "#E22357",
    }
    ,
    '& div':{
        fontWeight: '700'
    },
}

const menuItemSx: SxProps={
    '&.MuiMenuItem-root':{
        fontWeight: '700',
    }
}

const textFieldSx: SxProps={
    '& fieldset': {
        borderRadius: '12.6757px',
        boxShadow: '3.61787px 3.61787px 8.44169px 2.41191px rgba(0, 0, 0, 0.25)',
    }
}

const talkingAboutItField: SxProps={
    '& fieldset': {
        height: '170px',
        borderRadius: '12.6757px',
        boxShadow: '3.61787px 3.61787px 8.44169px 2.41191px rgba(0, 0, 0, 0.25)',
        //backgroundColor: "#EFEDED",
        //color: "black"
    }
}



const priceTextFieldSx: SxProps={
    '& .Mui-disabled':{
        WebkitTextFillColor: 'rgb(50, 50, 50)!important'
    },
    '& fieldset':{
        width: '175px',
        overflow: 'hidden',
    },
    '& legend':{
      height: "20px",
    },
    '& span':{
        overflow: "visible",
        opacity: "100%!important",
    }
}

const muiButtonSx:SxProps={
    '&.MuiButton-root':{
        boxShadow: '1.57533px 0.787666px 3.93833px 1.57533px rgba(0, 0, 0, 0.4)',
        borderRadius: '20px',

        fontSize: '17px',
        fontWeight: '700',
    }
}

const popperSx: SxProps={
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
    "& .css-13go44a-MuiButtonBase-root-MuiIconButton-root": { //PM button
        background: "linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)",
    },
    "& .css-13go44a-MuiButtonBase-root-MuiIconButton-root .MuiTypography-root": { //PM Text
        color: "white",
    },
    "& .css-1t8wyba-MuiButtonBase-root-MuiIconButton-root": { //AM button
        background: "linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)",
    },
    "& .css-1t8wyba-MuiButtonBase-root-MuiIconButton-root .MuiTypography-root": { //AM Text
        color: "white",
    },
    "& .css-12ha4i7": { //Time dot
        background: "linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)",
    },
    "& .css-7lip4c": { //Hour line
        background: "linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)",
    },
    "& .css-a1rc6s": { //Hour line
        background: "linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)",
    },
    "& .css-2ujp1m": { //Hour line
        background: "linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)",
        border: "16px solid",
        borderImage: 'linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)'
    },
    "& .css-118whkv": { //Circle
        background: "linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)",
        border: "16px solid",
        borderRadius: "30px",
    },
}

export {selectSx, menuItemSx, priceTextFieldSx, muiButtonSx, popperSx, textFieldSx, talkingAboutItField};