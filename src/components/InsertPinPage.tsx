import { useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router';
import usersData from '../data/users.json';
import type User from '../types/Users';
import Button from './Button';
import { useUser } from '../context/UserContext';
import './InsertPinPage.css';

const InsertPinPage = () => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setCurrentUser } = useUser();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    // Effettua una conversione sicura del tipo usando 'unknown' come suggerito
    const users = usersData as unknown as User[];
    //pulizia pin
    const cleanedPin = pin.trim();
    const user = users.find((u) => u.pin === cleanedPin);

    if (user && pin) {
      setCurrentUser(user);
      navigate('/home');
    } else {
      setPin('');
      setError('PIN non riconosciuto');
    }
  };

  // --- Gestione tastiera  ---
  const appendDigit = (digit: string) => {
    if (pin.length >= 6) return; // massimo 6 cifre
    setPin((prev) => prev + digit);
    setError('');
  };

  const clearPin = () => {
    setPin('');
    setError('');
  };

  const tastierino = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        {/* Campo username nascosto - necessario per accessibilità */}
        <label htmlFor="pin" className="sr-only">
          User
        </label>
        <input
          type="text"
          id="username"
          name="username"
          autoComplete="username"
          className="sr-only"
        />

        <div className=" d-flex flex-column ">
          <input
            maxLength={6}
            inputMode="numeric"
            type="password"
            id="pin"
            name="pin"
            autoComplete="current-password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="Inserisci PIN"
          />

          <div className="d-flex gap-0">
            {tastierino.slice(0, 3).map((value) => (
              <Button
                key={value}
                className="flex-fill"
                btnColor="primary"
                children={value}
                type="button"
                onClick={() => appendDigit(String(value))}
              />
            ))}
          </div>

          <div className="d-flex gap-0">
            {tastierino.slice(3, 6).map((value) => (
              <Button
                key={value}
                className="flex-fill"
                btnColor="primary"
                children={value}
                type="button"
                onClick={() => appendDigit(String(value))}
              />
            ))}
          </div>

          <div className="d-flex gap-0">
            {tastierino.slice(6, 9).map((value) => (
              <Button
                key={value}
                className="flex-fill"
                btnColor="primary"
                children={value}
                type="button"
                onClick={() => appendDigit(String(value))}
              />
            ))}
          </div>

          <div className="d-flex gap-1">
            <button
              className="btn btn-danger flex-fill"
              type="button"
              onClick={clearPin}
            >
              DEL
            </button>
            <button
              className="btn btn-primary flex-fill"
              type="button"
              onClick={() => appendDigit('0')}
            >
              0
            </button>
            <button className="btn btn-success flex-fill" type="submit">
              OK
            </button>
          </div>
          {error && (
            <div className="error-message" aria-live="polite">
              {error}
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default InsertPinPage;
