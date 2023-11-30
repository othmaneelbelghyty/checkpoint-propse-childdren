// import "./Card.css";

function Card(props) {
  return (
    <div
      style={{
        border: "5px",
        margin: "20px",
        backgroundColor: "green",
        width: "300px",
        height: "300px",
      }}
    >
      {props.person.shows ? (
        <div>
          <h1>{props.person.fullName}</h1>
          <p>{props.person.bio}</p>
          <h3>{props.person.profession}</h3>
          <img src={props.person.imgSrc} alt={props.person.fullName} />
          <span>{console.log(props.person.shows)}</span>
        </div>
      ) : (
        <p style={{ fontSize: "100px" }}>Not Fund!!</p>
      )}
    </div>
  );
}
export default Card;
