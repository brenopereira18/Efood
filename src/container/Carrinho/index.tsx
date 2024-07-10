import lixeira from "../../assets/lixeira.png";
import {
  CartContainer,
  CartItem,
  Overlay,
  SideBar,
  ToExclude,
  TotalPrice,
} from "./styles";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { CartClose, remove } from "../../store/reducers/cart";
import { formataPreco, totalPrice } from "../../utils/index";
import { useState } from "react";
import Checkout from "../Checkout";

const Carrinho = () => {
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
    <CartContainer className={isOpen ? "is-open" : ""}>
      <Overlay onClick={close} />
      <SideBar>
        {continueOrdering ? (
          <Checkout>
            <Button
              type="link"
              backgroundColor="begeClaro"
              onClick={() => setContinueOrdering(false)}
            >
              Voltar para o carrinho
            </Button>
          </Checkout>
        ) : (
          <>
            <ul>
              {items.map((item) => (
                <CartItem>
                  <img src={item.foto} />
                  <div>
                    <h3>{item.nome}</h3>
                    <p>{formataPreco(item.preco)}</p>
                  </div>
                  <ToExclude
                    onClick={() => removeItem(item.id)}
                    src={lixeira}
                  />
                </CartItem>
              ))}
            </ul>
            <TotalPrice>
              <p>Valor total</p>
              <p>{formataPreco(totalPrice(items))}</p>
            </TotalPrice>
            <Button
              type="link"
              backgroundColor="begeClaro"
              onClick={() => setContinueOrdering(true)}
            >
              Continuar com a entrega
            </Button>
          </>
        )}
      </SideBar>
    </CartContainer>
  );
};

export default Carrinho;
