import React from "react"
import { Link } from "gatsby"
import { css } from '@emotion/core'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

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
      `}>
        <div css={css`background-color: black; grid-row: 1 / 3;`}></div>
        <div css={css`background-color: black; grid-row: 1 / 3;`}></div>
        <div css={css`background-color: black; grid-row: 1 / 3; grid-column: 3 / 5;`}></div>
      </div>

      <div css={css`
        margin-top: 20px;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: 45px;
        gap: 20px;
      `}>
        <div css={css`background-color: black; grid-row: 1 / 3;`}></div>
        <div css={css`background-color: black; grid-row: 1 / 3;`}></div>
        <div css={css`background-color: black; grid-row: 1 / 3;`}></div>
        <div css={css`background-color: black; grid-row: 1 / 3;`}></div>
      </div>

      <div css={css`
        margin-top: 20px;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: 15vw;
        gap: 20px;
      `}>
        <div css={css`background-color: black; grid-row: 1 / 3; grid-column: 1 / 3`}></div>
        <div css={css`background-color: black; grid-row: 1 / 3;`}></div>
        <div css={css`background-color: black; grid-row: 1 / 3;`}></div>
      </div>

      <div css={css`
        margin-top: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: 45vw;
        gap: 20px;
      `}>
        <div css={css`background-color: black;`}></div>
        <div css={css`background-color: black;`}></div>
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
