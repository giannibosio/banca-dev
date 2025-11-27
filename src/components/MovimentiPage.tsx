import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import type { Movimento } from '../types/Users';
import './MovimentiPage.css';

const MovimentiPage = () => {
  const navigate = useNavigate();
  const { currentUser } = useUser();

  // Array contenente tutti i movimenti recenti dell'utente corrente
  const movimentiRecenti: Movimento[] = currentUser?.movimentiRecenti || [];

  return (
    <>
      <h2>
        MOVIMENTI SUL CONTO
        <br />
        <span className="fw-bold fs-3">
          {currentUser ? currentUser.numeroConto : '-'}
        </span>
      </h2>

      <div className="estratto-box rounded-0 p-2 m-2 bg-white">
        {movimentiRecenti.length > 0 ? (
          <div className="movimenti-grid">
            <div className="movimenti-header">
              <div className="grid-cell">Data</div>
              <div className="grid-cell">Descrizione</div>
              <div className="grid-cell">Categoria</div>
              <div className="grid-cell text-end">Importo</div>
            </div>
            {movimentiRecenti.map((movimento, index) => (
              <div key={index} className="movimenti-row">
                <div className="grid-cell">{movimento.data}</div>
                <div className="grid-cell">{movimento.descrizione}</div>
                <div className="grid-cell">{movimento.categoria}</div>
                <div
                  className={`grid-cell text-end ${
                    movimento.importo >= 0 ? 'text-success' : 'text-danger'
                  }`}
                >
                  {movimento.importo >= 0 ? '+' : ''}
                  {movimento.importo.toFixed(2)} €
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-muted p-3">Nessun movimento disponibile</div>
        )}
      </div>

      <div className="logout d-flex flex-row gap-0">
        <button
          className="btn btn-success flex-fill"
          onClick={() => navigate('/home')}
        >
          Menu
        </button>
      </div>
    </>
  );
};

export default MovimentiPage;
