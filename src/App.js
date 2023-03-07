import "./App.css";
import Container from "./components/container";
import Header from "./components/header";
import { BrowseRouter,Route } from "react-router-dom";
import Footer from "./components/footer";
function App() {
  return (
    <div id="container">
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
