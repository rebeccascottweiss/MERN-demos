import React, { useEffect, useState } from "react";

const Product = (props) => {
  const [product, setProduct] = useState(null);

  // pretend to get product from database
  function getProductData() {
    setTimeout(() => {
      setProduct({
        name: "Bread Gloves",
        brand: "Leaven Life",
        soldCount: 0,
        imgUrl:
          "https://external-preview.redd.it/9Ibs6tuJH8lg_GPQ2iMzYbtVfMHomSKlsmXnkTt3E88.jpg?auto=webp&s=610bb7f652f17072f2d4ad15bf390f8095d29eb8",
      });
    }, 2000);
  }

  /**
   * passing an empty array as the 2nd argument to useEffect means that useEffect
   * will only be executed once on the first load of the component
   */
  useEffect(() => {
    getProductData();
  }, []);

  function buy(event) {
    // spread / copy all the current product key value pairs into a NEW object
    const productCopy = { ...product };
    productCopy.soldCount = productCopy.soldCount + 1;

    // won't cause the page to re-render unless a new object is passed in
    setProduct(productCopy);

    // shorthand
    // setProduct({ ...product, soldCount: product.soldCount + 1 });
  }

  if (product === null) {
    return (
      <div>
        <img
          height="500"
          src="https://media.giphy.com/media/w9yg6QsZJ3JC/giphy.gif"
          alt="Loading"
        />
      </div>
    );
  }

  return (
    <div>
      <h2>Product: {product.name}</h2>
      <h4>Brand: {product.brand}</h4>
      <h3>Sold Count: {product.soldCount}</h3>
      <img width="30%" src={product.imgUrl} alt="Product" />
      <button
        onClick={(event) => {
          buy(event);
        }}
      >
        BUY NOW
      </button>

      {/* <button onClick={buy}>BUY NOW</button> */}
    </div>
  );
};

export default Product;
