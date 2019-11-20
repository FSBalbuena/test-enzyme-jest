/*
TEST-1

Enzyme configuration
¿Why this file?
¿It must be on the root always?

*/
import Enzyme from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

Enzyme.configure({
    adapter: new  EnzymeAdapter(),
    disableLifecycleMethods:true
})