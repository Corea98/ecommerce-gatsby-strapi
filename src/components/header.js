import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const NavLink = styled(Link)`
  color: white;
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  margin: 0 30px;
  padding: 12px 0;
  border-bottom: 2px solid #0f4c81;

  &:hover {
    border-bottom: 2px solid white;
  }
`

const Header = ({ siteTitle }) => (
  <header css={css`
    background-color: #fafafa;
  `}>
    {/* PRIMERA BARRA */}
    <div className="container"  css={css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 10px;
      margin-bottom: -5px;
      background-color: inherit;
    `}>
      <p>+505 8888 8888</p>
      <p>Customer service</p>
    </div>

    {/* BARRA CENTRAL */}
    <div className="container" css={css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 55px;
    `}>
      {/* BUSCADOR IZQUIERDA */}
      <form css={css`width: 30%;`}>
        <input type="text" placeholder="Search by product" />
        <button>Search</button>
      </form>

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
        width: 30%;
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
    <nav css={css`
      background-color: #0f4c81;
    `}>
      <ul className="container" css={css`
        display: flex;
        justify-content: center;
        align-items: center;
      `}>
        <NavLink to="/algo">WOMEN SHOES</NavLink>
        <NavLink to="/algo">MEN SHOES</NavLink>
        <NavLink to="/algo">MENS CLOTHING</NavLink>
        <NavLink to="/algo">KIDS</NavLink>
        <NavLink to="/algo">BAGS & ACCESORIES</NavLink>
        <NavLink to="/algo">DESIGNERS</NavLink>
        <NavLink to="/algo">OUTLET</NavLink>
      </ul>
    </nav>

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
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
