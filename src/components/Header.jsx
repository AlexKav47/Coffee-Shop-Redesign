import './App.css';

function Header() {
  return (
    <div className="site">
      <header className="header">
        <a href="/" className="logo">
          The Lazy Cow Coffee House
        </a>

        <nav className="nav">
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#visit">Visit</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    </div>
  );
}

export default App;