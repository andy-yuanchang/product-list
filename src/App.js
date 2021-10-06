import './App.css';
import PopupModal from './components/PopupModal';
import Card from './components/Card';
import { useState } from 'react';
import { v4 as uid } from 'uuid';

let products = [{
  id: uid(),
  title: "TEST 1",
  price: (Math.random() * 1000).toFixed(0),
  stars: 5,
  imageList: [
    '/assets/images/p09043632817-item-8b03xf4x0800x0800-m.jpeg',
    '/assets/images/p039251421684-item-9ef9xf4x0250x0250-m.jpeg'
  ],
  discount: 10
}, {
  id: uid(),
  title: "This is a keyboard from yahoo",
  price: (Math.random() * 1000).toFixed(0),
  stars: 4.5,
  imageList: [
    '/assets/images/p039251421684-item-9ef9xf4x0250x0250-m.jpeg',
    // '/assets/images/p09043632817-item-8b03xf4x0800x0800-m.jpeg'
  ],
  discount: 20
}, {
  id: uid(),
  title: "This is a headset from yahoo",
  price: (Math.random() * 1000).toFixed(0),
  stars: 4.5,
  imageList: [
    '/assets/images/p088581873018-item-6472xf4x0270x0270-m.jpeg',
    '/assets/images/p0310161864519-item-d105xf4x0910x0910-m.jpeg'
  ],
  discount: 20
}, {
  id: uid(),
  title: "This is something useful from yahoo",
  price: (Math.random() * 1000).toFixed(0),
  stars: 4.5,
  imageList: [
    '/assets/images/p0310161864519-item-d105xf4x0910x0910-m.jpeg',
    '/assets/images/p088581873018-item-6472xf4x0270x0270-m.jpeg'
  ],
  discount: 20
}, {
  id: uid(),
  title: "This is a jewelry from yahoo",
  price: (Math.random() * 1000).toFixed(0),
  stars: 4.5,
  imageList: [
    '/assets/images/52c344cf-67ee-480c-8f2e-88f827e868c1.jpg',
    '/assets/images/107dd7fb-753b-405d-9f7f-ca6728eafebf.jpg',
    '/assets/images/67698407-1ecc-4cdd-8860-2d21fb5338dc.jpg',
    '/assets/images/adf9593a-2934-4dd9-bee7-e59f4ff2bc2f.jpg'
  ],
  discount: 20
}, {
  id: uid(),
  title: "This is a camera from yahoo",
  price: (Math.random() * 1000).toFixed(0),
  stars: 4.5,
  imageList: [
    '/assets/images/p0445226437796-item-1be3xf4x1000x1000-m.jpeg',
    '/assets/images/p0677218370727-item-ddb2xf4x1000x1000-m.jpeg'
  ],
  discount: 20
}, {
  id: uid(),
  title: "Orren Ellis Chana 3-Light LED Kitchen Island Dome Pendant",
  price: (Math.random() * 1000).toFixed(0),
  stars: 4.5,
  imageList: [
    '/assets/images/p0310175756880-item-0ba4xf4x0500x0500-m.jpeg',
    '/assets/images/p0310193811326-item-aeecxf4x0700x0699-m.jpeg',
    '/assets/images/p0310196455967-item-b1f1xf4x0549x0524-m.jpeg'
  ],
  discount: 20
}];

for (let i = 0; i < 5; i++) {
  products = products.concat(products.slice().map(product => ({
    ...product,
    id: uid(),
    stars: Math.ceil(Math.random() * 4) + (Math.random() > 0.5 ? 1 : 0.5)
  })));
}

function App() {
  const [collectedProductIDs, setCollectedProductIDs] = useState([]);
  const [shouldRenderModal, setShouldRenderModal] = useState(false);

  function handleClickProductItem(productID) {
    const index = collectedProductIDs.findIndex(id => id === productID);
    if (index !== -1) {
      collectedProductIDs.splice(index, 1);
      setCollectedProductIDs([
        ...collectedProductIDs
      ]);
      return;
    }
    setCollectedProductIDs([
      ...collectedProductIDs,
      productID
    ]);
  }

  function handleClickButton() {
    setShouldRenderModal(true);
  }

  function renderModalContent() {
    return (
      <ul className="collected-products">
        {
          collectedProductIDs.map(productID => {
            const product = products.find(product => product.id === productID);
            return (
              <li key={productID} className="collected-products__item">
                <div className="image-mask">
                  <img
                    src={product.imageList[0]}
                    alt={product.title}
                  />
                </div>
                <section>{product.title}</section>
              </li>
            )
          })
        }
      </ul>
    )
  }

  return (
    <div className="App">
      <ul className="product-list">
        {
          products.map(product => {
            return (
              <li
                key={product.id}
                className="product-list__item"
              >
                {
                  <Card
                    imageList={product.imageList}
                    title={product.title}
                    price={product.price}
                    stars={product.stars}
                    discount={product.discount}
                    isCollected={collectedProductIDs.find(id => id === product.id)}
                    onClick={(_) => handleClickProductItem(product.id)}
                  />
                }
              </li>
            )
          })
        }
      </ul>
      <footer className="footer-content">
        <button className="footer-content__button" onClick={handleClickButton}>
          {`${collectedProductIDs.length} ${collectedProductIDs.length <= 1 ? "product" : "products"} in Wishlist`}
        </button>
      </footer>
      {
        shouldRenderModal && (
          <PopupModal
            renderContent={renderModalContent}
            onClose={() => setShouldRenderModal(false)}
          />
        )
      }
    </div>
  );
}

export default App;
