import fetch from 'isomorphic-fetch'

const url = 'http://localhost:3000/data'

const receiveData = data => ({
  type: 'RECEIVE_DATA',
  data,
})

export const loadData = () => dispatch => {
  fetch(url)
    .then(response => response.json())
    .then(json => dispatch(receiveData(json.flights)));
}

export const setCarrier = carrier => ({
  type: 'SET_CARRIER',
  carrier,
})
