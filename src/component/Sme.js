import React from 'react'
import Clock from "./image/clock.svg"
export default function Sme () {
    return (
        <div className="org">
      <h1>SME Channel Solution & Transaction Service Personnel</h1>
      <p>United Bank for Africa Plc (UBA) is one of Africa's leading financial institutions, with operations in 19 African countries and 3 global financal centres: London, Paris and New York.</p>
      <div className="lmt">
      <img src={Clock} alt="clock"/>
          <p className="lmt2">4 hours ago</p>
          </div>
        <button className="apply-btn">Apply Now</button>
  
        </div>
    )
}

