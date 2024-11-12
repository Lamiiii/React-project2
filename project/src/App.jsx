import "./App.css";
import { Header } from "./Header/Header";
import { Img } from "./Image/Img";
import { Card } from "./Cards/Card";
import { Footer } from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Img />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
