/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql, reporter }) => {
    const resultado = await graphql(`
        query {
            allStrapiGroupCategory {
                nodes {
                    name
                    slug
                }
            }
        }
    `)

    // console.log(resultado.data.allStrapiGroupCategory.nodes)

    if (resultado.errors) reporter.panic('No hubo resultados', resultado.errors)

    // Ok
    const groupCategories = resultado.data.allStrapiGroupCategory.nodes

    groupCategories.forEach(groupCategory => {
        actions.createPage({
            path: groupCategory.slug,
            component: require.resolve('./src/components/dynamic-pages/group-category.js'),
            context: {
                slug: groupCategory.slug,
                name: groupCategory.name
            }
        })
    })
}