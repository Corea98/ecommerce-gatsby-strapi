import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

// Components
import Layout from '../layout'

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
                        fluid (maxWidth: 600) {
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

    return (
        <Layout>
            <h1>{ groupCategory.name }</h1>


            <Image fluid={ groupCategory.image.sharp.fluid } />
        </Layout>
    )
}

export default GroupCategoryTemplate