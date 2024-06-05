import estrela from "../../assets/estrela.png";
import * as S from "./styles";
import Button from "../Button";

type Props = {
  title: string;
  description: string;
  image: string;
  evaluation: number;
  typeFood: string;
};

const RestaurantCard = ({
  title,
  description,
  image,
  evaluation,
  typeFood,
}: Props) => (
  <S.Card>
    <S.Imagem src={image} alt="Restaurante Japonês" />
    <S.InfosTag>
      {typeFood === "Japonesa" ? (
        <>
          <Button type="tag">Destaque da semana</Button>
          <Button type="tag">{typeFood}</Button>
        </>
      ) : (
        <Button type="tag">{typeFood}</Button>
      )}
    </S.InfosTag>
    <S.InfosContainer>
      <h3>{title}</h3>
      <div>
        <span>{evaluation}</span>
        <img src={estrela} alt="estrela" />
      </div>
    </S.InfosContainer>
    <p>{description}</p>
    <Button to="/restaurant" type="link" children="Saiba mais" />
  </S.Card>
);

export default RestaurantCard;
