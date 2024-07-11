import { useParams } from "react-router-dom";

import Header from "../../container/Header";
import FoodList from "../../container/FoodList";
import Banner from "../../container/Banner";
import Loader from "../../components/Loader";

import { useGetFoodQuery } from "../../services/api";

const Restaurant = () => {
  const { id } = useParams();
  const { data: restauranteMenu } = useGetFoodQuery(id!);

  if (!restauranteMenu) {
    return <Loader />;
  }

  return (
    <>
      <Header thereIsABanner={true} />
      <Banner restaurant={restauranteMenu} />
      <FoodList restaurantMenu={restauranteMenu} />
    </>
  );
};

export default Restaurant;
