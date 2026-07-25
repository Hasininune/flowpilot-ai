import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import { useState } from "react";
import "../styles/product.css";
import DashboardChart from "../components/DashboardChart";
import {
  FaRobot,
  FaShieldAlt,
  FaChartLine,
  FaCloud,
  FaUsers,
  FaBolt,
  FaGithub,
  FaSlack,
  FaGoogle,
  FaMicrosoft,
  FaDropbox,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRobot />,
    title: "AI Automation",
    desc: "Automate repetitive tasks with intelligent workflows.",
  },
  {
    icon: <FaChartLine />,
    title: "Advanced Analytics",
    desc: "Track your business performance in real time.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Enterprise Security",
    desc: "Built with industry-standard encryption.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Sync",
    desc: "Access everything securely from anywhere.",
  },
  {
    icon: <FaUsers />,
    title: "Team Collaboration",
    desc: "Work together with shared workspaces.",
  },
  {
    icon: <FaBolt />,
    title: "Lightning Fast",
    desc: "Optimized infrastructure for maximum speed.",
  },
];

const faqs = [
  {
    question: "How secure is FlowPilot AI?",
    answer:
      "Your data is encrypted using enterprise-grade security and industry best practices.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. You can upgrade, downgrade, or cancel your subscription whenever you like.",
  },
  {
    question: "Do you provide customer support?",
    answer:
      "Absolutely. Our support team is available through email and live chat.",
  },
  {
    question: "Does FlowPilot AI integrate with other platforms?",
    answer:
      "Yes. We integrate with GitHub, Slack, Google Workspace, Microsoft 365, Zoom, and more.",
  },
];

