import produce from 'immer'
import { actionTypes } from './actions'

export interface webHistoryState {
  history: string[]
}

export function webHistoryReducer(state: webHistoryState, action: any) {
  switch (action.type) {
    case actionTypes.ADD_NEW_URL: {
      return produce(state, (draft) => {
        draft.history.unshift(action.payload)
      })
    }
  }

  return state
}
