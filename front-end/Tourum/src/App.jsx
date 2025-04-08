import React from "react";
import { Clock, Calendar, Search, MapPin, Star, Heart, User, PenSquare } from "lucide-react"
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import "./App.css";
import WriteBlog from "./components/ui/User/writeBlog/writeBlog";


const App = () => {
  const featuredDestinations = [
    {
      id: 1,
      name: "Bali, Indonesia",
      image: "../src/assets/images/bali.jpg",
      rating: 4.8,
      price: "$899",
      duration: "7 days",
      description: "Tropical paradise with beautiful beaches and rich culture"
    },
    {
      id: 2,
      name: "Paris, France",
      image: "../src/assets/images/paris.jpg",
      rating: 4.9,
      price: "$1299",
      duration: "5 days",
      description: "City of love, art, and amazing cuisine"
    },
    {
      id: 3,
      name: "Tokyo, Japan",
      image: "../src/assets/images/tokyo.jpg",
      rating: 4.7,
      price: "$1499",
      duration: "6 days",
      description: "Modern metropolis with traditional charm"
    }
  ];
  console.log(<Heart className="icon" />);

  const MainContent = () => {
    const navigate = useNavigate();
    
    const handleCreatePost = () => {
      navigate('/write-blog');
    };

    return (
      <div className="app">
        {/* Header */}
        <header className="header">
          <nav className="nav-container">
            <div className="logo">
              <Link to="/">Tourum</Link>
            </div>
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/destinations">Destinations</Link>
              <Link to="/tours">Tours</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="nav-actions">
              <button className="favorite-button">
                <Heart className="icon" />
              </button>
              <button className="btn-create-post" onClick={handleCreatePost}>
                <PenSquare className="icon" />
                Create Post
              </button>
              <button className="btn-primary">
                Sign In
              </button>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Discover Your Next Adventure</h1>
            <p>Explore the world's most beautiful destinations with our curated tours and experiences.</p>
            <div className="search-box">
              <div className="search-form">
                <div className="form-group">
                  <label>Destination</label>
                  <div className="input-icon">
                    <MapPin className="icon" />
                    <input
                      type="text"
                      placeholder="Where do you want to go?"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Who</label>
                  <div className="input-icon">
                    <User className="icon" />
                    <input type="Text" 
                      placeholder="Who do you want to find?"/>
                  </div>
                </div>
                <button className="btn-primary search-btn">
                  <Search className="icon" />
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Destinations */}
        <section className="destinations-section">
          <div className="section-container">
            <h2>Featured Destinations</h2>
            <div className="destinations-grid">
              {featuredDestinations.map((destination) => (
                <div key={destination.id} className="destination-card">
                  <div className="destination-image">
                    <img
                      src={destination.image}
                      alt={destination.name}
                    />
                    <button className="favorite-button">
                      <Heart className="icon" />
                    </button>
                  </div>
                  <div className="destination-content" style={{marginTop:'10px'}}>
                    <div className="destination-header">
                      <h3>{destination.name}</h3>
                      <div className="rating">
                        <Star className="icon star" />
                        <span>{destination.rating}</span>
                      </div>
                    </div>
                    <p className="description">{destination.description}</p>
                    <div className="destination-footer">
                      <div className="duration">
                        <Clock className="icon" />
                        <span>{destination.duration}</span>
                      </div>
                      <div className="price">{destination.price}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-grid">
              <div className="footer-brand">
                <h3>Tourum</h3>
                <p>Discover the world with us. Your journey begins here.</p>
              </div>
              <div className="footer-links">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Destinations</a></li>
                  <li><a href="#">Tours</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
              <div className="footer-links">
                <h4>Support</h4>
                <ul>
                  <li><a href="#">Help Center</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">FAQs</a></li>
                </ul>
              </div>
              <div className="footer-contact">
                <h4>Contact Us</h4>
                <ul>
                  <li>Email: info@tourum.com</li>
                  <li>Phone: +1 (555) 123-4567</li>
                  <li>Address: 123 Travel Street, Adventure City</li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2024 Tourum. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/write-blog" element={<WriteBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
