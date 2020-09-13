import React, { useState, useEffect } from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from "gatsby"
 
// Hooks
import useWindowDimensions from './useWindowDimensions'

const Menu = styled.div`
    z-index: 5;
    background-color: #0f4c81;

    @media (max-width: 1099px) {
        position: fixed;
        width: 100vw;
        height: 120vh;
        top: 0;
        left: 0;

        .container > div {
            font-family: 'Lato', sans-serif;

            div a {
                color: white;
            }
        }
    }

    @media (min-width: 1100px) {
        width: 100%;
        height: 400px;
        position: absolute;
        display: block;
        padding-top: 40px;
        left: 0px;
        top: 135px;

        .container > div {
            display: flex;
            font-family: 'Lato', sans-serif;

            div {
                width: 25%;
            }

            div:nth-of-type(2), div:nth-of-type(3), div:nth-of-type(4) {
                border-left: 1px solid #ccc;
                padding-left: 8%;
            }

            div li {
                height: 32px;
            }

            div a {
                color: white;
                font-size: 1.2rem;

                &:hover {
                text-decoration: underline;
                }
            }

            div .principal {
                color: white !important;
                display: block !important;
                margin-bottom: 10px;
                font-size: 1.5rem !important;
            }
        }
    }
`

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

  &.selected {
    border-bottom: 2px solid white;
  }

  @media (max-width: 1099px) {
    margin: 0 2.5% !important;
  }
