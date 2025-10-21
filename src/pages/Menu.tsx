import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { menuItems, cuisines, categories } from '@/data/menuItems';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

export default function Menu() {
  const [selectedCuisine, setSelectedCuisine] = useState('Все');
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const { addToCart } = useCart();

  const filteredItems = menuItems.filter(item => {
    const cuisineMatch = selectedCuisine === 'Все' || item.cuisine === selectedCuisine;
    const categoryMatch = selectedCategory === 'Все' || item.category === selectedCategory;
    return cuisineMatch && categoryMatch;
  });

  const handleAddToCart = (item: typeof menuItems[0]) => {
    addToCart(item);
    toast.success(`${item.name} добавлен в корзину!`, {
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Наше меню</h1>
          <p className="text-muted-foreground text-lg">
            Выберите блюдо из разнообразных кухонь мира
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <div>
            <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase">Кухни</h3>
            <div className="flex flex-wrap gap-2">
              {cuisines.map(cuisine => (
                <Button
                  key={cuisine}
                  variant={selectedCuisine === cuisine ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCuisine(cuisine)}
                  className="rounded-full"
                >
                  {cuisine}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase">Категории</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
              <div className="aspect-video bg-muted relative overflow-hidden group">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {item.isPopular && (
                  <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Icon name="Star" size={14} />
                    Популярное
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-white text-foreground px-4 py-2 rounded-full text-lg font-bold shadow-lg">
                  {item.price} ₽
                </div>
              </div>
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {item.cuisine}
                  </span>
                  <span className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {item.description}
                </p>
                <Button 
                  className="w-full font-semibold"
                  onClick={() => handleAddToCart(item)}
                >
                  <Icon name="ShoppingCart" size={18} className="mr-2" />
                  Добавить в корзину
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <Icon name="Search" size={64} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">Ничего не найдено</h3>
            <p className="text-muted-foreground">
              Попробуйте изменить фильтры поиска
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
