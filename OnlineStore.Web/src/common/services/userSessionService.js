const shoppingCartKey = 'shoppingCart';

const storage = window.localStorage;

class UserSessionService {
  static setShoppingCart(shoppingCart) {
    storage.setItem(shoppingCartKey, JSON.stringify(shoppingCart));
  }

  static getShoppingCart() {
    const data = storage.getItem(shoppingCartKey);
    return data ? JSON.parse(data) : [];
  }
}

export default UserSessionService;
