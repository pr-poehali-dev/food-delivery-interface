import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useCart } from '@/context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="ShoppingCart" size={48} className="text-muted-foreground" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Ваша корзина пуста</h1>
            <p className="text-muted-foreground mb-8">
              Добавьте вкусные блюда из нашего меню
            </p>
            <Link to="/menu">
              <Button size="lg">
                <Icon name="UtensilsCrossed" size={20} className="mr-2" />
                Перейти в меню
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Корзина</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map(item => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">{item.name}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-1">
                            {item.description}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                          className="flex-shrink-0"
                        >
                          <Icon name="Trash2" size={18} className="text-destructive" />
                        </Button>
                      </div>
                      <div className="flex justify-between items-center mt-3">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Icon name="Minus" size={14} />
                          </Button>
                          <span className="w-12 text-center font-semibold">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Icon name="Plus" size={14} />
                          </Button>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-primary">
                            {item.price * item.quantity} ₽
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {item.price} ₽ за шт.
                          </div>
                        </div>
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
                <h2 className="text-xl font-bold mb-4">Итого</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Товаров:</span>
                    <span>{cart.reduce((sum, item) => sum + item.quantity, 0)} шт.</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Сумма:</span>
                    <span>{getTotalPrice()} ₽</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Доставка:</span>
                    <span className="text-secondary font-semibold">Бесплатно</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Итого:</span>
                      <span className="text-primary">{getTotalPrice()} ₽</span>
                    </div>
                  </div>
                </div>
                <Link to="/checkout">
                  <Button className="w-full mb-3" size="lg">
                    <Icon name="CreditCard" size={20} className="mr-2" />
                    Оформить заказ
                  </Button>
                </Link>
                <Link to="/menu">
                  <Button variant="outline" className="w-full">
                    <Icon name="ArrowLeft" size={18} className="mr-2" />
                    Продолжить покупки
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
