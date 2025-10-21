import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function ContactsPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (999) 123-45-67',
      description: 'Ежедневно с 10:00 до 23:00',
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@foodexpress.ru',
      description: 'Ответим в течение 24 часов',
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      value: 'Москва, ул. Примерная, 123',
      description: 'Офис и пункт выдачи',
    },
    {
      icon: 'Clock',
      title: 'Время работы',
      value: '10:00 - 23:00',
      description: 'Без выходных',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-foreground">Контакты</h1>
          <p className="text-xl text-muted-foreground">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={info.icon as any} size={28} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">
                  {info.title}
                </h3>
                <p className="text-primary font-semibold mb-1">{info.value}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-2">
                <Icon name="MessageSquare" size={32} className="text-primary" />
                Форма обратной связи
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="contact-name">Ваше имя *</Label>
                  <Input id="contact-name" placeholder="Иван Иванов" required />
                </div>
                <div>
                  <Label htmlFor="contact-email">Email *</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="ivan@example.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="contact-phone">Телефон</Label>
                  <Input
                    id="contact-phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <Label htmlFor="contact-message">Сообщение *</Label>
                  <Textarea
                    id="contact-message"
                    placeholder="Опишите ваш вопрос или предложение..."
                    rows={5}
                    required
                  />
                </div>
                {submitted && (
                  <div className="bg-secondary/10 border border-secondary text-secondary-foreground p-4 rounded-lg flex items-center gap-2">
                    <Icon name="CheckCircle" size={20} className="text-secondary" />
                    <span>Сообщение отправлено! Мы свяжемся с вами в ближайшее время.</span>
                  </div>
                )}
                <Button type="submit" size="lg" className="w-full font-semibold">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                  <Icon name="HelpCircle" size={28} className="text-primary" />
                  Часто задаваемые вопросы
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">
                      Сколько времени занимает доставка?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Обычно доставка занимает 30-60 минут в зависимости от вашего адреса.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">
                      Какая минимальная сумма заказа?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Минимальная сумма заказа составляет 500 рублей.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">
                      Как отследить мой заказ?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      После оформления заказа мы отправим вам SMS с номером заказа и статусом доставки.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/10 to-primary/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                  <Icon name="Users" size={28} className="text-primary" />
                  Мы в социальных сетях
                </h2>
                <p className="text-muted-foreground mb-6">
                  Следите за новинками, акциями и специальными предложениями
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="flex-1 flex items-center justify-center gap-2 p-4 bg-background border border-border rounded-lg hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
                  >
                    <Icon name="Instagram" size={24} />
                    <span className="font-semibold hidden sm:inline">Instagram</span>
                  </a>
                  <a
                    href="#"
                    className="flex-1 flex items-center justify-center gap-2 p-4 bg-background border border-border rounded-lg hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
                  >
                    <Icon name="Facebook" size={24} />
                    <span className="font-semibold hidden sm:inline">Facebook</span>
                  </a>
                  <a
                    href="#"
                    className="flex-1 flex items-center justify-center gap-2 p-4 bg-background border border-border rounded-lg hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
                  >
                    <Icon name="Twitter" size={24} />
                    <span className="font-semibold hidden sm:inline">Twitter</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
