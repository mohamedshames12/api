import React from 'react'

const Login = () => {
  return (
    <>
         <div className="register login">
        <div className="box">
        <h1>LOGIN NOW</h1>
          <input type="email" placeholder='enter your email'/>  
          <input type="password" placeholder='enter your password'/> 
          <input type="submit"  value="Login" className='btn'/>
        </div>
      </div>   
    </>
  )
}

export default Login