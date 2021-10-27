const URL = "/api/v1/user/";

const login = async function(email, password) { return await fetch(URL + "login", {method: "POST", headers:{
    "Content-Type": "form-data",
} })};