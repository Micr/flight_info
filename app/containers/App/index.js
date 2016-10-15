import { connect } from 'react-redux';
import App from '../../components/App';
import * as actions from './actions'

// const mapStateToProps = (state) => {
//   debugger;
//   return {
//   flights: state.appData.flights,
//
//   }
// };

const mapStateToProps = (state) => ({
  flights: state.appData.flights,
  carrier: state.appData.carrier,
});

export default connect(
   mapStateToProps,
   actions
)(App);
