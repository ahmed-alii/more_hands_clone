export default function Footer({choice}){

    if(choice === 1){
        return(
            <>
                <footer className="bg-default">
                    <div className="container-fluid">
                        <div className="row custom-gutter">
                            <div className="col-md-11 m-auto">
                                <div className="row locationInfoDiv">
                                    <div className="col-md-4 col-lg-3 locationInfo-item akinit" data-index={0}>
                                        <div className="h-100 d-flex flex-column align-items-start">
                                            <h5 className="locationNameVal">Austin</h5>
                                            <div className="mt-auto mb-auto">
                                                <div className="location-pin">
                                                    <img src="../assets/images/icons/address.svg" alt="" />
                                                    <p>Serving <span className="servingList"><b><a href="https://morehands.com/cities/austin-tx-maid-service/" className="text-dkblue">Austin</a></b>, <b><a href="https://morehands.com/cities/cedar-park-tx-maid-service/" className="text-dkblue">Cedar Park</a></b>, <b><a href="https://morehands.com/cities/georgetown-tx-maid-service/" className="text-dkblue">Georgetown</a></b>, <b><a href="https://morehands.com/cities/lakeway-tx-maid-service/" className="text-dkblue">Lakeway</a></b>,  and <b><a href="https://morehands.com/cities/round-rock-tx-maid-service/" className="text-dkblue">Round Rock</a></b></span></p>
                                                </div>
                                                <div className="location-call">
                                                    <img src="../assets/images/icons/call.svg" alt="" />
                                                    <div className="phoneDiv">
                                                        <div className="phone-item akinit" data-index={0}><span className="cityNameDiv"><em className="cityNameVal">Austin</em> </span><a href="tel:512-479-7978" className="numberVal-tel numberVal">512-479-7978</a></div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><div className="col-md-4 col-lg-3 locationInfo-item akinit" data-index={1}>
                                    <div className="h-100 d-flex flex-column align-items-start">
                                        <h5 className="locationNameVal">Dallas</h5>
                                        <div className="mt-auto mb-auto">
                                            <div className="location-pin">
                                                <img src="../assets/images/icons/address.svg" alt="" />
                                                <p>Serving <span className="servingList"><b><a href="https://morehands.com/cities/carrollton-tx-maid-service/" className="text-dkblue">Carrollton</a></b>, <b><a href="https://morehands.com/cities/dallas-tx-maid-service/" className="text-dkblue">Dallas</a></b>, <b><a href="https://morehands.com/cities/plano-tx-maid-service/" className="text-dkblue">Plano</a></b>,  and <b><a href="https://morehands.com/cities/richardson-tx-maid-service/" className="text-dkblue">Richardson</a></b></span></p>
                                            </div>
                                            <div className="location-call">
                                                <img src="../assets/images/icons/call.svg" alt="" />
                                                <div className="phoneDiv">
                                                    <div className="phone-item akinit" data-index={0}><span className="cityNameDiv d-none hidden"><em className="cityNameVal" /> </span><a href="tel:469-713-1207" className="numberVal-tel numberVal">469-713-1207</a></div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div className="col-md-4 col-lg-3 locationInfo-item akinit" data-index={2}>
                                    <div className="h-100 d-flex flex-column align-items-start">
                                        <h5 className="locationNameVal">Katy</h5>
                                        <div className="mt-auto mb-auto">
                                            <div className="location-pin">
                                                <img src="../assets/images/icons/address.svg" alt="" />
                                                <p>Serving <span className="servingList"><b><a href="https://morehands.com/cities/katy-tx-maid-service/" className="text-dkblue">Katy</a></b>, <b><a href="https://morehands.com/cities/richmond-tx-maid-service/" className="text-dkblue">Richmond</a></b>,  and <b>Sugar Land</b></span></p>
                                            </div>
                                            <div className="location-call">
                                                <img src="../assets/images/icons/call.svg" alt="" />
                                                <div className="phoneDiv">
                                                    <div className="phone-item akinit" data-index={0}><span className="cityNameDiv d-none hidden"><em className="cityNameVal" /> </span><a href="tel:832-437-0343" className="numberVal-tel numberVal">832-437-0343</a></div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div className="col-md-4 col-lg-3 locationInfo-item akinit" data-index={3}>
                                    <div className="h-100 d-flex flex-column align-items-start">
                                        <h5 className="locationNameVal">Cypress-Fairbanks</h5>
                                        <div className="mt-auto mb-auto">
                                            <div className="location-pin">
                                                <img src="../assets/images/icons/address.svg" alt="" />
                                                <p>Serving <span className="servingList"><b><a href="https://morehands.com/cities/cypress-tx-maid-service/" className="text-dkblue">Cypress-Fairbanks</a></b>, <b><a href="https://morehands.com/cities/hockley-waller-tx-maid-service/" className="text-dkblue">Hockly/Waller</a></b>,  and <b><a href="https://morehands.com/cities/west-houston-tx-maid-service/" className="text-dkblue">West Houston</a></b></span></p>
                                            </div>
                                            <div className="location-call">
                                                <img src="../assets/images/icons/call.svg" alt="" />
                                                <div className="phoneDiv">
                                                    <div className="phone-item akinit" data-index={0}><span className="cityNameDiv d-none hidden"><em className="cityNameVal" /> </span><a href="tel:281-890-1200" className="numberVal-tel numberVal">281-890-1200</a></div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div className="col-md-4 col-lg-3 locationInfo-item akinit" data-index={4}>
                                    <div className="h-100 d-flex flex-column align-items-start">
                                        <h5 className="locationNameVal">Houston</h5>
                                        <div className="mt-auto mb-auto">
                                            <div className="location-pin">
                                                <img src="../assets/images/icons/address.svg" alt="" />
                                                <p>Serving <span className="servingList"><b><a href="https://morehands.com/cities/houston-tx-maid-service/" className="text-dkblue">Central Houston</a></b></span></p>
                                            </div>
                                            <div className="location-call">
                                                <img src="../assets/images/icons/call.svg" alt="" />
                                                <div className="phoneDiv">
                                                    <div className="phone-item akinit" data-index={0}><span className="cityNameDiv d-none hidden"><em className="cityNameVal" /> </span><a href="tel:713-439-1111" className="numberVal-tel numberVal">713-439-1111</a></div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div className="col-md-4 col-lg-3 locationInfo-item akinit" data-index={5}>
                                    <div className="h-100 d-flex flex-column align-items-start">
                                        <h5 className="locationNameVal">Spring</h5>
                                        <div className="mt-auto mb-auto">
                                            <div className="location-pin">
                                                <img src="../assets/images/icons/address.svg" alt="" />
                                                <p>Serving <span className="servingList"><b>North Houston</b>, <b><a href="https://morehands.com/cities/spring-tx-maid-service/" className="text-dkblue">Spring</a></b>, <b><a href="https://morehands.com/cities/tomball-tx-maid-service/" className="text-dkblue">Tomball</a></b>,  and <b><a href="https://morehands.com/cities/the-woodlands-tx-maid-service/" className="text-dkblue">The Woodlands</a></b></span></p>
                                            </div>
                                            <div className="location-call">
                                                <img src="../assets/images/icons/call.svg" alt="" />
                                                <div className="phoneDiv">
                                                    <div className="phone-item akinit" data-index={0}><span className="cityNameDiv d-none hidden"><em className="cityNameVal" /> </span><a href="tel:281-350-9900" className="numberVal-tel numberVal">281-350-9900</a></div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div className="col-md-4 col-lg-3 locationInfo-item akinit" data-index={6}>
                                    <div className="h-100 d-flex flex-column align-items-start">
                                        <h5 className="locationNameVal">Humble</h5>
                                        <div className="mt-auto mb-auto">
                                            <div className="location-pin">
                                                <img src="../assets/images/icons/address.svg" alt="" />
                                                <p>Serving <span className="servingList"><b><a href="https://morehands.com/cities/atascocita-tx-maid-service/" className="text-dkblue">Atascocita</a></b>, <b><a href="https://morehands.com/cities/humble-tx-maid-service/" className="text-dkblue">Humble</a></b>, <b>Northeast Houston</b>,  and <b><a href="https://morehands.com/cities/kingwood-tx-maid-service/" className="text-dkblue">Kingwood</a></b></span></p>
                                            </div>
                                            <div className="location-call">
                                                <img src="../assets/images/icons/call.svg" alt="" />
                                                <div className="phoneDiv">
                                                    <div className="phone-item akinit" data-index={0}><span className="cityNameDiv d-none hidden"><em className="cityNameVal" /> </span><a href="tel:281-350-9900" className="numberVal-tel numberVal">281-350-9900</a></div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div></div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        )
    }else{
        return(
            <>
                <footer>
                    <div className="container">
                        <div className="row custom-gutter">
                            <div className="col-md-2">
                                <div className="footer-logo">
                                    <img src="/assets/images/morehands-maid-service.png" alt="We're a family-owned, family-operated, employee-powered, cute-car-driving, make-it-shine, maid service" />
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="footer-1">
                                    <h4><a href="/services" className="text-body">Services</a></h4>
                                    <ul>
                                        <li><a href="/services#add-on-services">Cleaning &amp; Sanitizing</a></li>
                                        <li><a href="/services#errands">Errands</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="footer-1">
                                    <h4><a href="/about" className="text-body">About</a></h4>
                                    <ul>
                                        <li><a href="/index#why-morehands">Why MoreHands</a></li>
                                        <li><a href="/about#our-story">Our Story</a></li>
                                        {/* <li><a href="#">Blog</a></li> */}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="footer-1">
                                    <h4><a href="/covid" className="text-body">COVID-19</a></h4>
                                    <ul>
                                        <li><a href="/covid#your-home">Your Home</a></li>
                                        <li><a href="/covid#our-staff">Our Staff</a></li>
                                        <li><a href="/covid#our-office">Our Office</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="footer-1">
                                    <h4><a href="/faq" className="text-body">FAQ</a></h4>
                                    <ul>
                                        <li><a href="/faq#our-maid-service">Our Maid Service</a></li>
                                        <li><a href="/faq#our-errand-service">Our Errand Service</a></li>
                                        <li><a href="/faq#billing-pricing">Billing and pricing</a></li>
                                        <li><a href="/faq#appointments-scheduling">Appointments and scheduling</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="footer-1">
                                    <h4><a href="/contact" className="text-body">Contact</a></h4>
                                    <ul>
                                        <li><a href="/contact">Contact us</a></li>
                                        <li><a href="/contact#locations">Branch information</a></li>
                                        <li><a href="/careers">Careers</a></li>
                                    </ul>
                                </div>
                            </div><div className="col-md-12">
                            <div className="footer-1 copyright">
                                <ul>
                                    <li>© 2000</li>
                                    <li><a href="/privacy-security">Privacy - Terms</a></li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </footer>

            </>
        )
    }
}