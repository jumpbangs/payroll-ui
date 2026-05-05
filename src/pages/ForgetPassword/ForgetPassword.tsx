import { useNavigate } from 'react-router';

const ForgetPassword = () => {
  const navigate = useNavigate();

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
        <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
          <div className='card-body'>
            <fieldset className='fieldset'>
              <label className='label' htmlFor='email'>
                Password
              </label>
              <input type='email' className='input' placeholder='Email' />
              <label className='label' htmlFor='password'>
                Repeat Password
              </label>
              <input type='password' className='input' placeholder='Password' />
              <button className='btn btn-neutral mt-4'>Reset Password</button>
              <button
                className='btn btn-neutral mt-4'
                onClick={() => navigate(-1)}
              >
                Back
              </button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
