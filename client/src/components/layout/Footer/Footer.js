import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';
import Logo from '../../../img/logo.png'
import Input from '@mui/material/Input';
import { Button } from '@mui/material';

const ariaLabel = { 'aria-label': 'description' };

const Footer = () => {
    
    return (
        <Fragment>
   <footer className="footerr">

<div className="container">

  <div className="row">

    <div className='footer-col'>
    <div className='logo-img'>
           <Link to="/">
            <img src={Logo}
            alt='logo'
            />
            </Link>
            </div>
            <h4>Become a Host</h4>
            <h4>Become a Merchant</h4>
    </div>

    <div className="footer-col">

      <h4>Home</h4>



    </div>

    <div className="footer-col">

      <h4>Experiences</h4>

      <ul>



      </ul>

    </div>

    <div className="footer-col">

      <h4>Services</h4>

      <ul>
        <li><Link to="#">Lodging</Link></li>
        <li><Link to="#">Transport</Link></li>
        <li><Link to="#">Restaurant</Link></li>
      </ul>

    </div>
    <div className="footer-col">

      <h4>Private Space</h4>
      <ul>
        <li><Link to="#">Host</Link></li>
        <li><Link to="#">Transporter</Link></li>
        <li><Link to="#">Restaurateur</Link></li>
      </ul>

    </div>
    <div className="footer-col">

      <h4>Account</h4>


    </div>

    
    <div >
      <div className="social-links">

      <h1 style={{marginLeft:'30rem'}} className="termsh1">Newsletter Sign-Up</h1>
      <Input style={{marginLeft:'3rem'}} placeholder="Your Email ..." inputProps={ariaLabel} />
      <Button style={{marginLeft:'3rem'}} color='secondary' variant="contained">SUBMIT</Button>
   </div>

 </div>
  </div>
  <hr className='new'/>
</div>

      <div >
      <div className="social-links">

      <h1 style={{marginRight:'2rem', marginLeft:'6rem'}} className='termsh1'>© 2022 LIVMO</h1>
      <h1 style={{marginRight:'2rem'}}className='termsh1'>Privacy</h1>
      <h1 style={{marginRight:'2rem'}}className='termsh1'>Terms and conditions</h1>
      <h1 style={{marginRight:'2rem'}}className='termsh1'>Sitemap</h1>

   <Link to="#" style={{marginLeft:'36rem'}}><i className="fab fa-facebook-f"></i></Link>
   <Link to="#"><i className="fab fa-twitter"></i></Link>
   <Link to="#"><i className="fab fa-instagram"></i></Link>
   <Link to="#"><i className="fab fa-youtube"></i></Link>
   <Link to="#"><i className="fab fa-linkedin"></i></Link>
   </div>

 </div>


</footer>


        </Fragment>
    );
}

export default Footer;