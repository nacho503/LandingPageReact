import Card from "./Card";
import "bootstrap/dist/css/bootstrap.css";

let datos = [
  {
    key: 1,
    title: "Gallery 1",
    url: "https://picsum.photos/id/238/500/325",
  },
  {
    key: 2,
    title: "Gallery 2",
    url: "https://picsum.photos/id/239/500/325",
  },
  {
    key: 3,
    title: "Gallery 3",
    url: "https://picsum.photos/id/240/500/325",
  },
  {
    key: 4,
    title: "Gallery 4",
    url: "https://picsum.photos/id/241/500/325",
  },
];

let Cards = () => {
  return (
    <div className="container d-flex flex-column flex-lg-row justify-content-between mb-5">
      {datos.map((props) => (
        <Card {...props}></Card>
      ))}
    </div>
  );
};

export default Cards;
