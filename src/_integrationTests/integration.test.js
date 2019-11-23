import moxios from 'moxios'
import {testStore} from '../utils/test'
import {fetchPost} from '../redux/actions'

describe('Testing fetchPost actions',()=>{
    //install moxios to wrap all our axios call before any test
    beforeEach(()=>{
        moxios.install()
    })
    //uninstall moxios of wraping all our axios call after any tests
    afterEach(()=>{
        moxios.uninstall()
    })

// begin with testing
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
// we must returned in order to let them fulfill, oterwise the test will always be true
         return store.dispatch(fetchPost())
        .then(()=>{
            const newState=store.getState()
            expect(newState.posts).toEqual(expectedState)
        })
    })
})
