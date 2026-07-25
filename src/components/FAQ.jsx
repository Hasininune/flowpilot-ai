import "../styles/faq.css";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    question: "How does FlowPilot AI automate workflows?",
    answer:
      "FlowPilot AI uses intelligent automation to eliminate repetitive tasks, helping teams save time and improve productivity.",
  },
  {
    question: "Is my business data secure?",
    answer:
      "Yes. We use enterprise-grade encryption, secure cloud infrastructure, and strict security practices to keep your data safe.",
  },
  {
    question: "Can I integrate with other tools?",
    answer:
      "Absolutely. FlowPilot AI supports integrations with popular productivity, CRM, and communication platforms.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes! You can explore all premium features with a 14-day free trial—no credit card required.",
  },
];

function FAQ() {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq">

      <div className="section-title">
        <h2>Frequently Asked Questions</h2>
        <p>
          Everything you need to know about FlowPilot AI.
        </p>
      </div>

      <div className="faq-container">

        {faqData.map((item, index) => (
          <div
            className={`faq-item ${active === index ? "active" : ""}`}
            key={index}
          >

            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              <FaChevronDown />
            </button>

            {active === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}

          </div>
        ))}

      </div>

    </section>
  );
}

export default FAQ;