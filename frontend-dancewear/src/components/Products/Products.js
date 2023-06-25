import { useState, useEffect} from 'react';
import './Products.css';

import ProductsService from './ProductsService';
import { Link } from "react-router-dom";
import Cards from '../Cards/Cards';
import Modal from 'react-modal';


const modalStyles = {
  content: {
    backgroundColor: "white",
    border: "solid 4 blue",
    width: 650,
    padding: 40,
    height: 600,
    color: "black",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
   
  },
};



const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchProductName, setSearchProductName] = useState("");
  const [productDetail, setProductDetail] = useState(null);

  const [modalOpen, setModalOpen] = useState(false);


  useEffect(() => {
    getProducts();
  }, []);

  const onChangeSearchProductName = e => {
    const searchProductName = e.target.value;
    setSearchProductName(searchProductName);
  };

  const getProducts = () => {
    ProductsService.getAll()
      .then(response => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const resetProducts = () => {
    getProducts();
    setCurrentProduct(null);
    setCurrentIndex(-1);
  };

  const setActiveProduct = (product, index) => {
    setCurrentProduct(product);
    setCurrentIndex(index);
  };

  const deleteAllProducts = () => {
    ProductsService.removeAll()
      .then(response => {
        console.log(response.data);
        resetProducts();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByProductName = () => {
    ProductsService.findByProductName(searchProductName)
      .then(response => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
  
    <>
    <div className="">
      <h4>Our Products</h4>
      <div className="search-container">
        <input type="text" className="" placeholder="Search by product name"
        value={searchProductName}  onChange={onChangeSearchProductName} />
      </div>
      <Link to={"/products/add"} className="add-product">Add new product</Link>

      <div className="">
            <button
              className=""
              type="button"
              onClick={findByProductName}
            >
              Search Products
            </button>
          </div>
      <ul className="products-list-container">
        {products &&
          products.map((product, index) => (
            <>
            <li>
            <button key={product.id} className="product"
            onClick={(e) => { setActiveProduct(product, index); setProductDetail(product);
               setModalOpen(e)}} >View more information
            </button>
            <Cards
              imgSrc="https://picsum.photos/seed/picsum/200/300"
              imgAlt="Product placeholder"
              text1={`Product : ${product.name}`}
              text2={`Description: ${product.description}`}
              text3={`Price: ${product.price}`} 
              onClick={(e) => {setModalOpen(e)}}
              />
      
              <Link
                  to={"/products/" + product.id}
                  className=""
                >
                  Edit Product Details
                </Link>

                <Link
                  to={"/basket/" + product.id}
                  className=""
                >
                 Add to basket
                </Link>
              </li>
              </>))}
              </ul>

                {productDetail ? <Modal
          isOpen={modalOpen}
          onRequestClose={() => setModalOpen(false)}
          style={modalStyles}
          product={productDetail}>
          
        <ul className="product-detail-list">
            <li><strong>Name: </strong> {productDetail.name}</li>
            <li><strong>Description: </strong>{productDetail.description}</li>
            <li><strong>Price: </strong>{productDetail.price}</li>
            
          </ul>
            </Modal> : "" }

           
      
  

          <button
            className=""
            onClick={deleteAllProducts}
          >
            Delete all
          </button>
          
        </div>
        <div className="">
            {currentProduct ? (
              <div>
                <h4>Product</h4>
                <div>
                  <label>
                    <strong>Product </strong>
                  </label>
                </div>
                <div>
                  <label>
                    <strong>Description:</strong>
                  </label>{" "}
                  {currentProduct.description}
                </div>
                <div>
                  <label>
                    <strong>Price:</strong>
                  </label>{" "}
                  {currentProduct.price}
                </div>

          
              </div>
            ) : (
              <div>
                <br />

              </div>
            )}
          </div></>

  
  );
};


export default Products;