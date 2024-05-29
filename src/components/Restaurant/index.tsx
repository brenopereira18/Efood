import restauranteJapones from "../../assets/japones/japones.png";
import estrela from "../../assets/estrela.png";
import * as S from "./styles";
import Button from "../Button";

const Restaurant = () => (
  <S.Card>
    <S.Imagem src={restauranteJapones} alt="Restaurante Japonês" />
    <S.InfosTag>
      <Button type="tag">Destaque da semana</Button>
      <Button type="tag">Japonesa</Button>
    </S.InfosTag>
    <S.InfosContainer>
      <h3>Hioki Sushi</h3>
      <div>
        <span>4.9</span>
        <img src={estrela} alt="estrela" />
      </div>
    </S.InfosContainer>
    <p>
      Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
      frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
      rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão
      sem sair do lar com nosso delivery!
    </p>
    <Button type="link" children="Saiba mais" />
  </S.Card>
);

export default Restaurant;
