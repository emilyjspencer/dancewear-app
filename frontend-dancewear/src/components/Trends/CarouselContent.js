
const CarouselContent = ({ current, trends}) => {

    return (
     <div>
            {trends.map((item, index) => (
                <div 
                key={index}
                className={index === current ? "items on": "off"}
                >
                    <img className="carousel-item-image" src={item.img} alt="clothes" />
                    <h2 className="carousel-item-title"><a href={item.url} />{item.title}</h2>

                    <h3 className="carousel-item-text">{item.url}</h3>
                </div>
            ))}
        </div>
    )
}

export default CarouselContent;