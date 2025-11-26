import { useState } from 'react';
import InsertPinPage from './components/InsertPinPage';
import MenuPage from './components/MenuPage';
import PrelievoPage from './components/PrelievoPage';
import MovimentiPage from './components/MovimentiPage';
import EstrattoContoPage from './components/EstrattoContoPage';
import EsciPage from './components/EsciPage';
import ProtectedRoute from './components/ProtectedRoute';
import type User from './types/Users';
import { Routes, Route } from 'react-router-dom';

import reactLogo from './assets/react.svg';
import logoBancaDev from './assets/logo-bancadev.svg';

import './App.css';
import { Navbar } from './components/Navbar';

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  return (
    <>
      <div className="container">
        <Navbar isLoggedIn={Boolean(currentUser)} />
        <div className="card">
          <img src={logoBancaDev} className="logo-bancadev" alt="React" />

          <Routes>
            <Route
              index
              element={<InsertPinPage setCurrentUser={setCurrentUser} />}
            />
            <Route
              path="menu"
              element={
                <ProtectedRoute currentUser={currentUser}>
                  <MenuPage currentUser={currentUser} />
                </ProtectedRoute>
              }
            />
            <Route
              path="prelievo"
              element={
                <ProtectedRoute currentUser={currentUser}>
                  <PrelievoPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="movimenti"
              element={
                <ProtectedRoute currentUser={currentUser}>
                  <MovimentiPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="estratto-conto"
              element={
                <ProtectedRoute currentUser={currentUser}>
                  <EstrattoContoPage currentUser={currentUser} />
                </ProtectedRoute>
              }
            />
            <Route
              path="esci"
              element={
                <ProtectedRoute currentUser={currentUser}>
                  <EsciPage setCurrentUser={setCurrentUser} />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
        .
        <img src={reactLogo} className="react-logo" alt="React" />
      </div>
    </>
  );
}

export default App;
