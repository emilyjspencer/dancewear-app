import brands from '../brands.jpg'
import dancewear from '../dancewear.jpg'
import gymnastics from '../gymnastics.jpg'
import shoes from '../tapshoes.jpg'
import tutu from '../tutu.jpg'

const trending = [
    {
      id: 1,
      title: "Dancewear",
      img: <img src={dancewear} />,
      url: "/dancewear"
    },
    {
      id: 2,
      title: "Dance shoes",
      img: <img src={brands} />,
      url: "/shoes"
    },
    {
      id: 3,
      title: "Costumes",
      img: <img src={shoes} />,
      url: "/costumes"
    },
    {
      id: 4,
      title: "Gymnastics",
      img: <img src={tutu} />,
      url: "/gymnastics"
    },
    {
        id: 5,
        title: "Brands",
        img: <img src={gymnastics} />,
        url: "/brands"
      }
  ];


  export default trending;