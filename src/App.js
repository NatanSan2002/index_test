import "./App.scss";



import NavBar from "./components/main/Nav";
import Slide from "./components/main/Slide";
import About from "./components/main/about";
import InfosEvent from "./components/main/infos_event";
import Speakers from "./components/main/speakers";
import Programacao from "./components/main/programacao";
import Quest_Dentro from "./components/main/quest_dentro";
import Thanks_Map from "./components/main/thanks_map";
import Footer from "./components/Footer";




function App() {
  return (
    <div className="container">
      <div className="wrapper">

      <NavBar/>

      <main>

        <Slide/>

        <About/>

        <InfosEvent/>

        <Speakers/>

        <Programacao/>
        
        <Quest_Dentro/>

        <Thanks_Map/>

        </main>
        
        <Footer/>
        
      </div>
    </div>
  );
}

export default App;
