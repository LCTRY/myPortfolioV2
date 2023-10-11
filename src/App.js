import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Portfolio from "./Pages/Portfolio";
import AboutMe from "./Pages/AboutMe";
import ContactMe from "./Pages/ContactMe";
import Footer from "./Components/Footer";
import Header from "../src/Components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <AboutMe />
      <Skills />
      <Portfolio />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
