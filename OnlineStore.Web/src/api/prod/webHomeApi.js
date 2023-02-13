import axios from 'axios';

const serviceUrl = `${process.env.REACT_APP_API_URL}/api/home`;

class HomeApi {
  static getProductCards() {
    const url = `${serviceUrl}/laptops`;
    return axios.get(url);
  }
}

export default HomeApi;
