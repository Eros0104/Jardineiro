import axios from 'axios';

const get = () => {
    let response = await axios.get('http://localhost:8080/Seed', config)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
        return response
}

export { get }