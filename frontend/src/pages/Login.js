import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { saveToken } from '../auth';
import { API_BASE_URL } from '../config';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/api/auth/login`, { email, password });
      saveToken(response.data.token);
      window.location.href = '/dashboard';
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong');
    }
  }

  return (
    <div className="page-container">
      <h2>Welcome back</h2>
      <p className="subtitle">Login to manage your links</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn-primary">Login</button>
      </form>
      {error && <p className="error-text">{error}</p>}
      <p className="helper-text">No account? <Link to="/register">Register here</Link></p>
    </div>
  );
}

export default Login;