import axios from 'axios';

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const MenuDetails = () => {

  const { id } = useParams();
  const [dishes, setDishes] = useState(null)

  useEffect(() => {
    axios.get(`http://localhost:9999/menuItems/${id}`)
      .then(res => setDishes(res.data))
      .catch(err => console.log(err))
  }, [id])
  if (!dishes) return <h1>Loading..</h1>
  return (
    <div className="container my-4">
      <div className="card p-3 shadow-sm rounded-4 d-flex flex-row ">
        <img
          src={dishes.dishesImage}
          alt={dishes.dishesName}
          className="rounded-3 me-4"
          style={{ width: '120px', height: '120px', objectFit: 'cover' }}
        />

        <div>
          <h5 className="fw-bold mb-1">{dishes.dishesName}</h5>
          <p className="text-muted mb-1">{dishes.dishesCategory}</p>
          <p className="text-muted mb-1">{dishes.category}</p>
          <p className="text-danger fw-semibold mb-0">${dishes.dishesPrice}</p>
          <Link
            to="/menu"
            className="btn btn-light border border-secondary rounded-pill px-4 py-2 d-inline-flex align-items-center gap-2 shadow-sm mt-4"
          >Return</Link>
        </div>
      </div>
    </div>

  );
};

export default MenuDetails;