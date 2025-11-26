import { useNavigate } from 'react-router-dom';

const RicaricaTelefonicaPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Ricarica Telefonica</h2>
      <div className="logout d-flex flex-row gap-0">
        <button
          className="btn btn-success flex-fill"
          onClick={() => navigate('/menu')}
        >
          Menu
        </button>
      </div>
    </div>
  );
};

export default RicaricaTelefonicaPage;
