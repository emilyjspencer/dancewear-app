
import {useEffect, useState} from 'react';



const BrandDetailView = ({ brand }) => {
    const [brandDetail, setBrandDetail] = useState(null);

    useEffect(() => {
      (async () => {
        const res = await fetch(`http://localhost:8080/api/brands/${brand.brand_id}`);
        const json = await res.json();
        setBrandDetail(json);
      })();
    }, [brand]);
  
    if (!brandDetail) {
      return <div>........loading....</div>;
    }

    
  
    return (
      <div className="brand-detail-container">
        {brandDetail && (
          <>
            <ul className="brand-detail-list">
            <li>Job role: {brand.brand_name}</li>
            <li>Company: {brand.brand_description}</li>
           
            </ul>
            <button>Go Back</button>
          </>
        )}
      </div>
    );
  };


  export default BrandDetailView;