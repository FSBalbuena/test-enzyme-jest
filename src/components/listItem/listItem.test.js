import React from 'react';
import ListItem from '.';
import {shallow} from 'enzyme';

import {findByTestAtrr,checkProps} from '../../utils/test'


describe("ListItem component",()=>{

    describe("Checking Proptypes",()=>{
        it("shouldn`t fire a warning if good props are passed",()=>{
            let expectedProps={
                title:"Title",
                description:"This is a description"
            }
            const propsErr=checkProps(ListItem,expectedProps)
            expect(propsErr).toBeUndefined()
        })
        it("should fire a warning if title is not a string",()=>{
           let expectedProps={
                title:4,
                description:"This is a description"
            }
            const propsErr=checkProps(ListItem,expectedProps)
            expect(propsErr).toBeDefined()
        })
        it("should fire a warning if description is not string",()=>{
            let expectedProps={
                title:"Title",
                description:4
            }
            const propsErr=checkProps(ListItem,expectedProps)
            expect(propsErr).toBeDefined()
        })
    })
    describe("Testing Render with props",()=>{
        let wrapper
        let props={
            title:"Title",
            description:"This is a description"
        }
        beforeEach(()=>{
            wrapper=shallow(<ListItem {...props}/>)
        })
        it("it renders a title",()=>{
            let title=findByTestAtrr(wrapper,"title")
            expect(title.length).toBe(1)
        })
        it("it renders a description",()=>{
            let description=findByTestAtrr(wrapper,"description")
            expect(description.length).toBe(1)
        })
    })
    describe("Testing Render with no props",()=>{
        let wrapper
        beforeEach(()=>{
            wrapper=shallow(<ListItem />)
        })
        it("it doesn`t renders a title",()=>{
            let title=findByTestAtrr(wrapper,"title")
            expect(title.length).toBe(0)
        })
        it("it doesn`t renders a description",()=>{
            let description=findByTestAtrr(wrapper,"description")
            expect(description.length).toBe(0)
        })
    })

})