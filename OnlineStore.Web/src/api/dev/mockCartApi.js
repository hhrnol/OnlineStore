import delay from './delay';

const readData = [];

class CartApi {
  static getProducts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: readData });
      }, delay);
    });
  }

  static checkout() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });
  }
}

export default CartApi;
