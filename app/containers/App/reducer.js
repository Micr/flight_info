export default (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_DATA':
      return {
        ...state,
        flights: action.data,
      }
    case 'SET_CARRIER':
      return {
        ...state,
        carrier: action.carrier,
      }
    default:
      return state
  }
}
