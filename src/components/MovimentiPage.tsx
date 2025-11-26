import { useNavigate } from 'react-router-dom';

const MovimentiPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>MOVIMENTI</h2>
      <div className="logout d-flex flex-row gap-0">
        <button
          className="btn btn-success flex-fill"
          onClick={() => navigate('/menu')}
        >
          Menu
        </button>
      </div>
    </>
  );
};

export default MovimentiPage;
