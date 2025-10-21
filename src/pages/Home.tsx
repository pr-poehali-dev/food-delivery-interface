import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { menuItems } from '@/data/menuItems';

export default function Home() {
  const popularItems = menuItems.filter(item => item.isPopular).slice(0, 3);

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Вкус мира у вашего порога
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Доставляем разнообразные блюда из кухонь мира за 30-60 минут. Итальянская, японская, американская и другие кухни в одном месте!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/menu">
                <Button size="lg" className="text-lg px-8 py-6 w-full sm:w-auto">
                  <Icon name="UtensilsCrossed" size={20} className="mr-2" />
                  Смотреть меню
                </Button>
              </Link>
              <Link to="/contacts">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 w-full sm:w-auto">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться с нами
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Почему выбирают нас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3>
                <p className="text-muted-foreground">
                  Доставляем горячие блюда за 30-60 минут по всему городу
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Globe" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Разнообразие кухонь</h3>
                <p className="text-muted-foreground">
                  Итальянская, японская, американская, тайская и другие мировые кухни
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Star" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Отборное качество</h3>
                <p className="text-muted-foreground">
                  Работаем только со свежими продуктами и проверенными поставщиками
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Популярные блюда
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularItems.map(item => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {item.price} ₽
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {item.cuisine}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  <Link to="/menu">
                    <Button className="w-full">
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      Заказать
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/menu">
              <Button variant="outline" size="lg">
                Посмотреть все блюда
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Готовы сделать заказ?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Выберите любимое блюдо и мы доставим его горячим прямо к вам!
          </p>
          <Link to="/menu">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Перейти в меню
              <Icon name="ChevronRight" size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
