import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const heroImages = [
    'https://media.istockphoto.com/id/1973194125/photo/hairdresser-shaping-eyebrows-of-man-client-using-razor-in-barbershop.webp?a=1&b=1&s=612x612&w=0&k=20&c=aO_xLIVQ2a2LJ_U56cwUlH9DcIbj1jwxnKAPsh8CBnc=',
    'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFyYmVyfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1536520002442-39764a41e987?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhcmJlcnxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhcmJlcnxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1512864084360-7c0c4d0a0845?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGJhcmJlcnxlbnwwfHwwfHx8MA%3D%3D'
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const featuredServices = [
    {
      icon: '💈',
      title: 'Signature Haircut & Scalp Massage',
      price: 'From KSh 4,500',
      description: 'Premium cut with relaxing scalp treatment'
    },
    {
      icon: '✂️',
      title: 'Straight Razor Shave with Hot Towel',
      price: 'From KSh 3,900',
      description: 'Traditional shave with luxury hot towel service'
    },
    {
      icon: '🧖',
      title: 'Male Facial & Steaming',
      price: 'From KSh 5,200',
      description: 'Deep cleansing facial with aromatherapy steaming'
    },
    {
      icon: '🏆',
      title: 'VIP Grooming Package',
      price: 'From KSh 12,000',
      description: 'Complete luxury experience with all premium services'
    }
  ];

  const whyChooseUs = [
    {
      title: 'Master Barbers with 10+ Years Experience',
      description: 'Skilled professionals trained in traditional and modern techniques'
    },
    {
      title: 'Luxury Products & Premium Tools',
      description: 'Only the finest products and equipment for exceptional results'
    },
    {
      title: 'Exclusive VIP Packages',
      description: 'Tailored experiences that go beyond ordinary grooming'
    },
    {
      title: 'Home Service Available',
      description: 'Luxury grooming in the comfort of your own space'
    }
  ];

  const testimonials = [
    {
      name: 'Daniel K.',
      text: 'The best straight razor shave I\'ve ever had! Absolutely incredible service.',
      rating: 5
    },
    {
      name: 'Michael R.',
      text: 'Elite Cuts transformed my look completely. The VIP package is worth every penny.',
      rating: 5
    },
    {
      name: 'James M.',
      text: 'Professional, luxurious, and relaxing. This is how grooming should be done.',
      rating: 5
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title fade-in">Elevate Your Grooming Experience</h1>
          <p className="hero-subtitle fade-in">Where Tradition Meets Luxury – Premium Barber Services Tailored for You</p>
          <div className="hero-buttons fade-in">
            <Link to="/booking" className="btn btn-primary">Book a Premium Experience</Link>
            <Link to="/services" className="btn btn-accent">Explore Services</Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-slider">
            {heroImages.map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`Elite Cuts Service ${index + 1}`}
                className={index === currentImage ? 'active' : ''}
              />
            ))}
          </div>
          <div className="slider-dots">
            {heroImages.map((_, index) => (
              <button 
                key={index}
                className={`dot ${index === currentImage ? 'active' : ''}`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Promotion Banner */}
      <section className="promotion-banner">
        <div className="container">
          <p>🎉 First-Time Clients Get 15% Off Premium Packages! Use Code: <strong>PREMIUM15</strong></p>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section featured-services">
        <div className="container">
          <h2 className="section-title">Our Signature Services</h2>
          <p className="section-subtitle">Experience the finest in luxury grooming</p>
          <div className="grid grid-4">
            {featuredServices.map((service, index) => (
              <div key={index} className="service-card card fade-in">
                {index === 0 ? (
                  <div className="service-image">
                    <img src="https://media.istockphoto.com/id/1490924580/photo/hairdresser-washing-hair-of-beautiful-asian-woman-in-beauty-salon-small-business-owner.webp?a=1&b=1&s=612x612&w=0&k=20&c=qqq8YjT26OccsC1V1nP9w9zCcDQyH-9az5-L4Fti2LY=" alt="Signature Haircut & Scalp Massage" />
                  </div>
                ) : index === 1 ? (
                  <div className="service-image">
                    <img src="https://images.unsplash.com/photo-1653875700318-c235ce6eb128?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxTdHJhaWdodCUyMFJhem9yJTIwU2hhdmUlMjB3aXRoJTIwSG90JTIwVG93ZWx8ZW58MHx8MHx8fDA%3D" alt="Straight Razor Shave with Hot Towel" />
                  </div>
                ) : index === 2 ? (
                  <div className="service-image">
                    <img src="https://media.istockphoto.com/id/2223396405/photo/hairdresser-steaming-face-of-client-in-beauty-salon.webp?a=1&b=1&s=612x612&w=0&k=20&c=TsbF1LisZN_ASFyY7PD3G7qtZKhpHr6FTk-hvr4ZVd0=" alt="Male Facial & Steaming" />
                  </div>
                ) : index === 3 ? (
                  <div className="service-image">
                    <img src="https://images.unsplash.com/photo-1705976062088-5433328c2dcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fFZJUCUyMEdyb29taW5nJTIwUGFja2FnZXxlbnwwfHwwfHx8MA%3D%3D" alt="VIP Grooming Package" />
                  </div>
                ) : (
                  <div className="service-icon">{service.icon}</div>
                )}
                <h3>{service.title}</h3>
                <p className="service-price">{service.price}</p>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-choose-us">
        <div className="container">
          <h2 className="section-title">Why Choose Elite Cuts</h2>
          <div className="grid grid-2">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="feature-card card fade-in">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="grid grid-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card card fade-in">
                <div className="stars">
                  {'⭐'.repeat(testimonial.rating)}
                </div>
                <p>"{testimonial.text}"</p>
                <h4>- {testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;