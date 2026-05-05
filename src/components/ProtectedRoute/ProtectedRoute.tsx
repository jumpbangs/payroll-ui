import { Navigate, Outlet } from 'react-router';

type ProtectedRouteProps = {
  isAuthenticated: boolean;
  isLoading?: boolean;
};

const ProtectedRoute = ({ isAuthenticated, isLoading }: ProtectedRouteProps) => {
  console.log(isAuthenticated);
  if (isLoading) return <span className="loading loading-spinner loading-xl"></span>
  return isAuthenticated ? <Outlet /> : <Navigate to='/' replace />;
};

export default ProtectedRoute;
