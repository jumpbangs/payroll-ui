import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import {
  Landmark,
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
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
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

      {/* Side Drawer */}
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer-3'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <ul className='menu bg-base-200 min-h-full w-80 p-4'>
          <div className='flex flex-row items-center p-8 gap-4'>
            <div className='bg-primary p-2 rounded-lg'>
              <Landmark className='text-primary-content' />
            </div>
            <div className='flex flex-col'>
              <div className='text-primary text-lg'>Payroll Admin</div>
              <div className='text-gray-400 text-lg'>HR Management</div>
            </div>
          </div>
          {/* Sidebar content here */}
          <li>
            <button onClick={() => navigate('/dashboard')}>
              {/* Home icon */}
              <LayoutDashboard
                className={
                  isActive('/dashboard') ? 'text-primary' : 'text-slate-500'
                }
              />
              <span
                className={
                  isActive('/dashboard') ? 'text-primary' : 'text-slate-500'
                }
              >
                Dashboard
              </span>
            </button>
          </li>
          {/* Sidebar content here */}
          <li>
            <button onClick={() => navigate('/settings')}>
              {/* Settings icon */}
              <Settings2
                className={
                  isActive('/settings') ? 'text-primary' : 'text-slate-500'
                }
              />
              <span
                className={
                  isActive('/settings') ? 'text-primary' : 'text-slate-500'
                }
              >
                Settings
              </span>
            </button>
          </li>
          {/* Sidebar content here */}
          <li>
            <button onClick={handleLogout}>
              {/* Logout icon */}
              <LogOut className='text-slate-500' />
              <span className='text-slate-500'>Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DrawerContainer;
