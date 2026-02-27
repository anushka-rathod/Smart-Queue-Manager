import "../LandingPage.css";

function LandingPage() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo"> <nav className="navbar">
  <img 
    src="/images/gov-logo.svg" 
    alt="Logo"
    className="header-logo"
  />
</nav></div>
        <div className="nav-buttons">
          <button className="login-btn">Login</button>
          <button className="register-btn">Register</button>
        </div>
      </nav>

      <section className="hero">
        <h1>No More Standing in Line</h1>
        <p>
          Book your token digitally, get AI-predicted wait time,
          and arrive just before your turn.
        </p>
        <button className="book-btn">Book Token</button>
      </section>

      <section className="section">
        <h2 className="section-title">How It Works</h2>
        <div className="card-container">
          <div className="card">
            <h3>1. Book Digitally</h3>
            <p>Select service and receive token instantly.</p>
            <img src="/images/book-icon.svg" alt="Book Icon" />
          </div>
          <div className="card">
            <h3>2. AI Predicts Wait Time</h3>
            <p>Smart estimation for accurate arrival time.</p>
            <img src="/images/ai-icon.svg" alt="AI Icon" />
          </div>
          <div className="card">
            <h3>3. Arrive on Time</h3>
            <p>Reach just before your turn. No physical queue.</p>
            <img src="/images/time-icon.svg" alt="Arrive Icon" />
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Benefits</h2>
        <ul className="benefits-list">
          <li>✔ Saves Time</li>
          <li>✔ Reduces Crowding</li>
          <li>✔ Elder-Friendly Interface</li>
          <li>✔ Real-Time Updates</li>
        </ul>
      </section>

      <footer className="footer">
        © 2026 Smart Queue Manager
      </footer>
    </div>
  );
}

export default LandingPage;