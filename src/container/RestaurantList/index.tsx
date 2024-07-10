import RestaurantCard from "../../components/RestaurantCard";

import { ContainerCard, SectionRestaurants } from "./styles";

type Props = {
  restaurants: Restaurant[];
};

const RestaurantList = ({ restaurants }: Props) => (
  <SectionRestaurants>
    <div className="container">
      <ContainerCard>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <RestaurantCard
              id={restaurant.id}
              title={restaurant.titulo}
              image={restaurant.capa}
              description={restaurant.descricao}
              evaluation={restaurant.avaliacao}
              typeFood={restaurant.tipo}
              outstanding={restaurant.destacado}
            />
          </li>
        ))}
      </ContainerCard>
    </div>
  </SectionRestaurants>
);

export default RestaurantList;
