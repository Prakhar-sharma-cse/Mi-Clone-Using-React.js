import React from 'react'
import { repeatIcon, shieldIcon, mapIcon, facebookIcon, youtubeIcon, instagramIcon, twitterIcon } from '../icons/icons.js'
import '../styles/footerContainer.css'
import data from '../data/data.json'

const Footer = ({ footer }) => {
    return (
        <>
            <div className="footer1">
                <div>
                    {repeatIcon}
                    <b>Hassle-free replacement</b>
                    <p>10-day easy replacement policy on mi.com</p>
                </div>

                <div>
                    {shieldIcon}
                    <b>100% secure payments</b>
                    <p>We support Cards, Wallets, EMI and COD</p>
                </div>

                <div>
                    {mapIcon}
                    <b>Vast service network</b>
                    <p>1000 Mi service-centers across 600 cities</p>
                </div>


            </div>

            <div className="footer2">

                <div>
                    <p>LET'S STAY IN TOUCH</p>
                    <span>Get updates on sales specials and more</span>
                </div>

                <div>
                    <div>
                        <input type="email" name="email" placeholder="Enter Email Address" />
                        <button className="arrow">›</button>
                    </div>

                </div>

                <div>
                    <p>FOLLOW MI</p>
                    <span>We want to hear from you!</span>
                </div>

                <div className="footericon">
                    {facebookIcon}{youtubeIcon}{instagramIcon}{twitterIcon}
                </div>

            </div>

            <div className="footer-bottom">
                <div>
                    <p>SUPPORT</p>
                    {
                        data.footer.support.map((item, index) => (
                            <a key={index} href={item.url}>{item.name}</a>

                        ))
                    }
                </div>

                <div>
                    <p>SHOP AND LEARN</p>
                    {
                        data.footer.shopAndLearn.map((item, index) => (
                            <a key={index} href={item.url}>{item.name}</a>

                        ))
                    }
                </div>

                <div>
                    <p>RETAIL STORE</p>
                    {
                        data.footer.retailStore.map((item, index) => (
                            <a key={index} href={item.url}>{item.name}</a>

                        ))
                    }
                </div>

                <div>
                    <p>ABOUT US</p>
                    {
                        data.footer.aboutUS.map((item, index) => (
                            <a key={index} href={item.url}>{item.name}</a>

                        ))
                    }
                </div>

                <div>
                    <p>CONTACT US</p>
                    {
                        data.footer.contactUs.map((item, index) => (
                            <a key={index} href={item.url}>{item.name}</a>

                        ))
                    }


                </div>
                <div>
                    <div>Chat With our Virtual AI Bot (24/7 Live Agent Support)</div>
                    <button>CHAT NOW</button>
                </div>


            </div>

            <div className="footer-border">
                <div>Copyright @2010 - 2022 Xiaomi. All Rights Reserved.</div>
            </div>

        </>
    )
}

export default Footer


