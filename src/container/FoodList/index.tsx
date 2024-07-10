import FoodCard from "../../components/FoodCard";

import { CardContainer, SectionFoods } from "./styles";

type Props = {
  restaurantMenu: Restaurant;
};

const FoodList = ({ restaurantMenu }: Props) => {
  return (
    <>
      <SectionFoods>
        <div className="container">
          <CardContainer>
            {restaurantMenu.cardapio.map((rest) => (
              <div key={rest.id}>
                <FoodCard
                  nome={rest.nome}
                  foto={rest.foto}
                  descricao={rest.descricao}
                  porcao={rest.porcao}
                  preco={rest.preco}
                  id={rest.id}
                />
              </div>
            ))}
          </CardContainer>
        </div>
      </SectionFoods>
    </>
  );
};

export default FoodList;
