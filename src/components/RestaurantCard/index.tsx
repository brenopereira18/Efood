import Button from "../Button";

import estrela from "../../assets/estrela.png";

import * as S from "./styles";

type Props = {
  title: string;
  description: string;
  image: string;
  evaluation: number;
  typeFood: string;
  id: number;
  outstanding: boolean;
};

const RestaurantCard = ({
  title,
  description,
  image,
  evaluation,
  typeFood,
  id,
  outstanding,
}: Props) => (
  <S.Card>
    <S.Image src={image} alt="Restaurante Japonês" />
    <S.InfosTag>
      {outstanding ? (
        <>
          <Button type="tag">Destaque da semana</Button>
          <Button type="tag">{typeFood}</Button>
        </>
      ) : (
        <Button type="tag">{typeFood}</Button>
      )}
    </S.InfosTag>
    <S.CartContent>
      <S.InfosContainer>
        <h3>{title}</h3>
        <div>
          <span>{evaluation}</span>
          <img src={estrela} alt="estrela" />
        </div>
      </S.InfosContainer>
      <p>{description}</p>
      <Button
        backgroundColor="orange"
        to={`/restaurant/${id}`}
        type="link"
        children="Saiba mais"
      />
    </S.CartContent>
  </S.Card>
);

export default RestaurantCard;
