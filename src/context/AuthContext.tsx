import React , { createContext, useState } from 'react';
import { BASE_URL} from './../helpers/constants'
import jwt_decode from "jwt-decode";
import axios from 'axios'

const AuthContext = createContext<any | null >(undefined);



export const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState(false)
  const [authState, setAuthState] = useState({
    accessToken: null,
    refreshToken: null,
  });

  const [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
  const [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
  const [isLoggedIn, setLoggedIn] = useState(false);

  let login = async(payload) =>{
    setAuth(true)
    // console.log(BASE_URL)
    let response = await axios.post(`${BASE_URL}/auth/login`, payload)
    console.log(payload)
    console.log(response)
    // console.log(BASE_URL)

    if(response.status === 200){
        // console.log(response.data.accessToken)
        setLoggedIn(true)
        const data = response.data
        const { accessToken } = response.data
        console.log(jwt_decode(accessToken))
        setAuthTokens(data)
        setUser(jwt_decode(response.data.accessToken))
        localStorage.setItem('authTokens', JSON.stringify(data))
    }
  }

  let signup = async(payload)=>{
    let response = await axios.post(`${BASE_URL}/auth/signup`, payload)
    console.log(response)
  }

    let logout = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        
    }



  return <AuthContext.Provider value={{login,logout, signup}}>{children}</AuthContext.Provider>;
};

export default AuthContext;
