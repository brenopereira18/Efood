import { useState } from "react";
import Button from "../../components/Button";
import * as S from "./styles";

type Props = {
  children: JSX.Element;
};

const Checkout = ({ children }: Props) => {
  const [payment, setPayment] = useState(false);  

  return (
    <div>
      {payment ? (
        <S.Container>
          <h4>Pagamento - Valor a pagar R$ 100,00</h4>
          <S.Form>
            <div>
              <label>Nome no cartão</label>
              <input type="text" />
            </div>
            <div className="addresContainer">
              <div>
                <label>Número do cartão</label>
                <input type="text" />
              </div>
              <div>
                <label>CVV</label>
                <input type="text" />
              </div>
            </div>
            <div className="addresContainer">
              <div>
                <label>Mês de vencimento</label>
                <input type="text" />
              </div>
              <div>
                <label>Ano de vencimento</label>
                <input type="text" />
              </div>
            </div>
          </S.Form>
          <Button type="link" backgroundColor="begeClaro">
            Finalizar pagamento
          </Button>
          <Button
            type="link"
            backgroundColor="begeClaro"
            onClick={() => setPayment(false)}
          >
            Voltar para a edição de endereço
          </Button>
        </S.Container>
      ) : (
        <S.Container>
          <h4>Entrega</h4>
          <S.Form>
            <div>
              <label>Quem irá receber</label>
              <input type="text" />
            </div>
            <div>
              <label>Endereço</label>
              <input type="text" />
            </div>
            <div>
              <label>Cidade</label>
              <input type="text" />
            </div>
            <div className="addresContainer">
              <div>
                <label>CEP</label>
                <input type="text" />
              </div>
              <div>
                <label>Número</label>
                <input type="text" />
              </div>
            </div>
            <div>
              <label>Complemento (opcional)</label>
              <input type="text" />
            </div>
          </S.Form>
          <Button
            type="link"
            backgroundColor="begeClaro"
            onClick={() => setPayment(true)}
          >
            Continuar com o pagamento
          </Button>
          {children}
        </S.Container>
      )}
    </div>
  );
};

export default Checkout;
