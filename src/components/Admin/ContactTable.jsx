import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Button, Container, Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
const ContactTable = () => {
    const [history, setHistory] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState(null);

    useEffect(() => {
        const storedHistory = JSON.parse(localStorage.getItem("bookingHistory")) || [];
        setHistory(storedHistory);
    }, []);

    const handleDeleteClick = (index) => {
        setDeleteIndex(index);
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        const updatedHistory = history.filter((_, i) => i !== deleteIndex);
        setHistory(updatedHistory);
        localStorage.setItem("bookingHistory", JSON.stringify(updatedHistory));
        setShowDeleteModal(false);
    };

    return (
        <Container fluid className="mt-4 table-admin">
            <div className="d-flex justify-content-between align-items-center">
                <h2 className="text-primary">Booking List</h2>
            </div>
            <Table striped bordered hover responsive className="table-light text-center" size="lg">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Persons</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {history.length > 0 ? (
                        history.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.date}</td>
                                <td>{item.time}</td>
                                <td>{item.persons}</td>
                                <td>
                                    <Button variant="danger" size="sm" onClick={() => handleDeleteClick(index)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="text-center">
                                No bookings found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>

            {/* Modal Xác Nhận Xóa */}
            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this booking?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                        No
                    </Button>
                    <Button variant="danger" onClick={confirmDelete}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default ContactTable;
