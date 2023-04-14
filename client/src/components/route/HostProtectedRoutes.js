import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const HostProtectedRoutes = ({ isAdmin, component: Component, ...rest }) => {

    const { isAuthenticated, loading, user } = useSelector(state => state.auth)

    return (
        <React.Fragment>
            {loading === false && (
                <Route
                    {...rest}
                    render={props => {
                        if (isAuthenticated === false ) {
                            return <Redirect to='/login' />
                        }
                        if (user.role !== 'host') {
                            return <Redirect to='/' />
                        }

                        if (isAdmin === true && user.role !== 'admin') {
                            return <Redirect to="/" />
                        }

                        return <Component {...props} />
                    }}
                />
            )}
        </React.Fragment>
    )
}

export default HostProtectedRoutes