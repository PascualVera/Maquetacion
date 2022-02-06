export class Cesta {
  constructor() {
    this.products = [];
    this.total = this.setPrice();
  }
  setPrice() {
    let total = 0;
    for (const item of this.products) {
      total += item.price;
    }
    return total;
  }
}
export class Item {
  constructor() {
    this.name;
    this.nClicks = 0;
    this.price;
  }
}
