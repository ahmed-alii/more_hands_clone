import * as animationData from '../assets/animation/maid-animation.json'
import Lottie from 'react-lottie';

export default function Home() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        background: "transparent",
    };

    return (
        <div id={"landingPageBody"}>

            {/* CONTENT START: choose one of the three sections below ========================================================================================= */}
            {/* HERO ------------------------------------------------------------------------*/}
            <div className="banner-main-area">
                <div className="container">
                    <div className="row custom-gutter">
                        <div className="col-md-6">
                            <div className="banner-left">
                                <h2>The Austin maid service that runs your errands too</h2>
                                <p>Our professional cleaning service will make your house shine. You just come
                                    home, <b>smile</b>, and <b>relax</b>.</p>
                                <a href="/get-a-price" className="btn btn-primary px-2 px-md-3 mr-2 mr-md-4">Get a
                                    price</a>
                                <a href="#how-it-works" className="page-scroll btn btn-outline-primary px-2 px-md-3">See
                                    how
                                    it works</a>
                            </div>
                        </div>
                        <div className="col-md-6 p-sm-0">
                            <div className="banner-right">
                                <div className="banner-right1">
                                    <img src="../assets/images/banners/car-illustration.png"/>
                                </div>
                                <div className="banner-right2">
                                    <Lottie
                                        options={defaultOptions}
                                        height={"100%"}
                                        width={"95%"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* HOW IT WORKS ------------------------------------------------------------------------*/}
            <div className="work-area" id="how-it-works">
                <div className="container">
                    <div className="row custom-gutter">
                        <div className="col-md-12">
                            <div className="work-title">
                                <h2>How it works</h2>
                                <p>We'll clean your home weekly, every two weeks, or every three weeks. <br/>All our
                                    plans
                                    include low-cost or FREE errand running services.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-11 m-auto ml-lg-auto">
                            <div className="work-card1">
                                <div className="work-card-icon">
                                    <img src="../assets/images/icons/Room.svg"/>
                                </div>
                                <div className="work-card-title">
                                    <h3>Get a price.</h3>
                                    <p>Tell us about you, your home, and your cleaning needs. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-11 m-auto">
                            <div className="work-card1 center-card">
                                <div className="work-card-icon">
                                    <img src="../assets/images/icons/Calendar.svg"/>
                                </div>
                                <div className="work-card-title">
                                    <h3>Book it.</h3>
                                    <p>We'll make your home shine, and run any errands you'd like.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-11 m-auto mr-lg-auto">
                            <div className="work-card1">
                                <div className="work-card-icon">
                                    <img src="../assets/images/icons/house-icon.svg"/>
                                </div>
                                <div className="work-card-title">
                                    <h3>Breathe, smile, relax.</h3>
                                    <p>The house is clean, the errands are done. Time to come home. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="work-btn">
                                <a href="/services">Learn more about our services</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* TESTIMONIALS ------------------------------------------------------------------------*/}
            <div className="testimonial-area">
                <div className="container">
                    <div className="row custom-gutter">
                        <div className="col-md-12">
                            <div className="work-title">
                                <h2>What our customers say about MoreHands</h2>
                                <p>For 20 years we've helped busy Texans make<br/> home a clean, relaxing refuge</p>
                            </div>
                        </div>
                        <div className="col-11 m-auto">
                            <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner landing-testimonialsDiv">
                                    {/* testimonal block ------------------------------------------------------*/}
                                    <div className="carousel-item testimonials-item" style={{height: '488.398px'}}>
                                        <div className="testimonial-1">
                                            <div className="testimonial-text">
                                                <p className="quoteVal">Morehands Maids Service goes above and beyond in
                                                    every way to make sure that you’re completely satisfied, from
                                                    scheduling easily on their app, to rescheduling if needed, or to
                                                    making sure you have the same team clean for you every time.</p>
                                            </div>
                                            <div className="testimonial-list">
                                                <ul className="carouselDots"/>
                                            </div>
                                        </div>
                                        <div className="testimonial-card">
                                            <div className="testimonial-name"><h4 className="authorVal">Kasey W.</h4>
                                            </div>
                                            <div className="testimonial-star">
                                                <ul>
                                                    <li><img src="/assets/images/icons/star1.svg" alt=""/></li>
                                                    <li><img src="/assets/images/icons/star1.svg" alt=""/></li>
                                                    <li><img src="/assets/images/icons/star1.svg" alt=""/></li>
                                                    <li><img src="/assets/images/icons/star1.svg" alt=""/></li>
                                                    <li><img src="/assets/images/icons/star1.svg" alt=""/></li>
                                                </ul>
                                            </div>
                                            <div className="testimonial-location row" style={{fontSize: '14px'}}>
                                                <div className="col-auto text-center px-2">
                                                    <img src="/assets/images/icons/pin.svg" alt=""/>
                                                    <span className="ml-1">Austin, TX</span>
                                                </div>
                                                <div className="col-auto text-center px-2">
                                                    <img src="/assets/images/icons/calendar-date.svg" alt=""/>
                                                    <span className="ml-1">04/12/21</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* testimonal block ------------------------------------------------------*/}
                                    {/* testimonal block ------------------------------------------------------*/}
                                    <div className="carousel-item testimonials-item active"
                                         style={{height: '488.398px'}}>
                                        <div className="testimonial-1">
                                            <div className="testimonial-text">
                                                <p className="quoteVal">The ease and satisfaction of this experience far
                                                    exceeded my expectations. When I returned from work, my house never
                                                    looked or smelled cleaner. I'm never cleaning the house again. Too
                                                    affordable not to continue! So much time has been given back to me
                                                    as a result of using MoreHands Maid Service and not having to clean
                                                    the house. I can now enjoy my weekends!</p>
                                            </div>
                                            <div className="testimonial-list">
                                                <ul className="carouselDots"/>
                                            </div>
                                        </div>
                                        <div className="testimonial-card">
                                            <div className="testimonial-name"><h4 className="authorVal">Ryan W.</h4>
                                            </div>
                                            <div className="testimonial-star">
                                                <ul>
                                                    <li><img src="/assets/images/icons/star1.svg" alt=""/></li>
                                                    <li><img src="/assets/images/icons/star1.svg" alt=""/></li>
                                                    <li><img src="/assets/images/icons/star1.svg" alt=""/></li>
                                                    <li><img src="/assets/images/icons/star1.svg" alt=""/></li>
                                                    <li><img src="/assets/images/icons/star1.svg" alt=""/></li>
                                                </ul>
                                            </div>
                                            <div className="testimonial-location row" style={{fontSize: '14px'}}>
                                                <div className="col-auto text-center px-2">
                                                    <img src="/assets/images/icons/pin.svg" alt=""/>
                                                    <span className="ml-1">Austin, TX</span>
                                                </div>
                                                <div className="col-auto text-center px-2">
                                                    <img src="/assets/images/icons/calendar-date.svg" alt=""/>
                                                    <span className="ml-1">04/05/2021</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* testimonal block ------------------------------------------------------*/}
                                    {/* testimonal block ------------------------------------------------------*/}
                                    <div className="carousel-item testimonials-item" style={{height: '488.398px'}}>
                                        <div className="testimonial-1">
                                            <div className="testimonial-text">
                                                <p className="quoteVal">Cristina and Monica did a great job in our
                                                    apartments. I have tried other providers in Austin, and this one is
                                                    the absolute best in my experience. They are extremely professional
                                                    and trust wordy. I feel very relieved that I finally found someone I
                                                    can trust cleaning my home in Austin.</p>
                                            </div>
                                            <div className="testimonial-list">
                                                <ul className="carouselDots"/>
                                            </div>
                                        </div>
                                        <div className="testimonial-card">
                                            <div className="testimonial-name"><h4 className="authorVal">Raquel C.</h4>
                                            </div>
                                            <div className="testimonial-star">
                                                <ul>
                                                    <li><img src="/assets/images/icons/star1.svg" alt=""/></li>
                                                    <li><img src="/assets/images/icons/star1.svg" alt=""/></li>
                                                    <li><img src="/assets/images/icons/star1.svg" alt=""/></li>
                                                    <li><img src="/assets/images/icons/star1.svg" alt=""/></li>
                                                    <li><img src="/assets/images/icons/star1.svg" alt=""/></li>
                                                </ul>
                                            </div>
                                            <div className="testimonial-location row" style={{fontSize: '14px'}}>
                                                <div className="col-auto text-center px-2">
                                                    <img src="/assets/images/icons/pin.svg" alt=""/>
                                                    <span className="ml-1">Austin, TX</span>
                                                </div>
                                                <div className="col-auto text-center px-2">
                                                    <img src="/assets/images/icons/calendar-date.svg" alt=""/>
                                                    <span className="ml-1">05/18/2021</span>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                {/* testimonal block ------------------------------------------------------*/}
                            </div>
                            <div className="testimonial-navs d-none">
                                <div className="testimonial-left">
                                    <a href="#testimonialCarousel" role="button" data-bs-slide="prev"
                                       className="page-scroll"><i className="fa fa-angle-left" aria-hidden="true"/></a>
                                </div>
                                <div className="testimonial-right">
                                    <a href="#testimonialCarousel" role="button" data-bs-slide="next"
                                       className="page-scroll"><i className="fa fa-angle-right" aria-hidden="true"/></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    {/* CTA ------------------------------------------------------------------------*/
    }
    <div className="care-area">
        <div className="container">
            <div className="row custom-gutter">
                <div className="col">
                    <div className="landing-cta">
                        <div className="landing-left text-white">
                            <h5>Schedule a house cleaning visit today!</h5>
                            <p>Book on our website or call <a href="tel://_512_4797978" className="text-white">(512)
                                479-7978</a></p>
                        </div>
                        <div className="care-right cleaner-price-btn">
                            <a href="/get-a-price">Get a price</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* WHY MOREHANDS ------------------------------------------------------------------------*/
    }
    <div className="why-area" id="why-morehands">
        <div className="container">
            <div className="row custom-gutter">
                <div className="col-md-12">
                    <div className="why-top-area">
                        <div className="work-title">
                            <h2>Why MoreHands Austin</h2>
                            <p>The only maid service that cleans your home<br/> and runs your errands for you
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-9 col-md-11 m-auto">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="why1">
                                            <div className="why-icon">
                                                <img src="../assets/images/icons/no-cancelations-badge.svg"
                                                />
                                            </div>
                                            <div className="why-text">
                                                <h3>We never cancel. Ever.</h3>
                                                <p>Cleaning is a commitment. If we ever were to cancel, we'd pay
                                                    you
                                                    $100. Guaranteed.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="why1">
                                            <div className="why-icon">
                                                <img src="../assets/images/icons/tasks-list.svg"/>
                                            </div>
                                            <div className="why-text">
                                                <h3>Your happiness, guaranteed</h3>
                                                <p>We ask for feedback after each visit. If you're not 100%
                                                    satisfied with our services, we will make it right.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="why1">
                                            <div className="why-icon">
                                                <img src="../assets/images/icons/maids-team.svg"/>
                                            </div>
                                            <div className="why-text">
                                                <h3>Know who's in your home</h3>
                                                <p>Want the same cleaning team every time? We can make that
                                                    happen,
                                                    just let us know when you sign up for service.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="why1">
                                            <div className="why-icon">
                                                <img src="../assets/images/icons/Quality.svg"/>
                                            </div>
                                            <div className="why-text">
                                                <h3>Quality control</h3>
                                                <p>Our quality control inspectors follow behind our teams to
                                                    make
                                                    sure we deliver the sparkly results we promise. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* ABOUT US ------------------------------------------------------------------------*/
    }
    <div className="maid-service-area" id="maid-service-section">
        <div className="container">
            <div className="row custom-gutter">
                <div className="col-md-11 m-auto">
                    <div className="maid-service1">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="maid-service-left">
                                    <h2>Let our family help yours</h2>
                                    <div className="maid-service-right mob-visible"><img
                                        src="../cities/family.png"
                                        className="img-fluid ownerImage"
                                        alt="MoreHands Pedro, Joaquin, and Greg Norrell Managers MoreHands Best Maid Service in Austin"/>
                                    </div>
                                    <div className="pt-3">
                                        <p>MoreHands Austin started with Greg Norrell in 2000. We've grown to
                                            offer
                                            professional house cleaning services to even receive the <strong>Austin
                                                Chronicle Best of Austin award&nbsp;for 2019 and 2021.</strong>
                                        </p>
                                        <p>MoreHands is a family business. Our team is made of siblings,
                                            in-laws,
                                            cousins, friends, and long-time staff.</p>
                                        <p>Together <strong>we take care of people, all over Austin.</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mob-hidden">
                                <div className="maid-service-right"><img
                                    src="../cities/family.png"
                                    className="img-fluid ownerImage"
                                    alt="MoreHands Pedro, Joaquin, and Greg Norrell Managers MoreHands Best Maid Service in Austin"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* LOCATION ------------------------------------------------------------------------*/
    }
    <div className="location-area" id="locations">
        <div className="container">
            <div className="row custom-gutter">
                <div className="col-md-11 m-auto">
                    <div className="landing-locationInfoDiv row">
                        <div className="col-lg-6 locationInfo-item">
                            <div className="location-1 h-100 d-flex flex-column align-items-start">
                                <div className="locationNameHolder">
                                    <h2 className="locationNameVal">Austin</h2>
                                </div>
                                <div className="mt-auto mb-auto">
                                    <div className="location-pin">
                                        <img src="../assets/images/icons/pin.svg"/>
                                        <p><span className="addressVal">8000 Anderson Square Suite #107 <br/>Austin, TX 78757<br/></span>
                                        </p>
                                    </div>
                                    <div className="location-pin">
                                        <img src="../assets/images/icons/address.svg"/>
                                        <p><span className="servingList">You'll see our cars with the big hand on top cleaning homes and apartments in Central Austin and surrounding areas.</span>
                                        </p>
                                    </div>
                                    <div className="location-call">
                                        <img src="../assets/images/icons/call.svg"/>
                                        <div className="phoneDiv">
                                            <div className="phone-item">
                                                    <span className="cityNameDiv d-none"><em
                                                        className="cityNameVal">Austin</em></span>
                                                <a href="tel://_512_4797978"
                                                   className="numberVal-tel numberVal">(512)
                                                    479-7978</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                  <span className="blue-btn mr-3">
                    <a href="/contact#austin" className="contactLink">Email this location</a>
                  </span>
                                    <span className="white-btn">										<a
                                        href="https://www.google.com/maps/dir/morehands+austin"
                                        className="directionsLink" target="_blank">Get Directions</a>									</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 h-100" style={{borderRadius: "16px"}}>
                            <a href="https://www.google.com/maps/dir/?api=1&destination=,"
                               className="directionsLink" target="_blank"> <img
                                src="../cities/MoreHands-Austin-Maid-Service-Map.png"
                                className="l-block mapImage" alt="MoreHands Austin Maid Service Map"/> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* CTA ------------------------------------------------------------------------*/
    }
    <div className="care-area">
        <div className="container">
            <div className="row custom-gutter">
                <div className="col">
                    <div className="landing-cta">
                        <div className="landing-left text-white">
                            <h5>How can we take care of you?</h5>
                            <p>Tell us about your home, and get a price with no on-site consultation. <strong>Right
                                now.</strong></p>
                        </div>
                        <div className="care-right cleaner-price-btn">
                            <a href="/get-a-price">Get a price</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* MOBILE ------------------------------------------------------------------------*/
    }
    <div className="mobile-area">
        <div className="container">
            <div className="row custom-gutter">
                <div className="col-md-12">
                    <div className="work-title">
                        <h2>Take care of your house cleaning services on your phone</h2>
                        <p>Easily manage your MoreHands services in 3 simple steps:</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12 col-11 m-auto ml-lg-auto">
                    <div className="work-card1">
                        <div className="work-card-icon">
                            <img src="../assets/images/icons/maids-team.svg"/>
                        </div>
                        <div className="work-card-title">
                            <p>Sign up for recurring maid service, weekly, every two weeks, or every three.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12 col-11 m-auto">
                    <div className="work-card1 center-card">
                        <div className="work-card-icon">
                            <img src="../assets/images/icons/mobile-icon.svg"/>
                        </div>
                        <div className="work-card-title">
                            <p>Download the app to edit your cleaning schedule and add-on services.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12 col-11 m-auto mr-lg-auto">
                    <div className="work-card1">
                        <div className="work-card-icon">
                            <img src="../assets/images/icons/groceries-medication.svg"/>
                        </div>
                        <div className="work-card-title">
                            <p>Order errands for $10 or less, and cross them off your to-do list! </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="mobile-app-area">
        <div className="container">
            <div className="row custom-gutter">
                <div className="col-md-12 p-sm-0">
                    <div>
                        <div className="why-bottom1">
                            <div className="why-bottom-btns pt-5 text-center">
                                <a href="https://apps.apple.com/us/app/morehands/id1513648303"
                                   className="btn btn-outline-white" target="_blank"><i
                                    className="fab fa-apple fa-lg mr-2"/> Download for iOS</a>
                                <a href="https://play.google.com/store/apps/details?id=com.morehands.customerApp&hl=en_US&gl=US"
                                   className="btn btn-outline-white ml-3" target="_blank"><i
                                    className="fab fa-google-play fa-lg mr-2"/> Download for Android</a>
                            </div>
                            <div className="mobile-shot-area">
                                <img src="../assets/images/mobile-app.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* FAQ ------------------------------------------------------------------------*/
    }
    <div className="maid-service-area" id="maid-service-section">
        <div className="container">
            <div className="row custom-gutter">
                <div className="col-md-9 m-auto">
                    <div className="faq-price-area">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="faq-price">
                                    <h3>About our Austin Maid Service</h3>
                                </div>
                                <div className="faq-main-area">
                                    <div className="faq-page-1 landing-faqsDiv">
                                        {/* Repeating section: content-faq.json*/}
                                        <div className="faqs-item">
                                            <div className="maid-faq-area">
                                                <ul className="itemsDiv">
                                                    <li className="items-item">
                                                        <div className="faq-head">
                                                            <h4 className="questionVal">How much does maid
                                                                service
                                                                cost in Austin?</h4>
                                                        </div>
                                                        <div className="faq-visible">
                                                            <p>Our cleaning prices start at $104 for
                                                                homes
                                                                and $94 for apartments.</p>
                                                        </div>
                                                    </li>
                                                    <li className="items-item">
                                                        <div className="faq-head">
                                                            <h4 className="questionVal">What zip codes does
                                                                MoreHands Austin serve?</h4>
                                                        </div>
                                                        <div className="faq-visible">
                                                            <p className="zipcodesVal">78613, 78626, 78627,
                                                                78628,
                                                                78633, 78634, 78641, 78652, 78660, 78664, 78665,
                                                                78681, 78701, 78702, 78703, 78704, 78705, 78717,
                                                                78721, 78722, 78723, 78726, 78727, 78728, 78729,
                                                                78730, 78731, 78732,
                                                                78733, 78734, 78735, 78736, 78737, 78738, 78739,
                                                                78741, 78744, 78745, 78746, 78747, 78748, 78749,
                                                                78750, 78751, 78752, 78753, 78754, 78756, 78757,
                                                                78758, 78759</p>
                                                        </div>
                                                    </li>
                                                    <li className="items-item">
                                                        <div className="faq-head">
                                                            <h4 className="questionVal">What neighborhoods does
                                                                MoreHands Austin serve?</h4>
                                                        </div>
                                                        <div className="faq-visible">
                                                            <p className="servingList">Allandale, Arboretum,
                                                                Barton
                                                                Hills, Brentwood, Bryker Woods, Central Austin,
                                                                Circle C Ranch, Clarksville, Crestview, Downtown
                                                                Austin, East Austin, East Riverside, Far West,
                                                                Great
                                                                Hills, Hancock,
                                                                Heritage, Highland, Highland Park West, Hyde
                                                                Park,
                                                                Lake Pointe, North University, Northfield,
                                                                Northwest
                                                                Austin, Old Enfield, Rollingwood, Rosedale,
                                                                Skyview,
                                                                South Austin, South Congress,
                                                                South Lamar, Southwest Austin, Tarrytown, Travis
                                                                Heights, West Austin, West Campus, Westcreek</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* end repeating section*/}
                                    </div>
                                    <div className="text-center mt-6 mb-8">
                                        <p>Have more questions?</p>
                                        <p><a href="https://morehands.com/faq"
                                              className="btn btn-outline-primary">See all FAQs</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* CTA ------------------------------------------------------------------------*/
    }
    <div className="care-area">
        <div className="container">
            <div className="row custom-gutter">
                <div className="col">
                    <div className="landing-cta">
                        <div className="landing-left text-white">
                            <h5>Ready for a stress-free shine?</h5>
                        </div>
                        <div className="care-right cleaner-price-btn">
                            <a href="/get-a-price">Get a price</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
)
}