import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function HomePage() {
  const features = [
    {
      icon: 'Clock',
      title: 'Быстрая доставка',
      description: 'Доставим ваш заказ за 30-60 минут',
    },
    {
      icon: 'Shield',
      title: 'Качество гарантировано',
      description: 'Только свежие продукты и проверенные рестораны',
    },
    {
      icon: 'Globe',
      title: 'Кухни мира',
      description: 'Итальянская, японская, американская и другие',
    },
    {
      icon: 'Wallet',
      title: 'Выгодные цены',
      description: 'Регулярные акции и специальные предложения',
    },
  ];

  const popularDishes = [
    {
      id: 1,
      name: 'Пицца Маргарита',
      description: 'Классическая итальянская пицца с моцареллой и базиликом',
      price: 590,
      image: 'https://cdn.poehali.dev/projects/4c0d7edd-feb1-49d9-871d-4272bab7abd9/files/abf22467-c21e-4032-8ce0-90822a70b1c2.jpg',
    },
    {
      id: 2,
      name: 'Суши сет',
      description: 'Разнообразный набор роллов и нигири',
      price: 890,
      image: 'https://cdn.poehali.dev/projects/4c0d7edd-feb1-49d9-871d-4272bab7abd9/files/20e6e666-4d91-48f9-8ae7-8b4637106cd4.jpg',
    },
    {
      id: 3,
      name: 'Бургер классик',
      description: 'Сочная говяжья котлета с овощами и соусом',
      price: 450,
      image: 'https://cdn.poehali.dev/projects/4c0d7edd-feb1-49d9-871d-4272bab7abd9/files/aa4d0035-5b05-481d-9952-ab77cd064f65.jpg',
    },
  ];

  const faqItems = [
    {
      question: 'Как сделать заказ?',
      answer: 'Выберите блюда в меню, добавьте их в корзину и оформите заказ. Мы свяжемся с вами для подтверждения.',
    },
    {
      question: 'Сколько стоит доставка?',
      answer: 'Доставка бесплатна при заказе от 1000 рублей. При меньшей сумме стоимость доставки составит 200 рублей.',
    },
    {
      question: 'Как можно оплатить заказ?',
      answer: 'Мы принимаем оплату наличными курьеру, банковской картой онлайн или через электронные кошельки.',
    },
    {
      question: 'В какое время работает доставка?',
      answer: 'Мы принимаем заказы ежедневно с 10:00 до 23:00. Доставка осуществляется в течение 30-60 минут.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
                Доставка еды из кухонь мира
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Закажите любимые блюда с доставкой на дом. Быстро, вкусно, удобно!
              </p>
              <div className="flex gap-4">
                <Link to="/menu">
                  <Button size="lg" className="font-semibold text-lg">
                    Смотреть меню
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Button>
                </Link>
                <Link to="/contacts">
                  <Button size="lg" variant="outline" className="font-semibold text-lg">
                    Контакты
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/4c0d7edd-feb1-49d9-871d-4272bab7abd9/files/aa4d0035-5b05-481d-9952-ab77cd064f65.jpg"
                alt="Разнообразные блюда"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Популярные блюда
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {popularDishes.map((dish) => (
              <Card key={dish.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-foreground">{dish.name}</h3>
                  <p className="text-muted-foreground mb-4">{dish.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{dish.price} ₽</span>
                    <Button>
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/menu">
              <Button size="lg" variant="outline" className="font-semibold">
                Все блюда
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Часто задаваемые вопросы
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Готовы сделать заказ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Выберите блюда из нашего меню и получите доставку за 30-60 минут!
          </p>
          <Link to="/menu">
            <Button size="lg" variant="secondary" className="font-semibold text-lg">
              Перейти в меню
              <Icon name="ChefHat" size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
