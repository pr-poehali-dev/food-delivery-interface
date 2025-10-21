export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  cuisine: string;
  image: string;
  isPopular?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface OrderFormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  comment?: string;
  paymentMethod: 'cash' | 'card';
}
