import React, { Fragment, useEffect } from 'react'


import Layout from '../shared/layout';
import Experience from './Experiences';
import Loader from '../shared/Loader/loader'

import { useDispatch, useSelector } from 'react-redux'


import { getHostExperiences } from '../../actions/experienceActions'


//MUI 
import { Grid } from '@mui/material';


const AllExperiences = ({ match }) => {

  




  

  const dispatch = useDispatch();

  
  const { loading, experiences } = useSelector(state => state.experiences)


 


  useEffect(() => {

    
    dispatch(getHostExperiences());

  
    

  }, [dispatch])



    return(
        <Layout>
        {loading ? <Loader /> : (
            <Fragment>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <br />
                <div className='row' style={{display:"flex", alignItems:"center", justifyContent:"center", flexWrap:"wrap"}}>
                <Grid container spacing={{ xs: 2, md: 5 }} style={{display:"flex", alignItems:"center", justifyContent:"center", flexWrap:"wrap"}}  >

                                 
                                        
                                            {experiences.map(experience => (
                                                <Experience key={experience._id} experience={experience} col={3} />
                                            ))}
                                      </Grid>
                 </div>
                           
            </Fragment>
        )}

    </Layout>
)
}

export default AllExperiences;