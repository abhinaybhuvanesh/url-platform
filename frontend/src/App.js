import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';
import Verify from './pages/Verify';
import Footer from './components/Footer';
import { getToken, isLoggedIn, clearToken } from './auth';
import { API_BASE_URL } from './config';
import './App.css';

function Home() {
  const [longUrl, setLongUrl] = useState('');
  const [customAlias, setCustomAlias] = useState('');
  const [usePassword, setUsePassword] = useState(false);
  const [password, setPassword] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setShortUrl('');
    setQrCode('');
    setLoading(true);

    try {
      const token = getToken();
      const response = await axios.post(
        `${API_BASE_URL}/api/urls`,
        {
          longUrl,
          customAlias: customAlias || undefined,
          password: usePassword ? password : undefined,
        },
        token ? { headers: { Authorization: `Bearer ${token}` } } : {}
      );

      setShortUrl(response.data.shortUrl);

      try {
        const qrResponse = await axios.get(`${API_BASE_URL}/api/urls/${response.data.shortCode}/qrcode`);
        setQrCode(qrResponse.data.qrCode);
      } catch (qrErr) {
      }

      setLongUrl('');
      setCustomAlias('');
      setUsePassword(false);
      setPassword('');
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="page-container">
      <div className="hero">
        <h1>SwiftByte</h1>
        <p className="subtitle">Shorten links. Track clicks. Own your data.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="shorten-form">
          <input
            type="text"
            placeholder="Paste your long URL here"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />
          <button type="submit" className="btn-primary btn-inline" disabled={loading}>
            {loading ? 'Shortening...' : 'Shorten'}
          </button>
        </div>

        <div className="extra-options">
          <div className="form-group">
            <input
              type="text"
              placeholder="Custom alias (optional)"
              value={customAlias}
              onChange={(e) => setCustomAlias(e.target.value)}
            />
          </div>

          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={usePassword}
              onChange={(e) => setUsePassword(e.target.checked)}
            />
            Protect this link with a password
          </label>

          {usePassword && (
            <div className="form-group" style={{ marginTop: '10px' }}>
              <input
                type="password"
                placeholder="Set a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          )}
        </div>
      </form>

      {error && <p className="error-text">{error}</p>}

      {shortUrl && (
        <div className="result-box">
          <p>Your short URL: <a href={shortUrl} target="_blank" rel="noreferrer">{shortUrl}</a></p>
          {qrCode && (
            <img
              src={qrCode}
              alt="QR code"
              style={{ width: '140px', height: '140px', marginTop: '10px' }}
            />
          )}
        </div>
      )}
    </div>
  );
}

function Nav() {
  const loggedIn = isLoggedIn();

  return (
    <nav className="navbar">
      <Link to="/" className="brand">SwiftByte</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        {loggedIn ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button
              className="btn-logout"
              onClick={() => { clearToken(); window.location.href = '/'; }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/verify/:shortCode" element={<Verify />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;