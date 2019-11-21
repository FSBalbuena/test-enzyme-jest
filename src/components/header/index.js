import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Logo,LogoBox, Header } from './components';

const HeaderComponent =()=>(
    <Header data-test="navbar">
        <Wrapper data-test="navbar-wrapper">
            <LogoBox data-test="logo-box">
                <Logo data-test="logo" src="logo192.png"/>
            </LogoBox>
        </Wrapper>
    </Header>
)

HeaderComponent.propTypes={

}
HeaderComponent.defaultProps={

}
export default HeaderComponent