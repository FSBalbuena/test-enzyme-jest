import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers'
import ReduxThunk from 'redux-thunk'

export const middlewares=[ReduxThunk]

export const createStoreWithMiddleware=applyMiddleware(...middlewares)(createStore)

export default createStoreWithMiddleware(reducer)