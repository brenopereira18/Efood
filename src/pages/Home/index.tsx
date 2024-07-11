import Loader from "../../components/Loader";
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
  return <Loader />
};

export default Home;
