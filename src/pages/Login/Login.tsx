import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { login } from 'features/auth/authSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
    navigate('/dashboard');
  };
  return (
    <div className='hero bg-base-200 min-h-screen'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>Login now!</h1>
          <p className='py-6'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
          <div className='card-body'>
            <fieldset className='fieldset'>
              <label className='label' htmlFor='email'>
                Email
              </label>
              <input type='email' className='input' placeholder='Email' />
              <label className='label' htmlFor='password'>
                Password
              </label>
              <input type='password' className='input' placeholder='Password' />
              <div>
                <button
                  type='button'
                  className='link link-hover p-0 text-left'
                  onClick={() => navigate('/forget-password')}
                >
                  Forgot password?
                </button>
              </div>
              <button
                className='btn btn-neutral mt-4'
                onClick={() => handleLogin()}
              >
                Login
              </button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
