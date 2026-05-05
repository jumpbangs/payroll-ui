import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router';

import type { RootState } from 'store/store';

// type ProtectedRouteProps = {
//   isAuthenticated: boolean;
//   isLoading?: boolean;
// };

const ProtectedRoute = () => {
  const location = useLocation();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  console.log(isAuthenticated);
  // if (isLoading) return <span className="loading loading-spinner loading-xl"></span>
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to='/' replace state={{ from: location }} />
  );
};

export default ProtectedRoute;
