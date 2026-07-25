import { FaPlus } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

function WelcomeBanner() {
  const { user } = useAuth();

  return (
    <section className="welcome-banner">

      <div>

        <h1>
          Welcome back, {user?.name}! 👋
        </h1>

        <p>
          Here's what's happening in your FlowPilot AI workspace today.
        </p>

      </div>

      <button className="create-btn">

        <FaPlus />

        Create Workflow

      </button>

    </section>
  );
}

export default WelcomeBanner;