import * as actions from './actions';
import homeReducer from './reducer';

describe('Home Reducer', () => {
  test('returns the initial state', () => {
    const expectedState = { data: [], isLoading: false, hasError: false };
    const result = homeReducer(undefined, { type: undefined });
    expect(result).toEqual(expectedState);
  });

  test('sets isLoading to true', () => {
    const startState = { data: [], isLoading: false, hasError: false };
    const expectedSate = { data: [], isLoading: true, hasError: false };

    const result = homeReducer(startState, actions.loadProductCards());
    expect(result).toEqual(expectedSate);
  });

  test('loads data and sets isLoading to false if successful', () => {
    const startState = { data: [], isLoading: true, hasError: false };
    const loadedData = [
      {
        id: 0,
        title: 'ASUS Vivobook 15 X1502ZA-BQ641',
        imageLink: 'https://content.rozetka.com.ua/goods/images/big/30872664.jpg',
        price: 31999,
      },
      {
        id: 1,
        title: 'Acer Aspire 5 A515-45G-R9ML',
        imageLink: 'https://content1.rozetka.com.ua/goods/images/big/297014689.jpg',
        price: 26999,
      },
    ];
    const expectedState = { data: loadedData, isLoading: false, hasError: false };

    const result = homeReducer(startState, actions.loadProductCardsSuccess(loadedData));
    expect(result).toEqual(expectedState);
  });

  test('sets hasError to true and isLoading to false if unsuccessful', () => {
    const startState = { data: [], isLoading: true, hasError: false };
    const expectedState = { data: [], isLoading: false, hasError: true };

    const result = homeReducer(startState, actions.loadProductCardsFail());
    expect(result).toEqual(expectedState);
  });
});
