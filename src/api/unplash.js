import axios from "axios";

 export default axios.create({
     baseURL: 'https://api.unsplash.com',
    headers:  {
        Authorization: 
              'Client-ID mfuvcY04vJRf8oUOTETZTVlYdyszwSnd_FRj8rVQlQs'
      }
 });