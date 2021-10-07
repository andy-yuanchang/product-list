import { v4 as uid } from 'uuid';

let products = [{
  id: uid(),
  title: "Fantastic electronic candle that you could put it onto the table, and just read books at the table, or whatever you want to",
  price: (Math.random() * 1000).toFixed(0),
  stars: Math.ceil(Math.random() * 4) + (Math.random() > 0.5 ? 1 : 0.5),
  imageList: new Array(9).fill(0).map((_, index) => `/assets/images/electronic candle/${index+1}.jpg`),
  discount: (Math.random() * 100).toFixed(0)
}, {
  id: uid(),
  title: "Boys, buy this and give it to your girlfriend!",
  price: (Math.random() * 1000).toFixed(0),
  stars: Math.ceil(Math.random() * 4) + (Math.random() > 0.5 ? 1 : 0.5),
  imageList: new Array(9).fill(0).map((_, index) => `/assets/images/flower/${index+1}.jpg`),
  discount: (Math.random() * 100).toFixed(0)
}, {
  id: uid(),
  title: "Ipad needs your protection, please kindly help them.",
  price: (Math.random() * 1000).toFixed(0),
  stars: Math.ceil(Math.random() * 4) + (Math.random() > 0.5 ? 1 : 0.5),
  imageList: new Array(9).fill(0).map((_, index) => `/assets/images/ipad protective case/${index+1}.jpg`),
  discount: (Math.random() * 100).toFixed(0)
}, {
  id: uid(),
  title: "It's a stamp.",
  price: (Math.random() * 1000).toFixed(0),
  stars: Math.ceil(Math.random() * 4) + (Math.random() > 0.5 ? 1 : 0.5),
  imageList: new Array(9).fill(0).map((_, index) => `/assets/images/stamp/${index+1}.jpg`),
  discount: (Math.random() * 100).toFixed(0)
}, {
  id: uid(),
  title: "The wallet was made of leather. The long time you own it, the more classic the wallet could be.",
  price: (Math.random() * 1000).toFixed(0),
  stars: Math.ceil(Math.random() * 4) + (Math.random() > 0.5 ? 1 : 0.5),
  imageList: new Array(9).fill(0).map((_, index) => `/assets/images/wallet/${index+1}.jpg`),
  discount: (Math.random() * 100).toFixed(0)
}, {
  id: uid(),
  title: "It's a bluetooth music box. It's convenient.",
  price: (Math.random() * 1000).toFixed(0),
  stars: Math.ceil(Math.random() * 4) + (Math.random() > 0.5 ? 1 : 0.5),
  imageList: new Array(9).fill(0).map((_, index) => `/assets/images/wireless bluetooth music box/${index+1}.jpg`),
  discount: (Math.random() * 100).toFixed(0)
}, {
  id: uid(),
  title: "It looks quite expensive.",
  price: (Math.random() * 1000).toFixed(0),
  stars: Math.ceil(Math.random() * 4) + (Math.random() > 0.5 ? 1 : 0.5),
  imageList: ['/assets/images/case/1.jpg'],
  discount: (Math.random() * 100).toFixed(0)
}];

for (let i = 0; i < 5; i++) {
  products = products.concat(products.slice().map(product => ({
    ...product,
    id: uid(),
    stars: Math.ceil(Math.random() * 4) + (Math.random() > 0.5 ? 1 : 0.5),
    discount: (Math.random() * 100).toFixed(0)
  })));
}

export {
  products
}