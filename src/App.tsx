import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./container/Footer";
import Home from "./pages/Home";
import { GlobalCss } from "./styles";
import Restaurant from "./pages/Restaurant";

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/restaurant" element={<Restaurant />} />
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
