import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";

const HistoryBooking = ({ history, handleEdit, handleDelete, showHistory }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleShowModal = (index) => {
    setSelectedIndex(index);
    setShowModal(true);
  };

  const confirmDelete = () => {
    handleDelete(selectedIndex);
    setShowModal(false);
  };

  return (
    <div>
      {showHistory && history.length > 0 && (
        <div className="mt-4">
          <h3 className="text-center">Booking History</h3>
          <div className="d-flex flex-wrap justify-content-center">
            {history.map((item, index) => (
              <Card key={index} className="m-2 shadow" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{item.phone}</Card.Subtitle>
                  <Card.Text>
                    📅 Date: {item.date} <br />
                    ⏰ Time: {item.time} <br />
                    👥 Persons: {item.persons}
                  </Card.Text>
                  <Button variant="primary" size="sm" className="me-2" onClick={() => handleEdit(index)}>
                    Edit
                  </Button>
                  <Button variant="danger" size="sm" onClick={() => handleShowModal(index)}>
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Modal Xác Nhận Xóa */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title >Delete Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete your booking?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            No
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default HistoryBooking;
