import React from 'react';
import Button from '.';
import {shallow} from 'enzyme';
import {findByTestAtrr,checkProps} from '../../utils/test'

// checking for proptypes.
// if i pass props must not be a problem text and handleclick
// it renders without break

describe("Button component",()=>{

    describe("Checking Proptypes",()=>{
        it("shouldn`t fire a warning if good props are passed",()=>{
            let expectedProps={
                text:"Post",
                handleClick:()=>{}
            }
            const propsErr=checkProps(Button,expectedProps)
            expect(propsErr).toBeUndefined()
        })
        it("should fire a warning if text is not a string",()=>{
           let expectedProps={
                text:4,
                handleClick:()=>{}
            }
            const propsErr=checkProps(Button,expectedProps)
            expect(propsErr).toBeDefined()
        })
        it("should fire a warning if text is not a handleClick is not a function",()=>{
            let expectedProps={
                text:"Post",
                handleClick:"Yeah"
            }
            const propsErr=checkProps(Button,expectedProps)
            expect(propsErr).toBeDefined()
        })
    })
    describe("Testing Render",()=>{
        let wrapper
        beforeEach(()=>{
            wrapper=shallow(<Button/>)
        })
        it("it renders with out crashing",()=>{
            let button=findByTestAtrr(wrapper,"post-button")
            expect(button.length).toBe(1)
        })
        it("it renders a default text if no props are given",()=>{
            let button=findByTestAtrr(wrapper,"post-button")
            let text= button.text()
            expect(text).toBe("Search")
        })
    })

    describe("Testing Click",()=>{
        //i have to spy on this
        let spy=jest.fn()
        let props={
            text:"Post",
            handleClick:spy
        }
        let wrapper=shallow(<Button {...props}/>)
        it('handleClick props must be called when i click the button',()=>{
            let button=findByTestAtrr(wrapper,"post-button")
            button.simulate('click')
            expect(spy.mock.calls.length).toBe(3)
        })
    })

})