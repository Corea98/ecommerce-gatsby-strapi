import React from 'react'
import { css } from '@emotion/core'

const Footer = () => {
    return (
        <footer>
          <div css={css`
            background-color: #ebebeb;
            height: 400px;
          `}>
              <div className="container">

              </div>
          </div>


            <div>
                <div className="container" css={css`
                    line-height: 5rem;
                    font-size: 1.3rem;
                `}>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;