import axios from "axios";

const apiURL = "https://67b09b223fc4eef538e7e2d5.mockapi.io/account";
export const login = async (username, password) => {
  try {
    
    const response = await axios.get(apiURL);
    
    const users = response.data 
    const user = users.find((u) => u.username === username && u.password === password);
    return user ? { success: true, message: "Login successful!", user } : { success: false, message: "Invalid username or password." };
  }
  catch (error) {
    console.log(error)
  }
};


export const login2 = async (username, password) => {
    const response = await axios.get(apiURL);
   
    const users = response.data;
    const user = users.find((u) => u.username === username && u.password === password);
    return user? { success: true, message: "Login successful!", user } : { success: false, message: "Invalid username or password." };
  }