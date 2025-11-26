import { useNavigate } from 'react-router-dom';
import type User from '../types/Users';

import './MenuPage.css';

interface MenuPageProps {
  currentUser: User | null;
}

const MenuPage = ({ currentUser }: MenuPageProps) => {
  const navigate = useNavigate();

  return (
    <>
      <h2>
        {currentUser
          ? `Ciao ${currentUser.nome}, cosa vuoi fare oggi?`
          : 'Cosa vuoi fare oggi?'}
      </h2>
      <div className="menu-buttons d-flex gap-0 flex-column">
        <button
          className="btn btn-primary flex-fill"
          type="button"
          onClick={() => navigate('/prelievo')}
        >
          PRELIEVO
        </button>
        <button
          className="btn btn-primary flex-fill"
          type="button"
          onClick={() => navigate('/movimenti')}
        >
          MOVIMENTI
        </button>
        <button
          className="btn btn-primary flex-fill"
          type="button"
          onClick={() => navigate('/estratto-conto')}
        >
          SALDO TOTALE
        </button>
        <button
          className="btn btn-success flex-fill"
          type="button"
          onClick={() => navigate('/esci')}
        >
          Esci
        </button>
      </div>
    </>
  );
};

export default MenuPage;