`

const useNav = () => {

    const [isMobile, setIsMobile] = useState(false)
    const [subMenu, setSubMenu] = useState('')

    // Mobile
    const [subMenuMobile, setSubMenuMobile] = useState(null); 

    // Hooks
    const { width } = useWindowDimensions()
    useEffect(() => {
        setIsMobile(width <= 1099)
    }, [width]);

    const NavResponsive = (props) => {
        
        const { textMobile } = props

        return (
            <nav 
                onMouseLeave={() => setSubMenu('')}
                css={css`
                    background-color: #0f4c81;
            `}>
                <div className="container">
                    {/* MOBILE MENU */}
                    <div css={css`
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        height: 80px;
    
                        p {
                            font-size: 2rem;
                            color: white;
                        }
    
                        @media (min-width: 1100px) {
                            display: none;
    
                            ul {
                                display: block !important;
                            }
                        }
                    `}>
                        <p>{ textMobile }</p>
    
                        <div>
                            <button>Shop</button>
                            <button onClick={() => { setSubMenuMobile('main')}}>Options</button>
                        </div>
                    </div>
    
                    {/* NAV UL */}
                    <NavUl>
                        { props.children }
                    </NavUl>
    
                </div>
                
            </nav>  
        )
    }
    const NavUl = (props) => {
    
        return (
            <ul className={subMenuMobile ? "display-block" : "display-none"} css={css`
                ${'' /* MOBILE */}
                @media (max-width: 1099px) {
                    position: fixed;
                    height: 120vh;
                    width: 100vw;
                    background-color: #0f4c81;
                    top: 0;
                    left: 0;
    
                    li:nth-of-type(1) {
                        div {
                            display: flex;
                            justify-content: flex-end;
                        }
    
                        p {
                            width: auto;
                            display: block;
                            color: white;
                            font-size: 2.5rem;
                            margin-right: 30px;
                        }
                    }
    
                    li {
                        border-bottom: 1px solid #ccc;
                        padding: 12px 0;
                    }
                }
    
                ${'' /* DESKTOP */}
                @media (min-width: 1100px) {
                    display: flex;
                    justify-content: center;
                    align-items: center;
    
                    li {
                        height: 50px;
                        display: flex;
                        align-items: center;
    
                        p {
                            display: none !important;
                        }
                    }
                }
            `}>
                {/* CLOSE MENU ** MOBILE ** */}
                <li className={subMenuMobile ? "display-block" : "display-none"}><div><p onClick={() => { setSubMenuMobile(null)}}>X</p></div></li>
    
                { props.children }
            </ul>
        )
    }
    const MenuLink = (props) => {

        const { name, identifier, subIdentifiers, secondLevelOnly, urlImagen } = props
    
        return (
            <li onMouseEnter={() => setSubMenu(identifier)}>
                { isMobile 
                ?
                    <button onClick={() => {setSubMenuMobile(identifier)}}>{name}</button>
                :
                    <NavLink to="#" className={(subMenu === identifier) && "selected"}>{name}</NavLink>
                }
    
    
                { ((subMenu === identifier && !isMobile) || (subMenuMobile === identifier || 
                subIdentifiers.includes(subMenuMobile))) && 
                    <SubMenuList
                        isMobile={ isMobile }
                        setSubMenuMobile={ setSubMenuMobile }
                        name={ name }
                        back="main"
                        textTop={ identifier }
                        secondLevelOnly={ secondLevelOnly }
                        urlImagen={ urlImagen }
                    >
                        { props.children }
                    </SubMenuList>
                }
            </li>
        )
    }
    const SubMenuList = (props) => {
    
        const { name, back, textTop, secondLevelOnly, urlImagen } = props
        
        return (
            <Menu>
                <div className="container">
                    {/* Wrapper */}
                    <div>
                        { (!secondLevelOnly || isMobile) &&
                        <div>
                            { !isMobile
                            ? 
                                <Link to="/" className="principal">{ name }</Link>
                            : 
                                <div css={css`
                                    background-color: #BCB2A2;    
                                    position: fixed;
                                    top: 0;
                                    left: 0;
                                    width: 100vw;                              
                                `}>
                                    <div className="container" css={css`
                                        display: flex;
                                        justify-content: space-between;
                                        align-items: center;
                                        height: 74px;
    
                                        p {
                                            color: black;
                                            font-size: 1.7rem;
                                            text-transform: uppercase;
                                        }
                                    `}>
                                        <span css={css`width: 20%`} onClick={() => { setSubMenuMobile(back) }}>Atras</span>
                                        <p>{ textTop }</p>
                                        <span css={css`width: 20%; display: flex; justify-content: flex-end;`} onClick={() => { setSubMenuMobile(null)}}>X</span>
                                    </div>
                                </div>
                            }
    
                            <ul css={css`
                                @media (max-width: 1099px) {
                                    padding-top: 74px;
                                }
                            `}>
                            { !secondLevelOnly &&
                                <>{ props.children.map(elemento => { if (elemento.type === "li") return elemento}) }</>
                            }
                            </ul>
                        </div>
                        }
    
                        { props.children.map(elemento => { if (elemento.type !== "li") return elemento}) }
    
                        {/* Show the image */}
                        { (!isMobile && urlImagen) && 
                            <span css={css`
                                width: 250px !important;
                                height: 250px;
                                margin-left: auto;
                                display: flex;
                                align-items: center;
                                overflow: hidden;

                                img {
                                    width: 100%;
                                }
                            `}>
                                <img src={ urlImagen } alt='name' />
                            </span>
                        }
                    </div>
                </div>
            </Menu>
        )
    }
    // THIRD LEVEL
    const SubMenuItem = (props) => {

        const { back, textTop, identifier, name } = props
    
        return (
    
            <div>
                { isMobile 
                ?
                    <button onClick={() => {setSubMenuMobile(identifier)}} css={css`
                        width: 100%;
                        padding: 12px 0;
                        background-color: transparent !important;
                        color: white;
                        border: none;
                        border-bottom: 1px solid #ccc !important;
                        height: 53px;

                        display: flex;
                        justify-content: space-between;


                    `}>
                        <span>{name}</span>
                        <span>Más</span>
                    
                    </button>
                :
                    <Link to="/" className="principal">{name}</Link>
                }
    
                { ((!isMobile) || (subMenuMobile === identifier)) && 
                    <ul css={css`
                        @media (max-width: 1099px) {
                            background-color: #0f4c81;
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100vw;
                            height: 120vh;
                            padding-top: 74px;
    
                            li a {
                                padding: 0 2.5%;
                            }
                        }
                    `}>
                        { isMobile &&
                            <div css={css`
                                background-color: #BCB2A2;    
                                position: fixed;
                                top: 0;
                                left: 0;
                                width: 100vw;                                  
                            `}>
                                <div className="container" css={css`
                                    display: flex;
                                    justify-content: space-between;
                                    align-items: center;
                                    height: 74px;
    
                                    p {
                                        color: black;
                                        font-size: 1.7rem;
                                        text-transform: uppercase;
                                    }
                                `}>
                                    <span css={css`width: 20%`} onClick={() => { setSubMenuMobile( back ) }}>Atras</span>
                                    <p>{ textTop }</p>
                                    <span css={css`width: 20%; display: flex; justify-content: flex-end;`} onClick={() => { setSubMenuMobile(null)}}>X</span>
                                </div>
                            </div>
                        }
    
                        { props.children }
                    </ul>
                }
            </div>
        )
    }

    return {
        isMobile,
        subMenuMobile,
        NavResponsive,
        MenuLink,
        SubMenuItem,
    }
}

export default useNav