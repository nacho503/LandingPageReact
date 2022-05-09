import Card from "./Card";

let datos = [
  {
    title: "Gallery 1",
    url: "https://picsum.photos/id/238/500/325",
  },
  {
    title: "Gallery 2",
    url: "https://picsum.photos/id/239/500/325",
  },
  {
    title: "Gallery 3",
    url: "https://picsum.photos/id/240/500/325",
  },
  {
    title: "Gallery 4",
    url: "https://picsum.photos/id/241/500/325",
  },
];

let Cards = () => {
  return (
    <div className="container d-flex flex-sm-column flex-md-row justify-content-around mb-5 mr-5 ml-5">
      {datos.map((props) => (
        <Card key={props.key} title={props.title} url={props.url}></Card>
      ))}
    </div>
  );
};

export default Cards;
