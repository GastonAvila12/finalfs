import axios from "axios";


export const save = async (student) =>{
    return await axios.post("http://localhost:8000/", );
}

export const fillTable = async () => {
    return await axios.get("http://localhost:8000/");
}