import { BannerContainer } from "./styles";
import { Restaurant } from "../../pages/Home";

type Props = {
  restaurante: Restaurant
}

const Banner = ({restaurante}: Props) => {
  
  return (
    <BannerContainer style={{ backgroundImage: `url(${restaurante.capa})` }}>
      <div className="container">
        <p>{restaurante.tipo}</p>
        <h4>{restaurante.titulo}</h4>
      </div>
    </BannerContainer>
  );
};

export default Banner;
