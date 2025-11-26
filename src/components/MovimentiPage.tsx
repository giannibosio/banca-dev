import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const MovimentiPage = () => {
  const navigate = useNavigate();
  const { currentUser } = useUser();
  return (
    <>
      <h2>
        MOVIMENTI SUL CONTO
        <br />
        <span className="fw-bold fs-3">
          {currentUser ? currentUser.numeroConto : '-'}
        </span>
      </h2>
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
