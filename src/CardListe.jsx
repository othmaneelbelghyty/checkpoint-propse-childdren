import Card from "./Card";
import person from "./person";
function CardListe(props) {
  return (
    <>
      <Card person={person[0]} />
      <Card person={person[1]} />
      <Card person={person[2]} />
      <Card person={person[3]} />
      <Card person={person[4]} />
    </>
  );
}

export default CardListe;
