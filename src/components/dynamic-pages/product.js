import React from 'react'
import styled from '@emotion/styled'

const ProductContainer = styled.div`

    div {
        overflow: hidden;
        height: 300px;
        display: flex;
        align-items: center;
        background-color: #ccc;

        img {
            width: 100%;
        }
    }

    h2 {
        margin-top: 10px;
        font-weight: 400;
        font-size: 1.7rem;
    }

    span {
        color: #7a7a7a;
    }
`

const Product = () => {


    return (
        <ProductContainer>
            <div>
                <img src="https://www.eleganza-shop.com/media/catalog/product/0/1/012656_1.png?auto=png&format=pjpg&width=350"/>
            </div>
            <h2>FILLING PIECES</h2>
            <p>Unisex Low Top Riddle</p>
            <span>$210.00</span>
        </ProductContainer>
    )

}

export default Product