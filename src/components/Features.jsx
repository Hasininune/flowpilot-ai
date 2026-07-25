import "../styles/features.css";
import {
  FaChartLine,
  FaRobot,
  FaBolt,
  FaShieldAlt,
  FaCloud,
  FaChartPie,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRobot />,
    title: "AI Automation",
    text: "Automate repetitive tasks using intelligent workflows powered by AI.",
  },
  {
    icon: <FaChartLine />,
    title: "Smart Analytics",
    text: "Track business performance with beautiful dashboards and reports.",
  },
  {
    icon: <FaBolt />,
    title: "Lightning Fast",
    text: "Execute workflows in seconds with optimized cloud infrastructure.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Enterprise Security",
    text: "Your data stays protected with industry-standard encryption.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Sync",
    text: "Access your projects from anywhere with real-time synchronization.",
  },
  {
    icon: <FaChartPie />,
    title: "Actionable Insights",
    text: "Turn raw data into decisions with AI-generated recommendations.",
  },
];

function Features() {
  return (
    <section className="features">

      <div className="section-title">

        <h2>Everything you need to scale</h2>

        <p>
          Powerful tools that help businesses automate, collaborate,
          and grow faster.
        </p>

      </div>

      <div className="features-grid">

        {features.map((feature, index) => (
          <div className="feature-card" key={index}>

            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.text}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Features;