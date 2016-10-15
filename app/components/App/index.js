import React, { PropTypes } from 'react'
import Flight from '../Flight'
const ALL_CARRIERS = 'all'

export default class App extends React.Component {
  componentWillMount() {
    this.props.loadData()
  }
  handleChange(carrier) {
    this.props.setCarrier(carrier)
  }
  getCarriers(flights) {
    return flights.reduce((prev, next) => {
      if (prev.indexOf(next.carrier) < 0) {
        prev.push(next.carrier)
      }
      return prev;
    }, [ALL_CARRIERS])
  }
  render() {
    if (!this.props.flights) return null
    const carrier = this.props.carrier || ALL_CARRIERS
    const carriers = this.getCarriers(this.props.flights);
    const flights = carrier === ALL_CARRIERS ?
      this.props.flights :
      this.props.flights.filter(flight => flight.carrier === carrier)
    return (
      <div>
        <select value={carrier} onChange={event => this.handleChange(event.target.value)}>
          {carriers.map((carrier, index) => <option key={index} value={carrier}>{carrier}</option>)}
        </select>
        <div className="titles">
          <div>From</div>
          <div>To</div>
          <div>Departure</div>
          <div>Arrival</div>
          <div>Carrier</div>
        </div>
        <ul>
          {flights.map((flight, index) => <Flight key={index} {...flight} />)}
        </ul>
      </div>
    )
  }
}
