import React , { createContext, useState } from 'react';
// import { BASE_URL} from './../constants'
import axios from 'axios'

const AuthContext = createContext<any | null >(undefined);



export const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState(false)

  let login = async(payload) =>{
    setAuth(true)
    // console.log(BASE_URL)
    let response = await axios.post(`https://airbnb-clone-apis.onrender.com/auth/login`, payload)
    console.log(payload)
    console.log(response)
    // console.log(BASE_URL)
  }


  return <AuthContext.Provider value={{login}}>{children}</AuthContext.Provider>;
};

export default AuthContext;
