import React, { useState, useEffect } from 'react';
import BrowseMenu from '../components/BrowseMenu';
import '../styles/Home.css';
import CoffeCup from '../assets/images/coffee-cup.png';
import RiceCup from '../assets/images/rice.png';
import Lemonade from '../assets/images/lemonade.png';
import Dessert from '../assets/images/dessert.png';
import UniqueServiceCard from '../components/UniqueServiceCard';
import HomeImage from '../assets/images/home-image.jpg';
import HomeImage1 from '../assets/images/homeimage.jpg'
import HomeImage2 from '../assets/images/homeimage1.jpg'
import { Link } from 'react-router-dom';
import food from '../assets/images/healthyfood.webp'
const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        setIsLoggedIn(!!user); // Cập nhật trạng thái đăng nhập
    }, []);

    return (
        <div>
            {/* Hình ảnh giới thiệu */}
            <div className='img-container'>
                <img className='w-100' src={HomeImage2} alt="Food" />
                <div className='description-home'>
                    <h1>Best food for your taste</h1>
                    <p>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven</p>
                </div>
            </div>

            {/* Menu có thể xem không cần đăng nhập */}
            <div className='mt-5 br-menu'>
                <h1 className='text-center'>Browse Our Menu</h1>
                <div className='d-flex justify-content-evenly m-5'>
                    <BrowseMenu url={CoffeCup} title='Breakfast' />
                    <BrowseMenu url={RiceCup} title='Main Dishes' />
                    <BrowseMenu url={Dessert} title='Drinks' />
                    <BrowseMenu url={Lemonade} title='Desserts' />
                </div>
            </div>

            {/* Giới thiệu nhà hàng */}
            <div className='d-flex align-items-center about-container'>
                <div className='about-main-img-container w-50'>
                    <img className='w-75 about-main-img' src={food} alt="food" />
                    <div className='about-description'>
                        <h5>Come and visit us</h5>
                        <div className='mb-3'>
                            <i className="bi bi-telephone">  (414)857 - 0107</i>
                        </div>
                        <div className='mb-3'>
                            <i className="bi bi-envelope">  khanhhoangia@lethimcook.com</i>
                        </div>
                        <div>
                            <i className="bi bi-geo-alt">  837 W.Marshall Lane Marshalltown, IA 50158, Ohio</i>
                        </div>
                    </div>
                </div>
                <div className='w-50 pe-5'>
                    <h1>We provide healthy food for your family.</h1>
                    <div className='mb-3 mt-3'>
                        <h5>Our story began with a vision to create a unique dining experience that merges fine dining,
                            exceptional service, and a vibrant ambiance.
                            Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</h5>
                    </div>
                    <p>At place, we believe that dining is not just about food,
                        but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                    <Link to="/about" className='more-about-us'>More About Us</Link>
                </div>
            </div>

            {/* Các dịch vụ đặc biệt (không yêu cầu đăng nhập) */}
            <div className='p-5'>
                <div className='mb-5'>
                    <h1 className='unique-card-title'>
                        We also offer unique services for your events
                    </h1>
                </div>
                <div className='d-flex gap-3'>
                    <UniqueServiceCard imageURL="https://traodoivanhoa.yfuvietnam.org/resource/files/nganh-catering-la-gi.jpg" title="Caterings" />
                    <UniqueServiceCard imageURL="https://www.foodandwine.com/thmb/JA_FagHUDgd2Hl-5HygYHps3WrE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/How-to-Have-Your-Birthday-at-a-Restaurant-FT-MAG0723-4bf1a09685134f389dfb48ea4a3ad400.jpg" title="Birthdays" />
                    <UniqueServiceCard imageURL="https://www.dottyaboutpaper.co.uk/cdn/shop/articles/couple-holding-wedding-bouquet-scaled_1024x1024.jpg?v=1694339675" title="Weddings" />
                    <UniqueServiceCard imageURL="https://blog.topcv.vn/wp-content/uploads/2021/07/sk2uEvents_Page_Header_2903ed9c-40c1-4f6c-9a69-70bb8415295b.jpg" title="Events" />
                </div>
            </div>

        </div>
    );
};

export default Home;
