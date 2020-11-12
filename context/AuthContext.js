import * as React from 'react';

const intialState = {
  isAuthenticated: false,
  user: {},
}

const AuthContext = React.createContext(intialState);

const { Provider } = AuthContext;

const reducer = (state, action) => {
  switch (action.type) {
    case "authenticate":
      return { ...state, isAuthenticated: true, user: action.payload };
    case "logout":
      return { ...state, isAuthenticated: false, user: {} };
    default:
      return intialState;
  }
}

const AuthStateProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, intialState);

  return (
    <Provider value={{ state, dispatch }}>
      {children}
    </Provider>
  )
}

export { AuthStateProvider };

export default AuthContext;