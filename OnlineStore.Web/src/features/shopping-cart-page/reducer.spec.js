import * as actions from './actions';
import shoppingCartReducer from './reducer';

describe('Shopping Cart Reducer', () => {
  test('returns the initial state', () => {
    const expectedState = { data: [], isLoading: false, hasError: false };
    const result = shoppingCartReducer(undefined, { type: undefined });
    expect(result).toEqual(expectedState);
  });

  test('sets isLoading to true', () => {
    const startState = { data: [], isLoading: false, hasError: false };
    const expectedState = { data: [], isLoading: true, hasError: false };

    const result = shoppingCartReducer(startState, actions.loadCart());
    expect(result).toEqual(expectedState);
  });

  test('loads data and sets isLoading to false if successful', () => {
    const startState = { data: [], isLoading: true, hasError: false };
    const loadedData = [
      {
        id: 0,
        title: 'ASUS Vivobook 15 X1502ZA-BQ641',
        imageLink: 'https://content.rozetka.com.ua/goods/images/big/30872664.jpg',
        price: 31999,
        count: 3,
      },
    ];
    const expectedState = { data: loadedData, isLoading: false, hasError: false };

    const result = shoppingCartReducer(startState, actions.loadCartSuccess(loadedData));
    expect(result).toEqual(expectedState);
  });

  test('sets hasError to true and isLoading to false if unsuccessful', () => {
    const startState = { data: [], isLoading: true, hasError: false };
    const expectedState = { data: [], isLoading: false, hasError: true };

    const result = shoppingCartReducer(startState, actions.loadCartFail());
    expect(result).toEqual(expectedState);
  });

  test('adds a new item', () => {
    const startState = { data: [], isLoading: false, hasError: false };
    const itemToAdd = {
      id: 0,
      title: 'ASUS Vivobook 15 X1502ZA-BQ641',
      imageLink: 'https://content.rozetka.com.ua/goods/images/big/30872664.jpg',
      price: 31999,
      count: 3,
    };
    const expectedState = { data: [itemToAdd], isLoading: false, hasError: false };

    const result = shoppingCartReducer(startState, actions.addToShoppingCart(itemToAdd));
    expect(result).toEqual(expectedState);
  });

  test('adding an existing item does not make change', () => {
    const itemToAdd = {
      id: 0,
      title: 'ASUS Vivobook 15 X1502ZA-BQ641',
      imageLink: 'https://content.rozetka.com.ua/goods/images/big/30872664.jpg',
      price: 31999,
      count: 3,
    };
    const startState = { data: [itemToAdd], isLoading: false, hasError: false };

    const result = shoppingCartReducer(startState, actions.addToShoppingCart(itemToAdd));
    expect(result).toEqual(startState);
  });

  test('removes an item', () => {
    const id = 0;
    const startState = {
      data: [
        {
          id: id,
          title: 'ASUS Vivobook 15 X1502ZA-BQ641',
          imageLink: 'https://content.rozetka.com.ua/goods/images/big/30872664.jpg',
          price: 31999,
          count: 3,
        },
      ],
      isLoading: false,
      hasError: false,
    };
    const expectedState = { data: [], isLoading: false, hasError: false };

    const result = shoppingCartReducer(startState, actions.removeFromShoppingCart(id));
    expect(result).toEqual(expectedState);
  });

  test('clears cart', () => {
    const startState = {
      data: [
        {
          id: 0,
          title: 'ASUS Vivobook 15 X1502ZA-BQ641',
          imageLink: 'https://content.rozetka.com.ua/goods/images/big/30872664.jpg',
          price: 31999,
          count: 3,
        },
      ],
      isLoading: false,
      hasError: false,
    };
    const expectedState = { data: [], isLoading: false, hasError: false };

    const result = shoppingCartReducer(startState, actions.clearShoppingCart());
    expect(result).toEqual(expectedState);
  });

  test('updates product quantity', () => {
    const startState = {
      data: [
        {
          id: 0,
          title: 'ASUS Vivobook 15 X1502ZA-BQ641',
          imageLink: 'https://content.rozetka.com.ua/goods/images/big/30872664.jpg',
          price: 31999,
          count: 3,
        },
      ],
      isLoading: false,
      hasError: false,
    };
    const id = 0;
    const updatedQuantity = 4;
    const expectedState = {
      data: [
        {
          id: 0,
          title: 'ASUS Vivobook 15 X1502ZA-BQ641',
          imageLink: 'https://content.rozetka.com.ua/goods/images/big/30872664.jpg',
          price: 31999,
          count: 4,
        },
      ],
      isLoading: false,
      hasError: false,
    };

    const result = shoppingCartReducer(startState, actions.updateProductQuantity(id, updatedQuantity));
    expect(result).toEqual(expectedState);
  });
});
