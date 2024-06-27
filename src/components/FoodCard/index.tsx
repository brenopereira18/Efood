import Button from "../Button";
import { Card, Fechar, Modal, ModalContainer, ModalContent } from "./styles";
import fechar from "../../assets/fechar.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CartOpen, add } from "../../store/reducers/cart";
import { menuItem } from "../../pages/Home";

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(preco);
};

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
      <Card key={id} onClick={() => setModal(true)}>
        <img src={foto} />
        <div>
          <h6>{nome}</h6>
          <p>{descricao}</p>
          <Button type="link" size="big" backgroundColor="begeClaro">
            Mais detalhes
          </Button>
        </div>
      </Card>
      <Modal className={modal ? "visivel" : ""}>
        <ModalContainer>
          <Fechar>
            <img src={fechar} onClick={() => setModal(false)} />
          </Fechar>
          <ModalContent>
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
          </ModalContent>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default FoodCard;
