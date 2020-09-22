import React, { useState } from 'react'
import { css } from '@emotion/core'

const useMenu = () => {

    const MenuFooter = (props) => {

        const { title, isMobile } = props
    
        // States
        const [ show, setShow ] = useState(false)
    
        return (
            <div css={css`
                div > span {
                    display: none;
                }
    
                @media (max-width: 900px) {
    
                    & > div {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
     
                        &:hover {
                            cursor: pointer;
                        }
                    }
    
                    div > span {
                        display: block;
                    }
    
                    ul {
                        margin-bottom: 20px;
                    }
                }
            `}>
                <div onClick={() => setShow(!show)}>
                    <p>{ title }</p>
                    <span>Show more</span>
                </div>
                
    
                { (show || !isMobile) && 
                <>
                    { props.children }
                </>
                }
    
                { isMobile && 
                    <hr css={css`
                        width: 100vw;
                        position: relative;
                        left: 50%;
                        right: 50%;
                        margin-left: -50vw;
                        margin-right: -50vw;
    
                        height: 2px;
                        border: 0;
                        background-color: white;
                    `}></hr>
                }
    
                
            </div>
        )
    }

    const Menu = (props) => {

        const { title } = props
    
        // States
        const [ show, setShow ] = useState(false)
    
        return (
            <div css={css` 
                border-bottom: 1px solid #ccc;
                padding: 20px 0;
                
                & > div {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
    
                    p {
                        font-size: 1.5rem;
                        text-transform: uppercase;
                    }
                    
                    &:hover {
                        cursor: pointer;
                    }
                }

                div > span {
                    display: block;
                }

                ul {
                    margin-top: 10px;

                    a {
                        color: black;
                        font-size: 1.3rem;
                    }
                }
            `}>
                <div onClick={() => setShow(!show)}>
                    <p>{ title }</p>
                    <span>Show more</span>
                </div>
                
    
                { (show) && 
                <>
                    { props.children }
                </>
                }    
                
            </div>
        )
    }

    const Checkbox = ({ name, action }) => {

        // useState
        const [ checked, setChecked ] = useState(false)

        const handleChange = () => {
            setChecked(!checked)
            action(!checked)
        }

        return (
            <li onClick={ handleChange } css={css`
                &:hover, label:hover, input:hover {
                    cursor: pointer;
                }
            `}>
                <input checked={ checked } onChange={ () => {} } type="checkbox"/>
                <label>{ name }</label>
            </li>
        )
    }

    return {
        MenuFooter,
        Menu,
        Checkbox,
    }
}

export default useMenu