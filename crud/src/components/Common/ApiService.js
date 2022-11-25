import axios from "axios";

const baseUrl = "http://localhost:8000";

export class ApiService {

    /*static instance = axios.create({
        headers: {
          //  "Content-Type": "application/json",
        }
    });*/

    static get(route) {
        return axios.get(baseUrl + route, {});
    }

    static post(route, jsonData) {
        return axios.post(baseUrl + route, JSON.stringify(jsonData));
    }
    static put(route, jsonData) {
        return axios.put(baseUrl + route, JSON.stringify(jsonData));
    }

    static delete(route) {
        return axios.delete(baseUrl + route, {});
    }

}
