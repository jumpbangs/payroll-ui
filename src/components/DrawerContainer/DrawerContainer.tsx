import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import {
  LayoutDashboard,
  LogOut,
  PanelLeftOpen,
  Settings2,
} from 'lucide-react';

import { logout } from 'features/auth/authSlice';

interface DashboardProps {
  children: React.ReactNode;
}

const DrawerContainer = ({ children }: DashboardProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className='drawer lg:drawer-open'>
      <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        {/* Page content here */}
        <nav className='navbar w-full bg-base-300'>
          <label
            htmlFor='my-drawer-3'
            aria-label='open sidebar'
            className='btn btn-square btn-ghost lg:hidden'
          >
            {/* Sidebar toggle icon */}
            <PanelLeftOpen />
          </label>
          {children}
        </nav>
        {/* Page content here */}
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer-3'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <ul className='menu bg-base-200 min-h-full w-80 p-4'>
          {/* Sidebar content here */}
          <li>
            <button onClick={() => navigate('/dashboard')}>
              {/* Home icon */}
              <LayoutDashboard />
              <span>Dashboard</span>
            </button>
          </li>
          {/* Sidebar content here */}
          <li>
            <button onClick={() => navigate('/settings')}>
              {/* Settings icon */}
              <Settings2 />
              <span>Settings</span>
            </button>
          </li>
          {/* Sidebar content here */}
          <li>
            <button onClick={handleLogout}>
              {/* Logout icon */}
              <LogOut />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DrawerContainer;
