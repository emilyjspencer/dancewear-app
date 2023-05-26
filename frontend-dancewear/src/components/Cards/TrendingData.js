import brands from '../brands.jpg'
import dancewear from '../dancewear.jpg'
import gymnastics from '../gymnastics.jpg'
import shoes from '../tapshoes.jpg'
import tutu from '../tutu.jpg'

const trending = [
    {
      id: 1,
      title: "Dancewear",
      img: <img src={dancewear} />
    },
    {
      id: 2,
      title: "Dance shoes",
      img: <img src={brands} />
    },
    {
      id: 3,
      title: "Costumes",
      img: <img src={shoes} />
    },
    {
      id: 4,
      title: "Gymnastics",
      img: <img src={tutu} />
    },
    {
        id: 5,
        title: "Brands",
        img: <img src={gymnastics} />
      }
  ];


  export default trending;