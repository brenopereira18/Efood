class Restaurant {
  title: string;
  image: string;
  description: string;
  evaluation: number;
  typeFood: string;
  id: string;

  constructor(
    title: string,
    image: string,
    description: string,
    evaluation: number,
    typeFood: string,
    id: string
  ) {
    this.title = title;
    this.image = image;
    this.description = description;
    this.evaluation = evaluation;
    this.typeFood = typeFood;
    this.id = id;
  }
}

export default Restaurant;
