import "../styles/footer.css";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">

          <h2>FlowPilot AI</h2>

          <p>
            Intelligent workflow automation for modern businesses.
          </p>

        </div>

        <div>

          <h3>Company</h3>

          <ul>

            <li>About</li>

            <li>Product</li>

            <li>Pricing</li>

            <li>Contact</li>

          </ul>

        </div>

        <div>

          <h3>Resources</h3>

          <ul>

            <li>Documentation</li>

            <li>Support</li>

            <li>Privacy Policy</li>

            <li>Terms</li>

          </ul>

        </div>

        <div>

          <h3>Follow Us</h3>

          <div className="socials">

            <FaLinkedin />

            <FaGithub />

            <FaTwitter />

          </div>

        </div>

      </div>

      <div className="copyright">

        © 2026 FlowPilot AI. All rights reserved.

      </div>
    <p className="task-credit">
  Built for{" "}
  <a
    href="https://digitalheroesco.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    Digital Heroes Training Task
  </a>
</p>
    </footer>
  );
}

export default Footer;