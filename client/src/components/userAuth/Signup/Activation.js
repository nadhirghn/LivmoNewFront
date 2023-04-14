import React from 'react'
import { useParams } from "react-router-dom";
import axios from "axios"

import Button from '@mui/material/Button';
import img from '../../../img/success.png'
import Layout from '../../shared/layout'

import { Link } from "react-router-dom"

const Activation = () => {

    const {activationcode } = useParams();
    axios.post(`http://localhost:4001/api/v1/verifyuser/${activationcode}`)
    console.log(activationcode)
    return (
     
    <React.Fragment>
  <Layout>
  <React.Fragment>
<img style = {{marginTop:"8rem", marginLeft:"44%"}} src={img} alt="Logo" />

<h1 style={{marginTop:"3rem", color: "green" , marginLeft:"38rem", fontSize: "30px"}}>Email Verified Successfully</h1>
<br/>
<Link to="/login">
    <Button style={{textTransform: 'none', 
     width: '12%', height:'20%', color:"f",
      background: "white", marginLeft:"45%"}} variant="contained" >Login</Button>
      </Link>
      <br/>
      <br/>

</React.Fragment>
</Layout>
    </React.Fragment>
  )
}

export default Activation