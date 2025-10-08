import './About.css';

const About = () => {
  const teamMembers = [
    {
      name: 'John Mwangi',
      title: 'Master Barber & Founder',
      experience: '12 Years Experience',
      specialty: 'Straight Razor Shaves & Classic Cuts',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'David Kiprotich',
      title: 'Senior Barber',
      experience: '8 Years Experience',
      specialty: 'Modern Fades & Beard Styling',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Samuel Ochieng',
      title: 'Grooming Specialist',
      experience: '6 Years Experience',
      specialty: 'Facials & Scalp Treatments',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Michael Wanjiku',
      title: 'Style Consultant',
      experience: '10 Years Experience',
      specialty: 'Hair Coloring & Styling',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    }
  ];

  return (
    <div className="about">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-content">
            <h1 className="section-title">About Elite Cuts</h1>
            <p className="hero-text">
              Founded in 2018, Elite Cuts is more than a barber shop—it's a grooming sanctuary. 
              Our master barbers combine traditional techniques with modern luxury to deliver an 
              unmatched experience. From hot towel shaves to VIP grooming packages, we're redefining 
              what it means to look and feel your best.
            </p>
          </div>
          <div className="about-hero-image">
            <img 
              src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Elite Cuts Interior" 
            />
          </div>
        </section>

        {/* Our Story */}
        <section className="section our-story">
          <h2 className="section-title">Our Story</h2>
          <div className="story-content">
            <p>
              Elite Cuts was born from a passion for exceptional grooming and a vision to create 
              a space where men could experience the finest in traditional barbering combined with 
              modern luxury. What started as a small neighborhood barber shop has evolved into 
              Nairobi's premier destination for discerning gentlemen.
            </p>
            <p>
              We believe that grooming is an art form, and every client deserves a personalized 
              experience that leaves them feeling confident, refreshed, and impeccably styled. 
              Our commitment to excellence extends beyond just haircuts – we offer a complete 
              luxury experience that includes premium products, expert techniques, and unparalleled service.
            </p>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="section mission-values">
          <div className="grid grid-2">
            <div className="mission card">
              <h3>Our Mission</h3>
              <p>
                To provide a premium grooming experience that leaves you feeling confident, 
                relaxed, and refreshed. We strive to exceed expectations through exceptional 
                service, skilled craftsmanship, and attention to detail.
              </p>
            </div>
            <div className="values card">
              <h3>Our Values</h3>
              <ul>
                <li>Excellence in every service</li>
                <li>Respect for traditional techniques</li>
                <li>Innovation in modern grooming</li>
                <li>Personalized client experiences</li>
                <li>Commitment to quality products</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="section team">
          <h2 className="section-title">Meet Our Master Barbers</h2>
          <p className="section-subtitle">
            Our team of skilled professionals brings decades of combined experience
          </p>
          <div className="grid grid-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member card">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h4>{member.name}</h4>
                  <p className="member-title">{member.title}</p>
                  <p className="member-experience">{member.experience}</p>
                  <p className="member-specialty">Specialty: {member.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section why-choose">
          <h2 className="section-title">Why Choose Elite Cuts</h2>
          <div className="grid grid-3">
            <div className="feature card">
              <div className="feature-icon">🏆</div>
              <h4>Award-Winning Service</h4>
              <p>Recognized as Nairobi's premier luxury barber shop with numerous industry awards.</p>
            </div>
            <div className="feature card">
              <div className="feature-icon">✂️</div>
              <h4>Master Craftsmen</h4>
              <p>Our barbers are trained in both traditional and contemporary techniques.</p>
            </div>
            <div className="feature card">
              <div className="feature-icon">🌟</div>
              <h4>Premium Products</h4>
              <p>We use only the finest grooming products and professional-grade tools.</p>
            </div>
            <div className="feature card">
              <div className="feature-icon">🏠</div>
              <h4>Home Services</h4>
              <p>Luxury grooming in the comfort of your own home or office.</p>
            </div>
            <div className="feature card">
              <div className="feature-icon">💎</div>
              <h4>VIP Experience</h4>
              <p>Exclusive packages designed for the most discerning clients.</p>
            </div>
            <div className="feature card">
              <div className="feature-icon">⏰</div>
              <h4>Flexible Hours</h4>
              <p>Extended hours and weekend availability to fit your schedule.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;