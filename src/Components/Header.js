import { Link } from "react-router-dom";

export default function Header({news}){
    return (
        <>
            {/* Alert Banner */}
            {news && <>
                <div className="top-news">
                    <div className="container">
                        <div className="row custom-gutter">
                            <div className="col-md-12">
                                <div className="top-news-text">
                                    {news}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>}


            {/* Navigation */}
            <div className="sticky-top bg-white py-3" id="menubar">
                <div className="container">
                    <div className="row align-items-center custom-gutter">
                        <div className="col-auto">
                            <div className="main-logo">
                                <h1><Link to="/">
                                    <img src="../assets/images/morehands-maid-service.png" alt=""/>
                                </Link>
                                </h1>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="main-menu">
                                <div className="close-btn">
                                    <i className="fa fa-times" aria-hidden="true"/>
                                </div>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/services">Our Service</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-auto text-right ml-auto">
                            <div className="d-md-none">
                                <Link to="tel://_512_4797978"><img src="../assets/images/icons/phone-solid.svg"
                                                                  alt="(512) 479-7978"/></Link>
                            </div>
                            <div className="text-right d-none d-md-block">
                                <Link to="tel://_512_4797978"><img src="../assets/images/icons/phone-outline.svg"
                                                                  alt="(512) 479-7978"/></Link>
                                <Link to="/get-a-price" className="btn btn-primary btn-sm ml-4 px-3 py-2">Get a
                                    Price</Link>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="menu-toogler">
                                <div className="bar1"/>
                                <div className="bar2"/>
                                <div className="bar3"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}