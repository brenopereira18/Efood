import Header from "../../container/Header";
import RestaurantList from "../../container/RestaurantList";
import { useEffect, useState } from "react";

export type Restaurant = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: [
    {
      foto: string;
      preco: number;
      id: number;
      nome: string;
      descricao: string;
      porcao: string;
    }
  ];
};

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then((answer) => answer.json())
      .then((answer) => setRestaurants(answer));
  }, []);

  return (
    <>
      <Header thereIsABanner={false} />
      <RestaurantList restaurantes={restaurants} />
    </>
  );
};

export default Home;
