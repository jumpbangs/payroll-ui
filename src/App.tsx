import { Route, Routes } from 'react-router';

import ProtectedRoute from 'components/ProtectedRoute';
import Dashboard from 'pages/Dashboard';
import ForgetPassword from 'pages/ForgetPassword';
import Login from 'pages/Login';
import SettingPage from 'pages/SettingPage';

import './App.css';

const App = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/forget-password' element={<ForgetPassword />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/settings' element={<SettingPage />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
