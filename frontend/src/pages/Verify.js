import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../config';

function Verify() {
  const { shortCode } = useParams();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post(`${API_BASE_URL}/api/urls/${shortCode}/unlock`, { password });
      window.location.href = response.data.longUrl;
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong');
    }
  }

  return (
    <div className="page-container">
      <h2>Password Required</h2>
      <p className="subtitle">This link is protected</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn-primary">Unlock</button>
      </form>
      {error && <p className="error-text">{error}</p>}
    </div>
  );
}

export default Verify;