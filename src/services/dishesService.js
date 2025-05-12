import axios from "axios";

const apiURL = 'http://localhost:9999/menuItems';

export const getAllDishes = async () => {
    try {
        const response = await axios.get(apiURL);
        return response.data;
    } catch (error) {
        console.error("Error fetching dishes:", error);
        throw error;
    }
};

export const createDishes = async (dishes) => {
    try {
        const response = await axios.post(apiURL, dishes);
        return response.data;
    } catch (error) {
        console.error("Error creating dish:", error);
        throw error;
    }
};

export const updateDishes = async (id, updatedDish) => {
    try {
        const response = await axios.put(`${apiURL}/${id}`, updatedDish);
        return response.data;
    } catch (error) {
        console.error("Error updating dish:", error);
        throw error;
    }
};

export const deleteDishes = async (id) => {
    try {
        const response = await axios.delete(`${apiURL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting dish:", error);
        throw error;
    }
};
