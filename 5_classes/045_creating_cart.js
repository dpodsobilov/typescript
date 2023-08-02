"use strict";
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class Delivery {
    constructor(date) {
        this.date = date;
    }
}
class HomeDelivery extends Delivery {
    constructor(date, address) {
        super(date);
        this.address = address;
    }
}
class ShopDelivery extends Delivery {
    constructor(shopId) {
        super(new Date());
        this.shopId = shopId;
    }
}
class Cart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    deleteProduct(productId) {
        this.products = this.products.filter((p) => p.id !== productId);
    }
    countTotalCost() {
        let cost = 0;
        this.products.forEach((prod) => (cost += prod.price));
        return cost;
    }
    addDelivery(deliveryParams) {
        this.deliveryParams = deliveryParams;
    }
    checkout() {
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
