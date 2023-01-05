import * as React from 'react';
// import './style.css';
import { useContext, useRef} from 'react'
import AuthContext from './context/AuthContext'

interface Ivalue{
  email: string
  password:string
}

export default function App() {
  
  const emailRef = React.useRef<HTMLInputElement>(null)

  const passwordRef = React.useRef<HTMLInputElement>(null)
  const { login, logout } = useContext(AuthContext)

  const handleSubmit = (e:any)=>{
    e.preventDefault()
    

    let payload  ={
      email:emailRef.current.value,
      password: passwordRef.current.value
    }

    console.log(payload)
    login(payload)
  }

 

  return (
    <div>
      <h1>Auth!</h1>
      
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
            <button>login</button>
          </form>
          <button onClick={()=> logout()}>logout</button>
        
      
      </div>
    </div>
    </div>
  );
}
