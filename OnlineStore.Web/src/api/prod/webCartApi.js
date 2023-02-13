import axios from 'axios';

const serviceUrl = `${process.env.REACT_APP_API_URL}/api/shoppingCart`;

class CartApi {
  static getProducts() {
    const url = serviceUrl;
    return axios.get(url);
  }

  static checkout(data) {
    const url = serviceUrl;
    return axios.post(url, data);
  }
}

export default CartApi;
