import React, { useContext, useState } from 'react';

import useHttp from '../../hooks/http.hook';
import { AuthContext } from '../../context/AuthContext';

import ToastMessage from './message';

export const AuthPage = () => {
  const auth = useContext(AuthContext);
  const { loading = null, request, error, clearError } = useHttp();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/registration', 'POST', { ...form });
    } catch (e) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...form });
      auth.login(data.token, data.email);
    } catch (e) {}
  };

  return (
    <>
      <ToastMessage errors={error} clearError={clearError} />

      <form className='form-signin'>
        {/* <img className="mb-4" src={iconImg} alt="" width="72" height="72" /> */}
        <h1 className='h3 mb-3 font-weight-normal'>Авторизация</h1>

        <label htmlFor='inputEmail' className='sr-only'>
          Email address
        </label>

        <input
          name='email'
          id='inputEmail'
          type='email'
          className='form-control'
          placeholder='Email'
          required
          onChange={changeHandler}
        />

        <label htmlFor='inputPassword' className='sr-only'>
          Password
        </label>

        <input
          name='password'
          id='inputPassword'
          type='password'
          className='form-control'
          placeholder='Password'
          required
          onChange={changeHandler}
        />

        {/* <div className="checkbox mb-3">
        <label>
          <input type="checkbox" />
              Remember me
            </label>
      </div> */}

        <div className='d-flex'>
          <button
            className='btn btn-lg btn-primary btn-block'
            type='submit'
            onClick={loginHandler}
            disabled={loading}
          >
            Log in
          </button>

          <button
            className='btn btn-lg btn-outline-dark btn-block'
            type='submit'
            onClick={registerHandler}
            disabled={loading}
          >
            Registration
          </button>
        </div>

        <p className='mt-5 mb-3 text-muted'>&copy; 2020-2020</p>
      </form>
    </>
  );
};
