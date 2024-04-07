import { useState, useEffect } from "react";
import { MongoClient } from "mongodb";

import ProductDetails from "../../components/product-details";
import Cart from "../../components/cart";
import styles from "./Catalog.module.scss";
import products from "./products.json"; // Remove this if you have an api and db

// Server side rendering (needs api to work)
// export async function getServerSideProps(context) {
//   async function getProducts() {
//     const uri = process.env.MONGODB_CONNECTION_STRING;
//     const dbName = process.env.MONGO_DB_NAME;
//     const client = await MongoClient.connect(uri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     const collection = client.db(dbName).collection("albums");

//     const albums = await collection.find({}).toArray();

//     client.close();

//     return albums;
//   }
//   const productsFromDb = await getProducts();

//   return { props: { products: productsFromDb } };
// }

// Static generation + incremental static generation
export async function getStaticProps() {
  async function getProducts() {
    const uri = process.env.MONGODB_CONNECTION_STRING;
    const dbName = process.env.MONGO_DB_NAME;
    const client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const collection = client.db(dbName).collection("albums");

    const albums = await collection.find({}).toArray();

    client.close();

    return albums;
  }
  const productsFromDb = await getProducts();

  // Revalidate means it will trigger another static regeneration (refresh the content) every x seconds
  return { props: { products: productsFromDb }, revalidate: 60 };
}

function Catalog({ products }) {
  const [cart, setCart] = useState({ products: [] });
  // const [products, setProducts] = useState([]); // If you have an api and db

  // If you have an api and db
  // function fetchProducts() {
  //   fetch("/api/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }
  //
  // useEffect(() => fetchProducts(), []);

  function addToCart(product) {
    const newCart = { _id: cart._id };
    newCart.products = [...cart.products, { ...product }];
    setCart(newCart);
  }

  function removeItemFromCart(product) {
    const newCart = { _id: cart._id };
    newCart.products = cart.products.filter((item) => item !== product);
    setCart(newCart);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainLeft}>
          <h1 className={styles.header}>Catalog</h1>
          <ul className={styles.products}>
            {products.map((product, index) => (
              <li key={index}>
                <ProductDetails product={product} addToCart={addToCart} />
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.rightSidebar}>
          <h2>Cart</h2>
          <Cart
            cartItems={cart.products}
            removeItemFromCart={removeItemFromCart}
          />
        </div>
      </div>
    </>
  );
}

export default Catalog;
