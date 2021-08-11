import React from "react";
import Clock from "./image/clock.svg";
import Chevron from "./image/Chevron.svg";
import briefcase from "./image/briefcase.svg";
export default function Sme() {
  return (
      <div className="project">
    <div className="org">
      <div className="case">
        <img src={briefcase} alt="briefcase" />
      </div>
      <div className="container">
      <div className="p">
          <div className="sme">
        <h1>
          SME Channel Solution & Transaction Service Personnel</h1>
          </div>
          <div className="united">
        <p> United Bank for Africa Plc (UBA) is one of Africa's leading financial
          institutions, with operations in 19 African countries and 3 global
          financal centres: London, Paris and New York.</p>
          </div>
      </div>
      <div className="lmt1">
        <div className="lmt">
            <div className="clock">
          <img src={Clock} alt="clock" />
          </div>
          <div>
          <p className="lmt2">4 hours ago</p>
          </div>
        </div>
        <div className="Che">
          <button className="apply-btn">Apply Now</button>
          <img className="chevron" src={Chevron} alt="Chevron" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
