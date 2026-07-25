import "./dashboardComponents.css";
import {
  FaBell,
  FaMoon,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Topbar() {
  const { user } = useAuth();

  return (
    <header className="topbar">
      <div className="search">
        <FaSearch />

        <input
          type="text"
          placeholder="Search..."
        />
      </div>

      <div className="topbar-right">
        <button className="icon-btn">
          <FaMoon />
        </button>

        <button className="icon-btn">
          <FaBell />
        </button>

        <div className="profile">
          <div className="avatar">
            {user?.name?.charAt(0).toUpperCase()}
          </div>

          <div>
            <h4>{user?.name}</h4>
            <small>{user?.email}</small>
          </div>

          <Link to="/" className="website-btn">
            🏠 Back to Website
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Topbar;