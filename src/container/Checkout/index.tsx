import * as S from "./styles";

type Props = {
  children: JSX.Element;
};

const Checkout = ({ children }: Props) => {
  return (
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
      {children}
    </S.Container>
  );
};

export default Checkout;
