import { BannerContainer } from "./styles";
import restauranteDeMassas from "../../assets/massas/massas.png";

const Banner = () => {
  return (
    <BannerContainer style={{ backgroundImage: `url(${restauranteDeMassas})` }}>
      <div className="container">
        <p>Italiana</p>
        <h4>La Dolce Vita Trattoria</h4>
      </div>
    </BannerContainer>
  );
};

export default Banner;
