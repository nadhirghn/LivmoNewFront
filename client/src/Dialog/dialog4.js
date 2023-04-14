import * as React from 'react';
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
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
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

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
//Become a marchant Restaurant
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}
      style={{backgroundColor:"black"}}>
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>

        </BootstrapDialogTitle>
        <br />
        <DialogContent >
          <Typography gutterBottom style={{textAlign:"center"}}>
          An admin will verify your application in the next 48 hours
                    Would you like to create a Dish ?
          </Typography>
        </DialogContent>
        <DialogActions >
        <Stack direction="row" spacing={8} style={{textAlign: 'center'}}>
          
          <Button style={{backgroundColor:"black", borderRadius:"19.55px", width:"150px" ,
          Height :"50px"}} autoFocus onClick={handleClose}>
              MAYBE LATER
          </Button>
          
          <Button style={{backgroundColor:"#F02F32" , borderRadius:"19.55px", width:"150px" ,
          Height :"50px" , marginRight:"7rem"}} autoFocus onClick={handleClose}>
          CONTINUE
          </Button>
        
          </Stack>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
