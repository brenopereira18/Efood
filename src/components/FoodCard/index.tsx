import { useDispatch } from "react-redux";
import { useState } from "react";

import Button from "../Button";
import { formataPreco } from "../../utils";
import { CartOpen, add } from "../../store/reducers/cart";

import fechar from "../../assets/fechar.png";

import * as S from "./styles";

const FoodCard = ({ nome, descricao, foto, porcao, preco, id }: menuItem) => {
  const dispatch = useDispatch();

  const open = () => {
    dispatch(CartOpen());
  };

  const addCart = () => {
    dispatch(add({ nome, descricao, foto, porcao, preco, id }));
  };

  const handleClick = () => {
    open();
    addCart();
    setModal(false);
  };

  const [modal, setModal] = useState(false);

  return (
    <>
      <S.Card key={id} onClick={() => setModal(true)}>
        <img src={foto} />
        <div>
          <h6>{nome}</h6>
          <p>{descricao}</p>
          <Button type="link" size="big" backgroundColor="begeClaro">
            Mais detalhes
          </Button>
        </div>
      </S.Card>
      <S.Modal className={modal ? "visivel" : ""}>
        <S.ModalContainer>
          <S.Close>
            <img src={fechar} onClick={() => setModal(false)} />
          </S.Close>
          <S.ModalContent>
            <img src={foto} />
            <div>
              <h4>{nome}</h4>
              <p>{descricao}</p>
              <p>Serve: {porcao}</p>
              <div onClick={handleClick}>
                <Button type="link" backgroundColor="begeClaro" size="small">
                  Adicionar ao carrinho - {formataPreco(preco)}
                </Button>
              </div>
            </div>
          </S.ModalContent>
        </S.ModalContainer>
      </S.Modal>
    </>
  );
};

export default FoodCard;
