import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createDishes, getAllDishes } from '../../services/dishesService';

const AddProduct = ({ show, handleClose, fetchDishes}) => {
    const [dishes, setDishes] = useState({
        dishesName: "",
        dishesPrice: "",
        dishesCategory: "",
        dishesImage: "",
        id: "", 
    });
    const [loading, setLoading] = useState(false);
    const [menuItems, setMenuItems] = useState([]);
    
    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await getAllDishes();
                setMenuItems(response);
            } catch (error) {
                console.error("Error fetching menu items:", error);
            }
        };
    
        fetchMenu();
    }, []);
   
    const getNextId = async () => {
        try {
            const allDishes = await getAllDishes(); // Fetch existing dishes
            if (allDishes.length === 0) return 1; // If no dishes, start from 1

            const maxId = Math.max(...allDishes.map((dish) => Number(dish.id))); // Get highest ID
            return maxId + 1; // Increment ID
        } catch (error) {
            console.error("Error fetching dishes:", error);
            return 1; // Fallback to ID 1 if fetching fails
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDishes({ ...dishes, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) return;

        try {
            setLoading(true);
            const newId = await getNextId(); // Get the next available ID

            const newDish = { ...dishes, id: String(newId) }; // Convert ID to string for consistency
            await createDishes(newDish);

            fetchDishes(); // Refresh list
            handleClose(); // Close modal

            setDishes({
                dishesName: "",
                dishesPrice: "",
                dishesCategory: "",
                dishesImage: "",
                id: "",
            });
        } catch (error) {
            console.error("Error adding dish:", error);
        } finally {
            setLoading(false);
        }
        window.location.reload();   
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Dish</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Dishes Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="dishesName"
                            value={dishes.dishesName}
                            onChange={handleChange}
                            required
                            placeholder="Enter Dishes Name"
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Dishes Price</Form.Label>
                        <Form.Control
                            type="number"
                            name="dishesPrice"
                            value={dishes.dishesPrice}
                            onChange={handleChange}
                            required
                            placeholder="Enter Dishes Price"
                        />
                    </Form.Group>

                    <Form.Group>
    <Form.Label>Dishes Category</Form.Label>
    <Form.Select
        name="dishesCategory"
        value={dishes.dishesCategory}
        onChange={handleChange}
        required
    >
        <option value="">Select Category</option>
        {menuItems &&
            Array.from(new Set(menuItems.map((item) => item.dishesCategory)))
                .map((category, index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>
                ))}
    </Form.Select>
</Form.Group>

                    <Form.Group>
                        <Form.Label>Dishes Image</Form.Label>
                        <Form.Control
                            type="url"
                            name="dishesImage"
                            value={dishes.dishesImage}
                            onChange={handleChange}
                            required
                            placeholder="Enter Dishes Image Link"
                        />
                    </Form.Group>

                    <div className="d-flex justify-content-end mt-3">
                        <Button variant="secondary" onClick={handleClose} disabled={loading}>
                            Cancel
                        </Button>
                        <Button variant="primary" type="submit" disabled={loading} className="ms-2">
                            {loading ? "Adding..." : "Add Dish"}
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default AddProduct;
