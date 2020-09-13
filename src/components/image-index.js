import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const Container = styled(Link)`
    height: 100%;
    width: 100%;
    position: relative;
    display: block;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        -webkit-transition:all .9s ease; /* Safari y Chrome */
        -moz-transition:all .9s ease; /* Firefox */
        -o-transition:all .9s ease; /* IE 9 */
        -ms-transition:all .9s ease; /* Opera */
    }

    span {
        position: absolute;
        left: 30px;
        bottom: 10px;
        -webkit-transition:all .9s ease; /* Safari y Chrome */
        -moz-transition:all .9s ease; /* Firefox */
        -o-transition:all .9s ease; /* IE 9 */
        -ms-transition:all .9s ease; /* Opera */

        h1 {
            width: 50px;
            line-height: 35px;
            letter-spacing: 2px;
            font-size: 2.8rem;
            color: white;
            font-weight: 700;
        }

        p {
            color: white;
            font-size: 1.4rem;
        }
    }

    div {
        position: absolute;
        bottom: 15px;
        margin-left: auto;
        width: 100%;

        p {
            color: white;
            font-weight: 400;
            letter-spacing: 2px;
            font-size: 0;
            text-align: center;
            text-transform: uppercase;

            -webkit-transition:all .4s ease; /* Safari y Chrome */
            -moz-transition:all .4s ease; /* Firefox */
            -o-transition:all .4s ease; /* IE 9 */
            -ms-transition:all .4s ease; /* Opera */
        }
    }

    

    &:hover {
        img {
            -webkit-transform:scale(1.1);
            -moz-transform:scale(1.1);
            -ms-transform:scale(1.1);
            -o-transform:scale(1.1);
            transform:scale(1.1);
        }

        span {
            -webkit-transform:translateY(-15px);
            -moz-transform:translateY(-15px);
            -ms-transform:translateY(-15px);
            -o-transform:translateY(-15px);
            transform:translateY(-15px); 
        }

        div {
            p {
                font-size: 1.5rem;
            }
        }
    }
`

const Image = ({ urlImg, name, text }) => {


    return (
        <Container to='/women-shoes'>
            <img src={ urlImg } alt={ name } />
            { name && 
                <span>
                    <h1>{ name }</h1>
                    <p>Shop now</p>
                </span>
            }

            { text && 
                <div>
                    <p>{ text }</p>
                </div>
            }
        </Container>
    )
}


export default Image