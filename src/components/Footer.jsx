import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <div className="contact-info">
              <p>📞 +254 700 123 456</p>
              <p>📍 Nairobi CBD, Kenya</p>
              <p>✉️ info@elitecuts.co.ke</p>
            </div>
            <div className="hours-info">
              <p>Mon-Sat: 8 AM - 8 PM | Sun: 10 AM - 6 PM</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Elite Cuts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;