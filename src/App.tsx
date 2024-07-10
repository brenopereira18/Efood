import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import Footer from "./container/Footer";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";
import Cart from "./container/Cart";

import { store } from "./store";
import { GlobalCss } from "./styles";

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant/:id" element={<Restaurant />} />
  </Routes>
);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />  
        <Cart />      
      </BrowserRouter>
    </Provider>
  );
}

export default App;
