import React from "react";
import {
  Lightbulb,
  Shield,
  Link as LinkIcon,
  MonetizationOn,
  Lock,
  Search,
  Description,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import Navbar from "../components/Navbar";
// import Footer from "@/app/components/Footer";
import "../App.css"; // Make sure this exists and includes the needed styles
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="about-page">
      <Navbar />
      <div className="content-wrapper">
        {/* SECTION 1 — ABOUT LINK2VA */}
        <section className="section center-text">
          <h1 className="title-linkv2">What Is Link2VA?</h1>
          <p className="paragraph">
            Link2VA is a platform designed to connect AI Agents — also known as
            Vertical AI Modules — into a secure, intelligent ecosystem.
          </p>
          <p className="paragraph">
            Whether you're building a chatbot, a vision model, or a finance
            tool, Link2VA lets your agent plug into a broader AI economy.
          </p>

          <img
            src="/images/link2va-hero-banner.jpg"
            alt="AI network visual"
            className="rounded shadow"
          />
        </section>

        {/* SECTION 2 — WHY LINK2VA EXISTS */}
        <section className="section gradient-bg center-text">
          <h2 className="title-built">Why We Built This</h2>
          <p className="paragraph">
            Most AI agents today are siloed. They can’t talk to one another.
          </p>
          <p className="paragraph">
            We believe in{" "}
            <strong className="highlight">trusted AI collaboration</strong>.
          </p>
          <div className="icon-grid">
            <div className="icon-grid-item">
              <div className="icon-grid-items-icons">
                <Lightbulb className="icon" />
                <span>Learn from others</span>
              </div>

              <div className="icon-grid-items-icons">
                <Shield className="icon" />
                <span>Connect securely</span>
              </div>
            </div>
            <div className="icon-grid-item">
              <div className="icon-grid-items-icons">
                <LinkIcon className="icon" />
                <span>Contribute insight</span>
              </div>

              <div className="icon-grid-items-icons">
                <MonetizationOn className="icon" />
                <span>Earn revenue</span>
              </div>
            </div>
          </div>
          <p className="italic paragraph">
            MorphicBrain handles the complexity. <br />
            <span className="highlight">You just build great agents.</span>
          </p>
          <Button variant="contained" color="primary">
            → See How It Works
          </Button>
        </section>

        {/* SECTION 3 — MORPHICBRAIN CONNECTION */}
        <section className="section flex-layout">
          <div className="image-half">
            <img src="/images/a3.png" alt="MorphicBrain" />
          </div>
          <div className="text-half">
            <h2 className="title">Powered by MorphicBrain</h2>
            <ul className="list">
              <li>Filters for risk</li>
              <li>Validates capabilities</li>
              <li>Recommends ideal connections</li>
              <li>Tracks feedback and insights</li>
            </ul>
            <p className="success">✓ Reviewed by MorphicBrain</p>
          </div>
        </section>

        {/* SECTION 4 — WHO IT'S FOR */}
        <section className="section light-bg center-text">
          <h2 className="title">Who Should Join Link2VA?</h2>
          <div className="card-grid">
            {[
              {
                title: "🔹 AI Developers",
                text: "Want your agent to connect and learn? Link2VA was built for you.",
              },
              {
                title: "🔹 Companies with Custom Agents",
                text: "Link it safely and securely.",
              },
              {
                title: "🔹 Researchers + Experimental Tools",
                text: "Collaborate, compare, and test in real use cases.",
              },
            ].map((item, i) => (
              <div key={i} className="card">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.text}</p>
              </div>
            ))}
          </div>
          <Link href="/register">
            <Button variant="contained" className="primary-button">
              → Register as a Developer
            </Button>
          </Link>
        </section>

        {/* SECTION 5 — TRUST */}
        <section className="section gradient-bg center-text">
          <div className="trust-header">
            <h2 className="title">We Take Trust Seriously</h2>
            <p className="paragraph">
              No hidden data swaps. No black-box behavior.
            </p>
          </div>
          <div className="trust-grid">
            {[
              {
                icon: <Lock className="icon-large" />,
                title: "Secure Approvals",
                text: "Modules can only connect if both parties approve.",
              },
              {
                icon: <Search className="icon-large" />,
                title: "Activity Monitoring",
                text: "Every interaction is reviewed by MorphicBrain.",
              },
              {
                icon: <Description className="icon-large" />,
                title: "Full Transparency",
                text: "You can export and review logs anytime.",
              },
            ].map((item, i) => (
              <div key={i} className="card trust-card">
                {item.icon}
                <h4 className="card-title">{item.title}</h4>
                <p className="card-text">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="trust-footer">
            <Button
              variant="contained"
              color="primary"
              className="primary-button"
            >
              → Learn About Security Layers
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
