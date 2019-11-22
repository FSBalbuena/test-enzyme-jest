import checkPropTypes from 'check-prop-types'


export const findByTestAtrr=(wrapper,value)=>wrapper.find(`[data-test="${value}"]`)

export const checkProps=(component,expectedProps)=>checkPropTypes(component.propTypes,expectedProps,"props",component.name)
