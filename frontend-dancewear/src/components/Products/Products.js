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

  const [searchId, setId] = useState("");


  const [searchBrand, setBrand] = useState("");


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

  return (
  
    <><><>
      <div className="search-add-container">
        
        <Link to={"/products/add"} className="add-product">Add new product</Link>
      </div>
      

      <div>
              <div className="main">
                  <div className="search-container">
                      <div className="">
                          <input type="number" placeholder="Search .." name="searchId" onChange={(event) => setId(event.target.value)}></input>
                          <input type="text" placeholder="Search by product name" name="searchProductName" onChange={(event) => setSearchProductName(event.target.value)}></input>
                          <select className="dropbtnfilter" onChange={(event) => setBrand(event.target.value)}>
                  <option value="">Search by brand</option>
                  <option value="katz">Katz</option>
                  <option value="pineapple">Pineapple</option>
                  <option value="ballet rosa">Ballet Rosa</option>
                  <option value="revolution">Revolution</option>
                  <option value="capezio">Capezio</option>
                  <option value="little ballerina">Little Ballerina</option>
                  <option value="bloch">Bloch</option>
               
                  </select>

                          
                      </div>
                  </div>
              </div>
      </div>
      <h4>Click on each card to learn more about each product</h4>
      {products.length > 0 && (
        <ul className="products-list-container">
            <>
            {products.filter((product) => {
                      return searchId === "" ? product : product.product_id.toString() === searchId
                  }).filter((product) => {
                    return searchProductName === "" ? product : product.product_name.toLowerCase().includes(searchProductName)
                  }).filter((product) => {
                    return searchBrand === "" ? product : product.brand.brand_name.toLowerCase().includes(searchBrand)
                  }).map((product, index) => (

              <div id="card-modal-button" key={product.product_id}
                onClick={(e) => {
                  setActiveProduct(product, index); setProductDetail(product);
                  setModalOpen(e);
                } }>

                <Cards
                  imgSrc="https://picsum.photos/seed/picsum/200/300"
                  imgAlt="Product placeholder"
                  text1={`Product : ${product.product_name}`}
                  text2={`Description: ${product.description}`}
                  text3={`Price: ${product.price}`} />

                <Link
                  to={"/products/" + product.product_id}
                  className=""
                >
                  Edit Product Details
                </Link>

                <Link
                  to={"/basket/" + product.product_id}
                  className=""
                >
                  Add to basket
                </Link>
              </div>))}
            </>
        
        </ul>
      )}

      {productDetail ? <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={modalStyles}
        product={productDetail}>

        <ul className="product-detail-list">
          <li><strong>Name: </strong> {productDetail.product_name}</li>
          <li><strong>Description: </strong>{productDetail.description}</li>
          <li><strong>Price: </strong>{productDetail.price}</li>
          <li><strong>Brand: </strong>{productDetail.brand.brand_name}</li>
          <li><strong>Category: </strong>{productDetail.category.category_name}</li>

        </ul>
      </Modal> : ""}
    </>
      <button
        className=""
        onClick={deleteAllProducts}
      >
        Delete all
      </button></>
      </>

  
  );
};


export default Products;