import React from "react";
import {Box, Button, Modal} from "@mui/material";
import closeIcon from "../img/closeIcon.png";


const style = {
    position: 'absolute',
    marginTop: '10px',
    left: '50%',
    transform: 'translate(-50%, 0%)',
    border: '2px solid #fff',
    boxShadow: 24,
    width: '408px',
    height: '231px'
};

const reservationCancelPopUp=({ msg, onClick, handleClose, open})=>{

    return(
        <Modal open={open} onClose={handleClose}>
            <Box style={style} className="relative bg-white p-10 text-center rounded-xl">
                <Box className="relative">
                    <img onClick={handleClose} src={closeIcon} className="absolute right-0  top-[-10px] cursor-pointer" width="31px" height="31px" />
                </Box>
                <Box className="pt-5">
                    {msg}
                </Box>

                <Box className="relative mt-5">
                    <Box className="absolute left-0 ">
                            <Button onClick={onClick} sx={{
                                textTransform: 'none',
                                color:'white',
                                background: 'linear-gradient(270deg, #0C1424 -0.34%, #143880 100%)',
                                width: '99px',
                                height: '41px',
                                fontSize: '15px'
                            }}>Accept</Button>
                </Box>

                    <Box className="absolute right-0">

                    <Button sx={{
                        textTransform: 'none',
                        color:'white',
                        background: 'linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)',
                        width: '99px',
                        height: '40px',
                    }} onClick={handleClose}
                    >Refuse</Button>
                </Box>
                </Box>
            </Box>
        </Modal>
    )
}

export default reservationCancelPopUp;