import FoodCard from "../../components/FoodCard";
import { CardContainer, SectionFoods } from "./styles";
import { Restaurant } from "../../pages/Home";



type Props = {
  restaurante: Restaurant;
};

const FoodList = ({ restaurante }: Props) => {
  return (
    <>
      <SectionFoods>
        <div className="container">
          <CardContainer>
            {restaurante.cardapio.map((rest) => (
              <FoodCard
                nome={rest.nome}
                imagem={rest.foto}
                descricao={rest.descricao}
                porcao={rest.porcao}
                preco={rest.preco}
              />
            ))}
          </CardContainer>
        </div>
      </SectionFoods>
    </>
  );
};

export default FoodList;
