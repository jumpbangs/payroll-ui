import { useState } from 'react';
import { Route, Routes } from 'react-router';

import ProtectedRoute from 'components/ProtectedRoute';
import Dashboard from 'pages/Dashboard';
import ForgetPassword from 'pages/ForgetPassword';
import Login from 'pages/Login';

import './App.css';

const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const handleLogin = () => {
    setUserLoggedIn(true);
  };

  return (
    <main className='container'>
      <Routes>
        <Route path='/' element={<Login handleLogin={() => handleLogin()} />} />
        <Route path='/forget-password' element={<ForgetPassword />} />
        <Route element={<ProtectedRoute isAuthenticated={userLoggedIn} />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
