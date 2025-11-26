import { NavLink } from 'react-router-dom';
import './Navbar.css';

interface NavbarProps {
  isLoggedIn: boolean;
}

export function Navbar({ isLoggedIn }: NavbarProps) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {isLoggedIn && (
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink to="/home" end className="nav-link">
                  HOME
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/prelievo" className="nav-link">
                  PRELIEVO
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/movimenti" className="nav-link">
                  MOVIMENTI
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/estratto-conto" className="nav-link">
                  SALDO TOTALE
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/esci" className="nav-link ">
                  LOGOUT
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
