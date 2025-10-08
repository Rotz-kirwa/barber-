import { useState } from 'react';
import './Booking.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    homeService: false,
    address: '',
    specialRequests: ''
  });

  const services = [
    'Classic Cut - KSh 2,500',
    'Fade (Low, Mid, High) - KSh 3,000',
    'Straight Razor Shave - KSh 3,900',
    'Royal Shave - KSh 5,500',
    'Men\'s Facial - KSh 4,000',
    'Signature Grooming Package - KSh 8,500',
    'VIP Luxury Experience - KSh 12,000',
    'Mobile Barber (Home Service) - From KSh 4,500',
    'Other (Please specify in special requests)'
  ];

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
    '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    alert('Booking request submitted! We\'ll confirm your appointment within 1 hour.');
    console.log('Booking data:', formData);
  };

  return (
    <div className="booking">
      <div className="container">
        <div className="booking-header">
          <h1 className="section-title">Book Your Premium Experience</h1>
          <p className="section-subtitle">Schedule your luxury grooming session today</p>
        </div>

        <div className="booking-content">
          <div className="booking-form-container">
            <form onSubmit={handleSubmit} className="booking-form">
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
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
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
              </div>

              <div className="form-group">
                <label htmlFor="service">Select Service *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose a service...</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Preferred Date *</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="time">Preferred Time *</label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select time...</option>
                    {timeSlots.map((time, index) => (
                      <option key={index} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="homeService"
                    checked={formData.homeService}
                    onChange={handleChange}
                  />
                  <span className="checkmark"></span>
                  Request Home Service (Additional fee applies)
                </label>
              </div>

              {formData.homeService && (
                <div className="form-group">
                  <label htmlFor="address">Home Service Address *</label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Please provide your complete address..."
                    required={formData.homeService}
                  />
                </div>
              )}

              <div className="form-group">
                <label htmlFor="specialRequests">Special Requests</label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  placeholder="Any special requests or preferences..."
                />
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Book Your Premium Experience
              </button>
            </form>
          </div>

          <div className="booking-info">
            <div className="info-card card">
              <h3>Business Hours</h3>
              <div className="hours-list">
                <div className="hours-item">
                  <span>Monday - Saturday</span>
                  <span>8:00 AM - 8:00 PM</span>
                </div>
                <div className="hours-item">
                  <span>Sunday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="hours-item">
                  <span>Home Services</span>
                  <span>Available Daily</span>
                </div>
              </div>
            </div>

            <div className="info-card card">
              <h3>Booking Policy</h3>
              <ul>
                <li>We'll confirm your appointment within 1 hour</li>
                <li>24-hour cancellation policy</li>
                <li>Home services require 48-hour advance booking</li>
                <li>First-time clients get 15% off with code PREMIUM15</li>
              </ul>
            </div>

            <div className="info-card card">
              <h3>Contact Us</h3>
              <div className="contact-info">
                <p>📞 +254 700 123 456</p>
                <p>💬 WhatsApp: +254 700 123 456</p>
                <p>✉️ info@elitecuts.co.ke</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;