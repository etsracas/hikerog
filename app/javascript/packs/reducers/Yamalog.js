import { combineReducers } from 'redux'
import { CREATE_YAMALOG_LIST } from '../constants/yamalog'

export const yamalogInitialState = []

const yamalog =  (state = '', action) => {
  switch (action.type) {
    case CREATE_YAMALOG_LIST:
      return action.yamalogs
    default:
      return state
  }
}

export default yamalog
