import Header from "./container/Header";
import RestaurantList from "./container/RestaurantList";
import { GlobalCss } from "./styles";

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <div className="container">
        <RestaurantList />
      </div>
    </>
  );
}

export default App;
