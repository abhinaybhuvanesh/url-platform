import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getToken, isLoggedIn } from '../auth';
import { API_BASE_URL } from '../config';

function Dashboard() {
  const [links, setLinks] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate('/login');
      return;
    }
    async function fetchLinks() {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/urls/my-links`, {
          headers: { Authorization: `Bearer ${getToken()}` },
        });
        setLinks(response.data);
      } catch (err) {
        setError('Could not load your links');
      } finally {
        setLoading(false);
      }
    }
    fetchLinks();
  }, [navigate]);

  function copyToClipboard(shortCode) {
    navigator.clipboard.writeText(`${API_BASE_URL}/${shortCode}`);
  }
  if (loading) return <p>Loading your links...</p>;
  const totalClicks = links.reduce((sum, link) => sum + link.clickCount, 0);
  return (
    <div className="page-container wide">
      <h2>My Links</h2>
      {links.length > 0 && (
        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-value">{links.length}</div>
            <div className="stat-label">Total Links</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{totalClicks}</div>
            <div className="stat-label">Total Clicks</div>
          </div>
        </div>
      )}
      {error && <p className="error-text">{error}</p>}
      {links.length === 0 ? (
        <p className="empty-state">You haven't created any links yet.</p>
      ) : (
        <table className="links-table">
          <thead>
            <tr><th>Short Code</th><th>Original URL</th><th>Clicks</th><th>Created</th></tr>
          </thead>
          <tbody>
            {links.map((link) => (
              <tr key={link._id}>
                <td>
                  <a href={`${API_BASE_URL}/${link.shortCode}`} target="_blank" rel="noreferrer">{link.shortCode}</a>
                  <button className="copy-btn" onClick={() => copyToClipboard(link.shortCode)}>Copy</button>
                </td>
                <td>{link.longUrl}</td>
                <td><span className="click-badge">{link.clickCount}</span></td>
                <td>{new Date(link.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Dashboard;