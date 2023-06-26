import {useEffect, useState} from 'react';


const ProductDetailView = ({ product }) => {
    const [productDetail, setProductDetail] = useState(null);

    useEffect(() => {
      (async () => {
        const res = await fetch(`http://localhost:8080/api/products/${product.id}`);
        const json = await res.json();
        setProductDetail(json);
      })();
    }, [product]);
  
    if (!productDetail) {
      return <div>......................................................</div>;
    }
  
    return (
      <div className="product-detail-container">
        {productDetail && (
          <>
            <ul className="product-detail-list">
            <li>Name: {productDetail.name}</li>
            <li>Description: {productDetail.description}</li>
            <li>Price: {productDetail.price}</li>
            </ul>
            <button>Go Back</button>
          </>
        )}
      </div>
    );
  };


  export default ProductDetailView;