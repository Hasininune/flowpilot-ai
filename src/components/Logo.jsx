import { FaPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="logo">

      <div className="logo-icon">
        <FaPaperPlane />
      </div>

      <div className="logo-text">
        <span>FlowPilot</span>
        <small>AI</small>
      </div>

    </Link>
  );
}

export default Logo;