import Axios from 'axios';

let instance = Axios.create({
  baseURL: "https://api.andrea-naturopathie.com"
});


export default instance;