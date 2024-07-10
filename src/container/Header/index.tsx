import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { RootReducer } from "../../store";
import { CartOpen } from "../../store/reducers/cart";

import Efood from "../../assets/soon.png";
import BackgroundHeader from "../../assets/backgroundHeader.png";

import * as S from "./styles";

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
        <S.RestaurantHeader
          style={{ backgroundImage: `url(${BackgroundHeader})` }}
        >
          <div className="container">
            <p>Restaurantes</p>
            <Link to="/">
              <S.Soon src={Efood} alt="Efood" />
            </Link>
            <S.Cart onClick={open}>
              {items.length} produto(s) no carrinho
            </S.Cart>
          </div>
        </S.RestaurantHeader>
      </>
    );
  }

  return (
    <S.Container style={{ backgroundImage: `url(${BackgroundHeader})` }}>
      <div>
        <S.Soon src={Efood} alt="Efood" />
        <p>
          Viva experiências gastronômicas <br />
          no conforto da sua casa
        </p>
      </div>
    </S.Container>
  );
};

export default Header;
