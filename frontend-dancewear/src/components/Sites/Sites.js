import './Sites.css'
import SitesData from './Sitesdata';

const Sites = () => {

    let sites = [
      {url: "https://www.dancemagazine.com/", name: "Dance Magazine"},
      {url: "https://www.thewonderfulworldofdance.com/", name: "The Wonderful World of Dance"},
      {url: "https://www.insidedance.com/", name: "Inside Dance"},
      {url:  "https://dancespirit.com/", name: "Dance Spirit"},
      {url: "https://www.onedanceuk.org/", name: "One Dance"}, 
        ];

    return (
        <>
        <div className="sites-container">
          <h1>Dance sites</h1>
        <ul>
        {sites.map(site => {
            
            return <><p>{site.name}: </p><a href={site.url}>{site.name}</a></>
        })}
        </ul>
      </div>
    </>
    )

}


export default Sites;