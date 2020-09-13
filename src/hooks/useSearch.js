import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const Form = styled.form`
    width: 26%;
    display: flex;
    padding-bottom: 3px;
    border-bottom: 1px solid #ccc;

    img {
        width: 20px;
        margin-right: 8px;
    }

    input[type="text"] {
        height: 25px;
        background-color: inherit;
        border: none;
        flex: 1;
        min-width: 0px;

        &:focus, &.form-control:focus {
            outline:none !important;
            outline-width: 0 !important;
            box-shadow: none;
            -moz-box-shadow: none;
            -webkit-box-shadow: none;
        }
    }

    button {
        background-color: inherit;
        border: none;

        &:hover {
            cursor: pointer;
        }
    }
`

const useSearch = () => {

    const queryResult = useStaticQuery(graphql`
        query MyQuery {
            allFile(filter: {relativeDirectory: {eq: "icons"}}) {
                edges {
                    node {
                        id
                        publicURL
                    }
                }
            }
        }
    `)
    const urlLupa = queryResult.allFile.edges[0].node.publicURL
    // console.log(urlLupa)

    const SearchText = () => (
        <Form>
            <img src={ urlLupa } alt="search" />
            <input type="text" placeholder="Search by product" />
            <button>Search</button>
        </Form>
    )

    return {
        SearchText,
    }
}

export default useSearch;