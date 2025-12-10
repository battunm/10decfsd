import React, { useState } from 'react';
import "./styles/Home.css";
import Footer from './Footer';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className={darkMode ? "dark" : ""}> {/* Apply dark mode class */}
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <button className="dark-mode-btn" onClick={toggleDarkMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
          <h2>Book Your Travel Adventure with Ease!</h2>
          <p>Flights, Hotels, and Activities – all in one place.<br />Find the best deals, secure payments, and an easy booking process.</p>
          <a href="/customerlogin" className="hero-btn">Book Now</a>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="booking">
        <h3>Plan Your Perfect Trip</h3>
        <div className="booking-options">
          <a href="/flights">✈️ Flights</a>
          <a href="/hotels">🏨 Hotels</a>
          <a href="/activities">🗺️ Activities</a>
        </div>
      </section>

      {/* Popular Destinations & Deals */}
      <section id="popular">
        <h3>Explore Popular Destinations</h3>
        <div className="popular-list">
          <div className="item">
            <img src="https://example.com/popular-destination1.jpg" alt="Beach Vacation" />
            <p>Beach Vacation</p>
          </div>
          <div className="item">
            <img src="https://example.com/popular-destination2.jpg" alt="Mountain Hiking" />
            <p>Mountain Hiking</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works">
        <h3>How It Works</h3>
        <div className="steps">
          <div className="step">1️⃣ Choose your flight, hotel, or activity</div>
          <div className="step">2️⃣ Select your travel dates and preferences</div>
          <div className="step">3️⃣ Confirm your booking with secure payment</div>
          <div className="step">4️⃣ Receive your e-ticket and confirmation instantly</div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <h3>What Our Travelers Say</h3>
        <blockquote>"This platform made booking my vacation so easy! Found the best deals and had everything confirmed instantly."</blockquote>
        <cite>- Aakash Rao</cite>
      </section>

      {/* Description Section */}
      <section id="description" className="description">
        <p className="description-text">
          Your one-stop travel booking platform. From flights to hotels to the best local experiences, we've got it all.
        </p>
        <p className="description-text">
          Plan, book, and enjoy your dream vacation with ease – wherever you go.
        </p>
      </section>

      {/* Contact & Support Section */}
      <section id="contact">
        <div className="contact-container">
          <h3>Need Assistance?</h3>
          <p>If you have any questions or need help, just let us know!</p>
          <form>
            <input type="text" id="query" name="query" placeholder="Enter your query..." required />
            <button type="submit" className="contact-btn">Submit & Contact Support</button>
          </form>
        </div>
      </section>

      {/* Footer should be at the bottom */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
