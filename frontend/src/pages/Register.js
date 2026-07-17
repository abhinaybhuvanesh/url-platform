import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../config';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      await axios.post(`${API_BASE_URL}/api/auth/register`, { name, email, password });
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong');
    }
  }

  return (
    <div className="page-container">
      <h2>Create your account</h2>
      <p className="subtitle">Start shortening and tracking links</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn-primary">Register</button>
      </form>
      {error && <p className="error-text">{error}</p>}
      <p className="helper-text">Already have an account? <Link to="/login">Login here</Link></p>
    </div>
  );
}

export default Register;