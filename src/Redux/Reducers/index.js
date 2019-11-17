import {
  combineReducers
} from 'redux'
import game from "./game"



export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    game
  });
  return rootReducer
}