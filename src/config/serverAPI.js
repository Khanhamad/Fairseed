
import axios from 'axios'

const serverAPI =  axios.create({
    baseURL: 'https://some-domain.com/api/',
    // headers: {'X-Custom-Header': 'foobar'}
  });
export default serverAPI;