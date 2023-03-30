import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const navigate = useNavigate();
    const [data , setData] = useState({
      name: '',
      email: '',
      password: '',
    });

    const handleChange = (e) => {
      setData({...data, [e.target.name] : e.target.value})
    } 

    const submitForm = (e) => {
        e.preventDefault();
        axios.post('http://localhost/api/user/save', data).then(function(response){
          console.log(response.data);
          navigate('/login')

        });
     
    }
  return (
    <>
      <div className="register">
        <form onSubmit={submitForm}> 
        <div className="box">
        <h1>REGISTER NOW</h1>
          <input type="text" placeholder='enter your name' name='name' onChange={handleChange} value={data.name}/>  
          <input type="email" placeholder='enter your email' name='email'onChange={handleChange} value={data.email}/>  
          <input type="password" placeholder='enter your password' name='password' onChange={handleChange} value={data.password}/> 
          <input type="submit"  value="Register" className='btn'/>
        </div>
         </form>
      </div>   
    </>
  )
}

export default Register