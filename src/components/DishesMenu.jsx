import React, { useEffect, useState, useMemo } from 'react';
import '../styles/DishesMenu.css';
import { getAllDishes } from '../services/dishesService';

const DishesMenu = ({ selectedCategory, searchInput }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDishes = async () => {
            try {
                const res = await getAllDishes();
                setData(res);
            } catch (err) {
                setError("Failed to load dishes. Please try again.");
            } finally {
                setLoading(false);
            }
        };
        fetchDishes();
    }, []);


    const searchedDishes = useMemo(() => {
        let filtered = data;

        if (selectedCategory !== 'All') {
            filtered = filtered.filter(dish => dish.dishesCategory.toLowerCase() === selectedCategory.toLowerCase());
        }
        
        if (searchInput.trim()) {
            filtered = filtered.filter(dish =>
                dish.dishesName.toLowerCase().includes(searchInput.toLowerCase())
            );
        }

        return filtered;
    }, [data, selectedCategory, searchInput]);

    if (loading) return <p className="text-center">Loading dishes...</p>;
    if (error) return <p className="text-center text-danger">{error}</p>;

    return (
        <div className="dishes-container">
            {searchedDishes.length > 0 ? (
                searchedDishes.map(dish => (
                    <div key={dish.id} className="text-center dishes-menu-card">
                        <img src={dish.dishesImage} alt={dish.dishesName} />
                        <h3 className="pt-3 text-danger">${Number(dish.dishesPrice).toLocaleString()}</h3>
                        <h4 className="pb-3">{dish.dishesName}</h4>
                        <p className="ps-5 pe-5">{dish.dishesCategory}</p>
                    </div>
                ))
            ) : (
                <h4 className="text-center">Không có món ăn nào trong danh mục này.</h4>
            )}
        </div>
    );
};

export default DishesMenu;
