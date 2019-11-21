import React from 'react'
import {shallow} from 'enzyme'
import HeaderComponent from '.'
import {findByTestAtrr} from '../../utils/test'

/*

TEST-2
describe let us describe a test module.

if i use spec, doesn crash, but if i use header.test.js it does. Why?
*/

describe("Initializing Header Component", ()=>{
    let wrapper
    beforeEach(()=>{
        wrapper=shallow(<HeaderComponent />)
    })

    it("It shoud render without errors",()=>{
        const header=findByTestAtrr(wrapper,"navbar")
        expect(header.length).toBe(1)
    })
    it("It shoud have a wrapper",()=>{
        const headerWrapper=findByTestAtrr(wrapper,"navbar-wrapper")
        expect(headerWrapper.length).toBe(1)
    })
})
