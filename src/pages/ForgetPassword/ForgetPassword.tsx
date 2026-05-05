import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { zodResolver } from '@hookform/resolvers/zod';

import { ForgetPassSchema } from 'utils/schema';
interface ForgetPassInput {
  email: string;
  password: string;
  repeat_pass: string;
}

const ForgetPassword = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ForgetPassInput>({
    defaultValues: {
      email: '',
      password: '',
      repeat_pass: '',
    },
    resolver: zodResolver(ForgetPassSchema),
  });

  const onSubmit: SubmitHandler<ForgetPassInput> = (data) => {
    console.log(data);
    // navigate('/');
  };

  return (
    <div className='hero bg-base-200 min-h-screen'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>Forget Password</h1>
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
                type='email'
                className='input'
                placeholder='Enter your email'
                {...register('email')}
              />
              {errors.email && (
                <div className='text-error text-sm'>{errors.email.message}</div>
              )}

              <label className='label' htmlFor='password'>
                New Password
              </label>
              <input
                type='password'
                className='input'
                placeholder='Enter your new password'
                {...register('password')}
              />
              {errors.password && (
                <div className='text-error text-sm'>
                  {errors.password.message}
                </div>
              )}

              <label className='label' htmlFor='repeat_pass'>
                Repeat Password
              </label>
              <input
                type='password'
                className='input'
                placeholder='Repeat your new password'
                {...register('repeat_pass')}
              />
              {errors.repeat_pass && (
                <div className='text-error text-sm'>
                  {errors.repeat_pass.message}
                </div>
              )}
              <button className='btn btn-neutral mt-4' type='submit'>
                Reset Password
              </button>
              <button
                className='btn btn-neutral mt-4'
                onClick={() => navigate(-1)}
              >
                Back
              </button>
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
