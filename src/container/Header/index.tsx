import logo from "../../assets/logo.png";
import fundoHeader from "../../assets/fundoHeader.png";
import { BannerContainer, Container, Logo, RestaurantHeader } from "./styles";
import restauranteDeMassas from "../../assets/massas/massas.png";

type Props = {
  thereIsABanner: boolean;
};

const Header = ({ thereIsABanner }: Props) => {
  if (thereIsABanner) {
    return (
      <>
        <RestaurantHeader style={{ backgroundImage: `url(${fundoHeader})` }}>
          <div className="container">
            <p>Restaurantes</p>
            <Logo src={logo} alt="Efood" />
            <p>0 produto(s) no carrinho</p>
          </div>
        </RestaurantHeader>
        <BannerContainer
          style={{ backgroundImage: `url(${restauranteDeMassas})` }}
        >
          <div className="container">
            <p>Italiana</p>
            <h4>La Dolce Vita Trattoria</h4>
          </div>
        </BannerContainer>
      </>
    );
  }

  return (
    <Container style={{ backgroundImage: `url(${fundoHeader})` }}>
      <div>
        <Logo src={logo} alt="Efood" />
        <p>
          Viva experiências gastronômicas <br />
          no conforto da sua casa
        </p>
      </div>
    </Container>
  );
};

export default Header;
