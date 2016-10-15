import React, { PropTypes } from 'react'

export default ({ direction: { from, to }, departure, arrival, carrier }) => (
  <li className="flight">
    <div className="from">{from}</div>
    <div className="to">{to}</div>
    <div className="departure">{new Date(departure).toLocaleString()}</div>
    <div className="arrival">{new Date(arrival).toLocaleString()}</div>
    <div className="carrier">{carrier}</div>
  </li>
)
