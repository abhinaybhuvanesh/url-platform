function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} SwiftByte. All rights reserved.</p>
      <div className="footer-links">
        <a href="/terms">Terms of Service</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/contact">Contact</a>
      </div>
    </footer>
  );
}

export default Footer;