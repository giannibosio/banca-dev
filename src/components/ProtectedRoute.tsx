import { Navigate, Outlet } from 'react-router';
import { useUser } from '../context/UserContext';

const ProtectedRoute = () => {
  const { currentUser } = useUser();

  if (!currentUser) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
