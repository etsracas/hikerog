import { createStore } from 'redux'
import rootReducer, { initialState } from '../reducers'

const configureStore = (preloadState = {}) => (
  createStore(rootReducer, {...initialState, ...preloadState})
)

export default configureStore
