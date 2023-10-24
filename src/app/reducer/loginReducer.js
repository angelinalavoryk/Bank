const initialState = {
    isAuthenticated: false,
    token: null,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
            // retourne nouvel état en copiant l'état actuel 
          ...state,
          isAuthenticated: true,
          token: action.payload,
          error: null,
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          isAuthenticated: false,
          token: null,
          error: action.payload,
        };
      default:
        // si type d'action n'est pas géré, retourne l'état actuel sans  modifier.
        return state;
    }
  };
  
  export default authReducer;
  

  
