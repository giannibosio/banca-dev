import { Navigate, Outlet } from 'react-router';
import type User from '../types/Users';

interface ProtectedRouteProps {
  currentUser: User | null;
}

const ProtectedRoute = ({ currentUser }: ProtectedRouteProps) => {
  if (!currentUser) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
