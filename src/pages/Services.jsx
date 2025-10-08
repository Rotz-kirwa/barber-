import './Services.css';

const Services = () => {
  const serviceCategories = [
    {
      title: 'Basic Hair Services',
      services: [
        { name: 'Classic Cut', price: 'KSh 2,500' },
        { name: 'Fade (Low, Mid, High)', price: 'KSh 3,000' },
        { name: 'Buzz Cut', price: 'KSh 2,000' },
        { name: 'Undercut', price: 'KSh 3,500' },
        { name: 'Kids\' Haircut', price: 'KSh 1,500' },
        { name: 'Edge Up', price: 'KSh 800' }
      ]
    },
    {
      title: 'Beard Services',
      services: [
        { name: 'Beard Trimming & Styling', price: 'From KSh 2,000' },
        { name: 'Beard Shaping & Detailing', price: 'KSh 2,500' },
        { name: 'Hot Towel Beard Treatment', price: 'KSh 1,800' },
        { name: 'Beard Coloring', price: 'From KSh 3,500' }
      ]
    },
    {
      title: 'Premium Shaving Services',
      services: [
        { name: 'Straight Razor Shave', price: 'KSh 3,900' },
        { name: 'Royal Shave (Hot Towel + Straight Razor + Aftershave Massage)', price: 'KSh 5,500' },
        { name: 'Express Shave', price: 'KSh 2,500' }
      ]
    },
    {
      title: 'Luxury Add-Ons',
      services: [
        { name: 'Scalp Massage', price: 'KSh 1,500' },
        { name: 'Hot Towel Treatment', price: 'KSh 1,000' },
        { name: 'Steaming & Detox', price: 'KSh 2,200' },
        { name: 'Aromatherapy Hair Wash', price: 'KSh 1,800' }
      ]
    },
    {
      title: 'Hair Treatments',
      services: [
        { name: 'Deep Conditioning Treatment', price: 'KSh 2,500' },
        { name: 'Scalp Exfoliation', price: 'KSh 2,000' },
        { name: 'Hair & Scalp Massage', price: 'KSh 2,800' },
        { name: 'Hair Coloring', price: 'From KSh 4,500' }
      ]
    },
    {
      title: 'Facial & Grooming Services',
      services: [
        { name: 'Men\'s Facial (Cleansing + Steaming + Mask)', price: 'KSh 4,000' },
        { name: 'Eye Treatment (Dark Circle Reduction)', price: 'KSh 2,500' },
        { name: 'Brow Shaping & Tinting', price: 'KSh 1,800' }
      ]
    }
  ];

  const specialPackages = [
    {
      name: 'Signature Grooming Package',
      description: 'Haircut + Beard Trim + Hot Towel + Scalp Massage',
      price: 'KSh 8,500',
      popular: true
    },
    {
      name: 'VIP Luxury Experience',
      description: 'Royal Shave + Facial + Haircut + Shoeshine',
      price: 'KSh 12,000',
      popular: false
    },
    {
      name: 'Father & Son Package',
      description: '2 Haircuts + 2 Hot Towel Treatments',
      price: 'KSh 6,000',
      popular: false
    }
  ];

  const homeServices = [
    { name: 'Mobile Barber (Haircut at Home)', price: 'From KSh 4,500' },
    { name: 'Mobile Spa (Facial + Massage at Home)', price: 'From KSh 6,000' }
  ];

  const uniqueExtras = [
    { name: 'Shoeshine Service', price: 'KSh 800' },
    { name: 'Cologne Application', price: 'KSh 500' },
    { name: 'Post-Shave Whiskey or Coffee', price: 'Complimentary with VIP packages' }
  ];

  return (
    <div className="services">
      <div className="container">
        <div className="services-header">
          <h1 className="section-title">Our Premium Services</h1>
          <p className="section-subtitle">Luxury grooming experiences tailored to perfection</p>
        </div>

        {/* Special Packages */}
        <section className="special-packages">
          <h2>Special Packages</h2>
          <div className="grid grid-3">
            {specialPackages.map((pkg, index) => (
              <div key={index} className={`package-card card ${pkg.popular ? 'popular' : ''}`}>
                {pkg.popular && <div className="popular-badge">Most Popular</div>}
                <h3>{pkg.name}</h3>
                <p className="package-description">{pkg.description}</p>
                <div className="package-price">{pkg.price}</div>
                <button className="btn btn-primary">Book Now</button>
              </div>
            ))}
          </div>
        </section>

        {/* Service Categories */}
        <section className="service-categories">
          <div className="grid grid-2">
            {serviceCategories.map((category, index) => (
              <div key={index} className="category-card card">
                <h3>{category.title}</h3>
                <ul className="service-list">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="service-item">
                      <span className="service-name">{service.name}</span>
                      <span className="service-price">{service.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Home Services */}
        <section className="home-services">
          <h2>Home Services</h2>
          <div className="grid grid-2">
            {homeServices.map((service, index) => (
              <div key={index} className="service-card card">
                <h3>{service.name}</h3>
                <div className="service-price">{service.price}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Unique Extras */}
        <section className="unique-extras">
          <h2>Unique Extras</h2>
          <div className="grid grid-3">
            {uniqueExtras.map((extra, index) => (
              <div key={index} className="extra-card card">
                <h4>{extra.name}</h4>
                <div className="extra-price">{extra.price}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;