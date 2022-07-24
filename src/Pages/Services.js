import * as animationData from '../assets/animation/services-animation.json'
import Lottie from 'react-lottie';


export default function Services() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        background: "transparent",
    };

    return (
        <>
            <div>
                {/* CONTENT START  --------------------------------------------------------------------------------------------------------------- */}
                {/* Subpage Hero Banner */}
                <div className="subpage-banner">
                    <div className="container">
                        <div className="row custom-gutter">
                            <div className="col-md-12">
                                <div className="blue-bg">
                                    <div className="row custom-gutter">
                                        <div className="col-md-6 pl-65">
                                            <div className="inner-banner-left pb-lg-4 pt-lg-4 pt-md-3 pt-xl-5">
                                                <h1>Our Services</h1>
                                                <p>Sometimes, there's just too much to do. Our maid service will take
                                                    care of the housework. Sign up for recurring cleanings, and we'll
                                                    run your errands too.</p>
                                                <p><a href="#maid-service-section" className="page-scroll"><b>Let us
                                                    give you a hand <i className="fa fa-angle-down" aria-hidden="true"/></b></a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 pr-55">
                                            <div className="inner-banner-right">
                                                <Lottie
                                                    options={defaultOptions}
                                                    height={"100%"}
                                                    width={"100%"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="maid-service-area" id="maid-service-section">
                    <div className="container">
                        <div className="row custom-gutter">
                            <div className="col-md-11 m-auto">
                                <div className="maid-service1">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="maid-service-left">
                                                <h2>Our maid service</h2>
                                                <h4>Starts at $74</h4>
                                                <div className="maid-service-right mob-visible">
                                                    <img src="../assets/images/maid-service.jpg" alt=""/>
                                                </div>
                                                <p>Sign up for recurring cleanings, weekly, every two weeks, or every
                                                    three weeks. You'll enjoy a home that shines, and our on-demand
                                                    errand running service. </p>
                                                <a href="/get-a-price">Get a price</a>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mob-hidden">
                                            <div className="maid-service-right">
                                                <img src="../assets/images/maid-service.jpg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="maid-faq-area">
                                    <ul>
                                        <li>
                                            <div className="faq-head">
                                                <h4>What's included in a basic cleaning?</h4>
                                            </div>
                                            <div className="faq-visible">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <div className="faq-visible-list">
                                                            <h4>Everywhere</h4>
                                                            <ul>
                                                                <li>Vacuum carpets</li>
                                                                <li>Dust ceiling fans</li>
                                                                <li>Dust furniture</li>
                                                                <li>Dust window sills</li>
                                                                <li>Polish furniture</li>
                                                                <li>Take out trash</li>
                                                                <li>Sanitize light switches</li>
                                                                <li>Sweep and mop floors</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="faq-visible-list">
                                                            <h4>Bathrooms</h4>
                                                            <ul>
                                                                <li>Scrub and disinfect toilets</li>
                                                                <li>Scrub and disinfect tubs</li>
                                                                <li>Scrub and disinfect showers</li>
                                                                <li>Scrub and disinfect sinks</li>
                                                                <li>Scrub and disinfect counters</li>
                                                                <li>Clean mirrors</li>
                                                                <li>Polish chrome</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="faq-visible-list">
                                                            <h4>Kitchen</h4>
                                                            <ul>
                                                                <li>Scrub and sanitize sinks</li>
                                                                <li>Scrub and sanitize counters</li>
                                                                <li>Clean other surfaces</li>
                                                                <li>Clean outside appliances</li>
                                                                <li>Clean inside microwave</li>
                                                                <li>Place dishes in dishwasher</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="faq-visible-list">
                                                            <h4>Bedrooms</h4>
                                                            <ul>
                                                                <li>Make beds</li>
                                                                <li>Change linens</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="faq-head">
                                                <h4>How do pricing and scheduling work?</h4>
                                            </div>
                                            <div className="faq-visible">
                                                <p><b>Your recurring price depends on the size of your home.</b> You can
                                                    decide which add-ons to include on a visit by visit basis, and your
                                                    price changes accordingly. </p>
                                                <p><b>You can schedule your recurring cleanings as weekly, every two
                                                    weeks, or every three weeks.</b> You can select a window of time
                                                    when the housekeepers can arrive (because we clean many houses a
                                                    day, we cannot set specific appointment times).</p>
                                                <p><b>If you need to reschedule, that's no problem!</b> Reschedule for
                                                    free before 3:00 PM the day before your cleaning. After that point,
                                                    there is a last-minute change fee, because it's difficult for us to
                                                    re-balance cleaning schedules.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="faq-head">
                                                <h4>What if I'm not happy with my service?</h4>
                                            </div>
                                            <div className="faq-visible">
                                                <p><b>At MoreHands, we guarantee your happiness.</b> We ask for your
                                                    feedback after every single visit, via email or in our app. If
                                                    you're not 100% satisfied with our services, we'll reach out to you,
                                                    and find the way to make it right.</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="faq-warning">
                                        <img src="../assets/images/icons/warning.svg" alt=""/>
                                        <p><b>Only interested in a one-time, move-out, or move-in cleaning?</b> We can
                                            take care of that, too.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="maid-cleaner-area" id="add-on-services">
                    <div className="container">
                        <div className="row custom-gutter">
                            <div className="col-md-11 m-auto">
                                <div className="maid-service1 maid-service-clean">
                                    <div className="row custom-gutter">
                                        <div className="col-md-6 order-md-1 order-2">
                                            <div className="maid-service-right">
                                                <img src="../assets/images/deeper-clean.jpg" alt=""/>
                                            </div>
                                        </div>
                                        <div className="col-md-6 order-md-2 order-1">
                                            <div className="maid-service-left maid-clean py-6 px-3">
                                                <h2>Add-on services for a deeper clean</h2>
                                                <p>Our services go beyond a basic cleaning. Before each visit, you can
                                                    choose the add-ons that will make your life simpler. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="deep-cleaner-block blue-bg">
                                    <div className="row custom-gutter">
                                        <div className="col-md-11 m-auto">
                                            <div className="cleaner-block-list">
                                                <ul className="servicesDiv">
                                                    <li className="services-item d-flex flex-fill align-items-stretch akinit" data-index={0}>
                                                        <div className="cleaner-block1 w-100">
                                                            <img src="/assets/images/icons/laundry.svg" alt="" className="iconImageVal" data-path="/assets/images/icons/" />
                                                            <p><b className="costLabelVal">$5 / load</b><span className="dependsOnSizeDiv text-dkblue"> *</span></p>
                                                            <h3 className="serviceNameVal"><a href="#addon-laundry" className="fancybox-modal">Fold clothes</a></h3>
                                                        </div>
                                                    </li><li className="services-item d-flex flex-fill align-items-stretch akinit" data-index={1}>
                                                    <div className="cleaner-block1 w-100">
                                                        <img src="/assets/images/icons/sweep.svg" alt="" className="iconImageVal" data-path="/assets/images/icons/" />
                                                        <p><b className="costLabelVal">$7 </b><span className="dependsOnSizeDiv text-dkblue"> *</span></p>
                                                        <h3 className="serviceNameVal">Sweep porches</h3>
                                                    </div>
                                                </li><li className="services-item d-flex flex-fill align-items-stretch akinit" data-index={2}>
                                                    <div className="cleaner-block1 w-100">
                                                        <img src="/assets/images/icons/tree.svg" alt="" className="iconImageVal" data-path="/assets/images/icons/" />
                                                        <p><b className="costLabelVal">$20 </b><span className="dependsOnSizeDiv text-dkblue"> *</span></p>
                                                        <h3 className="serviceNameVal">Green cleaning solutions</h3>
                                                    </div>
                                                </li><li className="services-item d-flex flex-fill align-items-stretch akinit" data-index={3}>
                                                    <div className="cleaner-block1 w-100">
                                                        <img src="/assets/images/icons/cabinets.svg" alt="" className="iconImageVal" data-path="/assets/images/icons/" />
                                                        <p><b className="costLabelVal">$19 </b><span className="dependsOnSizeDiv text-dkblue"> *</span></p>
                                                        <h3 className="serviceNameVal">Clean exterior of kitchen cabinets</h3>
                                                    </div>
                                                </li><li className="services-item d-flex flex-fill align-items-stretch akinit" data-index={4}>
                                                    <div className="cleaner-block1 w-100">
                                                        <img src="/assets/images/icons/oven.svg" alt="" className="iconImageVal" data-path="/assets/images/icons/" />
                                                        <p><b className="costLabelVal">$44 </b><span className="dependsOnSizeDiv text-dkblue"> *</span></p>
                                                        <h3 className="serviceNameVal">Deep clean oven</h3>
                                                    </div>
                                                </li><li className="services-item d-flex flex-fill align-items-stretch akinit" data-index={5}>
                                                    <div className="cleaner-block1 w-100">
                                                        <img src="/assets/images/icons/fridge.svg" alt="" className="iconImageVal" data-path="/assets/images/icons/" />
                                                        <p><b className="costLabelVal">$44 </b><span className="dependsOnSizeDiv text-dkblue"> *</span></p>
                                                        <h3 className="serviceNameVal">Clean out fridge / freezer</h3>
                                                    </div>
                                                </li><li className="services-item d-flex flex-fill align-items-stretch akinit" data-index={6}>
                                                    <div className="cleaner-block1 w-100">
                                                        <img src="/assets/images/icons/baseboards.svg" alt="" className="iconImageVal" data-path="/assets/images/icons/" />
                                                        <p><b className="costLabelVal">$29 +</b><span className="dependsOnSizeDiv text-dkblue"> *</span></p>
                                                        <h3 className="serviceNameVal">Clean baseboards</h3>
                                                    </div>
                                                </li><li className="services-item d-flex flex-fill align-items-stretch akinit" data-index={7}>
                                                    <div className="cleaner-block1 w-100">
                                                        <img src="/assets/images/icons/blinds.svg" alt="" className="iconImageVal" data-path="/assets/images/icons/" />
                                                        <p><b className="costLabelVal">$44 +</b><span className="dependsOnSizeDiv text-dkblue"> *</span></p>
                                                        <h3 className="serviceNameVal">Clean blinds</h3>
                                                    </div>
                                                </li><li className="services-item d-flex flex-fill align-items-stretch akinit" data-index={8}>
                                                    <div className="cleaner-block1 w-100">
                                                        <img src="/assets/images/icons/window.svg" alt="" className="iconImageVal" data-path="/assets/images/icons/" />
                                                        <p><b className="costLabelVal">$44 +</b><span className="dependsOnSizeDiv text-dkblue"> *</span></p>
                                                        <h3 className="serviceNameVal">Clean interior windows</h3>
                                                    </div>
                                                </li><li className="services-item d-flex flex-fill align-items-stretch akinit" data-index={9}>
                                                    <div className="cleaner-block1 w-100">
                                                        <img src="/assets/images/icons/spray.svg" alt="" className="iconImageVal" data-path="/assets/images/icons/" />
                                                        <p><b className="costLabelVal">$59 +</b><span className="dependsOnSizeDiv text-dkblue"> *</span></p>
                                                        <h3 className="serviceNameVal"><a href="#addon-disinfecting" className="fancybox-modal">Disinfecting spray service</a></h3>
                                                    </div>
                                                </li></ul>
                                                <div className="cleaner-note">
                                                    <p>* Price depends on home size </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="cleaner-price">
                                    <div className="cleaner-price-text">
                                        <h5 className="text-white m-md-0">Add on services to your basic cleaning for a
                                            brighter shine</h5>
                                    </div>
                                    <div className="cleaner-price-btn m-4 m-md-0">
                                        <a href="/get-a-price">Get a price</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="errand-service" id="errands">
                    <div className="container">
                        <div className="row custom-gutter">
                            <div className="col-md-11 m-auto">
                                <div className="errand-video-area">
                                    <div className="row custom-gutter">
                                        <div className="col-md-6">
                                            <div className="maid-service-left">
                                                <h2>Our errand service</h2>
                                                <h4>$10 or less</h4>
                                                <div
                                                    className="maid-service-right mob-visible embed-responsive embed-responsive-16by9">
                                                    <iframe src="https://player.vimeo.com/video/494164192" width="100%"
                                                            height="100%" frameBorder={0}
                                                            allow="autoplay; fullscreen; picture-in-picture"
                                                            allowFullScreen/>
                                                    {/*- <a data-fancybox="" href="https://player.vimeo.com/video/494164192">
                                      <img src="../assets/images/errand-image.png" alt="">
                                  </a> -*/}
                                                </div>
                                                <p>Sign up for recurring maid service, download the MoreHands app, and
                                                    we'll be your on-demand, personal errand runners.</p>
                                                <a href="/get-a-price">Get a price</a>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mob-hidden">
                                            <div className="maid-service-right embed-responsive embed-responsive-16by9">
                                                <iframe src="https://player.vimeo.com/video/494164192" width="100%"
                                                        height="100%" frameBorder={0}
                                                        allow="autoplay; fullscreen; picture-in-picture"
                                                        allowFullScreen/>
                                                {/*- <a data-fancybox="" href="https://player.vimeo.com/video/494164192">
                                     <img src="../assets/images/errand-image.png" alt="">
                                 </a> -*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 blue-bg mt-5 errand-price">
                                <div>
                                    <div className="row custom-gutter">
                                        <div className="col-md-11 m-auto">
                                            <div className="errand-price-text px-md-7 text-center m-auto">
                                                <h2>Name your price</h2>
                                                <p>Get items delivered or dropped off today, tomorrow, or in two days.
                                                    Get notifications when your neighbors start an errand, and join
                                                    their run for a community price. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-11 m-auto">
                                <div className="cleaner-block-list">
                                    <ul>
                                        <li>
                                            <div className="cleaner-block1">
                                                <img src="../assets/images/icons/calendar-event-1.svg" alt=""/>
                                                <h3>Today</h3>
                                                <p><b>$10</b></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="cleaner-block1">
                                                <img src="../assets/images/icons/calendar-event-2.svg" alt=""/>
                                                <h3>Tomorrow</h3>
                                                <p><b>$5</b></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="cleaner-block1">
                                                <img src="../assets/images/icons/calendar-event-3.svg" alt=""/>
                                                <h3>In two days</h3>
                                                <p><b>$3</b></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="cleaner-block1">
                                                <img src="../assets/images/icons/community.svg" alt=""/>
                                                <h3>Community run</h3>
                                                <p><b>$3</b></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="anywhere-area">
                    <div className="container">
                        <div className="row custom-gutter">
                            <div className="col-md-11 m-auto">
                                <div className="anywhere-head">
                                    <h3>We go anywhere</h3>
                                    <p>We buy, return, pick up, and drop off stuff for all of our
                                        recurring<br/> cleaning clients. <b>Like this:</b></p>
                                </div>
                                <div className="row custom-gutter">
                                    <div className="col-md-3">
                                        <div className="anywhere-1">
                                            <div className="anywhere-icon">
                                                <img src="../assets/images/icons/groceries-medication.svg" alt=""/>
                                            </div>
                                            <div className="anywhere-text">
                                                <p>Picking up medication or groceries </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="anywhere-1">
                                            <div className="anywhere-icon">
                                                <img src="../assets/images/icons/post.svg" alt=""/>
                                            </div>
                                            <div className="anywhere-text">
                                                <p>Running to the post office </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="anywhere-1">
                                            <div className="anywhere-icon">
                                                <img src="../assets/images/icons/Box.svg" alt=""/>
                                            </div>
                                            <div className="anywhere-text">
                                                <p>Picking up a package </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="anywhere-1">
                                            <div className="anywhere-icon">
                                                <img src="../assets/images/icons/Shopping.svg" alt=""/>
                                            </div>
                                            <div className="anywhere-text">
                                                <p>Returning purchases</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="need-area">
                    <div className="container">
                        <div className="row custom-gutter">
                            <div className="col-md-12 p-sm-0">
                                <div className="anywhere-head">
                                    <h3>Just text us what you need, and we'll get it done</h3>
                                    <p>And if you get something delivered, you can be sure it's<br/> fully disinfected
                                        before it comes into your home.</p>
                                </div>
                                <div className="need-img">
                                    <img src="../assets/images/banners/errands-illustration.png" alt=""/>
                                </div>
                            </div>
                            <div className="col-md-11 m-auto">
                                <div className="white-card">
                                    <div className="white-card-left">
                                        <h3>To get started with errands, order your recurring home cleanings</h3>
                                    </div>
                                    <div className="white-card-right care-right">
                                        <a href="/get-a-price">Get a price</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-none">
                    <div className="mh-modal" id="addon-laundry">
                        <div className="title">Fold clothes</div>
                        <br/>
                        <p><img src="../assets/images/banners/laundry-illustration.png" alt="Fold clothes"
                                style={{maxWidth: '100%'}}/></p>
                        <p><span
                            className="text-primary">There's no need to let those clean clothes pile up on you.</span> Just
                            let us know where you've left them — we'll fold and organize each load so you can easily put
                            them away.</p>
                        <p><span className="text-primary">PS</span> It's easy to include this add-on - even on the day
                            of your cleaning - with the MoreHands app. When you can't do it all — <span
                                className="text-primary">we've got your back!</span></p>
                    </div>
                    <div className="mh-modal" id="addon-disinfecting">
                        <div className="title">Disinfecting spray service</div>
                        <br/>
                        <p><img src="../assets/images/banners/sprayer-illustration.png" alt="Fold clothes"
                                style={{maxWidth: '100%'}}/></p>
                        <p><span className="text-primary">Whether it's cold and flu season or your moving into your new home,</span> you'll
                            relax easily, knowing every surface of your home has been freshly sprayed with 360° of
                            germ-killing coverage.</p>
                        <p><span
                            className="text-primary">Your safety and our team's safety is our highest concern,</span> that's
                            why we use Vital Oxide—a non-toxic EPA registered hospital disinfectant. You can rest
                            assured that viruses and bacteria don't stand a chance, including the coronavirus.</p>
                        <p><span className="text-primary">We're not just disenfecting the tops of surfaces but underneath and all the way around too.</span> Super-charged
                            spray particles seek out oppositely charged surfaces - just like a magnet - giving you 360°
                            of germ-killing coverage.</p>
                        <p><span
                            className="text-primary">Our spray technician will spray each room of your home,</span> from
                            sofas, counters, chairs, toilets, showers, and everything in between, your home will be the
                            relaxing happy refuge you deserve.</p>
                    </div>
                </div>
                {/* CONTENT END --------------------------------------------------------------------------------------------------------------- */}

            </div>

        </>
    )
}