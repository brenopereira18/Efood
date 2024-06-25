import foto from "../../assets/logo.png";
import lixeira from '../../assets/lixeira.png'
import { CartContainer, CartItem, Overlay, SideBar, ToExclude, TotalPrice } from "./styles";
import Button from "../../components/Button";

const Carrinho = () => {
  return (
    <CartContainer>
      <Overlay />
      <SideBar>
        <ul>
          <CartItem>
            <img src={foto} />
            <div>
              <h3>Nome</h3>
              <p>R$ 60,90</p>
            </div>
            <ToExclude src={lixeira} />
          </CartItem>
          <CartItem>
            <img src={foto} />
            <div>
              <h3>Nome</h3>
              <p>R$ 60,90</p>
            </div>
            <ToExclude src={lixeira} />
          </CartItem>
        </ul>
        <TotalPrice>
          <p>Valor total</p>
          <p>R$ 182,70</p>
        </TotalPrice>
        <Button type="link" backgroundColor="begeClaro">
          Continuar com a entrega
        </Button>
      </SideBar>
    </CartContainer>
  );
};

export default Carrinho;
