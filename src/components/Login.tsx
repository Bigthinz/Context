import React from 'react'
import { useContext, useState} from 'react'
import AuthContext from '../context/AuthContext'
import { AxiosError } from "axios";


const Login = () => {

    const emailRef = React.useRef<HTMLInputElement>(null)

    const passwordRef = React.useRef<HTMLInputElement>(null)
    const [submit, setSubmit] = useState(false)
    const [error, setError] = useState<string | null>(null);

    const { login, logout } = useContext(AuthContext)
  
    const handleSubmit = async(e:any)=>{
      e.preventDefault()
      
  
      let payload  ={
        email:emailRef.current.value,
        password: passwordRef.current.value
      }
  
      console.log(payload)

      try{
      setSubmit(true)

      const response = await login(payload)

      }catch (err) {
      setSubmit(false);

      const { response } = err as AxiosError<{ message: string }>;
      console.log(response)
      setError(response?.data.message ?? "An error occurred while signing up");
    }

    }


  return (
    <div>
      <h1>Auth!</h1>
      {
        error &&
        <>
        <div className="error">{error}</div>
        <br/>
        
        </>
      }
      <div>
        <h1>login</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>email</label>
              <input ref={emailRef} type="text" />
            </div>
            <div>
              <label>password</label>
              <input ref={passwordRef} type="text" />
            </div>
            <br/>
            <button>{ submit ? 'Submiting...' : 'Login' }</button>
          </form>
          <button onClick={()=> logout()}>logout</button>
        
      
      </div>
    </div>
    </div>
  )
}


export default Login