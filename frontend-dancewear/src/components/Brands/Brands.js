import { useState, useEffect} from 'react';
import './Brands.css';
import Cards from '../Cards/Cards';
import BrandsService from './BrandsService';
import { Link } from 'react-router-dom';
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


const BrandsPage = () => {
const [brands, setBrands] = useState([]);
const [brandDetail, setBrandDetail] = useState(null);
const [modalOpen, setModalOpen] = useState(false);

const [searchBrandName, setSearchBrandName] = useState("");
const [currentBrand, setCurrentBrand] = useState(null);
const [currentIndex, setCurrentIndex] = useState(null);
const [brandName, setBrandName ] = useState(null);
const [searchId, setId] = useState("");


const onChangeSearchBrandName = (e) => {
  const searchBrandName = e.target.value;
  setSearchBrandName(searchBrandName);
}

const getBrands = () => {
  BrandsService.getAll()
   .then(response => {
    setBrands(response.data);
    
   })
   .catch(e => {
    console.log(e);
   })
}

const resetBrands = () => {
  getBrands();
  setCurrentBrand(null);
  setCurrentIndex(-1);
}

const deleteAllBrands = () => {
  BrandsService.removeAll()
    .then(response => {
      console.log(response.data);
      console.log('deleteAllBrands button has been clicked')
      resetBrands();
    })
    .catch(e => {
      console.log(e);
    });
  
}

const findByBrandName = () => {
  BrandsService.findByBrandName(searchBrandName)
    .then(response => {
      setBrands(response.data);
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
};

const setActiveBrand = (brand, index) => {
  setCurrentBrand(brand);
  setCurrentIndex(index);
};

useEffect(() => {
  getBrands()
}, [])

return (
  <>
      <div className="search-add-container">
        <div className="search-container">
          <input type="text" className="" placeholder="Search brands"
            value={searchBrandName} onChange={onChangeSearchBrandName} />

      <div className="search-button">
            <button
              className=""
              type="button"
              onClick={findByBrandName}
            >
              Search Brands
            </button>
          </div>

          <div className="search-add-container">
        <Link to={"/brands/add"} className="add-brand">Add new brand</Link>
      </div>

      <h4>Brand info</h4>
      {brands.length > 0 && (
        <ul className="brands-container">
        
        {brands.filter((brand) => {
          return searchId === "" ? brand : brand.brand_id.toString() === searchId
      }).filter((brand) => {
        return searchBrandName === "" ? brand : brand.name.toLowerCase().includes(searchBrandName.toLowerCase())
     

      }).map((brand, index) => (
<>
  <div id="card-modal-button" key={brand.id} onClick={(e) => {
    setBrandDetail(brand);
    setModalOpen(e); setActiveBrand(brand, index);
  } }>


    <Cards
      imgSrc="https://picsum.photos/id/201/300/300"
      imgAlt="placeholder image for brand"
      text1={`Brand: ${brand.name}`}
      text2={`Description: ${brand.description}`}
      text3={`Price: ${brand.price}`} />
  
    <Link
      to={"/brands/" + brand.brand_id} 
      className=""
    >
      Edit Brand Information/ Delete
    </Link>
    </div>
    </>
   ))}
    </ul>
      )}

{brandDetail ? <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={modalStyles}
        brand={brandDetail}
      >

        <ul className="brand-detail-list">
          <li><strong>Job role: </strong> {brandDetail.name}</li>
          <li><strong>Location: </strong>{brandDetail.description}</li>
          <li><strong>Number of positions: </strong>{brandDetail.price}</li>
    
          
        </ul>

      </Modal> : ""}

      <button className=""  onClick={deleteAllBrands}
      >Delete all</button>  
      </div></div> 
      </>
  );
}


export default BrandsPage;