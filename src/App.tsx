import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./container/Footer";
import Home from "./pages/Home";
import { GlobalCss } from "./styles";
import Restaurante from "./pages/Restaurante";

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/restaurant/:id" element={<Restaurante />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas/>      
      <Footer />   
    </BrowserRouter>
  );
}

export default App;
