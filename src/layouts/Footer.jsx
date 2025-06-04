import React from 'react';
import '../styles/Footer.css'
import Hamburger from '../assets/images/classichamburger.jpg'
import Chef from '../assets/images/chef.png';
const Footer = () => {
    return (
        <div className=''>
            <div className='bg-dark text-white d-flex p-5'>
                <div className='mx-auto w-50'>
                    <div className="d-flex align-items-center">
                        <img
                            src={Chef}
                            className="main-icon-footer me-2"
                            alt="icon"
                        />
                        <h1>Restaurant</h1>
                    </div>
                    <p className='w-50'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Doloribus cumque recusandae possimus assumenda repudiandae laudantium neque quidem</p>
                    <i className="bi bi-twitter me-3"></i>
                    <i className="bi bi-facebook me-3"></i>
                    <i className="bi bi-instagram me-3"></i>
                    <i className="bi bi-github"></i>
                </div>

                <div className='d-flex mx-auto w-50 '>
                    <ul className="list-unstyled list-footer me-5">
                        <h4 className="">Pages</h4>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Pricing</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>Delivery</li>
                    </ul>
                    <ul className="list-unstyled list-footer ms-5">
                        <h4 className="">Utility Pages</h4>
                        <li>Start Here</li>
                        <li>Styleguide</li>
                        <li>Password Protected</li>
                        <li>404 Not Found</li>
                        <li>License</li>
                        <li>Changelog</li>
                        <li>View More</li>
                    </ul>
                </div>



                <div className='mx-auto w-50'>
                    <h4>Follow Us On Instagram</h4>
                    <div>
                        <div className='img-footer'>
                            <img src="https://www.allrecipes.com/thmb/-Qlhx70a3HwawPd51kSIiGj-hpE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4488416-0627cab55d4e44ec80f974fbc67befb7.jpg" alt="" />
                            <img src="https://www.chelsea.co.nz/hubfs/New%20Recipe%20images/Sunday%20Pancakes%20Recipe%20NZ%20Chelsea%20Sugar.jpg" alt="" />
                        </div>
                        <div className='img-footer'>
                            <img src={Hamburger} alt="" />
                            <img src="https://cdn.buffetposeidon.com/app/media/Kham-pha-am-thuc/04.2024/120424-3-mon-salad-buffet-poseidon-04.jpg" alt="" />
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-md-6"><img src="https://www.allrecipes.com/thmb/-Qlhx70a3HwawPd51kSIiGj-hpE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4488416-0627cab55d4e44ec80f974fbc67befb7.jpg" className="w-100 h-auto" /></div>
                        <div className="col-md-6"><img src="https://www.chelsea.co.nz/hubfs/New%20Recipe%20images/Sunday%20Pancakes%20Recipe%20NZ%20Chelsea%20Sugar.jpg" className="w-100 h-auto" /></div>
                        <div className="col-md-6"><img src="https://static01.nyt.com/images/2023/05/25/multimedia/SS-Smashburger-update-vzhf/SS-Smashburger-update-vzhf-jumbo.jpg" className="w-100 h-auto" /></div>
                        <div className="col-md-6"><img src="https://cdn.buffetposeidon.com/app/media/Kham-pha-am-thuc/04.2024/120424-3-mon-salad-buffet-poseidon-04.jpg" className="w-100 h-auto" /></div>
                    </div> */}

                </div>
            </div>
        </div>
    );
};

export default Footer;