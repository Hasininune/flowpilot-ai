import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";

import "../styles/contact.css";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function Contact() {
  return (
    <>
      <Navbar />

      <FadeIn>
        <section className="contact-hero">
          <h1>Let's Build Something Amazing Together</h1>

          <p>
            We'd love to hear from you. Whether you need support,
            want a product demo, or simply have a question,
            our team is here to help.
          </p>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="contact-section">

          <div className="contact-form">

            <h2>Send us a Message</h2>

            <form>

              <input
                type="text"
                placeholder="Your Name"
              />

              <input
                type="email"
                placeholder="Email Address"
              />

              <input
                type="text"
                placeholder="Company Name"
              />

              <textarea
                rows="6"
                placeholder="Tell us about your project..."
              ></textarea>

              <button className="primary-btn">
                Send Message
              </button>

            </form>

          </div>

          <div className="contact-info">

            <h2>Contact Information</h2>

            <div className="info-card">

              <FaEnvelope />

              <div>

                <h4>Email</h4>

                <p>hello@flowpilot.ai</p>

              </div>

            </div>

            <div className="info-card">

              <FaPhoneAlt />

              <div>

                <h4>Phone</h4>

                <p>+1 (800) 123-4567</p>

              </div>

            </div>

            <div className="info-card">

              <FaMapMarkerAlt />

              <div>

                <h4>Office</h4>

                <p>San Francisco, California</p>

              </div>

            </div>

            <div className="info-card">

              <FaClock />

              <div>

                <h4>Working Hours</h4>

                <p>Mon - Fri | 9:00 AM - 6:00 PM</p>

              </div>

            </div>

          </div>

        </section>
      </FadeIn>

      <FadeIn>

        <section className="map-section">

          <div className="map-placeholder">

            <h2>📍 Office Location</h2>

            <p>
              Google Maps integration can be added here.
            </p>

          </div>

        </section>

      </FadeIn>

      <FadeIn>

        <section className="newsletter">

          <h2>Stay Updated</h2>

          <p>
            Subscribe to receive the latest product updates,
            feature releases and AI tips.
          </p>

          <div className="newsletter-box">

            <input
              type="email"
              placeholder="Enter your email"
            />

            <button className="primary-btn">
              Subscribe
            </button>

          </div>

        </section>

      </FadeIn>

      <Footer />
    </>
  );
}

export default Contact;