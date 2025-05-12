import React, { useState, useEffect } from "react";
import { Alert, Button } from "react-bootstrap";
import HistoryBooking from "./HistoryBooking."; // Import component lịch sử

const Contact = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    name: "",
    phone: "",
    persons: "1 Person",
  });

  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Lấy ngày hôm nay (YYYY-MM-DD)
  const today = new Date().toISOString().split("T")[0];

  // Load lịch sử từ LocalStorage khi mở trang
  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("bookingHistory"));
    if (storedHistory) {
      setHistory(storedHistory);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Xóa lỗi khi nhập lại
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.date) newErrors.date = "Date is required.";
    if (formData.date < today) newErrors.date = "Cannot select a past date.";
    if (!formData.time) newErrors.time = "Time is required.";
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Invalid phone number (10 digits).";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setShowAlert(true);

    let updatedHistory;
    if (editIndex !== null) {
      updatedHistory = [...history];
      updatedHistory[editIndex] = formData;
      setEditIndex(null);
    } else {
      updatedHistory = [...history, formData];
    }

    setHistory(updatedHistory);
    localStorage.setItem("bookingHistory", JSON.stringify(updatedHistory));

    setFormData({
      date: "",
      time: "",
      name: "",
      phone: "",
      persons: "1 Person",
    });
  };

  const handleEdit = (index) => {
    setFormData(history[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedHistory = history.filter((_, i) => i !== index);
    setHistory(updatedHistory);
    localStorage.setItem("bookingHistory", JSON.stringify(updatedHistory));
  };

  return (
    <div className="mt-5">
      <div className="text-center">
        <h1>Book a Table</h1>
        <p>Reserve a table for an unforgettable dining experience.</p>
      </div>

      {showAlert && (
        <Alert
          variant="success"
          className="container text-center"
          onClose={() => setShowAlert(false)}
          dismissible
        >
          <Alert.Heading>🎉 Table Booked Successfully!</Alert.Heading>
          <p>We have received your reservation. See you soon! 🍽️</p>
        </Alert>
      )}

      <div className="card p-4 shadow-lg container">
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Date</label>
              <input
                type="date"
                className={`form-control ${errors.date ? "is-invalid" : ""}`}
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                min={today} // ✅ Không cho phép chọn ngày quá khứ
              />
              <div className="invalid-feedback">{errors.date}</div>
            </div>
            <div className="col-md-6">
              <label className="form-label">Time</label>
              <input
                type="time"
                className={`form-control ${errors.time ? "is-invalid" : ""}`}
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
              <div className="invalid-feedback">{errors.time}</div>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <div className="invalid-feedback">{errors.name}</div>
            </div>
            <div className="col-md-6">
              <label className="form-label">Phone</label>
              <input
                type="tel"
                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                name="phone"
                placeholder="Enter 10-digit phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <div className="invalid-feedback">{errors.phone}</div>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Total Person</label>
            <select
              className="form-select"
              name="persons"
              value={formData.persons}
              onChange={handleChange}
            >
              <option>1 Person</option>
              <option>2 Persons</option>
              <option>3 Persons</option>
              <option>4 Persons</option>
              <option>More than 5</option>
            </select>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <Button type="submit" variant="danger">
              {editIndex !== null ? "Update Booking" : "Book A Table"}
            </Button>

            {history.length > 0 && (
              <Button
                variant="success"
                style={{ color: "white" }}
                onClick={() => setShowHistory(!showHistory)}
              >
                {showHistory ? "Hide History" : "View Booking History"}
              </Button>
            )}
          </div>
        </form>

        {/* Component lịch sử */}
        <HistoryBooking
          history={history}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          showHistory={showHistory}
          toggleHistory={() => setShowHistory(!showHistory)}
        />
      </div>

      {/* Google Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509456!2d144.96305761531643!3d-37.816279742021885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e33!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1633527346283!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        className="rounded-lg shadow-lg w-100 mt-4"
      ></iframe>
    </div>
  );
};

export default Contact;
