import { combineReducers } from 'redux'
import Yamalog, { yamalogInitialState } from './Yamalog'

export const initialState = {
  Yamalog: yamalogInitialState,
}

const rootReducer = combineReducers({ Yamalog })

export default rootReducer