function Product() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />

      <section className="product-hero">
        <div className="product-container">
          <h1>Everything your business needs.</h1>

          <p>
            FlowPilot AI combines automation, analytics,
            collaboration, and security into one intelligent platform.
          </p>
        </div>
      </section>

      <section className="product-stats">
        <div className="stats-container">
          <div className="stat-card">
            <h2>10K+</h2>
            <p>Active Users</p>
          </div>

          <div className="stat-card">
            <h2>250K+</h2>
            <p>Automated Tasks</p>
          </div>

          <div className="stat-card">
            <h2>99.9%</h2>
            <p>Platform Uptime</p>
          </div>

          <div className="stat-card">
            <h2>120+</h2>
            <p>Countries Served</p>
          </div>
        </div>
      </section>

      <section className="product-features">
        <div className="feature-grid">
          {features.map((item, index) => (
            <div
              className="product-card"
              key={index}
            >
              <div className="product-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="dashboard-showcase">
        <div className="showcase-left">
          <span className="tag">
            Platform Overview
          </span>

          <h2>
            Manage everything from one dashboard.
          </h2>

          <p>
            Get complete visibility into your
            projects, team performance,
            revenue, and AI-powered
            automation from a single
            intuitive dashboard.
          </p>

          <ul>
            <li>✔ Real-Time Analytics</li>

            <li>✔ AI Recommendations</li>

            <li>✔ Team Collaboration</li>

            <li>✔ Cloud Synchronization</li>
          </ul>
        </div>

        <div className="showcase-right">
          <div className="dashboard-ui">
            <div className="dashboard-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="chart">
    <DashboardChart />
</div>
</div>

           <div className="cards">

  <div className="small-card revenue">
    <span className="card-label">Revenue</span>
    <h3>$87.4K</h3>
    <p className="positive">▲ +18.4%</p>
  </div>

  <div className="small-card users">
    <span className="card-label">Users</span>
    <h3>12.8K</h3>
    <p className="positive">▲ +9.8%</p>
  </div>

  <div className="small-card tasks">
    <span className="card-label">Tasks</span>
    <h3>2,416</h3>
    <p className="positive">▲ +22%</p>
  </div>

  <div className="small-card ai">
    <span className="card-label">AI Accuracy</span>
    <h3>98.7%</h3>
    <p className="positive">Excellent</p>
  </div>

</div>
</div>
<div className="activity-card">

    <h4>Recent Activity</h4>

    <div className="activity-item">
        <span className="dot green"></span>
        AI completed workflow
    </div>

    <div className="activity-item">
        <span className="dot blue"></span>
        New user joined
    </div>

    <div className="activity-item">
        <span className="dot orange"></span>
        Payment received
    </div>

    <div className="activity-item">
        <span className="dot purple"></span>
        Report generated
    </div>

</div>
      </section>
            <section className="workflow">
        <div className="workflow-header">
          <h2>How FlowPilot AI Works</h2>

          <p>
            Get started in minutes and let AI handle your repetitive work.
          </p>
        </div>

        <div className="workflow-container">
          <div className="workflow-step">
            <div className="circle">1</div>

            <h3>Create Workspace</h3>

            <p>
              Sign up and organize your team with dedicated workspaces.
            </p>
          </div>

          <div className="line"></div>

          <div className="workflow-step">
            <div className="circle">2</div>

            <h3>Connect Your Apps</h3>

            <p>
              Integrate Slack, Google Drive, GitHub and other tools.
            </p>
          </div>

          <div className="line"></div>

          <div className="workflow-step">
            <div className="circle">3</div>

            <h3>Automate Workflows</h3>

            <p>
              Build AI-powered workflows with just a few clicks.
            </p>
          </div>

          <div className="line"></div>

          <div className="workflow-step">
            <div className="circle">4</div>

            <h3>Track Results</h3>

            <p>
              Monitor productivity, revenue and team performance in real time.
            </p>
          </div>
        </div>
      </section>

      <section className="integrations">
        <h2>Works with your favorite tools</h2>

        <p>
          Connect seamlessly with the platforms your team already uses.
        </p>

        <div className="integration-grid">
          <div className="integration-card">
            <FaGithub />
            <span>GitHub</span>
          </div>

          <div className="integration-card">
            <FaSlack />
            <span>Slack</span>
          </div>

          <div className="integration-card">
            <FaGoogle />
            <span>Google Workspace</span>
          </div>

          <div className="integration-card">
            <FaMicrosoft />
            <span>Microsoft 365</span>
          </div>

          <div className="integration-card">
            📹
            <span>Zoom</span>
          </div>

          <div className="integration-card">
            <FaDropbox />
            <span>Dropbox</span>
          </div>
        </div>
      </section>

      <section className="trusted-section">
        <h2>Trusted by Innovative Teams</h2>

        <div className="trusted-grid">
          <div>Google</div>

          <div>Microsoft</div>

          <div>GitHub</div>

          <div>Slack</div>

          <div>Dropbox</div>

          <div>Zoom</div>
        </div>
      </section>

      <section className="testimonials">
        <div className="section-header">
          <h2>Loved by Teams Worldwide</h2>

          <p>
            Businesses use FlowPilot AI every day to automate repetitive work
            and boost productivity.
          </p>
        </div>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>
              "FlowPilot AI reduced our manual work by over 60%. The automation
              workflows are incredibly easy to build."
            </p>

            <div className="testimonial-user">
              <h4>Sarah Johnson</h4>

              <span>Operations Manager</span>
            </div>
          </div>

          <div className="testimonial-card">
            <p>
              "Our team now saves hours every week. The analytics dashboard
              gives us complete visibility."
            </p>

            <div className="testimonial-user">
              <h4>Michael Chen</h4>

              <span>Product Lead</span>
            </div>
          </div>

          <div className="testimonial-card">
            <p>
              "Implementation took less than a day. FlowPilot AI has transformed
              our workflow management."
            </p>

            <div className="testimonial-user">
              <h4>Emily Carter</h4>

              <span>CEO</span>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
  <div className="section-header">
    <h2>Frequently Asked Questions</h2>

    <p>Everything you need to know before getting started.</p>
  </div>

  <div className="faq-container">

    {faqs.map((faq, index) => (
      <div className="faq-item" key={index}>
        <button
          className="faq-question"
          onClick={() => toggleFAQ(index)}
        >
          <span>{faq.question}</span>

          <span>
            {openIndex === index ? "−" : "+"}
          </span>
        </button>

        {openIndex === index && (
          <div className="faq-answer">
            <p>{faq.answer}</p>
          </div>
        )}

      </div>
    ))}

  </div>

</section>
      <CTA />

      <Footer/>
    </>
  );
}

export default Product;