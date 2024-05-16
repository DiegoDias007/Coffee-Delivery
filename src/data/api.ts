import { Coffee } from "../@types/coffee.type";

// Hard coded data, later add API.
const data: Coffee[] = [
  {
    id: 1,
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    src: "expresso-tradicional.png",
    price: 9.90,
  },
  {
    id: 2,
    name: "Expresso Americano",
    src: "expresso-americano.png",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.90,
  },
  {
    id: 3,
    name: "Expresso Cremoso",
    src: "expresso-cremoso.png",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.90,
  },
  {
    id: 4,
    name: "Expresso Gelado", 
    src: "expresso-cremoso.png",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.90,
  },
  {
    id: 5,
    name: "Café com Leite",
    src: "cafe-com-leite.png",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.90,
  },
  {
    id: 6,
    name: "Latte",
    src: "latte.png",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.90,
  },
  {
    id: 7,
    name: "Capuccino",
    src: "capuccino.png",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.90,
  },
  {
    id: 8,
    name: "Macchiato",
    src: "macchiato.png",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.90,
  },
  {
    id: 9,
    name: "Mocaccino",
    src: "mocaccino.png",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.90,
  },
  {
    id: 10,
    name: "Chocolate Quente",
    src: "chocolate-quente.png",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.90,
  },
  {
    id: 11,
    name: "Cubano",
    src: "cubano.png",
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.90,
  },
  {
    id: 12,
    name: "Havaiano",
    src: "havaiano.png",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.90,
  },
  {
    id: 13,
    name: "Árabe",
    src: "arabe.png",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.90,
  },
  {
    id: 14,
    name: "Irlandês",
    src: "irlandes.png",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.90,
  }
];

function getData(): Promise<Coffee[]> {
  return Promise.resolve(data);
}

export { getData };