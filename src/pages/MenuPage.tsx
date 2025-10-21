import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  popular?: boolean;
}

export default function MenuPage() {
  const [cart, setCart] = useState<number[]>([]);

  const dishes: Dish[] = [
    {
      id: 1,
      name: 'Пицца Маргарита',
      description: 'Классическая итальянская пицца с моцареллой и базиликом',
      price: 590,
      category: 'italian',
      image: 'https://cdn.poehali.dev/projects/4c0d7edd-feb1-49d9-871d-4272bab7abd9/files/abf22467-c21e-4032-8ce0-90822a70b1c2.jpg',
      popular: true,
    },
    {
      id: 2,
      name: 'Паста Карбонара',
      description: 'Спагетти с беконом, яйцом и пармезаном',
      price: 490,
      category: 'italian',
      image: 'https://cdn.poehali.dev/projects/4c0d7edd-feb1-49d9-871d-4272bab7abd9/files/75615378-7b7d-48f2-bef7-7a47213cd900.jpg',
    },
    {
      id: 3,
      name: 'Суши сет',
      description: 'Разнообразный набор роллов и нигири',
      price: 890,
      category: 'asian',
      image: 'https://cdn.poehali.dev/projects/4c0d7edd-feb1-49d9-871d-4272bab7abd9/files/20e6e666-4d91-48f9-8ae7-8b4637106cd4.jpg',
      popular: true,
    },
    {
      id: 4,
      name: 'Пад Тай',
      description: 'Тайская лапша с креветками, арахисом и овощами',
      price: 550,
      category: 'asian',
      image: 'https://cdn.poehali.dev/projects/4c0d7edd-feb1-49d9-871d-4272bab7abd9/files/2b4c0e5e-def4-4b80-991b-ca5bf3310d71.jpg',
    },
    {
      id: 5,
      name: 'Бургер классик',
      description: 'Сочная говяжья котлета с овощами и соусом',
      price: 450,
      category: 'american',
      image: 'https://cdn.poehali.dev/projects/4c0d7edd-feb1-49d9-871d-4272bab7abd9/files/f7d65cfa-18a4-43a6-b098-dcbdd5d6aecf.jpg',
      popular: true,
    },
    {
      id: 6,
      name: 'Греческий салат',
      description: 'Свежие овощи с фетой и оливками',
      price: 390,
      category: 'salads',
      image: 'https://cdn.poehali.dev/projects/4c0d7edd-feb1-49d9-871d-4272bab7abd9/files/c63a71eb-f0b0-4e7f-9fb1-024680eabd70.jpg',
    },
  ];

  const addToCart = (dishId: number) => {
    setCart([...cart, dishId]);
  };

  const categories = [
    { value: 'all', label: 'Все блюда', icon: 'UtensilsCrossed' },
    { value: 'italian', label: 'Итальянская', icon: 'Pizza' },
    { value: 'asian', label: 'Азиатская', icon: 'UtensilsCrossed' },
    { value: 'american', label: 'Американская', icon: 'Beef' },
    { value: 'salads', label: 'Салаты', icon: 'Salad' },
  ];

  const filterDishes = (category: string) => {
    if (category === 'all') return dishes;
    return dishes.filter((dish) => dish.category === category);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-foreground">Наше меню</h1>
          <p className="text-xl text-muted-foreground">
            Выберите любимые блюда из кухонь мира
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8 h-auto gap-2">
            {categories.map((category) => (
              <TabsTrigger
                key={category.value}
                value={category.value}
                className="flex items-center gap-2 py-3"
              >
                <Icon name={category.icon as any} size={18} />
                <span className="hidden sm:inline">{category.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.value} value={category.value}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterDishes(category.value).map((dish) => (
                  <Card
                    key={dish.id}
                    className="overflow-hidden hover:shadow-xl transition-all group"
                  >
                    <div className="relative">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform"
                      />
                      {dish.popular && (
                        <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
                          <Icon name="Star" size={14} className="mr-1" />
                          Популярное
                        </Badge>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-semibold mb-2 text-foreground">
                        {dish.name}
                      </h3>
                      <p className="text-muted-foreground mb-4 min-h-[48px]">
                        {dish.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-primary">
                          {dish.price} ₽
                        </span>
                        <Button
                          onClick={() => addToCart(dish.id)}
                          className="font-semibold"
                        >
                          <Icon name="ShoppingCart" size={18} className="mr-2" />
                          В корзину
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
