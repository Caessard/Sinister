const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_FAVOURITE':
      // return {
      //   ...state,
      //   myList: [...state.myList, action.payload]
      // }
      // Con el siguiente 'return' se soluciona el problema con los ítems repetodos en myList:
      return state.myList.some((items) => items.id === action.payload.id) ?
        {...state}
        :
        {...state,
        myList: [...state.myList, action.payload]}
    case 'DELETE_FAVOURITE':
      return {
        ...state,
        myList: state.myList.filter(items => items.id !== action.payload)
      }
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      }
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      }
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload
      }
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing: state.trends.find(item => item.id === Number(action.payload)) 
        || state.original.find(item => item.id === Number(action.payload))
        || []
      }
    default:
      return state;
  }
};

export default reducer;