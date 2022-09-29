export enum actionTypes {
  ADD_NEW_URL = 'ADD_NEW_URL',
}

export function addNewUrlAction(url: string) {
  return {
    type: actionTypes.ADD_NEW_URL,
    payload: url,
  }
}
