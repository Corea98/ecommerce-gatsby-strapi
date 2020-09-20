import React, { useState, useEffect } from 'react'
import { Link } from "gatsby"
import { graphql, useStaticQuery } from 'gatsby'




const Nav = ({ isMobile, NavResponsive, MenuLink, SubMenuItem }) => {

    const { 
        allStrapiGroupCategory: { nodes: groupCategories },
        allStrapiCategory: { nodes: categories }
    } = useStaticQuery(graphql`
        query {
            allStrapiGroupCategory(sort: {fields: id, order: ASC}) {
                nodes {
                    id
                    name
                    slug
                    categories {
                        name
                        id
                    }
                    image {
                        sharp: childImageSharp {
                            fluid (maxWidth: 600) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
            allStrapiCategory(sort: {fields: id, order: ASC}) {
                nodes {
                    name
                    id
                    sub_categories {
                        id
                        name
                    }
                    group_category {
                        id
                        name
                    }
                }
            }
            
              
        }
      
    `)

    // console.log(groupCategories)
    console.log("nav.js - groupCategories,", groupCategories)
    console.log("nav.js - categories,", categories)

    

    return (
        <NavResponsive
            textMobile="ECOMMERCE"
        >
            { groupCategories.map(groupCategory => (
                <MenuLink
                    key={ groupCategory.id }
                    name={ groupCategory.name }
                    slug={ groupCategory.slug }
                    identifier={ groupCategory.name }
                    subIdentifiers={ categories.filter(c => (c.group_category.name === groupCategory.name)).map(cat => (cat.name)) }
                    image={ groupCategory.image }
                >

                { categories.filter(c => (c.name === groupCategory.name)).map(categoryShow => (
                    categoryShow.sub_categories.map(subCategoryShow => (
                        <li
                            key={ subCategoryShow.id }
                        ><Link to="/">{ subCategoryShow.name }</Link></li>
                    ))
                )) }

                {/* SECOND LEVEL */}
                { categories.filter(c =>  ((c.name !== groupCategory.name) && (c.group_category.name === groupCategory.name))).map(categoryShow => (
                    <SubMenuItem
                        key={ groupCategory.id }
                        back={ groupCategory.name }
                        textTop={ categoryShow.name }
                        identifier={ categoryShow.name }
                        name={ categoryShow.name }
                    >
                        {
                            categoryShow.sub_categories.map(subCategoryShow => (
                                <li
                                    key={ subCategoryShow.id }
                                ><Link to="/">{ subCategoryShow.name }</Link></li>
                            ))
                        }
                    </SubMenuItem>
                ))}                

                </MenuLink>
            )) }

        </NavResponsive>
    )

    
}



export default Nav;