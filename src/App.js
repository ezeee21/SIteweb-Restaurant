import Header from "./component/header";
import Section1 from "./component/Accueil";
import Section2 from "./component/histoire";
import Lieux from "./component/restaurants";
import Accueil from "./component/Accueil";
import Slider from "./component/slider/m";
import Footer from "./component/footer";


function App() {
  return (
    <div className="App">
      <Header/>
      <Accueil/>
      <Section2/>
      <Lieux/>
      <Slider/>
      <Footer/>
    </div>
  );
}

export default App;
