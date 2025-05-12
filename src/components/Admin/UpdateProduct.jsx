import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { updateDishes } from '../../services/dishesService';

const UpdateProduct = ({ show, handleClose, fetchDishes, dish }) => {
    const [dishes, setDishes] = useState(dish);

    useEffect(() => {
        setDishes(dish);
    }, [dish]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDishes({ ...dishes, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateDishes(dishes.id, dishes);
            handleClose();
            fetchDishes();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update Dishes</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Dishes Name</Form.Label>
                        <Form.Control
                            type='text'
                            name='dishesName'
                            value={dishes.dishesName}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Dishes Price</Form.Label>
                        <Form.Control
                            type='text'
                            name='dishesPrice'
                            value={dishes.dishesPrice}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Dishes Category</Form.Label>
                        <Form.Control
                            type='text'
                            name='dishesCategory'
                            value={dishes.dishesCategory}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Dishes Image</Form.Label>
                        <Form.Control
                            type='text'
                            name='dishesImage'
                            value={dishes.dishesImage}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" type='submit'>
                        Update Dishes
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default UpdateProduct;