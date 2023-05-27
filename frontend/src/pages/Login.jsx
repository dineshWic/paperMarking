import React from 'react';
import { useState } from 'react';
import {toast} from 'react-toastify';
import { FaSignInAlt } from 'react-icons/fa';

function Login() {
  const [formData, setFormData] = useState({  
    email: '',
    password: '',
  });

  const {email, password } = formData;

  const onchange = e => {
    setFormData(prevState => {
      return { ...prevState, [e.target.name]: e.target.value };  
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login to your account</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input 
              className='form-control' 
              type='email' 
              placeholder='Enter Your Email' 
              name='email' 
              id='email' 
              value={email} 
              onChange={onchange} 
              required
            />
          </div>
          <div className='form-group'>
            <input 
              className='form-control' 
              type='password' 
              placeholder='Enter Your Password' 
              name='password' 
              id='password' 
              value={password} 
              onChange={onchange} 
              required
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
