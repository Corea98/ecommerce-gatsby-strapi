import React, { useState, useEffect } from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import {Link} from 'gatsby'

// Hooks
import useWindowDimensions from '../hooks/useWindowDimensions'
import useMenu from '../hooks/useMenu'

const ButtonLink = styled(Link)`
    background-color: #0f4c81;
    font-size: 1.4rem;
    display: block;
    width: 80%;
    padding: 7px;
    color: white !important;
    text-align: center;

    @media (max-width: 900px) {
        width: 100%;
    }
`

const FooterDiv = styled.div`
    display: flex;
    padding: 60px 0;
    font-family: 'Lato', sans-serif;

    div {
        width: 20%;
        margin-right: 20px;
    }

    div:nth-last-of-type(1) {
        margin-right: 0px;
    }

    div p:nth-of-type(1) {
        font-size: 1.5rem !important;
        margin-bottom: 10px !important;
    }

    div:nth-of-type(1) p, div li, div a {
        font-size: 1.2rem;
        color: black;
        margin-bottom: 5px;
    }

    div a:hover {
        text-decoration: underline;
    }

    @media (max-width: 900px) {
        flex-wrap: wrap;

        div {
            width: 100% !important;
            margin-right: 0px;
        }   
    }
`

const Footer = () => {
    
    // States
    const [ isMobile, setIsMobile ] = useState(false)

    // Hooks
    const { MenuFooter } = useMenu()
    const { width } = useWindowDimensions()
    useEffect(() => {
        setIsMobile(width <= 900)
    }, [width]);

    return (
        <footer>
          <div css={css`
            background-color: #ebebeb;
          `}>
              <div className='container'>
                <FooterDiv>
                    <div>
                        <p>Contact</p>

                        <p><strong>Tel:</strong> +505 8888 8888</p>
                        <p><strong>Mail:</strong> ecommerce@mail.com</p>
                        <p><strong>Daily opened:</strong> 09:00 - 17:30</p>

                        {/* RATING */}
                        <div css={css`
                            margin-top: 20px;
                            display: flex;

                            p {
                                border-right: 1px solid black;
                                padding-right: 5px;
                                font-weight: bold;
                                font-size: 1.6rem;
                            }

                            div {
                                display: flex;
                                margin-left: 5px;
                            }

                            @media (max-width: 900px) {
                                div {
                                    width: 100px !important;
                                }
                            }
                        `}>
                            <p>8.6</p>
                            <div>
                                <div>🌟</div>
                                <div>🌟</div>
                                <div>🌟</div>
                                <div>🌟</div>
                            </div>
                        </div>
                        <span css={css`
                            display: block;
                            margin-top: -10px;
                            font-size: 1.2rem;
                            
                            @media (max-width: 900px) {
                                margin-bottom: 30px;
                            }
                        `}>25685 reviews</span>
                    </div>

                    <MenuFooter
                        title='Customer service'
                        isMobile={isMobile}
                    >
                        <ul>
                            <li><Link to="/">Contact</Link></li>
                            <li><Link to="/">Frequently Asked Questions</Link></li>
                            <li><Link to="/">Order</Link></li>
                            <li><Link to="/">Payments</Link></li>
                            <li><Link to="/">Shipping</Link></li>
                            <li><Link to="/">Exchange & return</Link></li>
                            <li><Link to="/">Complaints & Warranty</Link></li>
                            <li><Link to="/">Maintenance</Link></li>
                        </ul>
                    </MenuFooter>

                    <MenuFooter
                        title='Ecommerce'
                        isMobile={isMobile}
                    >
                        <ul>
                            <li><Link to="/">About Ecommerce</Link></li>
                            <li><Link to="/">Our Stores</Link></li>
                            <li><Link to="/">Cookie information</Link></li>
                            <li><Link to="/">Privacy & AVG legislation</Link></li>
                            <li><Link to="/">Terms and Conditions</Link></li>
                        </ul>
                    </MenuFooter>

                    <MenuFooter
                        title='Winkels'
                        isMobile={isMobile}
                    >
                        <ul>
                            <li><Link to="/">Our Stores</Link></li>
                            <li><Link to="/">Ecommerce Hilversum</Link></li>
                            <li><Link to="/">Ecommerce Utrecht</Link></li>
                            <li><Link to="/">OBLIQUE Utrecht</Link></li>
                        </ul>
                    </MenuFooter>

                    <div css={css`
                        @media (max-width: 900px) {
                            margin-top: 30px;

                            p {
                                display: none;
                            }
                        }
                    `}>
                        <p>Stay Informed</p>

                        <ButtonLink to="/">Suscribe to the newsletter</ButtonLink>
                    </div>
                </FooterDiv>
              </div>
          </div>


            <div>
                <div className="container" css={css`
                    line-height: 5rem;
                    font-size: 1.3rem;
                `}>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </div>
            </div>
        </footer>
    );
}


 
export default Footer;