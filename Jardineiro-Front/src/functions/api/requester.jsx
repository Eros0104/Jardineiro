import axios from 'axios';

const baseUrl = "http://localhost:8080"

const get = () => {
    let response = await axios.get(baseUrl + '/Seed', config)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
        return response
}

export { get }