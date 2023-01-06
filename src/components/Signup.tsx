import React from 'react'
import { useContext, useState} from 'react'
import AuthContext from '../context/AuthContext'
import { AxiosError } from "axios";

const Signup = () => {

  const emailRef = React.useRef<HTMLInputElement>(null)

  const passwordRef = React.useRef<HTMLInputElement>(null)
  const firstnameRef = React.useRef<HTMLInputElement>(null)
  const lastnameRef = React.useRef<HTMLInputElement>(null)

  const [submit, setSubmit] = useState(false)
  const [error, setError] = useState<string | null>(null);

  const { signup} = useContext(AuthContext)

  const handleSubmit = async (e:any)=>{


    e.preventDefault()
    

    let payload  ={
      email:emailRef.current.value,
      password: passwordRef.current.value,
      firstName:firstnameRef.current.value,
      lastName:lastnameRef.current.value
    }

    console.log(payload)

    try {
      setSubmit(true)
      let response = await signup(payload);
      console.log(response)
    } catch (err) {
      setSubmit(false);

      const { response } = err as AxiosError<{ message: string }>;
      console.log(response)
      setError(response?.data.message ?? "An error occurred while signing up");
    }

  }
  
  return (
    <div>
      <h1>Signup</h1>
      {
        error &&
        <>
        <div className="error">{error}</div>
        <br/>
        <br/>
        </>
      }
      <form onSubmit={handleSubmit}>
            <div>
              <label>first name</label>
              <input ref={firstnameRef} type="text" />
            </div>
            <br/>
            <div>
              <label>last name</label>
              <input ref={lastnameRef} type="text" />
            </div>
            <br/>

            <div>
              <label>email</label>
              <input ref={emailRef} type="text" />
            </div>
            <br/>

            <div>
              <label>password</label>
              <input ref={passwordRef} type="text" />
            </div>
            <br/>
            <button>{ submit? 'Submiting...' : 'Submit' }</button>
        </form>
    </div>
  )
}

export default Signup