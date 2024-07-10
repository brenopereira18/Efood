import { BannerContainer } from "./styles";

type Props = {
  restaurant: Restaurant
}

const Banner = ({restaurant}: Props) => {
  
  return (
    <BannerContainer style={{ backgroundImage: `url(${restaurant.capa})` }}>
      <div className="container">
        <p>{restaurant.tipo}</p>
        <h4>{restaurant.titulo}</h4>
      </div>
    </BannerContainer>
  );
};

export default Banner;
