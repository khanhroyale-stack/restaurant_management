import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { getAllDishes } from '../../services/dishesService';
import { Button, Container } from 'react-bootstrap';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import DeleteProduct from './DeleteProduct';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/TableProduct.css'
const TableProduct = () => {
    const [data, setData] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedDish, setSelectedDish] = useState({});
    const [dishIdToDelete, setDishIdToDelete] = useState(null);
    
    const fetchDishes = async () => {
        const result = await getAllDishes();
        setData(result);
    };

    useEffect(() => {
        fetchDishes();
    }, []);

    const handleUpdateClick = (dish) => {
        setSelectedDish(dish);
        setShowUpdateModal(true);
    };

    const handleDeleteClick = (id) => {
        setDishIdToDelete(id);
        setShowDeleteModal(true);
    };

    return (
        <Container fluid className="mt-4 table-admin">
            <div className="d-flex justify-content-between align-items-center ">
                <h2 className="text-primary">Dishes List</h2>
                <Button variant="success" onClick={() => setShowAddModal(true)}>
                    Add Dish
                </Button>
            </div>
            <Table striped bordered hover responsive className="table-light text-center" size='lg'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Dishes</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.dishesName}</td>
                            <td>${item.dishesPrice}</td>
                            <td>{item.dishesCategory}</td>
                            <td>
                                <img
                                    src={item.dishesImage}
                                    alt={item.dishesName}
                                    className="rounded"
                                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                                />
                            </td>
                            <td>
                                <Button variant="primary" size="sm" className="me-2" onClick={() => handleUpdateClick(item)}>
                                    Edit
                                </Button>
                                <Button variant="danger" size="sm" onClick={() => handleDeleteClick(item.id)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <AddProduct show={showAddModal} handleClose={() => setShowAddModal(false)} fetchDishes={fetchDishes} />
            <UpdateProduct show={showUpdateModal} handleClose={() => setShowUpdateModal(false)} fetchDishes={fetchDishes} dish={selectedDish} />
            <DeleteProduct show={showDeleteModal} handleClose={() => setShowDeleteModal(false)} fetchDishes={fetchDishes} dishId={dishIdToDelete} />
        </Container>
    );
};

export default TableProduct;