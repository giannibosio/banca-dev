import { useUser } from './context/UserContext';
import InsertPinPage from './components/InsertPinPage';
import MenuPage from './components/MenuPage';
import PrelievoPage from './components/PrelievoPage';
import MovimentiPage from './components/MovimentiPage';
import EstrattoContoPage from './components/EstrattoContoPage';
import EsciPage from './components/EsciPage';
import ProtectedRoute from './components/ProtectedRoute';
import { Routes, Route, useLocation } from 'react-router';

import reactLogo from './assets/react.svg';
import logoBancaDev from './assets/logo-bancadev.svg';

import './App.css';
import { Navbar } from './components/Navbar';

function App() {
  const { currentUser } = useUser();
  const location = useLocation();
  const showNavbar = currentUser !== null && location.pathname !== '/home';

  return (
    <>
      <div className="container">
        {showNavbar && <Navbar isLoggedIn={Boolean(currentUser)} />}
        <div className="card">
          <img src={logoBancaDev} className="logo-bancadev" alt="React" />
          <Routes>
            <Route index element={<InsertPinPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="home" element={<MenuPage />} />
              <Route path="prelievo" element={<PrelievoPage />} />
              <Route path="movimenti" element={<MovimentiPage />} />
              <Route path="estratto-conto" element={<EstrattoContoPage />} />
              <Route path="esci" element={<EsciPage />} />
            </Route>
          </Routes>
        </div>

        <img src={reactLogo} className="react-logo" alt="React" />
      </div>
    </>
  );
}

export default App;
