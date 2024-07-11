import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Checkout from "../Checkout";
import Button from "../../components/Button";
import lixeira from "../../assets/lixeira.png";

import { RootReducer } from "../../store";
import { CartClose, remove } from "../../store/reducers/cart";
import { formataPreco, totalPrice } from "../../utils/index";

import * as S from "./styles";

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();
  const [continueOrdering, setContinueOrdering] = useState(false);

  const close = () => {
    dispatch(CartClose());
  };

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  return (
    <S.CartContainer className={isOpen ? "is-open" : ""}>
      <S.Overlay onClick={close} />
      <S.SideBar>
        {continueOrdering ? (
          <Checkout>
            <Button
              type="link"
              backgroundColor="lightBeige"
              onClick={() => setContinueOrdering(false)}
            >
              Voltar para o carrinho
            </Button>
          </Checkout>
        ) : (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem>
                  <img src={item.foto} />
                  <div>
                    <h3>{item.nome}</h3>
                    <p>{formataPreco(item.preco)}</p>
                  </div>
                  <S.ToExclude
                    onClick={() => removeItem(item.id)}
                    src={lixeira}
                  />
                </S.CartItem>
              ))}
            </ul>
            <S.TotalPrice>
              <p>Valor total</p>
              <p>{formataPreco(totalPrice(items))}</p>
            </S.TotalPrice>
            <Button
              type="link"
              backgroundColor="lightBeige"
              onClick={() => setContinueOrdering(true)}
            >
              Continuar com a entrega
            </Button>
          </>
        )}
      </S.SideBar>
    </S.CartContainer>
  );
};

export default Cart;
