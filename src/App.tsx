import { useState } from 'react';
import InsertPinPage from './components/InsertPinPage';
import MenuPage from './components/MenuPage';
import PrelievoPage from './components/PrelievoPage';
import MovimentiPage from './components/MovimentiPage';
import EstrattoContoPage from './components/EstrattoContoPage';
import EsciPage from './components/EsciPage';
import ProtectedRoute from './components/ProtectedRoute'; //per evita l'accesso alle pagine se non loggato
import type User from './types/Users';
import { Routes, Route, useLocation } from 'react-router'; //aggiunto location per non mostrare nav in home (menù)

import reactLogo from './assets/react.svg';
import logoBancaDev from './assets/logo-bancadev.svg';

import './App.css';
import { Navbar } from './components/Navbar';

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const location = useLocation();
  const showNavbar = currentUser !== null && location.pathname !== '/home'; // showNavbar=true se User e se location!==/home

  return (
    <>
      <div className="container">
        {showNavbar && <Navbar isLoggedIn={Boolean(currentUser)} />}
        <div className="card">
          <img src={logoBancaDev} className="logo-bancadev" alt="React" />
          <Routes>
            <Route
              index
              element={<InsertPinPage setCurrentUser={setCurrentUser} />}
            />
            <Route element={<ProtectedRoute currentUser={currentUser} />}>
              <Route
                path="home"
                element={<MenuPage currentUser={currentUser} />}
              />
              <Route path="prelievo" element={<PrelievoPage />} />
              <Route path="movimenti" element={<MovimentiPage />} />
              <Route
                path="estratto-conto"
                element={<EstrattoContoPage currentUser={currentUser} />}
              />
              <Route
                path="esci"
                element={<EsciPage setCurrentUser={setCurrentUser} />}
              />
            </Route>
          </Routes>
        </div>

        <img src={reactLogo} className="react-logo" alt="React" />
      </div>
    </>
  );
}

export default App;
