import Button from "../Button";
import { Card, Fechar, Modal, ModalContainer, ModalContent } from "./styles";
import fechar from "../../assets/fechar.png";
import { useState } from "react";

type Props = {
  nome: string;
  descricao: string;
  imagem: string;
  porcao: string;
  preco: number;
};

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(preco);
};

const FoodCard = ({ nome, descricao, imagem, porcao, preco }: Props) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Card onClick={() => setModal(true)}>
        <img src={imagem} />
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
            <img src={imagem} />
            <div>
              <h4>{nome}</h4>
              <p>{descricao}</p>
              <p>Serve: {porcao}</p>
              <Button type="link" backgroundColor="begeClaro" size="small">
                Adicionar ao carrinho - {formataPreco(preco)}
              </Button>
            </div>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default FoodCard;
