import checkPropTypes from 'check-prop-types'

import {applyMiddleware,createStore} from 'redux'
import {middlewares} from '../redux/store'
import reducer from '../redux/reducers'

export const findByTestAtrr=(wrapper,value)=>wrapper.find(`[data-test="${value}"]`)

export const checkProps=(component,expectedProps)=>checkPropTypes(component.propTypes,expectedProps,"props",component.name)

export const testStore = (initialState)=>{
    const createStoreWithMiddleware=applyMiddleware(...middlewares)(createStore)
    return createStoreWithMiddleware(reducer,initialState)
}