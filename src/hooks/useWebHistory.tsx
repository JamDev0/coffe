import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";
import { useLocation } from "react-router-dom";
import { addNewUrlAction } from "../reducers/webHistory/actions";
import { webHistoryReducer, webHistoryState } from "../reducers/webHistory/reducer";

interface webHistoryContext {
  history: webHistoryState['history']
}

const webHistoryContext = createContext<webHistoryContext>({history: []});

interface webHistoryProviderProps {
  children: ReactNode
}

const initialWebHistoryState: webHistoryState = {
  history: []
}

export function WebHistoryProvider({ children }: webHistoryProviderProps) {
  const [state, dispatch] = useReducer(
    webHistoryReducer,
    initialWebHistoryState,
  )

  const history = state.history

  const location = useLocation();

  useEffect(() => {
    dispatch(addNewUrlAction(location.pathname))
  }, [location])
    
  console.log('History: ', state)
  
  return (
    <webHistoryContext.Provider value={{ history }}>
      {children}
    </webHistoryContext.Provider>
  )
}

export function useWebHistory() {
  const context = useContext(webHistoryContext)

  return context
}