import moxios from 'moxios'
import {testStore} from '../utils/test'
import {fetchPost} from '../redux/actions'

describe('Testing fetchPost actions',()=>{

    beforeEach(()=>{
        moxios.install()
    })
    afterEach(()=>{
        moxios.uninstall()
    })
    it("Store is updated correctly",()=>{
        const expectedState=[{
            title:"Titulo",
            body:"Cuerpo"
        },{
            title:"Titulo",
            body:"Cuerpo"
        },{
            title:"Titulo",
            body:"Cuerpo"
        }]

        const store= testStore()

        moxios.wait(()=>{
            const request=moxios.requests.mostRecent();
            request.respondWith({
                status:200,
                response:expectedState
            })
        })
        return store.dispatch(fetchPost())
        .then(()=>{
            const newState=store.getState()
            expect(newState.posts).toEqual(expectedState)
        })


    })
})
