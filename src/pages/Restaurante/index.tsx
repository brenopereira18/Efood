import Header from "../../container/Header";

import FoodList from "../../container/FoodList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Restaurant } from "../Home";
import Banner from "../../container/Banner";

const Restaurante = () => {
  const { id } = useParams();
  const [restaurante, setRestaurante] = useState<Restaurant>();

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((answer) => answer.json())
      .then((answer) => setRestaurante(answer));
  }, [id]);

  if (!restaurante) {
    return <h3>Carregando...</h3>;
  }

  return (
    <>
      <Header thereIsABanner={true} />
      <Banner restaurante={restaurante}/>
      <FoodList restaurante={restaurante}/>
    </>
  );
};

export default Restaurante;
