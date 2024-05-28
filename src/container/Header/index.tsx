import logo from "../../assets/logo.png";
import fundoHeader from "../../assets/fundoHeader.png";
import { Container, Logo } from "./styles";

const Header = () => (
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

export default Header;
