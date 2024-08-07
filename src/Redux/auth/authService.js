import axios from "axios";

const registerUser = async(formData) => {
    const response = await axios.post("https://authentication-2-qgze.onrender.com/api/user/register", formData);
    return response.data;
}

const loginUser = async(formData) => {
    const response = await axios.post("https://authentication-2-qgze.onrender.com/api/user/login", formData);
    return response.data;
}

const authService = {
    registerUser,
    loginUser,
}

export default authService;