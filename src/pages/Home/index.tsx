import Header from "../../container/Header";
import RestaurantList from "../../container/RestaurantList";

import { useGetRestaurantQuery } from "../../services/api";

const Home = () => {
  const { data: restaurantsList } = useGetRestaurantQuery();

  if (restaurantsList) {
    return (
      <>
        <Header thereIsABanner={false} />
        <RestaurantList restaurants={restaurantsList} />
      </>
    );
  }
  return <h4>Carregando...</h4>;
};

export default Home;
