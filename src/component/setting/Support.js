import React from "react";

export default function Support() {
  return (
    <>
      <div className="subscription Support">
        <div className="subscription_plan">
          <h2>Support</h2>
          <button className="devices-primary">Pro Plan</button>
        </div>
        <div className="subscription_member">
          <h3>Email Support</h3>
          <h4>support@flax.ai</h4>
        </div>
        <div className="subscription_Team">
          <h3>Phone Support</h3>
          <a href="tel:+918171698717" target="blank">
            +918171698717
          </a>
        </div>
        <div className="subscription_charged">
          <h3>WhatsApp</h3>

          <a href="https://wa.me/+918171698717" target="blank">
            +918171698717
          </a>
        </div>
      </div>
    </>
  );
}
