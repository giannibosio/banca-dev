import { Navigate } from 'react-router';
import type { ReactNode } from 'react';
import type User from '../types/Users';

interface ProtectedRouteProps {
  children: ReactNode;
  currentUser: User | null;
}

const ProtectedRoute = ({ children, currentUser }: ProtectedRouteProps) => {
  if (!currentUser) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
