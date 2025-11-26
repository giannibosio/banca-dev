import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const EsciPage = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useUser();

  const handleEsci = () => {
    setCurrentUser(null);
    navigate('/');
  };

  return (
    <>
      <h2>LOGOUT</h2>
      <p>Vuoi uscire?</p>
      <div className="logout d-flex flex-row gap-0">
        <button className="btn btn-success flex-fill" onClick={handleEsci}>
          SI
        </button>
        <button
          className="btn btn-secondary flex-fill"
          onClick={() => navigate('/home')}
        >
          NO
        </button>
      </div>
    </>
  );
};

export default EsciPage;
