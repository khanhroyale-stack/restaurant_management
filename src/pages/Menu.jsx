import React, { useState } from 'react';
import '../styles/Menu.css';
import DishesMenu from '../components/DishesMenu';
import BrandingLogo from '../components/BrandingLogo';

const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    
    const [searchInput, setSearchInput] = useState('');
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };
    
    const handleSearchChange = (event) => {
        setSearchInput(event.target.value); // Update search input state
    };  
    return (
        <div>
            <div>
                <div className='text-center mt-5'>
                    <h1>Our Menu</h1>
                    <p className='menu-description'>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
                </div>
                <div className='menu-searchbar'>
                <input 
                        type="text" 
                        placeholder="Search for dishes..." 
                        className="search-input" 
                        value={searchInput} // Bind input value to state
                        onChange={handleSearchChange} // Handle input change
                    />
                </div>
                <div className='menu-category'>
                    <a href="#" onClick={() => handleCategoryClick('All')}>All</a>
                    <a href="#" onClick={() => handleCategoryClick('Breakfast')}>Breakfast</a>
                    <a href="#" onClick={() => handleCategoryClick('Main Dishes')}>Main Dishes</a>
                    <a href="#" onClick={() => handleCategoryClick('Drinks')}>Drinks</a>
                    <a href="#" onClick={() => handleCategoryClick('Desserts')}>Desserts</a>
                </div>
                <div>
                <DishesMenu selectedCategory={selectedCategory} searchInput={searchInput} />
                </div>
                <div className='menu-second-section'>
                    <div className='w-50 menu-title-section'>
                        <div className='w-50 menu-title-section-second'>
                            <h1>You can order through apps</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Voluptatem ut magnam veniam,
                                velit sint molestias debitis amet illum nisi veritatis repellat expedita pariatur.
                                Laboriosam quasi pariatur quae blanditiis! Quod, totam.</p>
                        </div>
                    </div>
                    <div className='w-50 branding-logo-menu'>
                        <BrandingLogo imageURL='https://images.squarespace-cdn.com/content/v1/61b25a70f440af12f95e7000/7718682c-510e-4fae-9032-d4fe955519c1/uber+eats+logo.png' />
                        <BrandingLogo imageURL='https://mma.prnewswire.com/media/276973/grubhub_logo.jpg?p=facebook' />
                        <BrandingLogo imageURL='https://media.designrush.com/inspirations/129792/conversions/_1531237312_377_Postmates-Top-Logo-Design-preview.jpg' />
                        <BrandingLogo imageURL='https://play-lh.googleusercontent.com/OOr0wepNC4FIlt5vc95R4InIRUnv6ibbl7GDyfIXFJA5Av4WVBWsgsdyNWB0F8PBmQ=w3840-h2160-rw' />
                        <BrandingLogo imageURL='https://logos-world.net/wp-content/uploads/2023/03/FoodPanda-Logo.png' />
                        <BrandingLogo imageURL='https://mitchellake.com/wp-content/uploads/2022/07/Deliveroo-logo.png' />
                        <BrandingLogo imageURL='https://mms.businesswire.com/media/20210331005579/en/868438/5/instacart-logo-wordmark-4000x1600-e4f3c6f.jpg' />
                        <BrandingLogo imageURL='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0dr9Fk6SqluwF3vznY6uCmhRPUJvJM0RHIg&s' />
                        <BrandingLogo imageURL='https://brandlogos.net/wp-content/uploads/2022/09/didi_food-logo_brandlogos.net_9ptmf.png' />
                        <BrandingLogo imageURL='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Es-EKGjsjGrexOTqrbz4_ji1rSG03EkLGg&s' />
                        <BrandingLogo imageURL='https://canhme.com/wp-content/uploads/2016/01/Paypal.png' />
                        <BrandingLogo imageURL='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWFGeQAZXgKnplOilFt7XCt6f-Q6JCoPGiRg&s' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;