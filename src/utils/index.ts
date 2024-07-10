import { menuItem } from "../pages/Home";

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(preco);
};

export const totalPrice = (items: menuItem[]) => {
  return items.reduce((acumulador, valorAtual) => {
    return (acumulador += valorAtual.preco);
  }, 0);
};
