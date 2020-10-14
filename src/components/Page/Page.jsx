/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react'
import Api from '../Api/Api'
import logo from '../../assets/img/logo.svg'
import logoFooter from '../../assets/img/logo-footer.svg'
import cardimg1 from '../../assets/img/icon-brand-recognition.svg'
import cardimg2 from '../../assets/img/icon-detailed-records.svg'
import cardimg3 from '../../assets/img/icon-fully-customizable.svg'
import hero from '../../assets/img/illustration-working.svg'
import './page.scss';


export default function Page() {
    return (
        <Fragment>
            <header className="u-wrapper">
                <a href="./" className="logo"><img src={logo} alt=""/></a>

                <input type="checkbox" name="open" id="open" className="open"/>
                <label className="btnMenu" htmlFor="open"></label>

                <nav>
                    <ul>
                        <div className="header-nav__links">
                            <a href="#">Features</a>
                            <a href="#">Pricing</a>
                            <a href="#">Resources</a>
                        </div>
                        <hr />
                        <div className="login__links">
                            <a href="#">Login</a>
                            <a href="#" className="signup">Sign Up</a>
                        </div>
                    </ul>
                </nav>
            </header>

            <section className="hero__section">
                <div className="hero__img">
                    <img src={hero} alt=""/>
                </div>
                <div className="hero__info u-wrapper">
                    <h1>More than just shorter links</h1>
                    <p>Build your brand's recognition and get detailed insights on how your links are performing</p>
                    <a href="#" className="GetStartedBtn">Get Started</a>
                </div>
            </section>

            <section className="api__section u-wrapper">
                <Api />
            </section>

            <section className="features__section">
                <div className="u-wrapper">
                <h2>Advanced Statistics</h2>
                <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                <div className="cards__container">
                    <div className="card">
                        <div className="card__img">
                            <img src={cardimg1} alt=""/>
                        </div>
                        <h3>Brand Recognition</h3>
                        <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                    </div>
                    <div className="card">
                        <div className="card__img">
                            <img src={cardimg2} alt=""/>
                        </div>
                        <h3>Detailed Records</h3>
                        <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                    </div>
                    <div className="card">
                        <div className="card__img">
                            <img src={cardimg3} alt=""/>
                        </div>
                        <h3>Fully Customizable</h3>
                        <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                    </div>
                </div>
                </div>
            </section>


            <div className="boost">
                <div className="boost__container u-wrapper">
                    <h2>Boost your links today</h2>
                    <a href="#" className="GetStartedBtn">Get Started</a>
                </div>
            </div>

            <footer>
                <div className="footer__container">
                    <a href="./" className="footer__logo"><img src={logoFooter} alt=""/></a>
                    <div className="footer__links">
                        <div className="links__column">
                            <h3>Features</h3>
                            <a href="#">Link Shortening</a>
                            <a href="#">Branded Links</a>
                            <a href="#">Analytics</a>
                        </div>
                        <div className="links__column">
                            <h3>Resources</h3>
                            <a href="#">Blog</a>
                            <a href="#">Developers</a>
                            <a href="#">Support</a>
                        </div>
                        <div className="links__column">
                            <h3>Company</h3>
                            <a href="#">About</a>
                            <a href="#">Our Team</a>
                            <a href="#">Careers</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                <div className="footer__social">
                        <a href="#" className="facebook"></a>
                        <a href="#" className="twitter"></a>
                        <a href="#" className="pinterest"></a>
                        <a href="#" className="instagram"></a>
                </div>
                </div>
            </footer>
        </Fragment>
    )
}
