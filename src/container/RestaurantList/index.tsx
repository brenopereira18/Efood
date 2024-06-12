import RestaurantCard from "../../components/RestaurantCard";
import { Restaurant } from "../../pages/Home";
import { ContainerCard, SectionRestaurants } from "./styles";

type Props = {
  restaurantes: Restaurant[];
};

const RestaurantList = ({ restaurantes }: Props) => (
  <SectionRestaurants>
    <div className="container">
      <ContainerCard>
        {restaurantes.map((restaurante) => (
          <li key={restaurante.id}>
            <RestaurantCard
              id={restaurante.id}
              title={restaurante.titulo}
              image={restaurante.capa}
              description={restaurante.descricao}
              evaluation={restaurante.avaliacao}
              typeFood={restaurante.tipo}
              destacado={restaurante.destacado}
            />
          </li>
        ))}
      </ContainerCard>
    </div>
  </SectionRestaurants>
);

export default RestaurantList;
