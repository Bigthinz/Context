import React from 'react'
import { useContext } from 'react'
import AuthContext  from '../context/AuthContext'
import { getAccessToken } from './utils'
import axios from 'axios'
import { Outlet, Navigate } from 'react-router-dom'



const ProtectedRoutes = () => {
const { isLoggedIn} = useContext(AuthContext)
const accessToken = getAccessToken();

if(accessToken){
    axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${accessToken}`;
}

return( 
    <>
        {
            isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />
        }
    </>
)
}

export default ProtectedRoutes