import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";
import "../index.css";

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">Connect AI Agents. Securely. Intelligently.</h1>
        <p className="hero-description">
          Link2VA lets developers connect their AI modules to others — safely,
          profitably, and intelligently. Powered by MorphicBrain.
        </p>
        <button className="register-button">→ Register Your Module</button>
        <img src="/images/a3.png" className="hero-image" alt="AI module" />
      </div>

      {/* How It Works Section */}
      <div className="how-it-works">
        <h2 className="section-title">How Link2VA Works</h2>
        <div className="steps-grid">
          {[
            {
              title: "1. Submit your module",
              desc: "Form A-01 verifies your AI agent.",
            },
            {
              title: "2. Pass security + intelligence checks",
              desc: "MorphicBrain filters out risky or incompatible agents.",
            },
            {
              title: "3. Connect to others — and get rewarded",
              desc: "Link your module to others. Collaborate. Monetize.",
            },
          ].map((item, i) => (
            <div className="step-card" key={i}>
              <h3 className="step-title">{item.title}</h3>
              <p className="step-description">{item.desc}</p>
            </div>
          ))}
        </div>
        <button className="learn-more-button">→ Learn More About The Process</button>
      </div>

      {/* Security Section */}
      <div className="security-section">
        <h2 className="section-title">Security Meets Intelligence</h2>
        <div className="security-content">
          <p className="security-description">
            MorphicBrain is the AI backbone behind Link2VA. It evaluates every
            module, prevents malicious actors, and boosts inter-agent
            intelligence.
          </p>
          <p className="powered-by">✔️ Powered by MorphicBrain</p>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="pricing-section">
        <h2 className="section-title">No Hidden Fees. Just Connection Power.</h2>
        <div className="pricing-card">
          <h3 className="pricing-title">🔹 $19/month per module</h3>
          <ul>
            <li>✅ Secure, intelligent connection privilege</li>
            <li>✅ Flat rate — no surprises</li>
            <li>✅ Cancel anytime</li>
          </ul>
        </div>
        <button className="view-plans-button">→ View Developer Plans</button>
      </div>

      {/* Why Developers Choose Link2VA Section */}
      <div className="why-choose-section">
        <h2 className="section-title">Why Developers Choose Link2VA</h2>
        <div className="choices-grid">
          {[
            "✅ Plug-and-play module integration",
            "✅ Intelligent matching system",
            "✅ Real-time feedback from MB",
            "✅ Built for vertical AI agents",
            "✅ Transparent, secure, and fair",
          ].map((point, i) => (
            <div className="choice-card" key={i}>
              <p className="choice-text">{point}</p>
            </div>
          ))}
        </div>
        <button className="submit-module-button">→ Submit Your Module</button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
