import React from "react"
import { Link } from "gatsby"
import { css } from '@emotion/core'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from '../components/image-index'
import Brand from '../components/brand-index'

const IndexPage = () => (
  <Layout> 
    <SEO title="Home" />

    <div className="container">
      <div css={css`
        margin-top: 20px;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: 15vw;
        gap: 20px;

        div:nth-of-type(1) {
          grid-row: 1 / 3;
        }

        div:nth-of-type(2) {
          grid-row: 1 / 3;
        }

        div:nth-of-type(3) {
          grid-row: 1 / 3; 
          grid-column: 3 / 5;
        }

        @media (max-width: 800px) {
          grid-auto-rows: 35vw;

          div:nth-of-type(1) {
            grid-row: 1 / 3;
            grid-column: 1 / 3;
          }

          div:nth-of-type(2) {
            grid-row: 1 / 3;
            grid-column: 3 / 5;
          }

          div:nth-of-type(3) {
            grid-row: 3 / 5; 
            grid-column: 1 / 5;
          }
        }
      `}>
        <div>
          <Image 
            urlImg='https://i.pinimg.com/236x/37/fc/17/37fc1719bb940e34769726723662b1b5--suede-heels-suede-sandals.jpg' 
            name='Women Shoes'
          ></Image>
        </div>
        <div>
          <Image 
            urlImg='https://stuffilikenthat.files.wordpress.com/2011/02/2435334263_8bb91cc6e1_z.jpg' 
            name='Men Shoes'
          ></Image>
        </div>
        <div>
          <Image 
            urlImg='https://thumbnails.yayimages.com/b/379/b37980e.jpg' 
            name="Men's clothing"
          ></Image>
        </div>
      </div>

      <div css={css`
        margin-top: 20px;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: 45px;
        gap: 20px;

        div {
          grid-row: 1 / 3;
        }

        @media(max-width: 800px) {
          grid-auto-rows: 30px;

          div:nth-of-type(1) {
            grid-row: 1 / 3;
            grid-column: 1 / 3;
          }
          div:nth-of-type(2) {
            grid-row: 1 / 3;
            grid-column: 3 / 5;
          }
          div:nth-of-type(3) {
            grid-row: 3 / 5;
            grid-column: 1 / 3;
          }
          div:nth-of-type(4) {
            grid-row: 3 / 5;
            grid-column: 3 / 5;
          }
        }
      `}>
        <div>
          <Brand
            urlImg='https://ipronline.b-cdn.net/wp-content/uploads/2015/04/zara.jpg'
          ></Brand>
        </div>
        <div>
          <Brand
            urlImg='https://ipronline.b-cdn.net/wp-content/uploads/2015/04/zara.jpg'
          ></Brand>
        </div>
        <div>
          <Brand
            urlImg='https://ipronline.b-cdn.net/wp-content/uploads/2015/04/zara.jpg'
          ></Brand>
        </div>
        <div>
          <Brand
            urlImg='https://ipronline.b-cdn.net/wp-content/uploads/2015/04/zara.jpg'
          ></Brand>
        </div>
      </div>

      <div css={css`
        margin-top: 20px;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: 15vw;
        gap: 20px;

        div:nth-of-type(1) {
          grid-row: 1 / 3; 
          grid-column: 1 / 3;
        }
        div:nth-of-type(2) {
          grid-row: 1 / 2;
        }
        div:nth-of-type(3) {
          grid-row: 2 / 3;
        }
        div:nth-of-type(4) {
          grid-row: 1 / 3;
        }

        @media (max-width: 800px) {
          grid-auto-rows: 35vw;

          div:nth-of-type(1) {
            grid-row: 1 / 3; 
            grid-column: 1 / 5;
          }
          div:nth-of-type(2) {
            grid-row: 3 / 4;
            grid-column: 1 / 3;
          }
          div:nth-of-type(3) {
            grid-row: 4 / 5;
            grid-column: 1 / 3;
          }
          div:nth-of-type(4) {
            grid-row: 3 / 5;
            grid-column: 3 / 5;
          }
        }
      `}>
        <div>
          <Image 
            urlImg='https://image.freepik.com/free-photo/men-fashion-office-shoes-yellow-background_107612-347.jpg' 
            name="Alexander McQueen"
          ></Image>
        </div>
        <div>
          <Image 
            urlImg='https://www.affordable.pk/uploads/products/14755987490_53ffccef9d24c070106f1bd0c779880d_(1).jpg' 
            text="Alexander McQueen"
          ></Image>
        </div>
        <div>
          <Image 
            urlImg='https://image.freepik.com/free-photo/men-s-feet-sport-shoes-white-socks_78967-531.jpg' 
            text="Off white"
          ></Image>
        </div>
        <div>
          <Image 
            urlImg='https://i.pinimg.com/564x/14/2b/06/142b06ace026df28ff8ec31741c05545.jpg' 
            text="Alexander McQueen"
          ></Image>
        </div>
      </div>

      <div css={css`
        margin-top: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        /* grid-auto-rows: 480px; */
        gap: 20px;

        @media(max-width: 980px) {
          grid-template-columns: 1fr;
        }
      `}>
        <div css={css`
          background-color: #0f4c81; 
          color: white;
          padding: 80px 60px;

          h1 {
            font-size: 3.5rem;
            margin-bottom: 25px;
          }

          p {
            font-size: 1.5rem;
            letter-spacing: 1px;
            
          }
        `}>
          <h1>Shop at Ecommerce</h1>

          <p>
            Laborum ex elit tempor exercitation commodo cupidatat est culpa duis. Consequat ullamco qui esse reprehenderit amet nisi excepteur esse dolor sint Lorem. Sint do aliqua velit fugiat occaecat officia est in. Irure adipisicing duis deserunt excepteur non do do. Quis ex eiusmod cupidatat excepteur Lorem exercitation culpa irure velit ad Lorem exercitation.
            <br />
            Sit enim adipisicing reprehenderit dolor incididunt eiusmod. Fugiat ipsum eiusmod veniam voluptate laboris
          </p>
        </div>
        <div css={css`
          overflow: hidden;

          img {
            min-height: 100%;
            min-width: 100%;
          }
        `}>
          <img src='https://sc01.alicdn.com/kf/H5dd78401b4194dde8bc6261b42cda9d4O/231268465/H5dd78401b4194dde8bc6261b42cda9d4O.jpg_.webp' />
        </div>
      </div>
    </div>



    {/* BARRA INFORMACIÓN */}
    <div css={css`
      background-color: #0f4c81;
      display: block;
      margin-top: 20px;
    `}>
      <div className="container" css={css`
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 40px;
        color: white;
        font-size: 1.3rem;
      `}>
        <p>Something here</p>
        <p>Something here</p>
        <p>Something here</p>
      </div>
    </div>



    {/* BARRA PAGOS */}
    <div css={css`
      background-color: white;
    `}>
      <div className="container" css={css`
        display: flex;
        justify-content: center;
        height: 60px;
        align-items: center;

        p {
          margin: 0 15px; 
        }
      `}>
        <p>Paypal</p>
        <p>Credit card</p>
        <p>Other Payments methods</p>
      </div>
    </div>


    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
