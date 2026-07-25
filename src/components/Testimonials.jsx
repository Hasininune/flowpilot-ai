import "../styles/testimonials.css";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechNova",
    review:
      "FlowPilot AI transformed the way our team works. We've reduced manual work by over 60% and collaboration has never been smoother.",
  },
  {
    name: "Michael Chen",
    role: "Operations Lead",
    company: "CloudSync",
    review:
      "The analytics dashboard gives us instant visibility into our business. It's fast, intuitive, and incredibly reliable.",
  },
  {
    name: "Emma Williams",
    role: "Founder",
    company: "BrightLabs",
    review:
      "The automation features saved us hundreds of hours every month. It's now an essential part of our workflow.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">

      <div className="section-title">

        <h2>What our customers say</h2>

        <p>
          Trusted by businesses worldwide to automate workflows and
          improve productivity.
        </p>

      </div>

      <div className="testimonial-grid">

        {testimonials.map((user, index) => (
          <div className="testimonial-card" key={index}>

            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <p className="review">
              "{user.review}"
            </p>

            <div className="profile">

              <div className="avatar">
                {user.name.charAt(0)}
              </div>

              <div>

                <h4>{user.name}</h4>

                <span>
                  {user.role} • {user.company}
                </span>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Testimonials;