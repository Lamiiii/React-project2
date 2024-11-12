import "./Card.css";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import img5 from "../img/img10.jpg";
import img6 from "../img/img6.jpg";
import img7 from "../img/img7.jpg";
import img8 from "../img/img8.jpg";
import img9 from "../img/img9.jpg";
import img10 from "../img/img10.jpg";
import img11 from "../img/img11.jpg";
import img12 from "../img/img12.jpg";
import img13 from "../img/img13.jpg";
import img14 from "../img/img14.jpg";
import img15 from "../img/img15.jpg";
import img16 from "../img/img16.jpg";
import img17 from "../img/img17.jpg";

const cards = [
  {
    id: "1",
    img: img1,
    name: "Fjallraven -...",
    paragraph:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 in...",
    price: "$ 109.95",
    button: "Buy Now",
    addbutton: "Add To Cart",
  },
  {
    id: "2",
    img: img2,
    name: "Fjallraven -...",
    paragraph:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 in...",
    price: "$ 109.95",
    button: "Buy Now",
    addbutton: "Add To Cart",
  },
  {
    id: "3",
    img: img3,
    name: "Fjallraven -...",
    paragraph:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 in...",
    price: "$ 109.95",
    button: "Buy Now",
    addbutton: "Add To Cart",
  },
  {
    id: "4",
    img: img4,
    name: "Fjallraven -...",
    paragraph:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 in...",
    price: "$ 109.95",
    button: "Buy Now",
    addbutton: "Add To Cart",
  },
  {
    id: "5",
    img: img5,
    name: "Fjallraven -...",
    paragraph:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 in...",
    price: "$ 109.95",
    button: "Buy Now",
    addbutton: "Add To Cart",
  },
  {
    id: "6",
    img: img6,
    name: "Fjallraven -...",
    paragraph:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 in...",
    price: "$ 109.95",
    button: "Buy Now",
    addbutton: "Add To Cart",
  },
  {
    id: "7",
    img: img7,
    name: "Fjallraven -...",
    paragraph:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 in...",
    price: "$ 109.95",
    button: "Buy Now",
    addbutton: "Add To Cart",
  },
  {
    id: "8",
    img: img8,
    name: "Fjallraven -...",
    paragraph:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 in...",
    price: "$ 109.95",
    button: "Buy Now",
    addbutton: "Add To Cart",
  },
  {
    id: "9",
    img: img9,
    name: "Fjallraven -...",
    paragraph:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 in...",
    price: "$ 109.95",
    button: "Buy Now",
    addbutton: "Add To Cart",
  },
  {
    id: "10",
    img: img10,
    name: "Fjallraven -...",
    paragraph:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 in...",
    price: "$ 109.95",
    button: "Buy Now",
    addbutton: "Add To Cart",
  },
  {
    id: "11",
    img: img11,
    name: "Fjallraven -...",
    paragraph:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 in...",
    price: "$ 109.95",
    button: "Buy Now",
    addbutton: "Add To Cart",
  },
  {
    id: "12",
    img: img12,
    name: "Fjallraven -...",
    paragraph:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 in...",
    price: "$ 109.95",
    button: "Buy Now",
    addbutton: "Add To Cart",
  },
  {
    id: "13",
    img: img13,
    name: "Fjallraven -...",
    paragraph:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 in...",
    price: "$ 109.95",
    button: "Buy Now",
    addbutton: "Add To Cart",
  },
  {
    id: "14",
    img: img14,
    name: "Fjallraven -...",
    paragraph:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 in...",
    price: "$ 109.95",
    button: "Buy Now",
    addbutton: "Add To Cart",
  },
  {
    id: "15",
    img: img15,
    name: "Fjallraven -...",
    paragraph:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 in...",
    price: "$ 109.95",
    button: "Buy Now",
    addbutton: "Add To Cart",
  },
  {
    id: "16",
    img: img16,
    name: "Fjallraven -...",
    paragraph:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 in...",
    price: "$ 109.95",
    button: "Buy Now",
    addbutton: "Add To Cart",
  },
  {
    id: "17",
    img: img17,
    name: "Fjallraven -...",
    paragraph:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 in...",
    price: "$ 109.95",
    button: "Buy Now",
    addbutton: "Add To Cart",
  },
];
export const Card = () => {
  return (
    <>
      <div className="section app">
        <h3>Latest Products</h3>
        <div className="width"></div>
        <div className="simple-button">
          <button>All</button>
          <button>Men's Clothing</button>
          <button>Women's Clothing</button>
          <button>Jelewery</button>
          <button>Electronics</button>
        </div>
      </div>
      <div className="cards-container app row">
        {cards.map((card) => (
          <div key={card.id} className="col-4 card">
            <div className="common">
              <img src={card.img} />
              <div className="bg-color">
                <p className="name">{card.name}</p>
                <p>{card.paragraph}</p>
                <p className="price">{card.price}</p>
                <div className="card-button">
                  <button className="button">
                    <span> {card.button}</span>
                  </button>
                  <button className="button">
                    <span> {card.addbutton}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
