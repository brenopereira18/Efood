import Header from "../../container/Header";
import RestaurantList from "../../container/RestaurantList";
import { useGetRestaurantQuery } from "../../services/api";

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
  const { data: restaurants } = useGetRestaurantQuery();

  if (restaurants) {
    return (
      <>
        <Header thereIsABanner={false} />
        <RestaurantList restaurantes={restaurants} />
      </>
    );
  }
  return <h4>Carregando...</h4>;
};

export default Home;
