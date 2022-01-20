function counterReducer(state = {}, action) {
  switch (action.type) {
    case 'setCount':
      return {
        ...state,
        count: action.payload
        // searchQuery: action.payload.query,
        // searchData:  action.payload.data
      }
    case 'setNull':
      return {
        ...state,
        count: 0
      }
  }
  return state
}

export default counterReducer