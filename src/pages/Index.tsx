import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MenuCard from '@/components/MenuCard';
import CartSheet from '@/components/CartSheet';
import CheckoutDialog from '@/components/CheckoutDialog';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}

export default function Index() {
  const { toast } = useToast();
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: 'Бургер Классик',
      description: 'Сочная говяжья котлета, свежие овощи, фирменный соус',
      price: 450,
      image: 'https://cdn.poehali.dev/projects/4c0d7edd-feb1-49d9-871d-4272bab7abd9/files/1545b55a-67ea-42e3-820a-db9a5aa6dfe3.jpg',
      category: 'Американская',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Суши-сет Токио',
      description: 'Ассорти из 24 роллов с лососем, тунцом и угрём',
      price: 890,
      image: 'https://cdn.poehali.dev/projects/4c0d7edd-feb1-49d9-871d-4272bab7abd9/files/04cf2ee0-6ed6-49b9-8ba3-bdc4c8094361.jpg',
      category: 'Азиатская',
      rating: 4.9
    },
    {
      id: 3,
      name: 'Паста Карбонара',
      description: 'Традиционная итальянская паста с беконом и сливочным соусом',
      price: 520,
      image: 'https://cdn.poehali.dev/projects/4c0d7edd-feb1-49d9-871d-4272bab7abd9/files/ebc1c0af-9a19-4b43-b24c-ced596508abf.jpg',
      category: 'Итальянская',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Пицца Маргарита',
      description: 'Классическая пицца с томатами, моцареллой и базиликом',
      price: 590,
      image: 'https://cdn.poehali.dev/projects/4c0d7edd-feb1-49d9-871d-4272bab7abd9/files/1545b55a-67ea-42e3-820a-db9a5aa6dfe3.jpg',
      category: 'Итальянская',
      rating: 4.6
    },
    {
      id: 5,
      name: 'Рамен со свининой',
      description: 'Насыщенный бульон, лапша удон, нежная свинина',
      price: 650,
      image: 'https://cdn.poehali.dev/projects/4c0d7edd-feb1-49d9-871d-4272bab7abd9/files/04cf2ee0-6ed6-49b9-8ba3-bdc4c8094361.jpg',
      category: 'Азиатская',
      rating: 4.8
    },
    {
      id: 6,
      name: 'Стейк Рибай',
      description: 'Мраморная говядина средней прожарки с овощами-гриль',
      price: 1290,
      image: 'https://cdn.poehali.dev/projects/4c0d7edd-feb1-49d9-871d-4272bab7abd9/files/1545b55a-67ea-42e3-820a-db9a5aa6dfe3.jpg',
      category: 'Американская',
      rating: 4.9
    },
    {
      id: 7,
      name: 'Борщ с пампушками',
      description: 'Классический украинский борщ с говядиной',
      price: 380,
      image: 'https://cdn.poehali.dev/projects/4c0d7edd-feb1-49d9-871d-4272bab7abd9/files/ebc1c0af-9a19-4b43-b24c-ced596508abf.jpg',
      category: 'Русская',
      rating: 4.7
    },
    {
      id: 8,
      name: 'Пельмени домашние',
      description: 'Пельмени из свинины и говядины со сметаной',
      price: 420,
      image: 'https://cdn.poehali.dev/projects/4c0d7edd-feb1-49d9-871d-4272bab7abd9/files/ebc1c0af-9a19-4b43-b24c-ced596508abf.jpg',
      category: 'Русская',
      rating: 4.5
    }
  ];

  const categories = ['Все', 'Итальянская', 'Азиатская', 'Американская', 'Русская'];

  const handleAddToCart = (itemId: number) => {
    const item = menuItems.find(m => m.id === itemId);
    if (!item) return;

    setCart(prevCart => {
      const existing = prevCart.find(c => c.id === itemId);
      if (existing) {
        return prevCart.map(c =>
          c.id === itemId ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prevCart, {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1,
        image: item.image
      }];
    });

    toast({
      title: "Добавлено в корзину",
      description: item.name,
    });
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    setCartOpen(false);
    setCheckoutOpen(true);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setCartOpen(true)}
      />

      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/20 py-20 md:py-32 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Доставка еды из лучших
              <span className="text-primary"> ресторанов мира</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Итальянская, азиатская, американская и русская кухня — всё в одном месте
            </p>
            <Button size="lg" className="text-lg px-8 py-6 gap-2" asChild>
              <a href="#menu">
                <Icon name="UtensilsCrossed" size={20} />
                Смотреть меню
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Быстрая доставка</h3>
              <p className="text-muted-foreground">
                Привезём ваш заказ за 30-60 минут
              </p>
            </div>
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Star" size={32} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Качество еды</h3>
              <p className="text-muted-foreground">
                Работаем только с проверенными ресторанами
              </p>
            </div>
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Wallet" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Выгодные цены</h3>
              <p className="text-muted-foreground">
                Бесплатная доставка от 1000 ₽
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наше меню</h2>
            <p className="text-lg text-muted-foreground">
              Выберите блюда из разных кухонь мира
            </p>
          </div>

          <Tabs defaultValue="Все" className="w-full">
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-5 mb-8">
              {categories.map(cat => (
                <TabsTrigger key={cat} value={cat}>{cat}</TabsTrigger>
              ))}
            </TabsList>

            {categories.map(category => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {menuItems
                    .filter(item => category === 'Все' || item.category === category)
                    .map(item => (
                      <MenuCard
                        key={item.id}
                        {...item}
                        onAddToCart={handleAddToCart}
                      />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section id="delivery" className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Условия доставки
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-lg">
                <Icon name="MapPin" size={32} className="text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Зона доставки</h3>
                <p className="text-muted-foreground">
                  Доставляем по всей Москве в пределах МКАД
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <Icon name="Clock" size={32} className="text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-2">Время доставки</h3>
                <p className="text-muted-foreground">
                  Ежедневно с 10:00 до 23:00
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <Icon name="Truck" size={32} className="text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Стоимость</h3>
                <p className="text-muted-foreground">
                  Бесплатно от 1000 ₽, иначе 250 ₽
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <Icon name="CreditCard" size={32} className="text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-2">Оплата</h3>
                <p className="text-muted-foreground">
                  Наличными или картой курьеру
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Частые вопросы
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  Как быстро привезут заказ?
                </AccordionTrigger>
                <AccordionContent>
                  Среднее время доставки составляет 30-60 минут в зависимости от загруженности
                  и вашего адреса. Мы всегда стараемся доставить заказ как можно быстрее!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  Есть ли минимальная сумма заказа?
                </AccordionTrigger>
                <AccordionContent>
                  Минимальная сумма заказа — 500 ₽. При заказе от 1000 ₽ доставка бесплатная,
                  при меньшей сумме стоимость доставки составит 250 ₽.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Можно ли заказать заранее?
                </AccordionTrigger>
                <AccordionContent>
                  Да, вы можете указать желаемое время доставки в комментарии к заказу.
                  Мы приготовим ваш заказ к указанному времени.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  Какие способы оплаты доступны?
                </AccordionTrigger>
                <AccordionContent>
                  Вы можете оплатить заказ наличными или банковской картой при получении.
                  Курьер имеет при себе терминал для безналичной оплаты.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Свяжитесь с нами
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">info@foodexpress.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-muted-foreground">
                        Москва, ул. Примерная, 1<br />
                        Ежедневно с 10:00 до 23:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  toast({
                    title: "Сообщение отправлено!",
                    description: "Мы свяжемся с вами в ближайшее время.",
                  });
                  (e.target as HTMLFormElement).reset();
                }}
              >
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Ваше имя</Label>
                  <Input id="contact-name" placeholder="Иван Иванов" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input id="contact-email" type="email" placeholder="ivan@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-message">Сообщение</Label>
                  <Textarea
                    id="contact-message"
                    placeholder="Ваше сообщение..."
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" className="w-full gap-2">
                  <Icon name="Send" size={18} />
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <CartSheet
        open={cartOpen}
        onOpenChange={setCartOpen}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      <CheckoutDialog
        open={checkoutOpen}
        onOpenChange={setCheckoutOpen}
        total={total}
      />
    </div>
  );
}
