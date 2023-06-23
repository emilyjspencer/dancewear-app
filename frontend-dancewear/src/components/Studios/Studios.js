import './Studios.css';


const Studios = () => {

    
let studios = [
    {url: "https://atyourbeat.com/", name: "At Your Beat"},
    
    {url: "https://www.basedancestudios.com/", name: "Base Dance Studios"},
    
    {url: "https://www.pineapple.uk.com/", name: "Pineapple Dance Studios"},
    
    {url: "https://flowdance-london.co.uk/", name: "Flow Dance Studios"},
    
    {url: "https://www.city-academy.com/dance-classes?gad=1&gclid=CjwKCAjwhdWkBhBZEiwA1ibLmL51Dnyb6qMHgG7ZBDY-pQ_HID61D47HaL_DrhBjf6sjzeEXdYQjtRoCmowQAvD_BwE", name: "City Academy"},
    
    {url: "https://rambert.org.uk/", name: "Rambert"},
    {url: "https://studio68london.net/", name: "Studio 68"}
    ];

    return (
        <>
        <h1>Dance Studios</h1>
        <ul>
        {studios.map(studio => {
            
            return <><p>{studio.name}: </p><a href={studio.url}>{studio.name}</a></>
        })}
        </ul>
        </>
    )
}

export default Studios;
