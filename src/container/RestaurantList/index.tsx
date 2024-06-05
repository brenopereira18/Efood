import RestaurantCard from "../../components/RestaurantCard";
import Restaurant from "../../components/RestaurantCard";
import Restaurante from "../../models/restaurantes/Restaurante";
import { ContainerCard, SectionRestaurants } from "./styles";

type Props = {
  restaurantes: Restaurante[];
};

const RestaurantList = ({ restaurantes }: Props) => (
  <SectionRestaurants>
    <div className="container">
      <ContainerCard>
        {restaurantes.map((restaurante) => (
          <RestaurantCard
            key={restaurante.title}
            title={restaurante.title}
            image={restaurante.image}
            description={restaurante.description}
            evaluation={restaurante.evaluation}
            typeFood={restaurante.typeFood}
          />
        ))}
      </ContainerCard>
    </div>
  </SectionRestaurants>
);

export default RestaurantList;
