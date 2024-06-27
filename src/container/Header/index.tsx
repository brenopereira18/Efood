import logo from "../../assets/logo.png";
import fundoHeader from "../../assets/fundoHeader.png";
import { Carrinho, Container, Logo, RestaurantHeader } from "./styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { CartOpen } from "../../store/reducers/cart";

type Props = {
  thereIsABanner: boolean;
};

const Header = ({ thereIsABanner }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const open = () => {
    dispatch(CartOpen());
  };

  if (thereIsABanner) {
    return (
      <>
        <RestaurantHeader style={{ backgroundImage: `url(${fundoHeader})` }}>
          <div className="container">
            <p>Restaurantes</p>
            <Link to="/">
              <Logo src={logo} alt="Efood" />
            </Link>
            <Carrinho onClick={open}>{items.length} produto(s) no carrinho</Carrinho>
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
