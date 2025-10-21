import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Пицца Маргарита',
      price: 590,
      quantity: 1,
      image: 'https://cdn.poehali.dev/projects/4c0d7edd-feb1-49d9-871d-4272bab7abd9/files/abf22467-c21e-4032-8ce0-90822a70b1c2.jpg',
    },
    {
      id: 2,
      name: 'Суши сет',
      price: 890,
      quantity: 2,
      image: 'https://cdn.poehali.dev/projects/4c0d7edd-feb1-49d9-871d-4272bab7abd9/files/20e6e666-4d91-48f9-8ae7-8b4637106cd4.jpg',
    },
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = subtotal >= 1000 ? 0 : 200;
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Корзина</h1>

        {cartItems.length === 0 ? (
          <Card className="text-center py-16">
            <CardContent>
              <Icon name="ShoppingCart" size={64} className="mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Ваша корзина пуста
              </h2>
              <p className="text-muted-foreground mb-6">
                Добавьте блюда из меню, чтобы оформить заказ
              </p>
              <Link to="/menu">
                <Button size="lg">
                  <Icon name="UtensilsCrossed" size={20} className="mr-2" />
                  Перейти в меню
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 text-foreground">
                          {item.name}
                        </h3>
                        <p className="text-2xl font-bold text-primary mb-3">
                          {item.price} ₽
                        </p>
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            <Icon name="Minus" size={16} />
                          </Button>
                          <span className="text-lg font-semibold w-8 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <Icon name="Plus" size={16} />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="ml-auto text-destructive"
                            onClick={() => removeItem(item.id)}
                          >
                            <Icon name="Trash2" size={20} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6 text-foreground">
                    Итого
                  </h2>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Сумма заказа:</span>
                      <span className="font-semibold">{subtotal} ₽</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Доставка:</span>
                      <span className="font-semibold">
                        {deliveryFee === 0 ? 'Бесплатно' : `${deliveryFee} ₽`}
                      </span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-xl font-bold text-foreground">
                      <span>Всего:</span>
                      <span className="text-primary">{total} ₽</span>
                    </div>
                  </div>
                  {subtotal < 1000 && (
                    <p className="text-sm text-muted-foreground mb-4 bg-muted p-3 rounded-lg">
                      <Icon name="Info" size={16} className="inline mr-1" />
                      Добавьте еще {1000 - subtotal} ₽ для бесплатной доставки
                    </p>
                  )}
                  <Link to="/checkout">
                    <Button size="lg" className="w-full font-semibold text-lg">
                      Оформить заказ
                      <Icon name="ArrowRight" size={20} className="ml-2" />
                    </Button>
                  </Link>
                  <Link to="/menu">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full mt-3 font-semibold"
                    >
                      Продолжить покупки
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
