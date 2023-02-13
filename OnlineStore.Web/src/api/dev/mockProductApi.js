import delay from './delay';

const acerImg = 'https://content1.rozetka.com.ua/goods/images/big/297014689.jpg';
const appleImg = 'https://content1.rozetka.com.ua/goods/images/big/248481392.jpg';
const asusImg = 'https://content.rozetka.com.ua/goods/images/big/30872664.jpg';

const readData = [
  {
    id: 0,
    title: 'ASUS Vivobook 15 X1502ZA-BQ641',
    imageLink: asusImg,
    price: 31999,
    diagonal: '13.3" (2560x1600) WQXGA',
    refreshRate: '60 Hz',
    processor: 'Octa-core Apple M1',
    operatingSystem: 'macOS Big Sur',
    amountOfRam: '4 Gb',
    ssd: '256 Gb',
    videoCard: 'Integrated',
    wifi: '',
    bluetooth: '5.0',
  },
  {
    id: 1,
    title: 'Acer Aspire 5 A515-45G-R9ML',
    imageLink: acerImg,
    price: 26999,
    diagonal: '13.3" (2560x1600) WQXGA',
    refreshRate: '60 Hz',
    processor: 'Octa-core Apple M1',
    operatingSystem: 'macOS Big Sur',
    amountOfRam: '4 Gb',
    ssd: '256 Gb',
    videoCard: 'Integrated',
    wifi: '',
    bluetooth: '5.0',
  },
  {
    id: 2,
    title: 'Apple MacBook Air 13" M1 256GB',
    imageLink: appleImg,
    price: 42999,
    diagonal: '13.3" (2560x1600) WQXGA',
    refreshRate: '60 Hz',
    processor: 'Octa-core Apple M1',
    operatingSystem: 'macOS Big Sur',
    amountOfRam: '4 Gb',
    ssd: '256 Gb',
    videoCard: 'Integrated',
    wifi: '',
    bluetooth: '5.0',
  },
  {
    id: 3,
    title: 'ASUS Vivobook 15 X1502ZA-BQ641',
    imageLink: asusImg,
    price: 31999,
    diagonal: '13.3" (2560x1600) WQXGA',
    refreshRate: '60 Hz',
    processor: 'Octa-core Apple M1',
    operatingSystem: 'macOS Big Sur',
    amountOfRam: '4 Gb',
    ssd: '256 Gb',
    videoCard: 'Integrated',
    wifi: '',
    bluetooth: '5.0',
  },
  {
    id: 4,
    title: 'Acer Aspire 5 A515-45G-R9ML',
    imageLink: acerImg,
    price: 26999,
    diagonal: '13.3" (2560x1600) WQXGA',
    refreshRate: '60 Hz',
    processor: 'Octa-core Apple M1',
    operatingSystem: 'macOS Big Sur',
    amountOfRam: '4 Gb',
    ssd: '256 Gb',
    videoCard: 'Integrated',
    wifi: '',
    bluetooth: '5.0',
  },
  {
    id: 5,
    title: 'Apple MacBook Air 13" M1 256GB',
    imageLink: appleImg,
    price: 42999,
    diagonal: '13.3" (2560x1600) WQXGA',
    refreshRate: '60 Hz',
    processor: 'Octa-core Apple M1',
    operatingSystem: 'macOS Big Sur',
    amountOfRam: '4 Gb',
    ssd: '256 Gb',
    videoCard: 'Integrated',
    wifi: '',
    bluetooth: '5.0',
  },
  {
    id: 6,
    title: 'ASUS Vivobook 15 X1502ZA-BQ641',
    imageLink: asusImg,
    price: 31999,
    diagonal: '13.3" (2560x1600) WQXGA',
    refreshRate: '60 Hz',
    processor: 'Octa-core Apple M1',
    operatingSystem: 'macOS Big Sur',
    amountOfRam: '4 Gb',
    ssd: '256 Gb',
    videoCard: 'Integrated',
    wifi: '',
    bluetooth: '5.0',
  },
  {
    id: 7,
    title: 'Acer Aspire 5 A515-45G-R9ML',
    imageLink: acerImg,
    price: 26999,
    diagonal: '13.3" (2560x1600) WQXGA',
    refreshRate: '60 Hz',
    processor: 'Octa-core Apple M1',
    operatingSystem: 'macOS Big Sur',
    amountOfRam: '4 Gb',
    ssd: '256 Gb',
    videoCard: 'Integrated',
    wifi: '',
    bluetooth: '5.0',
  },
];

class ProductApi {
  static getProduct(id) {
    const product = readData.find(p => p.id === Number(id));

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (product) {
          resolve({ data: product });
        } else {
          reject();
        }
      }, delay);
    });
  }
}

export default ProductApi;
