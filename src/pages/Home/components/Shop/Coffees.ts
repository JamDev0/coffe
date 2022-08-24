import ExpressoTradicional from '../../../../assets/Coffees/ExpressoTradicional.png'

interface CoffeeInterface {
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
    img: ExpressoTradicional,
    description: 'Teste',
    id: String(new Date().getTime()),
  },
  {
    name: 'Expresso Americano',
    tags: ['Tradicional'],
    price: 9.99,
    img: ExpressoTradicional,
    description: 'Teste',
    id: String(new Date().getTime()),
  },
  {
    name: 'Expresso Cremoso',
    tags: ['Tradicional'],
    price: 9.99,
    img: ExpressoTradicional,
    description: 'Teste',
    id: String(new Date().getTime()),
  },
  {
    name: 'Expresso Gelado',
    tags: ['Tradicional', 'Gelado'],
    price: 9.99,
    img: ExpressoTradicional,
    description: 'Teste',
    id: String(new Date().getTime()),
  },
  {
    name: 'Café com Leite',
    tags: ['Tradicional', 'Com Leite'],
    price: 9.99,
    img: ExpressoTradicional,
    description: 'Teste',
    id: String(new Date().getTime()),
  },
  {
    name: 'Latte',
    tags: ['Tradicional', 'Com Leite'],
    price: 9.99,
    img: ExpressoTradicional,
    description: 'Teste',
    id: String(new Date().getTime()),
  },
  {
    name: 'Capuccino',
    tags: ['Tradicional', 'Com Leite'],
    price: 9.99,
    img: ExpressoTradicional,
    description: 'Teste',
    id: String(new Date().getTime()),
  },
  {
    name: 'Macchiato',
    tags: ['Tradicional', 'Com Leite'],
    price: 9.99,
    img: ExpressoTradicional,
    description: 'Teste',
    id: String(new Date().getTime()),
  },
  {
    name: 'Mocaccino',
    tags: ['Tradicional', 'Com Leite'],
    price: 9.99,
    img: ExpressoTradicional,
    description: 'Teste',
    id: String(new Date().getTime()),
  },
  {
    name: 'Chocolate Quente',
    tags: ['Especial', 'Com Leite'],
    price: 9.99,
    img: ExpressoTradicional,
    description: 'Teste',
    id: String(new Date().getTime()),
  },
  {
    name: 'Cubano',
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    price: 9.99,
    img: ExpressoTradicional,
    description: 'Teste',
    id: String(new Date().getTime()),
  },
  {
    name: 'Havaiano',
    tags: ['Especial'],
    price: 9.99,
    img: ExpressoTradicional,
    description: 'Teste',
    id: String(new Date().getTime()),
  },
  {
    name: 'Árabe',
    tags: ['Especial'],
    price: 9.99,
    img: ExpressoTradicional,
    description: 'Teste',
    id: String(new Date().getTime()),
  },
  {
    name: 'Irlandês',
    tags: ['Especial', 'Alcoólico'],
    price: 9.99,
    img: ExpressoTradicional,
    description: 'Teste',
    id: String(new Date().getTime()),
  },
]
