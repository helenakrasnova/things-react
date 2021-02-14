import axios from 'axios';
import { baseUrl } from '../configurations';

class ToDoService {
    constructor() {
        this.url = `${baseUrl}/api/v1/things`;
    }

    getResults = async () => {
        const response = await axios.get(this.url);
        return response.data;
    };

    addItem = async (name) => {
        const requestBody = {
            name: name,
        };
        try {
            await axios.post(this.url, requestBody, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    changeItem = async (id, changedItem) => {
        const requestBody = {
            name: changedItem,
        };
        try {
            await axios.put(`${this.url}/${id}`, requestBody);
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    deleteItem = async (id) => {
        try {
            await axios.delete(`${this.url}/${id}`);
        } catch (error) {
            console.log(error);
            throw error;
        }
    };
}

export default ToDoService;
