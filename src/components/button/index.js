import React from 'react'
import PropTypes from 'prop-types'
import {Button} from './components'

const SearchButton=({text,handleClick})=>(
    <Button onClick={handleClick} data-test="post-button">
        {text}
    </Button>
)

SearchButton.propTypes={
    text:PropTypes.string,
    handleClick:PropTypes.func
}

SearchButton.defaultProps={
    text:"Search",
    handleClick:(e)=>console.log(e)
}
export default SearchButton
