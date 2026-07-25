import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import FadeIn from "../components/FadeIn";
import "../styles/pricing.css";

const plans = [
  {
    name: "Starter",
    monthly: 19,
    yearly: 15,
    description: "Perfect for freelancers and startups.",
    features: [
      "Up to 5 Users",
      "Basic Analytics",
      "Email Support",
      "5 AI Workflows",
    ],
    popular: false,
  },
  {
    name: "Professional",
    monthly: 49,
    yearly: 39,
    description: "Ideal for growing businesses.",
    features: [
      "Unlimited Users",
      "Advanced Analytics",
      "Unlimited AI Workflows",
      "Priority Support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    monthly: null,
    yearly: null,
    description: "Custom solution for large organizations.",
    features: [
      "Dedicated Manager",
      "Unlimited Everything",
      "Enterprise Security",
      "24/7 Premium Support",
    ],
    popular: false,
  },
];

function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <>
      <Navbar />

      <FadeIn>
        <section className="pricing-hero">
          <h1>Simple & Transparent Pricing</h1>

          <p>
            Choose the perfect plan for your business.
          </p>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="pricing-section">

          <div className="pricing-toggle">

            <span className={!yearly ? "active" : ""}>
              Monthly
            </span>

            <label className="switch">

              <input
                type="checkbox"
                checked={yearly}
                onChange={() => setYearly(!yearly)}
              />

              <span className="slider"></span>

            </label>

            <span className={yearly ? "active" : ""}>
              Yearly
            </span>

          </div>

          <div className="pricing-grid">

            {plans.map((plan, index) => (

              <div
                key={index}
                className={`pricing-card ${plan.popular ? "popular" : ""}`}
              >

                {plan.popular && (
                  <div className="badge">
                    Most Popular
                  </div>
                )}

                <h2>{plan.name}</h2>

                <h3>

                  {plan.monthly === null
                    ? "Custom"
                    : yearly
                    ? `$${plan.yearly}`
                    : `$${plan.monthly}`}

                  {plan.monthly !== null && (
                    <span>/month</span>
                  )}

                </h3>

                <p>{plan.description}</p>

                <ul>

                  {plan.features.map((item, i) => (

                    <li key={i}>✓ {item}</li>

                  ))}

                </ul>

                <button className="primary-btn">
                  Get Started
                </button>

              </div>

            ))}

          </div>

        </section>
      </FadeIn>

      <FadeIn>
        <section className="comparison">

          <h2>Compare Plans</h2>

          <table>

            <thead>

              <tr>

                <th>Features</th>

                <th>Starter</th>

                <th>Professional</th>

                <th>Enterprise</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td>Users</td>

                <td>5</td>

                <td>Unlimited</td>

                <td>Unlimited</td>

              </tr>

              <tr>

                <td>Analytics</td>

                <td>Basic</td>

                <td>Advanced</td>

                <td>Advanced</td>

              </tr>

              <tr>

                <td>Support</td>

                <td>Email</td>

                <td>Priority</td>

                <td>24/7</td>

              </tr>

              <tr>

                <td>AI Workflows</td>

                <td>5</td>

                <td>Unlimited</td>

                <td>Unlimited</td>

              </tr>

            </tbody>

          </table>

        </section>
      </FadeIn>

      <CTA />

      <Footer />
    </>
  );
}

export default Pricing;