import React from 'react';
import '../styles/About.css'
import AboutMenu from '../components/AboutMenu';
import Clock from '../assets/images/clock.png';
import Internet from '../assets/images/internet.png';
import Menu from '../assets/images/menu.png';

const About = () => {
    return (
        <div>
            <div className='d-flex align-items-center about-container'>
                <div className='about-main-img-container w-50'>
                    <img className='w-75 about-main-img' src="https://www.eatingwell.com/thmb/ZHXRyJgN5ikb5Zk0SMw1XhQ8W9g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/EWL-267169-avocado-egg-toast-Hero-02-037627ac211748fc857b5a69989fa8e9.jpg" alt="food" />
                    <div className='about-description'>
                        <h5>Come and visit us</h5>
                        <i class="bi bi-telephone">  (414)857 - 0107</i>
                        <br />
                        <i class="bi bi-envelope">  khanhroyale@lethimcook.com</i>
                        <br />
                        <i class="bi bi-geo-alt">  837 W.Marshall Lane Marshalltown, IA 50158, Los Angeles</i>
                    </div>
                </div>
                <div className='w-50 pe-5'>
                    <h1>We provide healthy food for your family.</h1>
                    <h5>Our story began with a vision to create a unique dining experience that merges fine dining,
                        exceptional service, and a vibrant ambiance.
                        Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</h5>
                    <p>At place, we believe that dining is not just about food,
                        but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                </div>
            </div>
            <div >
                <div className='about-second-img-container'>
                <img className='w-100 opacity-50' src="https://www.reu.com.vn/wp-content/uploads/2024/06/BOMM0704.jpg" alt="" />
                <div className='about-second-description'>
                    <h1>Feel the authentic & original taste from us</h1>
                </div>
                </div>
                <div className='d-flex p-5 ms-5 '>
                    <AboutMenu imageUrl={Clock} title="Multi Cuisine"/>
                    <AboutMenu imageUrl={Internet} title="Easy To Order"/>
                    <AboutMenu imageUrl={Menu} title="Fast Delivery"/>
                </div>
            </div>
        </div>
    );
};

export default About;