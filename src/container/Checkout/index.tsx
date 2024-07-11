import { useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import InputMask from "react-input-mask";
import * as Yup from "yup";

import Button from "../../components/Button";

import { usePurchaseMutation } from "../../services/api";
import { RootReducer } from "../../store";
import { CartClose, clear } from "../../store/reducers/cart";
import { formataPreco, totalPrice } from "../../utils";

import * as S from "./styles";

type Props = {
  children: JSX.Element;
};

const Checkout = ({ children }: Props) => {
  const [payment, setPayment] = useState(false);
  const [purchase, { isSuccess, data, isError }] = usePurchaseMutation();
  const { items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

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
    validationSchema: Yup.object({
      cardDisplayName: Yup.string().required("O campo é obrigatório"),
      cardNumber: Yup.string()
        .matches(/^\d{4} \d{4} \d{4} \d{4}$/, "Número do cartão inválido")
        .required("O campo é obrigatório"),
      cardCode: Yup.string()
        .matches(/^\d{3}$/, "O campo deve ter três caracteres")
        .required("O campo é obrigatório"),
      expiresMonth: Yup.string()
        .matches(/^\d{2}$/, "O campo deve ter dois caracteres")
        .required("O campo é obrigatório"),
      expiresYear: Yup.string()
        .matches(
          /^\d{2}$/,
          "O campo deve conter os dois últimos caracteres no ano em que o cartão expira"
        )
        .required("O campo é obrigatório"),
      clientName: Yup.string().min(
        4,
        "O nome precisar ter no mínimo 4 caracteres"
      ),
      address: Yup.string().required("O campo é obrigatório"),
      city: Yup.string().required("O campo é obrigatório"),
      zipCode: Yup.string()
        .matches(/^\d{5}-\d{3}$/, "CEP inválido")
        .required("O campo é obrigatório"),
      houseNumber: Yup.string()
        .min(2, "O campo precisar ter de dois a quatro caracteres")
        .max(4, "O campo precisar ter de dois a quatro caracteres")
        .required("O campo é obrigatório"),
    }),
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

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched;
    const isInvalid = fieldName in form.errors;
    const hasError = isTouched && isInvalid;

    return hasError;
  };

  const close = () => {
    dispatch(CartClose());
    dispatch(clear());
  };

  return (
    <div>
      <S.Container>
        {isSuccess && data ? (
          <S.FinalizedPayment>
            <h4>Pedido realizado - {data.orderId}</h4>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <Button
              type="link"
              backgroundColor="lightBeige"
              to="/"
              onClick={close}
            >
              Concluir
            </Button>
          </S.FinalizedPayment>
        ) : (
          <S.Form onSubmit={form.handleSubmit}>
            {payment ? (
              <>
                <h4>
                  Pagamento - Valor a pagar{" "}
                  <span>{formataPreco(totalPrice(items))}</span>
                </h4>
                <S.ContainerField>
                  <label htmlFor="cardDisplayName">Nome no cartão</label>
                  <input
                    type="text"
                    id="cardDisplayName"
                    name="cardDisplayName"
                    value={form.values.cardDisplayName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError("cardDisplayName") ? "error" : ""
                    }
                  />
                </S.ContainerField>
                <div className="addresContainer">
                  <S.ContainerField maxWidth="228px">
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <InputMask
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      mask="9999 9999 9999 9999"
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError("cardNumber") ? "error" : ""
                      }
                    />
                  </S.ContainerField>
                  <S.ContainerField maxWidth="87px">
                    <label htmlFor="cardCode">CVV</label>
                    <InputMask
                      type="text"
                      id="cardCode"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      mask="999"
                      onBlur={form.handleBlur}
                      className={checkInputHasError("cardCode") ? "error" : ""}
                    />
                  </S.ContainerField>
                </div>
                <div className="addresContainer">
                  <S.ContainerField>
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <InputMask
                      type="text"
                      id="expiresMonth"
                      name="expiresMonth"
                      value={form.values.expiresMonth}
                      onChange={form.handleChange}
                      mask="99"
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError("expiresMonth") ? "error" : ""
                      }
                    />
                  </S.ContainerField>
                  <S.ContainerField>
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <InputMask
                      type="text"
                      id="expiresYear"
                      name="expiresYear"
                      value={form.values.expiresYear}
                      onChange={form.handleChange}
                      mask="99"
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError("expiresYear") ? "error" : ""
                      }
                    />
                  </S.ContainerField>
                </div>
                <div className="buttonContainer">
                  <Button
                    type="link"
                    backgroundColor="lightBeige"
                    onClick={form.handleSubmit}
                  >
                    Finalizar pagamento
                  </Button>
                  <Button
                    type="link"
                    backgroundColor="lightBeige"
                    onClick={() => setPayment(false)}
                  >
                    Voltar para a edição de endereço
                  </Button>
                </div>
              </>
            ) : (
              <>
                <h4>Entrega</h4>
                <S.ContainerField>
                  <label htmlFor="clientName">Quem irá receber</label>
                  <input
                    type="text"
                    id="clientName"
                    name="clientName"
                    value={form.values.clientName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("clientName") ? "error" : ""}
                  />
                </S.ContainerField>
                <S.ContainerField>
                  <label htmlFor="address">Endereço</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={form.values.address}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("address") ? "error" : ""}
                  />
                </S.ContainerField>
                <S.ContainerField>
                  <label htmlFor="city">Cidade</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={form.values.city}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("city") ? "error" : ""}
                  />
                </S.ContainerField>
                <div className="addresContainer">
                  <S.ContainerField>
                    <label htmlFor="zipCode">CEP</label>
                    <InputMask
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={form.values.zipCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="99999-999"
                      className={checkInputHasError("zipCode") ? "error" : ""}
                    />
                  </S.ContainerField>
                  <S.ContainerField>
                    <label htmlFor="houseNumber">Número</label>
                    <input
                      type="number"
                      id="houseNumber"
                      name="houseNumber"
                      value={form.values.houseNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError("houseNumber") ? "error" : ""
                      }
                    />
                  </S.ContainerField>
                </div>
                <S.ContainerField>
                  <label htmlFor="complement">Complemento (opcional)</label>
                  <input
                    type="text"
                    id="complement"
                    name="complement"
                    value={form.values.complement}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </S.ContainerField>
                <div className="buttonContainer">
                  <Button
                    type="link"
                    backgroundColor="lightBeige"
                    onClick={() => setPayment(true)}
                  >
                    Continuar com o pagamento
                  </Button>
                  {children}
                </div>
              </>
            )}
          </S.Form>
        )}
      </S.Container>
    </div>
  );
};

export default Checkout;
