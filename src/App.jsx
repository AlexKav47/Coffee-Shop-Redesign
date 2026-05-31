import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Menu from './Menu.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="site">
        <header className="header">
          <Link to="/" className="logo">
            <span>The Lazy Cow Coffee House</span>
          </Link>

          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <a href="/" className="logo">
            <img className="logo-img" src="Logo.png" alt="The Lazy Cow Coffee House" />
          </a>

          <p className="hero-text">
            A warm local spot for fresh coffee, sweet treats, light bites and relaxed catch-ups.
          </p>

          <div className="hero-actions">
            <Link to="/menu" className="button button-primary">
              View Menu
            </Link>

            <a href="#visit" className="button button-secondary">
              Visit Us
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="about-content">
          <h2>About The Lazy Cow</h2>
          <p>
            A small, cosy coffee house tucked away in Carrick-on-Suir, where locals come for fresh coffee, homemade cakes,
            and a place to sit and linger. We believe in taking our time, using good ingredients, and creating a warm
            space where everyone feels welcome.
          </p>
          <p>
            Whether you're grabbing a quick cappuccino, treating yourself to a slice of cake, or settling in for a long
            catch-up, there's something here for everyone.
          </p>
        </div>

        <div className="about-visual">
          <div className="about-placeholder">
            <img src="aboutimage.jpg" alt="The interior of The Lazy Cow Coffee House" />
          </div>
        </div>
      </section>

      <section className="carousel-section">
        <div className="carousel-container">
          <div className="carousel-track">
            <div className="carousel-item"><img src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=300&fit=crop" alt="Coffee" /></div>
            <div className="carousel-item"><img src="3.jpg?w=400&h=300&fit=crop" alt="Cafe" /></div>
            <div className="carousel-item"><img src="2.jpg?w=400&h=300&fit=crop" alt="Barista" /></div>
            <div className="carousel-item"><img src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=400&h=300&fit=crop" alt="Latte" /></div>
            <div className="carousel-item"><img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop" alt="Coffee Cup" /></div>
            <div className="carousel-item"><img src="1.jpg?w=400&h=300&fit=crop" alt="Espresso" /></div>
            <div className="carousel-item"><img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop" alt="Coffee Shop" /></div>
            <div className="carousel-item"><img src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&h=300&fit=crop" alt="Pastry" /></div>
            <div className="carousel-item"><img src="cappuccino.png?w=400&h=300&fit=crop" alt="Cappuccino" /></div>
            <div className="carousel-item"><img src="3.jpg?w=400&h=300&fit=crop" alt="Cosy Corner" /></div>
            <div className="carousel-item"><img src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=300&fit=crop" alt="Coffee" /></div>
            <div className="carousel-item"><img src="2.jpg?w=400&h=300&fit=crop" alt="Barista" /></div>
          </div>
        </div>
      </section>

      <section id="visit" className="hours">
        <div className="section-copy">
          <p className="section-eyebrow">Opening Hours</p>
          <h2>When we’re open</h2>
          <p>
            Drop by for a fresh brew, a slice of cake, or a relaxed catch-up. We keep the lights on and the coffee warm every day.
          </p>
        </div>

        <div className="hours-card">
          <div className="hours-row">
            <span>Monday</span>
            <span>CLOSED</span>
          </div>
          <div className="hours-row">
            <span>Tuesday</span>
            <span>7:00am – 3:00pm</span>
          </div>
          <div className="hours-row">
            <span>Wednesday</span>
            <span>7:00am – 3:00pm</span>
          </div>
          <div className="hours-row">
            <span>Thursday</span>
            <span>7:00am – 3:00pm</span>
          </div>
          <div className="hours-row">
            <span>Friday</span>
            <span>7:00am – 3:00pm</span>
          </div>
          <div className="hours-row">
            <span>Saturday</span>
            <span>8:00am – 3:00pm</span>
          </div>
          <div className="hours-row">
            <span>Sunday</span>
            <span>9:00am – 2:00pm</span>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-copy">
          <h2>Contact Us</h2>
          <div className="contact-details">
            <p><strong>Address:</strong> Main St, Carrick-On-Suir, Co. Tipperary, Ireland</p>
            <p><strong>Email:</strong> info@thelazycowcoffeehouse.com</p>
          </div>
        </div>

        <div className="contact-card">
          <form className="contact-form">
            <div className="form-row">
              <label>
                Name
                <input type="text" placeholder="Enter your name" />
              </label>
              <label>
                Email
                <input type="email" placeholder="Enter your email" />
              </label>
            </div>

            <div className="form-row">
              <label>
                Phone
                <input type="tel" placeholder="Enter your phone number" />
              </label>
              <label>
                Address
                <input type="text" placeholder="Enter your address" />
              </label>
            </div>

            <div className="form-row-full">
              <label>
                Subject
                <input type="text" placeholder="Type the subject" />
              </label>
            </div>

            <div className="form-row-full">
              <label>
                Message
                <textarea rows="4" placeholder="Type your message here..."></textarea>
              </label>
            </div>

            <button type="submit" className="button button-primary button-submit">Submit</button>
          </form>
        </div>
      </section>

      <section id="location" className="location">
        <div className="section-copy">
          <p className="section-eyebrow">Location</p>
          <h2>Find us on the map</h2>
          <p>Visit The Lazy Cow Coffee House on Main Street, Carrick-on-Suir, just a short walk from the river.</p>
        </div>
        <div className="map-frame">
  <iframe
    title="The Lazy Cow Coffee House location"
    src="https://maps.google.com/maps?q=The%20Lazy%20Cow%20Coffee%20House%20Carrick-On-Suir%20Ireland&z=16&output=embed"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
      </section>

      <section className="subscribe">
        <div className="section-copy">
          <p className="section-eyebrow">Stay in touch</p>
          <h2>Subscribe Form</h2>
          <p>Sign up for seasonal specials, event updates, and cosy coffeehouse news.</p>
        </div>
        <form className="subscribe-form">
          <input type="email" className="subscribe-input" placeholder="e.g., email@example.com" />
          <button type="submit" className="subscribe-button">Join</button>
        </form>
      </section>
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>info@thelazycowcoffeehouse.com</p>
      <div className="footer-actions">
        <a href="https://www.instagram.com/thelazycowcoffeehouse/" target="_blank" rel="noreferrer" className="social-button">
          <span className="social-icon instagram" aria-hidden="true"></span>
          Instagram
        </a>
        <a href="https://www.facebook.com/TheLazyCowTrailer" target="_blank" rel="noreferrer" className="social-button">
          <span className="social-icon facebook" aria-hidden="true"></span>
          Facebook
        </a>
      </div>
      <p>© 2026 by The Lazy Cow Coffee House.</p>
    </footer>
  );
}

export default App;
