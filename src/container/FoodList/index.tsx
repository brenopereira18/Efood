import FoodCard from "../../components/FoodCard";
import lasanha from "../../assets/massas/lasanha.jpg";
import carbonara from "../../assets/massas/carbonara.jpg";
import nhoque from "../../assets/massas/nhoque.jpg";
import pizzaMarguerita from "../../assets/massas/pizzaMarguerita.png";
import pizzaQueijo from "../../assets/massas/pizzaQueijo.jpg";
import { CardContainer, SectionFoods } from "./styles";

const foods = [
  {
    title: "Pizza Marguerita",
    image: pizzaMarguerita,
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
  {
    title: "Pizza 4 queijos com alho",
    image: pizzaQueijo,
    description:
      "A nossa deliciosa pizza de 4 Queijos com Alho e Borda Recheada com Catupiry é uma verdadeira explosão de sabores e texturas, perfeita para os amantes de queijo e de uma experiência gastronômica única.",
  },
  {
    title: "Lasanha",
    image: lasanha,
    description:
      "Com camadas de massa fresca, um molho bolonhesa robusto e queijos derretidos, cada garfada é um convite para saborear a tradição e o sabor autêntico da Itália.",
  },
  {
    title: "Carbonara",
    image: carbonara,
    description:
      "Nosso Spaghetti alla Carbonara é uma verdadeira expressão da culinária italiana, trazendo autenticidade e simplicidade em cada prato. Preparado com ingredientes tradicionais e uma técnica impecável.",
  },
  {
    title: "Nhoque",
    image: nhoque,
    description:
      "Nosso Nhoque de Batata ao Molho de Tomate é uma celebração da culinária italiana caseira, preparado com ingredientes frescos e selecionados para oferecer uma experiência gastronômica autêntica e reconfortante.",
  },
];

const FoodList = () => (
  <SectionFoods>
    <div className="container">
      <CardContainer>
        {foods.map((food) => (
          <FoodCard
            title={food.title}
            image={food.image}
            description={food.description}
          />
        ))}
      </CardContainer>
    </div>
  </SectionFoods>
);

export default FoodList;
