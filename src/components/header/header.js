import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { css } from '@emotion/core'
import styled from '@emotion/styled'

// Hooks
import useSearch from '../../hooks/useSearch'

// Components
import Nav from './nav'



const Header = ({ isMobile, NavResponsive, MenuLink, SubMenuItem }) => {
  
  // Hooks
  const { SearchText } = useSearch()

  return (
  <header css={css`
    background-color: #fafafa;
  `}>
    {/* PRIMERA BARRA */}
    <div className="container"  css={css`

      display: none;

      @media (min-width: 1100px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 10px;
        margin-bottom: -5px;
        background-color: inherit;
        
        a, p {
          font-size: 1.3rem;
          color: black;
        }
      }
    `}>
      <p>+505 8888 8888</p>
      <Link to="/">Customer service</Link> 
    </div>

    {/* BARRA CENTRAL */}
    <div className="container" css={css`
      display: none;

      @media (min-width: 1100px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 55px;
      }
    `}>
      {/* BUSCADOR IZQUIERDA */}
      <SearchText />

      {/* LOGO CENTRO */}
      <Link to="/" css={css`
        color: black;
        font-family: 'Lato', sans-serif;
        text-align: center;
        font-size: 2.1rem;
        margin-bottom: 15px;
        text-transform: uppercase;
        letter-spacing: 0.3rem;
      `}>Ecommerce</Link>

      {/* LOGIN Y CARRITO */}
      <div css={css`
        width: 26%;
        display: flex;
        justify-content: flex-end;

        a {
          font-size: 1.3rem;
          margin-left: 20px;
          color: black;

          &:hover {
            
          }
        }
      `}>
        <Link to="/login">Login</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>


    {/* NAV */}
    <Nav 
      isMobile={ isMobile }
      NavResponsive={ NavResponsive }
      MenuLink={ MenuLink }
      SubMenuItem={ SubMenuItem }
    />

    {/* <div>
      <h1 >
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div> */}
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
