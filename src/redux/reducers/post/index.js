import {types} from '../../actions/types'

export default (state=[],action)=>{
    switch(action.type){
        case types.GET_POST :
        return [...action.data]
        default:
        return state
    }
}