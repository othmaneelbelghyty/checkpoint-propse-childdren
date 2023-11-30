import "./App.css";
import CardListe from "./CardListe";
import Card from "./Card";
function App() {
  return (
    <>
      <CardListe childern={<Card />} />
    </>
  );
}

export default App;
