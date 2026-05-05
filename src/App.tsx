import { Route, Routes } from 'react-router';

import ProtectedRoute from 'components/ProtectedRoute';
import Dashboard from 'pages/Dashboard';
import ForgetPassword from 'pages/ForgetPassword';
import Login from 'pages/Login';

import './App.css';

const App = () => {
  return (
    <main className='container'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/forget-password' element={<ForgetPassword />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
