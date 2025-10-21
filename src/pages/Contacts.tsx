import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Заполните все поля формы');
      return;
    }

    toast.success('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Контакты</h1>
          <p className="text-muted-foreground text-lg">
            Свяжитесь с нами удобным способом
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="MessageSquare" size={24} />
                Напишите нам
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@mail.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea
                    id="message"
                    placeholder="Ваше сообщение..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Phone" size={24} />
                  Телефон
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+79991234567" className="text-2xl font-bold text-primary hover:underline">
                  +7 (999) 123-45-67
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  Ежедневно с 10:00 до 23:00
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Mail" size={24} />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:info@foodexpress.ru" className="text-xl font-bold text-primary hover:underline">
                  info@foodexpress.ru
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  Отвечаем в течение 24 часов
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MapPin" size={24} />
                  Адрес
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-2">
                  г. Москва, ул. Примерная, д. 123
                </p>
                <p className="text-sm text-muted-foreground">
                  Офис работает Пн-Пт с 9:00 до 18:00
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Share2" size={24} />
                  Соцсети
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-background border-2 border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
                  >
                    <Icon name="Instagram" size={24} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-background border-2 border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
                  >
                    <Icon name="Facebook" size={24} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-background border-2 border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
                  >
                    <Icon name="Twitter" size={24} />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="HelpCircle" size={24} />
              Часто задаваемые вопросы (FAQ)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Как быстро вы доставляете?</AccordionTrigger>
                <AccordionContent>
                  Среднее время доставки составляет 30-60 минут в зависимости от вашего адреса и загруженности кухни. Мы всегда стремимся доставить заказ максимально быстро.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Есть ли минимальная сумма заказа?</AccordionTrigger>
                <AccordionContent>
                  Минимальная сумма заказа составляет 500 рублей. Доставка при заказе от 1000 рублей — бесплатная.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Какие способы оплаты вы принимаете?</AccordionTrigger>
                <AccordionContent>
                  Мы принимаем оплату банковскими картами онлайн, а также наличными курьеру при получении заказа.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Можно ли изменить или отменить заказ?</AccordionTrigger>
                <AccordionContent>
                  Да, вы можете изменить или отменить заказ, позвонив нам по телефону +7 (999) 123-45-67. Обратите внимание, что после начала приготовления заказа отменить его будет невозможно.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Как отследить статус заказа?</AccordionTrigger>
                <AccordionContent>
                  После оформления заказа вам придет SMS с подтверждением и ссылкой для отслеживания статуса. Также вы можете позвонить в службу поддержки.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Работаете ли вы в праздничные дни?</AccordionTrigger>
                <AccordionContent>
                  Да, мы работаем 7 дней в неделю, включая праздничные дни. График работы: ежедневно с 10:00 до 23:00.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
