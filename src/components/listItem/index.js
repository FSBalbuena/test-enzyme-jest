import React from 'react'
import PropTypes from 'prop-types'
import {Title, Wrapper, Description} from './components'

const ListItem=({title, description})=>(
    title?<Wrapper>
            <Title data-test="title">
                {title}
            </Title>
            <Description data-test="description">
                {description}
            </Description>
        </Wrapper>
        :
        null
)


ListItem.propTypes={
    title:PropTypes.string,
    description:PropTypes.string
}



export default ListItem
