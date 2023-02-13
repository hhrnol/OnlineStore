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
  },
  {
    id: 1,
    title: 'Acer Aspire 5 A515-45G-R9ML',
    imageLink: acerImg,
    price: 26999,
  },
  {
    id: 2,
    title: 'Apple MacBook Air 13" M1 256GB',
    imageLink: appleImg,
    price: 42999,
  },
  {
    id: 3,
    title: 'ASUS Vivobook 15 X1502ZA-BQ641',
    imageLink: asusImg,
    price: 31999,
  },
  {
    id: 4,
    title: 'Acer Aspire 5 A515-45G-R9ML',
    imageLink: acerImg,
    price: 26999,
  },
  {
    id: 5,
    title: 'Apple MacBook Air 13" M1 256GB',
    imageLink: appleImg,
    price: 42999,
  },
  {
    id: 6,
    title: 'ASUS Vivobook 15 X1502ZA-BQ641',
    imageLink: asusImg,
    price: 31999,
  },
  {
    id: 7,
    title: 'Acer Aspire 5 A515-45G-R9ML',
    imageLink: acerImg,
    price: 26999,
  },
];

class HomeApi {
  static getProductCards() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: readData });
      }, delay);
    });
  }

  static GetProductCardById(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: { productCard: readData.productCards.find(p => p.id === id) } });
      }, delay);
    });
  }
}

export default HomeApi;
