// src/store.js
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import ReduxThunk from 'redux-thunk'
import {storeJwt} from './middleware'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(
  applyMiddleware(ReduxThunk, storeJwt)
)

const store = createStore(reducer, enhancer)

export default store