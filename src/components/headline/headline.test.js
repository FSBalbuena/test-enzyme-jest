import React from 'react'
import {shallow} from 'enzyme'
import HeadlineComponent from '.'
import {findByTestAtrr,checkProps} from '../../utils/test'

/*

TEST-3 
describe let us describe a test module.

TEST-4
Add a proptypes check
*/

describe("Initializing Headline with props", ()=>{
    let wrapper
    beforeEach(()=>{
        wrapper=shallow(<HeadlineComponent title="Title" subtitle="Many things to say"/>)
    })

    it("It shoud render without errors",()=>{
        const headline=findByTestAtrr(wrapper,"headline")
        expect(headline.length).toBe(1)
    })
    it("It shoud have a title",()=>{
        const title=findByTestAtrr(wrapper,"title")
        expect(title.length).toBe(1)
    })
    it("It shoud have a subtitle",()=>{
        const subtitle=findByTestAtrr(wrapper,"subtitle")
        expect(subtitle.length).toBe(1)
    })
})

describe("Initializing Headline with no props", ()=>{
    let wrapper
    beforeEach(()=>{
        wrapper=shallow(<HeadlineComponent />)
    })
    it("It shouldn`t render if there is no props",()=>{
        const headline=findByTestAtrr(wrapper,"headline")
        expect(headline.length).toBe(0)
    })
})

describe("Checking proptypes",()=>{

    it("Should not throw a warning",()=>{
        //hardcode props
        const expectedProps={
            title:"Post Title",
            subtitle:"I don`t know if it is a subtitle or a description"
        }
        const propsErr=checkProps(HeadlineComponent,expectedProps)
        expect(propsErr).toBeUndefined()
    })
})
