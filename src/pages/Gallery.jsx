import { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Luxury Barber Chair',
      category: 'Interior'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Barber Shop Interior',
      category: 'Interior'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Hot Towel Treatment',
      category: 'Services'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Straight Razor Shave',
      category: 'Services'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Beard Trimming',
      category: 'Services'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Professional Haircut',
      category: 'Before/After'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Barber Tools',
      category: 'Tools'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Luxury Grooming Products',
      category: 'Products'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Master Barber at Work',
      category: 'Team'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Satisfied Client',
      category: 'Clients'
    }
  ];

  const categories = ['All', 'Interior', 'Services', 'Before/After', 'Team', 'Tools', 'Products', 'Clients'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      <div className="container">
        <div className="gallery-header">
          <h1 className="section-title">Our Gallery</h1>
          <p className="section-subtitle">
            Explore our luxury barber shop and see the artistry in action
          </p>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => openModal(image)}
            >
              <img src={image.src} alt={image.alt} />
              <div className="gallery-overlay">
                <div className="overlay-content">
                  <h4>{image.alt}</h4>
                  <p>{image.category}</p>
                  <span className="view-icon">👁️</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>×</button>
              <img src={selectedImage.src} alt={selectedImage.alt} />
              <div className="modal-info">
                <h3>{selectedImage.alt}</h3>
                <p>Category: {selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="gallery-cta">
          <h2>Ready to Experience Elite Cuts?</h2>
          <p>Book your appointment today and join our satisfied clients</p>
          <a href="/booking" className="btn btn-primary">Book Now</a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;