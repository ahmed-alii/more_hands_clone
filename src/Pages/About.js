import * as animationData from '../assets/animation/about-animation.json'
import Lottie from 'react-lottie';

export default function About() {
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
                <div className="subpage-banner about-banner">
                    <div className="container">
                        <div className="row custom-gutter">
                            <div className="col-md-12">
                                <div className="blue-bg">
                                    <div className="row custom-gutter">
                                        <div className="col-md-6 pl-55">
                                            <div className="inner-banner-left pl-5 pt-7">
                                                <h1>The MoreHands family</h1>
                                                <p>As a family business, we take care of each other, our employees, and
                                                    you. And then everyone gets to go home, happy. </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 pr-55">
                                            <div className="inner-banner-right">
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
                    </div>
                </div>
                <div className="about-who-area" id="who-we-are">
                    <div className="container">
                        <div className="row custom-gutter">
                            <div className="col-lg-10 col-md-11 m-auto">
                                <div className="anywhere-head">
                                    <h3>Who we are</h3>
                                    <p>We're the family owned and operated, cute-car-driving, home cleaning crew.<br/>Our
                                        team is made of siblings, in-laws, cousins, friends, and long-time staff.<br/>Together
                                        we take care of people, all over Texas.<strong> Meet our team.</strong></p>
                                </div>
                                <div className="staffDiv">
                                    <div className="client-area staff-item akinit" data-index={0}>
                                        <div className="client-left">
                                            <h3><span className="yearNumVal">15</span>+ years</h3>
                                            <p>of caring for<br /> MoreHands clients</p>
                                        </div>
                                        <div className="client-right">
                                            <ul className="staffPicsDiv">
                                                <li className="staffPics-item akinit" data-index={0}><img src="/assets/images/staff/15/staff-074.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={1}><img src="/assets/images/staff/15/staff-073.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={2}><img src="/assets/images/staff/15/staff-072.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={3}><img src="/assets/images/staff/15/staff-067.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={4}><img src="/assets/images/staff/15/staff-069.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={5}><img src="/assets/images/staff/15/staff-071.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={6}><img src="/assets/images/staff/15/staff-068.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={7}><img src="/assets/images/staff/15/staff-066.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={8}><img src="/assets/images/staff/15/staff-070.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li></ul>
                                        </div>
                                    </div><div className="client-area staff-item akinit" data-index={1}>
                                    <div className="client-left">
                                        <h3><span className="yearNumVal">8</span>+ years</h3>
                                        <p>of caring for<br /> MoreHands clients</p>
                                    </div>
                                    <div className="client-right">
                                        <ul className="staffPicsDiv">
                                            <li className="staffPics-item akinit" data-index={0}><img src="/assets/images/staff/08/staff-055.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={1}><img src="/assets/images/staff/08/staff-052.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={2}><img src="/assets/images/staff/08/staff-060.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={3}><img src="/assets/images/staff/08/staff-053.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={4}><img src="/assets/images/staff/08/staff-054.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={5}><img src="/assets/images/staff/08/staff-065.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={6}><img src="/assets/images/staff/08/staff-057.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={7}><img src="/assets/images/staff/08/staff-050.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={8}><img src="/assets/images/staff/08/staff-059.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={9}><img src="/assets/images/staff/08/staff-048.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={10}><img src="/assets/images/staff/08/staff-046.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={11}><img src="/assets/images/staff/08/staff-058.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={12}><img src="/assets/images/staff/08/staff-051.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={13}><img src="/assets/images/staff/08/staff-056.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={14}><img src="/assets/images/staff/08/staff-063.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={15}><img src="/assets/images/staff/08/staff-064.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={16}><img src="/assets/images/staff/08/staff-047.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={17}><img src="/assets/images/staff/08/staff-049.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li></ul>
                                    </div>
                                </div><div className="client-area staff-item akinit" data-index={2}>
                                    <div className="client-left">
                                        <h3><span className="yearNumVal">3</span>+ years</h3>
                                        <p>of caring for<br /> MoreHands clients</p>
                                    </div>
                                    <div className="client-right">
                                        <ul className="staffPicsDiv">
                                            <li className="staffPics-item akinit" data-index={0}><img src="/assets/images/staff/03/staff-041.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={1}><img src="/assets/images/staff/03/staff-034.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={2}><img src="/assets/images/staff/03/staff-033.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={3}><img src="/assets/images/staff/03/staff-006.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={4}><img src="/assets/images/staff/03/staff-001.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={5}><img src="/assets/images/staff/03/staff-008.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={6}><img src="/assets/images/staff/03/staff-019.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={7}><img src="/assets/images/staff/03/staff-010.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={8}><img src="/assets/images/staff/03/staff-017.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={9}><img src="/assets/images/staff/03/staff-022.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={10}><img src="/assets/images/staff/03/staff-025.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={11}><img src="/assets/images/staff/03/staff-009.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={12}><img src="/assets/images/staff/03/staff-007.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={13}><img src="/assets/images/staff/03/staff-032.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={14}><img src="/assets/images/staff/03/staff-035.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={15}><img src="/assets/images/staff/03/staff-040.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={16}><img src="/assets/images/staff/03/staff-024.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={17}><img src="/assets/images/staff/03/staff-023.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={18}><img src="/assets/images/staff/03/staff-016.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={19}><img src="/assets/images/staff/03/staff-011.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={20}><img src="/assets/images/staff/03/staff-018.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={21}><img src="/assets/images/staff/03/staff-029.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={22}><img src="/assets/images/staff/03/staff-020.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={23}><img src="/assets/images/staff/03/staff-027.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={24}><img src="/assets/images/staff/03/staff-012.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={25}><img src="/assets/images/staff/03/staff-015.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={26}><img src="/assets/images/staff/03/staff-004.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={27}><img src="/assets/images/staff/03/staff-003.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={28}><img src="/assets/images/staff/03/staff-036.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={29}><img src="/assets/images/staff/03/staff-031.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={30}><img src="/assets/images/staff/03/staff-043.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={31}><img src="/assets/images/staff/03/staff-038.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={32}><img src="/assets/images/staff/03/staff-044.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={33}><img src="/assets/images/staff/03/staff-014.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={34}><img src="/assets/images/staff/03/staff-013.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={35}><img src="/assets/images/staff/03/staff-026.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={36}><img src="/assets/images/staff/03/staff-021.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={37}><img src="/assets/images/staff/03/staff-028.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={38}><img src="/assets/images/staff/03/staff-039.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={39}><img src="/assets/images/staff/03/staff-045.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={40}><img src="/assets/images/staff/03/staff-042.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={41}><img src="/assets/images/staff/03/staff-030.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={42}><img src="/assets/images/staff/03/staff-037.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={43}><img src="/assets/images/staff/03/staff-002.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li><li className="staffPics-item akinit" data-index={44}><img src="/assets/images/staff/03/staff-005.jpg" alt="" className="imageVal" data-path="/assets/images/staff/" /></li></ul>
                                    </div>
                                </div></div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-video-area">
                    <div className="container">
                        <div className="row custom-gutter">
                            <div className="col-md-11 m-auto">
                                <div className="row custom-gutter">
                                    <div className="col-md-6">
                                        <div className="about-video-left">
                                            <h2>A dedicated crew is the key to clean. </h2>
                                            <div
                                                className="about-video-right mob-visible embed-responsive embed-responsive-16by9">
                                                {/*- <a href="javascript:void(0)" onclick="$(this).css('opacity',0)">
                                  <img src="/assets/images/Video.jpg" alt="" style="position:absolute;z-index:5">
                              </a> -*/}
                                                <iframe src="https://player.vimeo.com/video/492216591"
                                                        allow="autoplay; fullscreen; picture-in-picture"
                                                        allowFullScreen/>
                                            </div>
                                            <p><b>All our staff are committed, full-time housekeepers</b> who enjoy a
                                                fair wage, complete benefits, paid vacation, and a respectful work
                                                environment.</p>
                                            <p>And good old family fun, of course. Some employees have been with us for
                                                over 15 years and counting. Here's why. </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mob-hidden">
                                        <div className="about-video-right embed-responsive embed-responsive-16by9">
                                            {/*- <a href="javascript:void(0)" onclick="$(this).css('opacity',0);$(this).parent().find('iframe').css('opacity',1)">
                                  <img src="/assets/images/Video.jpg" alt="" style="position:absolute;z-index:5;top:0;">
									</a> -*/}
                                            <iframe src="https://player.vimeo.com/video/492216591" style={{zIndex: 1}}
                                                    allow="autoplay; fullscreen; picture-in-picture" allowFullScreen/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-family" id="meet-the-family">
                    <div className="container">
                        <div className="row custom-gutter">
                            <div className="col-md-10 m-auto">
                                <div className="about-family-text">
                                    <h2>Meet the family</h2>
                                    <img src="/assets/images/family-picture.jpg" alt=""/>
                                    <p>MoreHands started 20 years ago with a vision for happy, relaxed, well-cared-for
                                        Texans and their housekeepers. Since then, the business has grown to include the
                                        whole family: sisters, brothers, in-laws, and cousins. We love, laugh, and argue
                                        with each other, in and out of the office. We're passionate about taking care of
                                        people, all over Texas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-video-area about-client-area">
                    <div className="container">
                        <div className="row custom-gutter">
                            <div className="col-md-11 m-auto">
                                <div className="row custom-gutter">
                                    <div className="col-md-6 mob-hidden">
                                        <div className="about-video-right">
                                            <img src="/assets/images/Client-picture.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="about-video-left">
                                            <h5>We take care of the mess and the errands, so coming home makes you
                                                happy. </h5>
                                            <div className="about-video-right mob-visible">
                                                <img src="/assets/images/Client-picture.jpg" alt=""/>
                                            </div>
                                            <br/>
                                            <p>At MoreHands, we believe that home should be a place of rest, not more
                                                work. That's why we do what we do — so you can come home to the life
                                                you've worked so hard to build, and just enjoy it. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="guarantee-area" id="happiness-guarantee">
                    <div className="container">
                        <div className="row custom-gutter">
                            <div className="col-md-11 m-auto">
                                <div className="guarentee-head">
                                    <h2>We guarantee your happiness. Here's how:</h2>
                                </div>
                                <div className="row custom-gutter">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="guarantee1">
                                            <div className="guarantee-img">
                                                <img src="/assets/images/icons/Family-photo.png" alt=""/>
                                            </div>
                                            <div className="guarantee-text">
                                                <h3>Family owned and operated</h3>
                                                <p>As a family business, we are committed to taking the very best care
                                                    of our customers and our staff. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="guarantee1">
                                            <div className="guarantee-img">
                                                <img src="/assets/images/icons/Award.svg" alt=""/>
                                            </div>
                                            <div className="guarantee-text">
                                                <h3>The best employees</h3>
                                                <p>All services are done by our very own, five-star, full-time MoreHands
                                                    employees. We never use contract labor. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="guarantee1">
                                            <div className="guarantee-img">
                                                <img src="/assets/images/icons/Happy-staff.svg" alt=""/>
                                            </div>
                                            <div className="guarantee-text">
                                                <h3>Happy staff, happy you</h3>
                                                <p>We treat our staff with respect — all our employees earn a living
                                                    wage. That means high quality work, and a happy you. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="guarantee1">
                                            <div className="guarantee-img">
                                                <img src="/assets/images/icons/Pride.svg" alt=""/>
                                            </div>
                                            <div className="guarantee-text">
                                                <h3>We take pride in our work</h3>
                                                <p>If you're not 100% satisfied with our services, we'll come back and
                                                    re-clean. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="guarantee1">
                                            <div className="guarantee-img">
                                                <img src="/assets/images/icons/no-cancelations-badge.svg" alt=""/>
                                            </div>
                                            <div className="guarantee-text">
                                                <h3>We never cancel. Ever. </h3>
                                                <p>Cleaning is a commitment. If we ever were to cancel, we'd pay you
                                                    $100. Guaranteed.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="guarantee1">
                                            <div className="guarantee-img">
                                                <img src="/assets/images/icons/no-contracts.svg" alt=""/>
                                            </div>
                                            <div className="guarantee-text">
                                                <h3>No contracts</h3>
                                                <p>You can cancel our services whenever you'd like. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-area">
                    <div className="container">
                        <div className="row custom-gutter">
                            <div className="col-md-11 m-auto">
                                <div className="team-area-text blue-bg blue-btn">
                                    <h2>We're your team of housekeepers and errand runners.</h2>
                                    <p>With 20 years in the business, our team knows clean.<br/> Recurring clients get
                                        discounted or even free errands. That's right, free.</p>
                                    <a href="/services.html">Learn more about our services</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*- <div class="in-touch-area">
  <div class="container">
      <div class="row custom-gutter">
          <div class="col-md-11 m-auto">
              <div class="white-card">
                  <div class="white-card-left">
                      <h4>Stay in touch</h4>
                      <p>Sign up for updates about MoreHands news and special offers</p>
                  </div>
                  <div class="white-card-right care-right">
                      <form action="#" method="post">
                          <div class="row">
                              <div class="col-md-8 p-0">
                                  <div class="form-group">
                                      <input type="email" name="email" placeholder="Email Address" class="form-control">
                                  </div>
                              </div>
                              <div class="col-md-4 p-0">
                                  <div class="form-group">
                                      <input type="submit" name="submit" value="Subscribe" class="blue-btn">
                                  </div>
                              </div>
                          </div>
                      </form>

                      <div class="thankyou-text" style="display:none">
                          <p>Thanks for subscribing! <img src="/assets/images/icons/check.svg" alt=""></p>
                      </div>

                  </div>
              </div>
          </div>
      </div>
  </div>
    </div> -*/}
                {/* CONTENT END --------------------------------------------------------------------------------------------------------------- */}
            </div>

        </>
    )
}