import estrela from "../../assets/estrela.png";
import * as S from "./styles";
import Button from "../Button";

type Props = {
  title: string;
  description: string;
  image: string;
  evaluation: number;
  typeFood: string;
  id: number;
  destacado: boolean
};

const RestaurantCard = ({
  title,
  description,
  image,
  evaluation,
  typeFood,
  id,
  destacado
}: Props) => (
  <S.Card>
    <S.Imagem src={image} alt="Restaurante Japonês" />
    <S.InfosTag>
      {(destacado) ? (
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
        backgroundColor="laranja"
        to={`/restaurant/${id}`}
        type="link"
        children="Saiba mais"
      />
    </S.CartContent>
  </S.Card>
);

export default RestaurantCard;
