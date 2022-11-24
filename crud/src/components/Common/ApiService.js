import axios from "axios";

const urlBase = "https://www.crud-api.neapolab.com";

export class ApiService {

    static instance = axios.create({
        headers: {
            "Content-Type": "application/json",
        }
    });

    static get(route) {
        return this.instance.get(urlBase + route, {});
    }

    static post(route, jsonData) {
        return this.instance.post(urlBase + route, JSON.stringify(jsonData));
    }
    static put(route, jsonData) {
        return this.instance.post(urlBase + route, JSON.stringify(jsonData));
    }

    static delete(route) {
        return this.instance.post(urlBase + route, {});
    }

}
