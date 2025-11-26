import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 2,
  }).format(value);

const EstrattoContoPage = () => {
  const navigate = useNavigate();
  const { currentUser } = useUser();
  const saldoContabile = currentUser?.saldoContabile ?? 0;
  const saldoDisponibile = currentUser?.saldoDisponibile ?? 0;
  const numeroConto = currentUser?.numeroConto ?? '';

  return (
    <div>
      <h2>
        SALDO TOTALE DEL CONTO
        <br />
        <span className="fw-bold fs-3">{numeroConto}</span>
      </h2>
      <div className="estratto-box rounded-0 p-2 m-2 bg-white">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="fw-bold fs-1 text-success">
              {formatCurrency(saldoDisponibile)}
            </span>
          </li>
          <li className="list-group-item">
            SALDO CONTABILE
            <br />
            <span className="fw-bold fs-3">
              {formatCurrency(saldoContabile)}
            </span>
            <br />
          </li>
        </ul>
      </div>

      <div className="d-flex flex-row gap-0">
        <button
          className="btn btn-success flex-fill"
          onClick={() => navigate('/home')}
        >
          Menu
        </button>
      </div>
    </div>
  );
};

export default EstrattoContoPage;
