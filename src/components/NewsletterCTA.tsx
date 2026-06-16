import React, { useState } from "react";
import "./NewsletterCTA.css";

export const NewsletterCTA: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setStatus("error");
      setErrorMessage("Please enter your email address.");
      return;
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1200);
  };

  return (
    <section className="newsletter-section" id="newsletter-engagement-cta" aria-labelledby="newsletter-title">
      <div className="newsletter-card">
        {/* Background micro grid overlay */}
        <div className="newsletter-bg-pattern" aria-hidden="true"></div>

        <div className="newsletter-content">
          <span className="newsletter-label">KNOWLEDGE CENTRE</span>
          <h2 className="newsletter-title" id="newsletter-title">
            Subscribe to Tax &amp; Compliance Updates
          </h2>
          <p className="newsletter-desc">
            Stay informed with statutory compliance alerts, indirect tax updates, and business strategy insights delivered directly to your inbox by our partner team.
          </p>

          {status === "success" ? (
            <div className="newsletter-feedback-success" role="alert">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="feedback-check-icon">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Thank you! You have been successfully subscribed to our professional briefings.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="newsletter-form" noValidate>
              <div className="newsletter-input-group">
                <input
                  type="email"
                  className={`newsletter-input ${status === "error" ? "has-error" : ""}`}
                  placeholder="Enter your corporate email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  disabled={status === "submitting"}
                  aria-label="Email address for newsletters"
                  required
                />
                <button
                  type="submit"
                  className="btn newsletter-btn"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Subscribing..." : "Subscribe"}
                </button>
              </div>

              {status === "error" && (
                <div className="newsletter-feedback-error" role="alert">
                  <span>{errorMessage}</span>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
