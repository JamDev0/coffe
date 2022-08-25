import Expresso from '../../../../assets/Coffees/Type=Expresso.png'
import Americano from '../../../../assets/Coffees/Type=Americano.png'
import ExpressoCremoso from '../../../../assets/Coffees/Type=Expresso Cremoso.png'
import ExpressoGelado from '../../../../assets/Coffees/Type=Café Gelado.png'
import CaféComLeite from '../../../../assets/Coffees/Type=Café com Leite.png'
import Latte from '../../../../assets/Coffees/Type=Latte.png'
import Arabe from '../../../../assets/Coffees/Type=Árabe.png'
import Capuccino from '../../../../assets/Coffees/Type=Capuccino.png'
import ChocolateQuente from '../../../../assets/Coffees/Type=Chocolate Quente.png'
import Cubano from '../../../../assets/Coffees/Type=Cubano.png'
import Havaiano from '../../../../assets/Coffees/Type=Havaiano.png'
import Macchiato from '../../../../assets/Coffees/Type=Macchiato.png'
import Mochaccino from '../../../../assets/Coffees/Type=Mochaccino.png'
import Irlandes from '../../../../assets/Coffees/Type=Irlandês.png'

export interface CoffeeInterface {
  tags?: string[]
  img: string
  name: string
  description: string
  price: number
  id: string
}

export const Coffees: CoffeeInterface[] = [
  {
    name: 'Expresso Tradicional',
    tags: ['Tradicional'],
    price: 9.99,
    img: Expresso,
    description: 'O tradicional café feito com água quente e grãos moídos',
    id: 'a',
  },
  {
    name: 'Expresso Americano',
    tags: ['Tradicional'],
    price: 9.99,
    img: Americano,
    description: 'Expresso diluído, menos intenso que o tradicional',
    id: 'b',
  },
  {
    name: 'Expresso Cremoso',
    tags: ['Tradicional'],
    price: 9.99,
    img: ExpressoCremoso,
    description: 'Café expresso tradicional com espuma cremosa',
    id: 'c',
  },
  {
    name: 'Expresso Gelado',
    tags: ['Tradicional', 'Gelado'],
    price: 9.99,
    img: ExpressoGelado,
    description: 'Bebida preparada com café expresso e cubos de gelo',
    id: 'd',
  },
  {
    name: 'Café com Leite',
    tags: ['Tradicional', 'Com Leite'],
    price: 9.99,
    img: CaféComLeite,
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    id: 'e',
  },
  {
    name: 'Latte',
    tags: ['Tradicional', 'Com Leite'],
    price: 9.99,
    img: Latte,
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    id: 'f',
  },
  {
    name: 'Capuccino',
    tags: ['Tradicional', 'Com Leite'],
    price: 9.99,
    img: Capuccino,
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    id: 'g',
  },
  {
    name: 'Macchiato',
    tags: ['Tradicional', 'Com Leite'],
    price: 9.99,
    img: Macchiato,
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    id: 'h',
  },
  {
    name: 'Mochaccino',
    tags: ['Tradicional', 'Com Leite'],
    price: 9.99,
    img: Mochaccino,
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    id: 'i',
  },
  {
    name: 'Chocolate Quente',
    tags: ['Especial', 'Com Leite'],
    price: 9.99,
    img: ChocolateQuente,
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    id: 'j',
  },
  {
    name: 'Cubano',
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    price: 9.99,
    img: Cubano,
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    id: 'k',
  },
  {
    name: 'Havaiano',
    tags: ['Especial'],
    price: 9.99,
    img: Havaiano,
    description: 'Bebida adocicada preparada com café e leite de coco',
    id: 'l',
  },
  {
    name: 'Árabe',
    tags: ['Especial'],
    price: 9.99,
    img: Arabe,
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    id: 'm',
  },
  {
    name: 'Irlandês',
    tags: ['Especial', 'Alcoólico'],
    price: 9.99,
    img: Irlandes,
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    id: 'n',
  },
]
