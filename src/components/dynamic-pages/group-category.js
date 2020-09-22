import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

// Components
import Layout from '../layout'
import SEO from "../../components/seo"
import Product from "./product"

// Hooks
import useMenu from '../../hooks/useMenu'

export const query = graphql`
    query ($slug: String!, $name: String!) {
        allStrapiCategory(filter: {name: {eq: $name}}) {
            nodes {
                id
                name
                sub_categories {
                    id
                    name
                }
            }
        }
        allStrapiGroupCategory(filter: {slug: {eq: $slug}}) {
            nodes {
                id
                name
                image {
                    sharp: childImageSharp {
                        fluid (maxWidth: 1200) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                categories {
                    id
                    name
                }
            }
        }
    }
`

const GroupCategoryTemplate = ({ data: { allStrapiCategory: { nodes: categories }, allStrapiGroupCategory: { nodes: groupCategories } } }) => {

    const subCategories = categories[0].sub_categories
    const groupCategory = groupCategories[0]

    console.log('group-category.js - subCategories', subCategories)
    console.log('group-category.js - groupCategory', groupCategory)

    // Hooks
    const { Menu, Checkbox } = useMenu()

    return (
        <Layout>
            <SEO title={ groupCategory.name } />
            <div className="container">
                <p css={css` 
                    margin: 20px 0;
                `}><Link to="/">Home</Link> / { groupCategory.name }</p>

                <h1 css={css`text-align: center; margin-top: 20px; font-weight: 400;`}>{ groupCategory.name }</h1>
                <p css={css`text-align: center; margin-bottom: 40px;`}>588 Items</p>



                <div css={css`
                    display: flex;
                    align-items: first;
                `}>
                    {/* CATEGORIES */}
                    <div css={css`
                        height: auto; 
                        width: 430px; 
                        padding-right: 25px;

                        div:nth-of-type(1) {
                            padding-top: 0px !important;
                        }

                        div > ul > li> input[type="checkbox"] {
                            margin-right: 10px;
                        }

                        li, label {
                            font-size: 1.3rem;
                        }
                    `}>
                        <Menu
                            title='CATEGORY' 
                        >
                            <ul>
                                { subCategories.map(subCategory => (
                                    <li
                                        key={ subCategory.id }
                                    ><Link to="/">{ subCategory.name }</Link></li> 
                                ))}
                            </ul>
                        </Menu>

                        <Menu
                            title='BRAND'
                        >
                            <ul>
                                <Checkbox 
                                    name="Brand 1 dinámica"
                                    action={(checked) => checked ? console.log('Brand 1 dinámica') : console.log('Saliendo..') }
                                />
                                
                                <Checkbox 
                                    name="Brand 2 dinámica"
                                    action={(checked) => checked && console.log('Brand 2 dinámica') }
                                />

                                <Checkbox 
                                    name="Brand 3 dinámica"
                                    action={(checked) => checked && console.log('Brand 3 dinámica') }
                                />
                            </ul>
                        </Menu>

                        <Menu
                            title='COLOR'
                        >
                            <ul>
                                <li>
                                    <input type="checkbox"/>
                                    <label>Beige 1</label>
                                </li>
                                <li>
                                    <input type="checkbox"/>
                                    <label>Beige 1</label>
                                </li>
                                <li>
                                    <input type="checkbox"/>
                                    <label>Beige 1</label>
                                </li>
                            </ul>
                        </Menu>

                        <Menu
                            title='Size'
                        >
                            <ul>
                                <li>
                                    <input type="checkbox"/>
                                    <label>Beige 1</label>
                                </li>
                                <li>
                                    <input type="checkbox"/>
                                    <label>Beige 1</label>
                                </li>
                                <li>
                                    <input type="checkbox"/>
                                    <label>Beige 1</label>
                                </li>
                            </ul>
                        </Menu>

                        <Menu
                            title='Material outside'
                        >
                            <ul>
                                <li>
                                    <input type="checkbox"/>
                                    <label>Beige 1</label>
                                </li>
                                <li>
                                    <input type="checkbox"/>
                                    <label>Beige 1</label>
                                </li>
                                <li>
                                    <input type="checkbox"/>
                                    <label>Beige 1</label>
                                </li>
                            </ul>
                        </Menu>

                        <Menu
                            title='Gender'
                        >
                            <ul>
                                <li>
                                    <input type="checkbox"/>
                                    <label>Beige 1</label>
                                </li>
                                <li>
                                    <input type="checkbox"/>
                                    <label>Beige 1</label>
                                </li>
                            </ul>
                        </Menu>
                    </div>

                    {/* PRODUCTS */}
                    <div css={css`width: 100%;`}>
                        <div css={css`
                            width: 100%;
                            height: 100%;
                            display: grid;
                            grid-template-columns: repeat(3, 1fr);
                            grid-auto-rows: 400px;
                            gap: 25px;
                        `}>
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                        </div>
                    </div>
                </div>
            </div>

            
        </Layout>
    )
}

export default GroupCategoryTemplate