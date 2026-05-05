import { useNavigate } from 'react-router';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className='hero bg-base-200 min-h-screen'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>Dashboard</h1>
          <p className='py-6'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>

          <button
            className='btn btn-neutral mt-4'
            onClick={() => navigate('/')}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
