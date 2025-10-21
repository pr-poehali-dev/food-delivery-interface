import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface MenuCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating?: number;
  onAddToCart: (id: number) => void;
}

export default function MenuCard({
  id,
  name,
  description,
  price,
  image,
  category,
  rating = 4.5,
  onAddToCart
}: MenuCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
        />
        <Badge className="absolute top-3 left-3 bg-background/90 text-foreground hover:bg-background/90">
          {category}
        </Badge>
      </div>
      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-lg line-clamp-1">{name}</h3>
          <div className="flex items-center gap-1 text-sm">
            <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{rating}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">{price} ₽</span>
          <Button onClick={() => onAddToCart(id)} className="gap-2">
            <Icon name="ShoppingCart" size={18} />
            В корзину
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
