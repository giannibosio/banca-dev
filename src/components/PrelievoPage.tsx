import { useNavigate } from 'react-router-dom';

const PrelievoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>PRELIEVO</h2>

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

export default PrelievoPage;
