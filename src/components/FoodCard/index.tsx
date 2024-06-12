import Button from "../Button";
import { Card } from "./styles";

type Props = {
  nome: string;
  descricao: string;
  imagem: string;
};

const FoodCard = ({ nome, descricao, imagem }: Props) => (
  <Card>
    <img src={imagem} />
    <div>
      <h6>{nome}</h6>
      <p>{descricao}</p>
      <Button type="link" size="big" backgroundColor="begeClaro">
        Adicionar ao carrinho
      </Button>
    </div>
  </Card>
);

export default FoodCard;
