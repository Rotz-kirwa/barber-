import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    alert('Message sent! We\'ll get back to you within 24 hours.');
    console.log('Contact form data:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const serviceAreas = [
    'Nairobi CBD',
    'Westlands',
    'Karen',
    'Lavington',
    'Kilimani',
    'Parklands',
    'Runda',
    'Muthaiga'
  ];

  return (
    <div className="contact">
      <div className="container">
        <div className="contact-header">
          <h1 className="section-title">Get In Touch</h1>
          <p className="section-subtitle">
            Ready to experience luxury grooming? Contact us today
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-section">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info-section">
            <div className="contact-card card">
              <h3>Contact Information</h3>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Address</h4>
                  <p>Kimathi Street, Nairobi CBD<br />Kenya</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <h4>Phone</h4>
                  <p>+254 700 123 456</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">💬</span>
                <div>
                  <h4>WhatsApp</h4>
                  <p>+254 700 123 456</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <h4>Email</h4>
                  <p>info@elitecuts.co.ke</p>
                </div>
              </div>
            </div>

            <div className="hours-card card">
              <h3>Business Hours</h3>
              <div className="hours-list">
                <div className="hours-item">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 8:00 PM</span>
                </div>
                <div className="hours-item">
                  <span>Saturday</span>
                  <span>8:00 AM - 8:00 PM</span>
                </div>
                <div className="hours-item">
                  <span>Sunday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="hours-item special">
                  <span>Home Services</span>
                  <span>Available Daily</span>
                </div>
              </div>
            </div>

            <div className="social-card card">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="#" className="social-link instagram">
                  <span>📷</span>
                  <div>
                    <h4>Instagram</h4>
                    <p>@elitecuts_nairobi</p>
                  </div>
                </a>
                <a href="#" className="social-link facebook">
                  <span>📘</span>
                  <div>
                    <h4>Facebook</h4>
                    <p>Elite Cuts Barber Shop</p>
                  </div>
                </a>
                <a href="#" className="social-link twitter">
                  <span>🐦</span>
                  <div>
                    <h4>Twitter</h4>
                    <p>@EliteCutsKE</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Home Service Areas */}
        <section className="service-areas">
          <h2>Home Service Areas</h2>
          <p>We provide luxury grooming services in the following areas:</p>
          <div className="areas-grid">
            {serviceAreas.map((area, index) => (
              <div key={index} className="area-item">
                <span className="area-icon">🏠</span>
                <span>{area}</span>
              </div>
            ))}
          </div>
          <p className="areas-note">
            Don't see your area? Contact us - we may still be able to serve you!
          </p>
        </section>

        {/* Map Section */}
        <section className="map-section">
          <h2>Find Us</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8199!2d36.8219!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMzEuNiJTIDM2wrA0OSczMS4wIkU!5e0!3m2!1sen!2ske!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '15px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Elite Cuts Location"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;