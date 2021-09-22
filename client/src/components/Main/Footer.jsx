import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>
            <div class="footMainDiv">
                <div class="row">

                    <div class="col-lg-3" style={{marginTop: 'auto', marginBottom: 'auto'}}>
                        <img src="./images/logo.png" alt="" width="250" height="65" />
                        <ul>
                            <li><i class="fab fa-twitter fa-2x"></i></li>
                            <li><i class="fab fa-instagram fa-2x"></i></li>
                            <li><i class="fab fa-facebook-f fa-2x"></i></li>
                            <li><i class="fab fa-linkedin-in fa-2x"></i></li>
                        </ul>
                    </div>

                    <div class="col-lg-3">
                        <h4>Support</h4>
                        <p class="supp">
                            <i class="fa fa-phone footer-l"> : </i>
                            <a style={{fontWeight: '700'}} href="tel:+919510016999">+91-95100 16999</a>
                        </p>
                        <p class="supp">
                            <i class="fa fa-phone footer-l"> : </i>
                            <a style={{fontWeight: '700'}} href="tel:+919904469794">+91-99044 69794</a>
                        </p>
                        <p class="supp">
                            <i class="fab fa-whatsapp footer-l"> : </i>
                            <a style={{fontWeight: '700'}} href="https://web.whatsapp.com/send?phone=918000230350&amp;text=I%20am%20interested%20in%20your%20service%20contact%20me" target="_blank" rel="noopener noreferrer">+91 8000 230 350</a>
                        </p>
                    </div>

                    <div class="col-lg-3">
                        <h4 style={{visibility: 'hidden'}}>Support</h4>
                        <p class="supp">
                            <i class="far fa-envelope"> : </i>
                            <a style={{fontWeight: '700'}} href="mailto:info@divstack.com">info@divstack.com</a>
                        </p>
                        <a href="/contact-us"><button href="/contact-us" type="button" class="btn btn-secondary footbtn">Contact Us</button></a>
                    </div>

                    <div class="col-lg-3 footinp">
                        <h4 style={{visibility: 'hidden'}}>No Use</h4>
                        <h6>Stay up to date on latest from divstack</h6>
                        <input type="email" placeholder="Enter your email address" style={{backgroundColor: '#e7e7de', borderBottom: '2px solid teal', padding: '0', margin: '0 important'}} required></input>
                        <button type="button" class="btn btn-secondary footbtn" style={{marginTop: '9px'}}>Signup</button>
                    </div>

                    <div class="col-lg-12" style={{textAlign: 'center', paddingTop: '1%'}}>
                        © 2021 divstack. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;