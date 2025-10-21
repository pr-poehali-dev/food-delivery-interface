import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('cash');

  const orderItems = [
    { name: 'Пицца Маргарита', quantity: 1, price: 590 },
    { name: 'Суши сет', quantity: 2, price: 890 },
  ];

  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = subtotal >= 1000 ? 0 : 200;
  const total = subtotal + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Заказ успешно оформлен! Мы свяжемся с вами в ближайшее время.');
    navigate('/');
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Оформление заказа</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="User" size={24} className="text-primary" />
                    Контактные данные
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Имя *</Label>
                      <Input id="name" placeholder="Иван" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ivan@example.com"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MapPin" size={24} className="text-primary" />
                    Адрес доставки
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="street">Улица *</Label>
                      <Input id="street" placeholder="Ленина" required />
                    </div>
                    <div>
                      <Label htmlFor="house">Дом *</Label>
                      <Input id="house" placeholder="10" required />
                    </div>
                    <div>
                      <Label htmlFor="apartment">Квартира</Label>
                      <Input id="apartment" placeholder="25" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="entrance">Подъезд</Label>
                      <Input id="entrance" placeholder="1" />
                    </div>
                    <div>
                      <Label htmlFor="floor">Этаж</Label>
                      <Input id="floor" placeholder="3" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="comment">Комментарий к заказу</Label>
                    <Textarea
                      id="comment"
                      placeholder="Дополнительные пожелания..."
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Wallet" size={24} className="text-primary" />
                    Способ оплаты
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted transition-colors">
                      <RadioGroupItem value="cash" id="cash" />
                      <Label htmlFor="cash" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-2">
                          <Icon name="Banknote" size={20} />
                          <span className="font-semibold">Наличными курьеру</span>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted transition-colors">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-2">
                          <Icon name="CreditCard" size={20} />
                          <span className="font-semibold">Картой онлайн</span>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardHeader>
                  <CardTitle>Ваш заказ</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {orderItems.map((item, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          {item.name} × {item.quantity}
                        </span>
                        <span className="font-semibold">
                          {item.price * item.quantity} ₽
                        </span>
                      </div>
                    ))}
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Сумма:</span>
                      <span className="font-semibold">{subtotal} ₽</span>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Доставка:</span>
                      <span className="font-semibold">
                        {deliveryFee === 0 ? 'Бесплатно' : `${deliveryFee} ₽`}
                      </span>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-xl font-bold">
                    <span>Итого:</span>
                    <span className="text-primary">{total} ₽</span>
                  </div>
                  <Button type="submit" size="lg" className="w-full font-semibold text-lg">
                    Подтвердить заказ
                    <Icon name="Check" size={20} className="ml-2" />
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с условиями доставки
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
