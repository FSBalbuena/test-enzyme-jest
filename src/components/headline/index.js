import React from 'react'
import PropTypes from 'prop-types'
import { Title, Subtitle, Headline} from './components';

const HeadlineComponent =({title,subtitle})=>(
            title?
            <Headline data-test="headline">
                <Title data-test="title" >
                    {title}
                </Title>
                <Subtitle data-test="subtitle">
                    {subtitle}
                </Subtitle>
            </Headline>
            :null

)




HeadlineComponent.propTypes={

}
HeadlineComponent.defaultProps={

}
export default HeadlineComponent