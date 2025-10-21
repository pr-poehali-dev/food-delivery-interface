import { MenuItem } from '@/types';

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Пицца Маргарита',
    description: 'Классическая итальянская пицца с моцареллой, томатами и базиликом',
    price: 590,
    category: 'Основные блюда',
    cuisine: 'Итальянская',
    image: 'https://cdn.poehali.dev/projects/4c0d7edd-feb1-49d9-871d-4272bab7abd9/files/eb7ffa3e-022a-4db3-a768-0bf5ca05338e.jpg',
    isPopular: true
  },
  {
    id: '2',
    name: 'Суши сет "Токио"',
    description: 'Ассорти из 24 роллов: Филадельфия, Калифорния, Спайси тунец',
    price: 1290,
    category: 'Основные блюда',
    cuisine: 'Японская',
    image: 'https://cdn.poehali.dev/projects/4c0d7edd-feb1-49d9-871d-4272bab7abd9/files/3e1ca8ac-0355-402f-9c98-01182689a88f.jpg',
    isPopular: true
  },
  {
    id: '3',
    name: 'Бургер BBQ Бекон',
    description: 'Сочная говяжья котлета, бекон, сыр чеддер, соус BBQ, салат и томаты',
    price: 450,
    category: 'Основные блюда',
    cuisine: 'Американская',
    image: 'https://cdn.poehali.dev/projects/4c0d7edd-feb1-49d9-871d-4272bab7abd9/files/07ccdd1b-e8bb-42a2-ba3a-763b3fc2e7ba.jpg',
    isPopular: true
  },
  {
    id: '4',
    name: 'Том Ям с креветками',
    description: 'Острый тайский суп с креветками, грибами и лемонграссом',
    price: 520,
    category: 'Супы',
    cuisine: 'Тайская',
    image: 'https://placehold.co/400x300/FF6B35/white?text=Tom+Yum',
    isPopular: false
  },
  {
    id: '5',
    name: 'Паста Карбонара',
    description: 'Спагетти с беконом, яйцом и пармезаном в сливочном соусе',
    price: 480,
    category: 'Основные блюда',
    cuisine: 'Итальянская',
    image: 'https://placehold.co/400x300/FF6B35/white?text=Carbonara',
    isPopular: false
  },
  {
    id: '6',
    name: 'Фо Бо',
    description: 'Традиционный вьетнамский суп с говядиной и рисовой лапшой',
    price: 420,
    category: 'Супы',
    cuisine: 'Вьетнамская',
    image: 'https://placehold.co/400x300/FF6B35/white?text=Pho+Bo',
    isPopular: false
  },
  {
    id: '7',
    name: 'Цезарь с курицей',
    description: 'Салат с курицей гриль, сыром пармезан и соусом цезарь',
    price: 380,
    category: 'Салаты',
    cuisine: 'Европейская',
    image: 'https://placehold.co/400x300/FF6B35/white?text=Caesar',
    isPopular: false
  },
  {
    id: '8',
    name: 'Пад Тай с креветками',
    description: 'Жареная рисовая лапша с креветками, яйцом, арахисом и овощами',
    price: 550,
    category: 'Основные блюда',
    cuisine: 'Тайская',
    image: 'https://placehold.co/400x300/FF6B35/white?text=Pad+Thai',
    isPopular: true
  },
  {
    id: '9',
    name: 'Тирамису',
    description: 'Классический итальянский десерт с маскарпоне и кофе',
    price: 320,
    category: 'Десерты',
    cuisine: 'Итальянская',
    image: 'https://placehold.co/400x300/FF6B35/white?text=Tiramisu',
    isPopular: false
  },
  {
    id: '10',
    name: 'Тако с говядиной',
    description: 'Три мексиканских тако с маринованной говядиной и гуакамоле',
    price: 490,
    category: 'Основные блюда',
    cuisine: 'Мексиканская',
    image: 'https://placehold.co/400x300/FF6B35/white?text=Tacos',
    isPopular: false
  },
  {
    id: '11',
    name: 'Рамен с мисо',
    description: 'Японский суп-лапша с мисо-бульоном, яйцом и свининой',
    price: 580,
    category: 'Супы',
    cuisine: 'Японская',
    image: 'https://placehold.co/400x300/FF6B35/white?text=Ramen',
    isPopular: true
  },
  {
    id: '12',
    name: 'Чизкейк Нью-Йорк',
    description: 'Нежный творожный торт на печеньях с ягодным соусом',
    price: 340,
    category: 'Десерты',
    cuisine: 'Американская',
    image: 'https://placehold.co/400x300/FF6B35/white?text=Cheesecake',
    isPopular: false
  }
];

export const cuisines = ['Все', 'Итальянская', 'Японская', 'Американская', 'Тайская', 'Вьетнамская', 'Европейская', 'Мексиканская'];
export const categories = ['Все', 'Основные блюда', 'Супы', 'Салаты', 'Десерты'];