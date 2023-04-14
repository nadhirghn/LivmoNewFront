import React from 'react';


import Header from '../layout/Header/Header'
import Footer from '../layout/Footer/Footer';

import { useSelector } from 'react-redux';




const Layout=({ children }) => { 
    const { user, isAuthenticated, loading } =  useSelector(state =>state.auth)

    return(
    <>

    <Header />

    <main>
        {
            children
        }
    </main>
    {!loading && (!isAuthenticated || user.role !== 'admin') && (
    <Footer />
    )}
    </>
    );
}

export default Layout;