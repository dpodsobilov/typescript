class Product {
	public id: number;
	public name: string;
	public price: number;

	constructor(id: number, name: string, price: number) {
		this.id = id;
		this.name = name;
		this.price = price;
	}
}

class Delivery {
	date: Date;

	constructor(date: Date) {
		this.date = date;
	}
}

class HomeDelivery extends Delivery {
	address: string;

	constructor(date: Date, address: string) {
		super(date);
		this.address = address;
	}
}

class ShopDelivery extends Delivery {
	shopId: number;

	constructor(shopId: number) {
		super(new Date());
		this.shopId = shopId;
	}
}

type DeliveryOptions = HomeDelivery | ShopDelivery;

class Cart {
	private products: Product[] = [];
	private deliveryParams: Delivery;

	addProduct(product: Product): void {
		this.products.push(product);
	}

	deleteProduct(productId: number): void {
		this.products = this.products.filter((p: Product) => p.id !== productId);
	}

	countTotalCost(): number {
		let cost = 0;
		this.products.forEach((prod) => (cost += prod.price));
		return cost;
	}

	addDelivery(deliveryParams: DeliveryOptions): void {
		this.deliveryParams = deliveryParams;
	}

	checkout(): boolean {
		if (this.products.length == 0) {
			throw new Error('Корзина пуста!');
		}
		if (!this.deliveryParams) {
			throw new Error('Не указан способ доставки');
		}
		return true;
	}
}

const cart = new Cart();
cart.addProduct(new Product(1, 'Печенье', 10));
cart.addProduct(new Product(2, 'Торт', 30));
cart.addProduct(new Product(3, 'Шоколад', 20));
cart.deleteProduct(1);
cart.addDelivery(new HomeDelivery(new Date(), 'address'));
console.log(cart.countTotalCost());
console.log(cart.checkout());
