import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { makeStyles } from '@mui/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Logout from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LanguageIcon from '@mui/icons-material/Language';
import Logo from '../../../img/logo.png'
import { useHistory } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';


import './header.scss'
import { logout } from '../../../actions/userActions';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AddBoxIcon from '@mui/icons-material/AddBox';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,

  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.Toolbar
  },
  tabContainer: {
    marginRight:"1rem"
  },
  customHoverFocus: {
    "&:hover, &.Mui-focusVisible": { backgroundColor: "white" }
  },
  tab: {

    textTransform: "none",
    marginRight:'3rem',
    display: 'flex'
      
  }
}))

const pages = ['Accueil', 'Expérience', 'Sérvices', 'Espace Privé'];


const Header = () => {




//Signup
const { user, loading  } = useSelector(state => state.auth);



const alert = useAlert();
const dispatch = useDispatch()



  const [ope, setOpe] = React.useState(false);

  const handleClickOpene = () => {

    setAnchorElUser(null);
    setOpe(true);
  };

  const [openn, setOpenn] = React.useState(false);

  const handleClickOpenn = () => {
    setAnchorElUser(null);
    setOpenn(true);

  };

  const history = useHistory()

  const logoutHandler = () => {
    dispatch(logout());
    history.push('/');
    alert.success('Log out.')
    localStorage.clear();
  }

  const classes = useStyles();

  const [anchorEll, setAnchorEll] = useState(null);


  const [opena, setOpena] = useState(false);

  const handleClickk = (e) => {
    setAnchorEll(e.currentTarget)
    setOpena(true)
  }

  const handleClosee = (e) => {
    setAnchorEll(null)
    setOpena(false)
  }

  const Click = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const Close = () => {
    setAnchorElUser(null);
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const Open = Boolean(anchorElUser);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (

    <React.Fragment>
 
   <ElevationScroll>
         <AppBar position="fixed" color="primary" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <div className='logo-imgs'>
        <Link to="/">
            <img src={Logo}
            alt='logo'
            />
            </Link>
            </div>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}  onClick={handleCloseNavMenu}>
                  <Typography  textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box style={{marginLeft:"20rem"}} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Tabs className={classes.tabContainer}>
                
          <Link  to="/">
                <Tab textColor="#E42651"  style={{ fontSize: "18px", fontFamily: 'Montserrat',textTransform:' capitalize',fontStyle:'normal', fontWeight:'700' }}  label="Home" >
                </Tab>
                </Link>

                <Link to="/allexperiences">
                <Tab textColor="#E42651" style={{ fontSize: "18px",
                 fontFamily: 'Montserrat',
                 textTransform:' capitalize',
                 fontStyle:'normal',
                 fontWeight:'700',
                 marginLeft:'1rem' }}  label="Experience" />
                </Link>
                <Link to="#">
                <Tab textColor="#E42651" style={{ fontSize: "18px",
                 fontFamily: 'Montserrat',
                 textTransform:' capitalize',
                 fontStyle:'normal',
                fontWeight:'700',
                marginLeft:'1rem' }} 
                aria-owns={anchorEll ? "simple-menu" : undefined}
                aria-haspopup={anchorEll ? "true" : undefined}
                className={classes.tab}	
                onClick={event => handleClickk(event)} 
                label="Services" ></Tab>
                </Link>
                <div class="verticalLine"></div>
                <Link  to="/becomeaccount">
                <Tab
               textColor="#E42651" 
                  className={classes.tab}	
                  style={{ fontSize: "18px",
                  fontFamily: 'Montserrat',
                  textTransform:' capitalize',
                  fontStyle:'normal',
                  fontWeight:'700',
                  marginLeft:'1rem'  }} 
                  label="Private Space" />
                  </Link>
              </Tabs>
           
          </Box>
        
        
          <div style={{marginLeft: "1rem", marginRight: "0.6rem" }}>
          <CalendarMonthIcon />
          </div>
          <div style={{marginLeft: "1rem", marginRight: "0.6rem" }}>
          <LanguageIcon />
          </div>
          <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Account settings">
          <IconButton
            onClick={Click}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={Open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={Open ? 'true' : undefined}
            className={classes.customHoverFocus}

          >
            <Avatar sx={{ width: 26, height: 27, color: 'black' }}></Avatar>
          </IconButton>
        </Tooltip>
       
      

     
        <Menu
        anchorEl={anchorElUser}
        id="account-menu"
        open={Open}
        onClose={Close}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
    {user ? (
        <div>
        <MenuItem>
        <ListItemIcon>
        <PersonIcon sx={{ color: '#F02F32' }} fontSize="small"/>
        </ListItemIcon>
        {user.role ==="host" ? (
        <Link onClick={Close} style={{ textDecoration : "none", color: '#000000'}} to="/host/me">Profile</Link>
        ) : ( 
          <></>
        )}
         {user.role ==="trader"  ? (
        <Link onClick={Close} style={{ textDecoration : "none", color: '#000000'}} to="/merchant/me">Profile</Link>
        ) : ( 
      <></>
        )}
         {user.role ==="user" ? (
        <Link onClick={Close} style={{ textDecoration : "none", color: '#000000'}} to="/me/user">Profile</Link>
        ) : ( 
          <></>
        )}
        </MenuItem>
        <MenuItem>
        <ListItemIcon>
        <MailOutlineIcon sx={{ color: '#F02F32' }} fontSize="small"/>
        </ListItemIcon>
        <Link onClick={Close} style={{ textDecoration : "none", color: '#000000'}} to="#">Messages</Link>
        </MenuItem>
        <MenuItem>
        <ListItemIcon>
        <SettingsIcon sx={{ color: '#F02F32' }} fontSize="small"/>
        </ListItemIcon>
        <Link onClick={Close} style={{ textDecoration : "none", color: '#000000'}} to="/settings">Settings</Link>
        </MenuItem>
        {user.role ==="trader" ? (
        <MenuItem>
        <ListItemIcon>
        <AddBoxIcon sx={{ color: '#F02F32' }} fontSize="small"/>
        </ListItemIcon>
        <Link onClick={Close} style={{ textDecoration : "none", color: '#000000'}} to="#">Create a Service</Link>
        </MenuItem>
        ) : ( 
          <></>
        )}
        {user.role ==="host" ? (
        <MenuItem>
        <ListItemIcon>
        <AddBoxIcon sx={{ color: '#F02F32' }} fontSize="small"/>
        </ListItemIcon>
        <Link onClick={Close} style={{ textDecoration : "none", color: '#000000'}} to="/newexperience">Create an experience</Link>
        </MenuItem>
        ) : ( 
          <></>
        )}
        <Divider />
        <MenuItem onClick={logoutHandler}>
          <ListItemIcon >
            <Logout sx={{ color: '#F02F32' }} fontSize="small" />
          </ListItemIcon>
          Logout 
        </MenuItem>

        </div>
         ) : !loading && 
        <div>
        <MenuItem onClick={handleClickOpene}>
          <Avatar  /> <Link to="/signup" ><p>Signup</p></Link>
          </MenuItem>
          <MenuItem onClick={handleClickOpenn}>
          <Avatar /> <Link to="/login" ><p>Login</p></Link>
        </MenuItem>
        </div>
}
      </Menu>
          </Box>
            <Menu id="simple-menu" anchorEl={anchorEll} open={opena}
          onClose={handleClosee}>
           <Link to="/alllodgings" style={{color:"black"}}><MenuItem onClick={handleClosee}>Lodging </MenuItem></Link> 
           <Link to="/allrestaurants" style={{color:"black"}}>  <MenuItem onClick={handleClosee}>Food</MenuItem></Link>
           <Link to="/alltransports" style={{color:"black"}}>  <MenuItem onClick={handleClosee}>Transport</MenuItem></Link>


            </Menu>
        </Toolbar>
      </Container>
    </AppBar>
    </ElevationScroll>
    <div className={classes.toolbarMargin} />
    
    </React.Fragment>
  );
};
export default Header;
