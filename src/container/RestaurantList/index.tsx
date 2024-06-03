import Restaurant from "../../components/Restaurant";
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
          <Restaurant
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
