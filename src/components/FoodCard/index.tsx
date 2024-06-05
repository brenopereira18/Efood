import Button from "../Button";
import { Card } from "./styles";

type Props = {
  title: string;
  description: string;
  image: string;
};

const FoodCard = ({ title, description, image }: Props) => (
  <Card>
    <img src={image} />
    <div>
      <h6>{title}</h6>
      <p>{description}</p>
      <Button type="link" size="big" backgroundColor="begeClaro">
        Adicionar ao carrinho
      </Button>
    </div>
  </Card>
);

export default FoodCard;
