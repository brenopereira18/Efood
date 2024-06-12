import logo from "../../assets/logo.png";
import fundoHeader from "../../assets/fundoHeader.png";
import { Container, Logo, RestaurantHeader } from "./styles";
import { Link } from "react-router-dom";

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
            <Link to="/">
              <Logo src={logo} alt="Efood" />
            </Link>
            <p>0 produto(s) no carrinho</p>
          </div>
        </RestaurantHeader>
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
