import { useNavigate } from 'react-router-dom';
import type { Dispatch, SetStateAction } from 'react';
import type User from '../types/Users';

interface EsciPageProps {
  setCurrentUser: Dispatch<SetStateAction<User | null>>;
}

const EsciPage = ({ setCurrentUser }: EsciPageProps) => {
  const navigate = useNavigate();

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
