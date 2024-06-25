import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./container/Footer";
import Home from "./pages/Home";
import { GlobalCss } from "./styles";
import Restaurante from "./pages/Restaurante";
import { Provider } from "react-redux";
import { store } from "./store";
import Carrinho from "./container/Carrinho";

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant/:id" element={<Restaurante />} />
  </Routes>
);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />  
        <Carrinho />      
      </BrowserRouter>
    </Provider>
  );
}

export default App;
