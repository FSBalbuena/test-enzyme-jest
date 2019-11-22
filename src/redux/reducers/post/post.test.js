import {types} from '../../actions/types'
import PostReducer from '.'

describe('Post Reducer',()=>{
    it('should return an empty array on first call',()=>{
        let newState=PostReducer(undefined,{})
        expect(newState).toEqual([])
    })
    it('it must return the state if no action is given',()=>{
        let state=[{
            id:2345,
            title:'A title',
            content:"This is a post content"
        }]
        let newState=PostReducer(state,{})
        expect(newState).toEqual(state)
    })
    describe('getPost action',()=>{

        //set variables
        let data=[{
            id:2345,
            title:'A title',
            content:"This is a post content"
        },
        {
            id:2345,
            title:'A title',
            content:"This is a post content"
        }]
        let newData=[ {
            id:3123,
            title:'A title',
            content:"This is a post content"
        }]
        let action=(data)=>({
            type:types.GET_POST,
            data
            })
        let newState
        it('Should replace the previus state when is empty,',()=>{
            newState=PostReducer(undefined,action(data))
            expect(newState).toEqual(data)
        })  
        it('Should replace previus state even if it has data',()=>{
            newState=PostReducer(newState,action(newData))
            expect(newState).toEqual(newData)
        })  
        it('Should replace previus state even with empty new data',()=>{
            newState=PostReducer(newState,action([]))
            expect(newState).toEqual([])
        })  
    })
})