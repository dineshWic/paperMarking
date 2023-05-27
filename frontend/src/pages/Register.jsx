import React from 'react';
import { useState } from 'react';
import {toast} from 'react-toastify';
import { FaUser } from 'react-icons/fa';

function Register() {
  const [formData, setFormData] = useState({  
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onchange = e => {
    setFormData(prevState => {
      return { ...prevState, [e.target.name]: e.target.value };  
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error('Passwords do not match');
    } else {
      console.log(formData);
    }
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Register to create an account</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input 
              className='form-control' 
              type='text' 
              placeholder='Enter Your Name' 
              name='name' 
              id='name' 
              value={name} 
              onChange={onchange} 
              required
            />
          </div>
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
            <input 
              className='form-control' 
              type='password' 
              placeholder='Confirm Your Password' 
              name='password2' 
              id='password2' 
              value={password2} 
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

export default Register;
