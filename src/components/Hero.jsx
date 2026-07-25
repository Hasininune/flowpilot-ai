import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-left">

          <span className="hero-badge">
            ⚡ AI Powered Workflow Automation
          </span>

          <h1>
            Automate Your Workflow
            <br />
            Accelerate Your Growth.
          </h1>

          <p>
            Replace repetitive work with intelligent automation.
            FlowPilot AI helps teams save time, collaborate
            smarter, and grow faster.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Start Free Trial
            </button>

            <button className="secondary-btn">
              Watch Demo
            </button>

          </div>

        </div>

        <div className="hero-right">

  <div className="floating-card card-one">
    🚀 Revenue +43%
  </div>

  <div className="floating-card card-two">
    ⚡ AI Running
  </div>

  <div className="dashboard-card">

    <div className="dashboard-header">
      <h3>FlowPilot Dashboard</h3>
      <span>● Live</span>
    </div>

    <div className="dashboard-item">
      <p>Revenue</p>
      <h2>$87,240</h2>
    </div>

    <div className="dashboard-item">
      <p>Tasks Automated</p>
      <h2>2,190</h2>
    </div>

    <div className="dashboard-item">
      <p>Productivity</p>
      <h2>96%</h2>
    </div>

    <div className="dashboard-item">
      <p>Active Teams</p>
      <h2>1,240</h2>
    </div>

  </div>

</div>

      </div>
    </section>
  );
}

export default Hero;