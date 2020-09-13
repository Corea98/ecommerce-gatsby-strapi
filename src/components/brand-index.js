import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const ContainerBrand = styled(Link)`
    z-index: 9;

    overflow: hidden;

    width: 100%;
    height: 100%;

    img {
        min-width: 100%;
        height: 100%;
    } 

    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
`

const Brand = ({ urlImg }) => {


    return (
        <ContainerBrand to='/some-brand'>
            <img src={urlImg} />
        </ContainerBrand>
    )
}

export default Brand