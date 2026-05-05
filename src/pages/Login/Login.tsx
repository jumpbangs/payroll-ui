import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff } from 'lucide-react';

import { login } from 'features/auth/authSlice';

import { LoginSchema } from 'utils/schema';

interface LoginInputs {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginInputs>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    console.log(data);
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
        <form
          className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='card-body'>
            <fieldset className='fieldset'>
              <label className='label' htmlFor='email'>
                Email
              </label>
              <input
                id='email'
                type='email'
                className='input'
                placeholder='Enter your email'
                {...register('email')}
              />
              {errors.email && (
                <div className='text-error text-sm'>{errors.email.message}</div>
              )}

              <label className='label' htmlFor='password'>
                Password
              </label>
              <label className='input'>
                <input
                  type={show ? 'text' : 'password'}
                  placeholder='Password'
                  className='grow'
                  {...register('password')}
                />
                <button
                  type='button'
                  onClick={() => setShow((s) => !s)}
                  className='cursor-pointer'
                  aria-label={show ? 'Hide password' : 'Show password'}
                >
                  {show ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>
              </label>

              <div>
                <button
                  type='button'
                  className='link link-hover p-0 text-left'
                  onClick={() => navigate('/forget-password')}
                >
                  Forgot password?
                </button>
              </div>
              <button className='btn btn-neutral mt-4' type='submit'>
                Login
              </button>
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
