import './App.css';
import PopupModal from './components/PopupModal';
import Card from './components/Card';
import { useState } from 'react';
import { products } from './mock/mock-product-items';

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
