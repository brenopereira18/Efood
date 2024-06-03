import { v4 as uuid } from "uuid";
import Header from "../../container/Header";
import RestaurantList from "../../container/RestaurantList";
import Restaurante from "../../models/restaurantes/Restaurante";
import restauranteJapones from "../../assets/japones/japones.png";
import restauranteDeMassa from "../../assets/massas/massas.png";
import churrascaria from "../../assets/churrascaria/churrascaria.jpg";
import hamburgueria from "../../assets/hamburgueria/hamburgueria.jpg";
import doceria from "../../assets/doceria/doceria.jpg";
import mexicana from "../../assets/mexicana/mexicana.jpg";

const restaurantes: Restaurante[] = [
  {
    title: "Hioki Sushi",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    image: restauranteJapones,
    evaluation: 4.9,
    typeFood: "Japonesa",
    id: uuid(),
  },
  {
    title: "La Dolce Vita Trattoria",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: restauranteDeMassa,
    evaluation: 4.6,
    typeFood: "Italiana",
    id: uuid(),
  },
  {
    title: "Gáucho Grill",
    description:
      "No Gaúcho Grill, o destaque vai para as carnes nobres, assadas lentamente na brasa para garantir suculência e um sabor inigualável. Desde a clássica picanha até a deliciosa costela, nossos cortes são preparados com técnicas tradicionais e temperados na medida certa para realçar o verdadeiro gosto do churrasco.",
    image: churrascaria,
    evaluation: 5,
    typeFood: "Churrasco",
    id: uuid(),
  },
  {
    title: "Empire Burguer",
    description:
      "No Empire Burger, nos orgulhamos de usar apenas ingredientes frescos e de alta qualidade. Nossos hambúrgueres são feitos com carne 100% bovina, selecionada e moída diariamente para garantir suculência e sabor inigualável.",
    image: hamburgueria,
    evaluation: 4.9,
    typeFood: "Hamburguer",
    id: uuid(),
  },
  {
    title: "Doce Sabor",
    description:
      "Venha conhecer a Doce Sabor e descubra por que somos a escolha favorita dos amantes de doces na cidade. Esperamos por você para compartilhar momentos deliciosos e inesquecíveis, onde cada detalhe é pensado para a sua satisfação.",
    image: doceria,
    evaluation: 4.7,
    typeFood: "Doce",
    id: uuid(),
  },
  {
    title: "Fuego y Sabor",
    description:
      "No Fuego y Sabor, cada prato é uma celebração da rica herança culinária do México. De tacos suculentos a burritos recheados, passando por enchiladas, quesadillas e guacamoles frescos, nosso cardápio é uma explosão de sabores que vão te transportar diretamente para as ruas do México.",
    image: mexicana,
    evaluation: 4.7,
    typeFood: "Mexicana",
    id: uuid(),
  },
];

const Home = () => (
  <>
    <Header />
    <RestaurantList restaurantes={restaurantes} />
  </>
);

export default Home;
