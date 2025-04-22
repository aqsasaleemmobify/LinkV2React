import React from "react";

import Navbar from "../components/Navbar";
import { Button, Typography, Grid, Paper } from "@mui/material";
import "../App.css";
import "../index.css";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <div className="hero-section">
        <Typography variant="h4" className="hero-title">
          Connect AI Agents. Securely. Intelligently.
        </Typography>
        <Typography className="hero-description">
          Link2VA lets developers connect their AI modules to others — safely,
          profitably, and intelligently. Powered by MorphicBrain.
        </Typography>
        <Button variant="contained" color="primary" className="register-button">
          → Register Your Module
        </Button>
        <img src="/images/a3.png" className="hero-image" alt="AI module" />
      </div>

      {/* How It Works Section */}
      <div className="how-it-works">
        <Typography variant="h5" className="section-title">
          How Link2VA Works
        </Typography>
        <Grid container spacing={3} className="steps-grid">
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
            <Grid item xs={12} sm={4} key={i}>
              <Paper className="step-card">
                <Typography variant="h6" className="step-title">
                  {item.title}
                </Typography>
                <Typography className="step-description">
                  {item.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Button className="learn-more-button" variant="text" color="primary">
          → Learn More About The Process
        </Button>
      </div>

      {/* Security Section */}
      <div className="security-section">
        <Typography variant="h5" className="section-title">
          Security Meets Intelligence
        </Typography>
        <div className="security-content">
          <Typography className="security-description">
            MorphicBrain is the AI backbone behind Link2VA. It evaluates every
            module, prevents malicious actors, and boosts inter-agent
            intelligence.
          </Typography>
          <Typography className="powered-by">
            ✔️ Powered by MorphicBrain
          </Typography>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="pricing-section">
        <Typography variant="h5" className="section-title">
          No Hidden Fees. Just Connection Power.
        </Typography>
        <Grid container justifyContent="center" spacing={3}>
          <Grid item>
            <Paper className="pricing-card">
              <Typography variant="h6" className="pricing-title">
                🔹 $19/month per module
              </Typography>
              <ul>
                <li>✅ Secure, intelligent connection privilege</li>
                <li>✅ Flat rate — no surprises</li>
                <li>✅ Cancel anytime</li>
              </ul>
            </Paper>
          </Grid>
        </Grid>
        <Button
          className="view-plans-button"
          variant="contained"
          color="primary"
        >
          → View Developer Plans
        </Button>
      </div>

      {/* Why Developers Choose Link2VA Section */}
      <div className="why-choose-section">
        <Typography variant="h5" className="section-title">
          Why Developers Choose Link2VA
        </Typography>
        <Grid container spacing={3}>
          {[
            "✅ Plug-and-play module integration",
            "✅ Intelligent matching system",
            "✅ Real-time feedback from MB",
            "✅ Built for vertical AI agents",
            "✅ Transparent, secure, and fair",
          ].map((point, i) => (
            <Grid item xs={12} sm={4} key={i}>
              <Paper className="choice-card">
                <Typography className="choice-text">{point}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Button
          className="submit-module-button"
          variant="contained"
          color="primary"
        >
          → Submit Your Module
        </Button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
