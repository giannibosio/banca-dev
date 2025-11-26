import { NavLink } from 'react-router-dom';
import './ATMNavbar.css';

const ATMNavbar = () => {
  return (
    <div className="atm-sidebar">
      <h2 className="atm-title">BancaDev ATM</h2>

      <NavLink to="/menu" className="atm-btn">
        Menu Principale
      </NavLink>

      <NavLink to="/prelievo" className="atm-btn">
        Prelievo
      </NavLink>

      <NavLink to="/movimenti" className="atm-btn">
        Movimenti
      </NavLink>

      <NavLink to="/estratto-conto" className="atm-btn">
        Estratto Conto
      </NavLink>

      <NavLink to="/ricarica-telefonica" className="atm-btn">
        Ricarica Telefonica
      </NavLink>

      <NavLink to="/esci" className="atm-btn danger">
        Esci
      </NavLink>
    </div>
  );
};

export default ATMNavbar;
