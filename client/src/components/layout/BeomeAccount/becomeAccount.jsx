import React from 'react'
import './becomeaccount.scss'
import { useSelector } from 'react-redux'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { useAlert } from 'react-alert'

const BecomeAccount = () => {
  const alert = useAlert()
  const { user } = useSelector(state => state.auth);

const OnClick = () => {
  alert.error("You are already connected");
  alert.error("Logout first");

}
 

  return (
    <React.Fragment>
<br/>
<br/>
<br />
<section class="hero is-medium is-link adventurer-hero">
  <div class="hero-body">
    <p class="title">
    BECOME AN <br/>
    ADVENTURER
    </p>
    <p class="subtitle">
    { user ? 
     <Link to="/becomeaccount"><Button variant="contained" color="secondary" onClick={OnClick}>
    SIGN UP NOW
    </Button>
    </Link>
    :
    <>
     <Link to="/signup"><Button variant="contained" color="secondary">
    SIGN UP NOW
    </Button>
    </Link>
    </>
}
    </p>
  </div>
</section>
<br/>
<section class="hero is-medium is-link merchant-hero">
  <div class="hero-body">
    <p class="title">
    BECOME A <br/>
    MERCHANT
    </p>
    <p class="subtitle">
    { user ? 
     <Link to="/becomeaccount"><Button variant="contained" color="secondary"  onClick={OnClick}>
    SIGN UP NOW
    </Button>
    </Link>
    :
    <>
     <Link to="/becometrader"><Button variant="contained" color="secondary">
    SIGN UP NOW
    </Button>
    </Link>
    </>
}
    </p>
  </div>
</section>
<br />
<section class="hero is-medium is-link host-hero">
  <div class="hero-body">
    <p class="title">
    BECOME A <br/>
    HOST
    </p>
    <p class="subtitle">
    { user ? 
     <Link to="/becomeaccount"><Button variant="contained" color="secondary"  onClick={OnClick}>
    SIGN UP NOW
    </Button>
    </Link>
    :
    <>
     <Link to="/becomehost"><Button variant="contained" color="secondary">
    SIGN UP NOW
    </Button>
    </Link>
    </>
}
    </p>
  </div>
</section>
<br/>

   


    </React.Fragment>
  )
}

export default BecomeAccount