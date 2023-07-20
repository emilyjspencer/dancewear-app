import { useState, useEffect } from 'react';
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
  const [brand_name, setBrandName] = useState(null);
  const [searchId, setId] = useState("");
  const [searchBrand, setBrand] = useState(null);


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
    <div class="about">
          <h4>Our brands</h4>
          <p className="info">Starbound provides you with an exceptional range of dancewear to prepare you for class, studio and stage stardom! From dance underwear essentials to beautiful fashion leotards from industry leading brands including Bloch,
           Capezio, 1st Position, and more - find the dancewear look that works for you! Take a look at our dance fitness collection - perfect for keeping fit in the studio or from home! Shopping for little ones? Our dancewear comes in a range of colours and
            sizes so be sure to find the right leotard for your little dancer's ballet class. With great in stock availability of dance leotards, tutus, dance skirts, tutu skirts, t-shirts & dance tops, crop tops, dance pants & leggings, shorts & hot pants, dance 
            tights, socks and warm ups - Starbound is the dancer's go-to for dancewear.</p>
          </div>
      <div className="brands-container">
        <div className="search-container">

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
          
          {brands.length > 0 && (
            <ul className="brands-list-container">

              {brands.filter((brand) => {
                return searchId === "" ? brand : brand.brand_id.toString() === searchId
              }).filter((brand) => {
                return searchBrandName === "" ? brand : brand.brand_name.toLowerCase().includes(searchBrandName.toLowerCase())


              }).map((brand, index) => (
                <>
                  <div id="card-modal-button" key={brand.brand_id} onClick={(e) => {
                    setBrandDetail(brand);
                    setModalOpen(e); setActiveBrand(brand, index);
                  }}>


                    <Cards
                      imgSrc="https://picsum.photos/id/201/300/300"
                      imgAlt="placeholder image for brand"
                      text1={`Brand: ${brand.brand_name}`}

                    />

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
              <li><strong>Brand name: </strong> {brandDetail.brand_name}</li>
              <li><strong>Description: </strong>{brandDetail.description}</li>
            </ul>

          </Modal> : ""}

         <div className="add-delete">
          <div className="add-container">
            <Link to={"/brands/add"} className="add-brand">Add new brand</Link>
          </div>

          <button className="" onClick={deleteAllBrands}
          >Delete all</button>
        </div>
        </div>
    </>
  );
}


export default BrandsPage;