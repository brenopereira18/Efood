import { useState } from "react";
import Button from "../../components/Button";
import * as S from "./styles";
import { useFormik } from "formik";
import { usePurchaseMutation } from "../../services/api";
import { useSelector } from "react-redux";
import { RootReducer } from "../../store";

type Props = {
  children: JSX.Element;
};

const Checkout = ({ children }: Props) => {
  const [payment, setPayment] = useState(false);
  const [purchase, { isSuccess, data }] = usePurchaseMutation();
  const { items } = useSelector((state: RootReducer) => state.cart);

  const form = useFormik({
    initialValues: {
      cardDisplayName: "",
      cardNumber: "",
      cardCode: "",
      expiresMonth: "",
      expiresYear: "",
      clientName: "",
      address: "",
      city: "",
      zipCode: "",
      houseNumber: "",
      complement: "",
    },
    onSubmit: (value) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco,
        })),
        delivery: {
          receiver: value.cardDisplayName,
          address: {
            description: value.address,
            city: value.city,
            zipCode: value.zipCode,
            number: Number(value.houseNumber),
            complement: value.complement,
          },
        },
        payment: {
          card: {
            name: value.cardDisplayName,
            number: value.cardNumber,
            code: Number(value.cardCode),
            expires: {
              month: Number(value.expiresMonth),
              year: Number(value.expiresYear),
            },
          },
        },
      });
    },
  });

  return (
    <div>
      <S.Container>
        <S.Form onSubmit={form.handleSubmit}>
          {payment ? (
            <>
              <h4>Pagamento - Valor a pagar R$ 100,00</h4>
              <div>
                <label htmlFor="cardDisplayName">Nome no cartão</label>
                <input
                  type="text"
                  id="cardDisplayName"
                  name="cardDisplayName"
                  value={form.values.cardDisplayName}
                  onChange={form.handleChange}
                />
              </div>
              <div className="addresContainer">
                <div>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="cardCode">CVV</label>
                  <input
                    type="text"
                    id="cardCode"
                    name="cardCode"
                    value={form.values.cardCode}
                    onChange={form.handleChange}
                  />
                </div>
              </div>
              <div className="addresContainer">
                <div>
                  <label htmlFor="expiresMonth">Mês de vencimento</label>
                  <input
                    type="text"
                    id="expiresMonth"
                    name="expiresMonth"
                    value={form.values.expiresMonth}
                    onChange={form.handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <input
                    type="text"
                    id="expiresYear"
                    name="expiresYear"
                    value={form.values.expiresYear}
                    onChange={form.handleChange}
                  />
                </div>
              </div>

              <Button
                type="link"
                backgroundColor="begeClaro"
                onClick={form.handleSubmit}
              >
                Finalizar pagamento
              </Button>
              <Button
                type="link"
                backgroundColor="begeClaro"
                onClick={() => setPayment(false)}
              >
                Voltar para a edição de endereço
              </Button>
            </>
          ) : (
            <>
              <h4>Entrega</h4>

              <div>
                <label htmlFor="clientName">Quem irá receber</label>
                <input
                  type="text"
                  id="clientName"
                  name="clientName"
                  value={form.values.clientName}
                  onChange={form.handleChange}
                />
              </div>
              <div>
                <label htmlFor="address">Endereço</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={form.values.address}
                  onChange={form.handleChange}
                />
              </div>
              <div>
                <label htmlFor="city">Cidade</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={form.values.city}
                  onChange={form.handleChange}
                />
              </div>
              <div className="addresContainer">
                <div>
                  <label htmlFor="zipCode">CEP</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={form.values.zipCode}
                    onChange={form.handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="houseNumber">Número</label>
                  <input
                    type="text"
                    id="houseNumber"
                    name="houseNumber"
                    value={form.values.houseNumber}
                    onChange={form.handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  type="text"
                  id="complement"
                  name="complement"
                  value={form.values.complement}
                  onChange={form.handleChange}
                />
              </div>
              <Button
                type="link"
                backgroundColor="begeClaro"
                onClick={() => setPayment(true)}
              >
                Continuar com o pagamento
              </Button>
              {children}
            </>
          )}
        </S.Form>
      </S.Container>
    </div>
  );
};

export default Checkout;
