import brands from '../brands.jpg'
import dancewear from '../dancewear.jpg'
import gymnastics from '../gymnastics.jpg'
import shoes from '../tapshoes.jpg'
import tutu from '../tutu.jpg'

const trends = [
    {
      id: 1,
      title: "Dancewear",
      img: dancewear,
      url: <a href="/dancewear">Link</a>
    },
    {
      id: 2,
      title: "Dance shoes",
      img: shoes,
      url: <a href="/shoes">Link</a>
    },
    {
      id: 3,
      title: "Costumes",
      img: tutu,
      url: <a href="/costumes">Link</a>
    },
    {
      id: 4,
      title: "Gymnastics",
      img: gymnastics,
      url: <a href="/gymnastics">Link</a>
    },
    {
        id: 5,
        title: "Brands",
        img: brands,
        url: <a href="/brands">Link</a>
      }
  ];


  export default trends;