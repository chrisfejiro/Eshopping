import React,{createContext,useContext,useReducer} from 'react'
//prepares the data layer
export const StateContext = createContext()//THIS CREATES THE DATA LAYER
//wrap our app and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

//pulling information from the data layer 
export const useStateValue= () => useContext(StateContext);