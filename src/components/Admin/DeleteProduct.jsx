import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { deleteDishes } from '../../services/dishesService';

const DeleteProduct = ({ show, handleClose, fetchDishes, dishId }) => {
    const handleDelete = async () => {
        try {
            await deleteDishes(dishId);
            handleClose();
            fetchDishes();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Dishes</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete this dish?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteProduct;