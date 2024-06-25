import Header from "../../container/Header";

import FoodList from "../../container/FoodList";
import { useParams } from "react-router-dom";
import Banner from "../../container/Banner";
import { useGetFoodQuery } from "../../services/api";

const Restaurante = () => {
  const { id } = useParams();
  const { data: restaurante } = useGetFoodQuery(id!);

  if (!restaurante) {
    return <h3>Carregando...</h3>;
  }

  return (
    <>
      <Header thereIsABanner={true} />
      <Banner restaurante={restaurante} />
      <FoodList restaurante={restaurante} />
    </>
  );
};

export default Restaurante;
