import React, { useState, useEffect } from 'react'
import { Link } from "gatsby"

const Nav = ({ isMobile, NavResponsive, MenuLink, SubMenuItem }) => {

    return (
        <NavResponsive
            textMobile="ECOMMERCE"
        >
            <MenuLink
                name="Women shoes"
                identifier="WOMEN SHOES"
                subIdentifiers={[
                    "WOMEN SHOES - DESIGNERS",
                    "WOMEN SHOES - DESIGNERS 222"
                ]}
                urlImagen="http://womenstyler.com/wp-content/uploads/2017/11/womens-boat-shoes.jpg"
            >
                {/* FIRST LEVEL */}
                { isMobile && <li><Link to="/"><strong>ALL WOMEN SHOES</strong></Link></li> }
                <li><Link to="/">Sneakers</Link></li>
                <li><Link to="/">Lace up shoes</Link></li>
                <li><Link to="/">Loafers & Ballerina's</Link></li>
                <li><Link to="/">Pumps & High heels</Link></li>
                <li><Link to="/">Slippers & Sandals</Link></li>
                <li><Link to="/">Booties</Link></li>
                <li><Link to="/">Boots</Link></li>
                { !isMobile && <li><Link to="/"><strong>ALL WOMEN SHOES</strong></Link></li> }
                
                {/* SECOND LEVEL */}
                <SubMenuItem
                    back="WOMEN SHOES"
                    textTop="DESIGNERS lalala"
                    identifier="WOMEN SHOES - DESIGNERS"
                    name="Designers lalala"
                >
                    <li><Link to="/">Alexander McQueen</Link></li>
                    <li><Link to="/">Balenciaga</Link></li>
                    <li><Link to="/">Dsquared2</Link></li>
                    <li><Link to="/">Golden Goose</Link></li>
                    <li><Link to="/">Philippe Model</Link></li>
                    <li><Link to="/"><strong>ALL DESIGNERS</strong></Link></li>
                </SubMenuItem>
                <SubMenuItem
                    back="WOMEN SHOES"
                    textTop="DESIGNERS"
                    identifier="WOMEN SHOES - DESIGNERS 222"
                    name="Designers 222"
                >
                    <li><Link to="/">Otro xdd</Link></li>
                    <li><Link to="/">Balenciaga</Link></li>
                    <li><Link to="/">Dsquared2</Link></li>
                    <li><Link to="/">Golden Goose</Link></li>
                    <li><Link to="/">Philippe Model</Link></li>
                    <li><Link to="/"><strong>ALL DESIGNERS</strong></Link></li>
                </SubMenuItem>
            </MenuLink>



            <MenuLink
                name="Men shoes"
                identifier="MEN SHOES"
                subIdentifiers={[
                    "MEN SHOES - DESIGNERS"
                ]}
                urlImagen='https://stuffilikenthat.files.wordpress.com/2011/02/2435334263_8bb91cc6e1_z.jpg'
            >
                {/* FIRST LEVEL */}
                { isMobile && <li><Link to="/"><strong>ALL MEN SHOES</strong></Link></li> }
                <li><Link to="/">Trainers & Sneakers</Link></li>
                <li><Link to="/">Lace-up shoes</Link></li>
                <li><Link to="/">Loafers & Mocacasins</Link></li>
                <li><Link to="/">Slippers & Sandals</Link></li>
                <li><Link to="/">Booties</Link></li>
                { !isMobile && <li><Link to="/"><strong>ALL MEN SHOES</strong></Link></li> }
                
                {/* SECOND LEVEL */}
                <SubMenuItem
                    back="MEN SHOES"
                    textTop="DESIGNERS"
                    identifier="MEN SHOES - DESIGNERS"
                    name="Designers"
                >
                    <li><Link to="/">Alexander McQueen</Link></li>
                    <li><Link to="/">Balenciaga</Link></li>
                    <li><Link to="/">Dsquared2</Link></li>
                    <li><Link to="/">Golden Goose</Link></li>
                    <li><Link to="/">Philippe Model</Link></li>
                    <li><Link to="/"><strong>ALL DESIGNERS</strong></Link></li>
                </SubMenuItem>
            </MenuLink>



            <MenuLink
                name="OUTLET"
                identifier="OUTLET"
                subIdentifiers={[
                    "WOMEN SHOES - OUTLET",
                    "MEN SHOES - OUTLET",
                    "MEN'S CLOTHING - OUTLET",
                    "BAGS & ACCESORIES - OUTLET",
                ]}
                secondLevelOnly={ true }
            >                
                <li></li>
                
                {/* SECOND LEVEL */}
                <SubMenuItem
                    back="OUTLET"
                    textTop="WOMEN SHOES"
                    identifier="WOMEN SHOES - OUTLET"
                    name="Women shoes"
                >
                    <li><Link to="/">Sneakers</Link></li>
                    <li><Link to="/">Lace up shoes</Link></li>
                    <li><Link to="/">Loafers & Ballerina's</Link></li>
                    <li><Link to="/">Pumps & High Heels</Link></li>
                    <li><Link to="/">Slippers & Sandals</Link></li>
                    <li><Link to="/">Booties</Link></li>
                    <li><Link to="/">Boots</Link></li>
                    <li><Link to="/"><strong>ALL WOMEN SHOES</strong></Link></li>
                </SubMenuItem>
                <SubMenuItem
                    back="OUTLET"
                    textTop="MEN SHOES"
                    identifier="MEN SHOES - OUTLET"
                    name="Men shoes"
                >
                    <li><Link to="/">Trainers & Sneackers</Link></li>
                    <li><Link to="/">Lace-up Shoes</Link></li>
                    <li><Link to="/">Loafers & Mocasins</Link></li>
                    <li><Link to="/">Slippers & Sandals</Link></li>
                    <li><Link to="/">Booties</Link></li>
                    <li><Link to="/"><strong>ALL MEN SHOES</strong></Link></li>
                </SubMenuItem>
                <SubMenuItem
                    back="OUTLET"
                    textTop="MEN'S CLOTHING"
                    identifier="MEN'S CLOTHING - OUTLET"
                    name="Men's clothing"
                >
                    <li><Link to="/">Jeans</Link></li>
                    <li><Link to="/">T-shirts & Polo's</Link></li>
                    <li><Link to="/">Sweaters & Hoodies</Link></li>
                    <li><Link to="/">Jackets</Link></li>
                    <li><Link to="/">Shirts</Link></li>
                    <li><Link to="/">Blazers & Pants</Link></li>
                    <li><Link to="/">Beachwear</Link></li>
                    <li><Link to="/"><strong>ALL MEN'S CLOTHING</strong></Link></li>
                </SubMenuItem>
                <SubMenuItem
                    back="OUTLET"
                    textTop="BAGS & ACCESORIES"
                    identifier="BAGS & ACCESORIES - OUTLET"
                    name="Bags & accesories"
                >
                    <li><Link to="/">Women's Bags</Link></li>
                    <li><Link to="/">Caps & Hats</Link></li>
                    <li><Link to="/">Men's Bags</Link></li>
                    <li><Link to="/">Small Leather Goods</Link></li>
                    <li><Link to="/"><strong>ALL BAGS & ACCESORIES</strong></Link></li>
                </SubMenuItem>
            </MenuLink>

        </NavResponsive>
    )

    
}



export default Nav;