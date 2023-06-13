import React from "react";

export default function Subscription() {
  return (
    <>
      <div className="subscription">
        <div className="subscription_plan">
          <h2>Team Subscription</h2>
          <button className="devices-primary">Pro Plan</button>
        </div>
        <div className="subscription_member">
          <h3>Team members</h3>
          <h4>Total</h4>
        </div>
        <div className="subscription_Team">
          <h3>1/0000</h3>
          <h4>Flax Teams Plan</h4>
        </div>
        <div className="subscription_charged">
          <h3>
            ₹000 per member per year
            <br />
            You will be charged <br />
            <span>₹00,000 / year starting [month] 2023</span>
          </h3>
          <h4>365 days left</h4>
        </div>
      </div>
    </>
  );
}
