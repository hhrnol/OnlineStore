import * as actions from './actions';
import productReducer from './reducer';

describe('Product Reducer', () => {
  test('returns the initial state', () => {
    const expectedState = {
      data: {
        id: null,
        title: '',
        imgSrc: null,
        price: '',
        screen: {
          diagonal: '',
          refreshRate: '',
        },
        cpu: {
          processor: '',
          operatingSystem: '',
        },
        ram: {
          amountOfRam: '',
        },
        storage: {
          ssd: '',
        },
        gpu: {
          videoCard: '',
        },
        networkAdapters: {
          wifi: '',
          bluetooth: '',
        },
      },
      isLoading: false,
      hasError: false,
    };
    const result = productReducer(undefined, { type: undefined });
    expect(result).toEqual(expectedState);
  });

  test('sets isLoading to true', () => {
    const startState = {
      data: {
        id: null,
        title: '',
        imgSrc: null,
        price: '',
        screen: {
          diagonal: '',
          refreshRate: '',
        },
        cpu: {
          processor: '',
          operatingSystem: '',
        },
        ram: {
          amountOfRam: '',
        },
        storage: {
          ssd: '',
        },
        gpu: {
          videoCard: '',
        },
        networkAdapters: {
          wifi: '',
          bluetooth: '',
        },
      },
      isLoading: false,
      hasError: false,
    };
    const expectedSate = {
      data: {
        id: null,
        title: '',
        imgSrc: null,
        price: '',
        screen: {
          diagonal: '',
          refreshRate: '',
        },
        cpu: {
          processor: '',
          operatingSystem: '',
        },
        ram: {
          amountOfRam: '',
        },
        storage: {
          ssd: '',
        },
        gpu: {
          videoCard: '',
        },
        networkAdapters: {
          wifi: '',
          bluetooth: '',
        },
      },
      isLoading: true,
      hasError: false,
    };

    const result = productReducer(startState, actions.loadProduct());
    expect(result).toEqual(expectedSate);
  });

  test('loads product and sets isLoading to false if successful', () => {
    const startState = {
      data: {
        id: null,
        title: '',
        imgSrc: null,
        price: '',
        screen: {
          diagonal: '',
          refreshRate: '',
        },
        cpu: {
          processor: '',
          operatingSystem: '',
        },
        ram: {
          amountOfRam: '',
        },
        storage: {
          ssd: '',
        },
        gpu: {
          videoCard: '',
        },
        networkAdapters: {
          wifi: '',
          bluetooth: '',
        },
      },
      isLoading: true,
      hasError: false,
    };
    const loadedProduct = {
      id: 0,
      title: 'ASUS Vivobook 15 X1502ZA-BQ641',
      imageLink: 'https://content.rozetka.com.ua/goods/images/big/30872664.jpg',
      price: 31999,
      screen: {
        diagonal: '13.3" (2560x1600) WQXGA',
        refreshRate: '60 Hz',
      },
      cpu: {
        processor: 'Octa-core Apple M1',
        operatingSystem: 'macOS Big Sur',
      },
      ram: {
        amountOfRam: '4 Gb',
      },
      storage: {
        ssd: '256 Gb',
      },
      gpu: {
        videoCard: 'Integrated',
      },
      networkAdapters: {
        wifi: '',
        bluetooth: '5.0',
      },
    };
    const expectedState = { data: loadedProduct, isLoading: false, hasError: false };

    const result = productReducer(startState, actions.loadProductSuccess(loadedProduct));
    expect(result).toEqual(expectedState);
  });

  test('sets hasError to true and isLoading to false if unsuccessful', () => {
    const startState = {
      data: {
        id: null,
        title: '',
        imgSrc: null,
        price: '',
        screen: {
          diagonal: '',
          refreshRate: '',
        },
        cpu: {
          processor: '',
          operatingSystem: '',
        },
        ram: {
          amountOfRam: '',
        },
        storage: {
          ssd: '',
        },
        gpu: {
          videoCard: '',
        },
        networkAdapters: {
          wifi: '',
          bluetooth: '',
        },
      },
      isLoading: true,
      hasError: false,
    };
    const expectedState = {
      data: {
        id: null,
        title: '',
        imgSrc: null,
        price: '',
        screen: {
          diagonal: '',
          refreshRate: '',
        },
        cpu: {
          processor: '',
          operatingSystem: '',
        },
        ram: {
          amountOfRam: '',
        },
        storage: {
          ssd: '',
        },
        gpu: {
          videoCard: '',
        },
        networkAdapters: {
          wifi: '',
          bluetooth: '',
        },
      },
      isLoading: false,
      hasError: true,
    };

    const result = productReducer(startState, actions.loadProductFail());
    expect(result).toEqual(expectedState);
  });
});
