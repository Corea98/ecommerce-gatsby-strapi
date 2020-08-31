/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from '@emotion/core'

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Global
        styles={css`
          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }

          *, *:before, *:after {
            box-sizing: inherit;
          }

          body {
            font-size: 1.4rem;
            line-height: 2;
            font-family: 'Roboto';
            background-color: #fafafa;
          }

          h1, h2, h3, h4, h5 {
            margin: 0;
            line-height: 1.5;
          }

          p {
            margin: 0;
          }

          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }

          a {
            text-decoration: none;
          }

          .container {
            max-width: 135rem;
            margin: 0 auto;
            width: 95%;
          }

          img {
            max-width: 100%;
          }
        `}
      />

      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>

        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
