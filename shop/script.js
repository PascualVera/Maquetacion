import { Item } from "./cesta.js";
import { Cesta } from "./cesta.js";

//Items

//1
let item1 = new Item();

//2
let item2 = new Item();

//3
let item3 = new Item();

//4
let item4 = new Item();

//5
let item5 = new Item();

//6
let item6 = new Item();
//Cesta

$("#bnt1").click(function () {
  item1.nClicks++;
  let priceStr = $("#val1").text();
  let price = parseInt(priceStr);
  item1.name = $("#item1").text();
  item1.price = price * item1.nClicks;
  console.log(item1);
});
$("#bnt2").click(function () {
  item2.nClicks++;
  let priceStr = $("#val2").text();
  let price = parseInt(priceStr);
  item2.name = $("#item2").text();
  item2.price = price * item2.nClicks;
  console.log(item2);
});
$("#bnt3").click(function () {
  item3.nClicks++;
  let priceStr = $("#val3").text();
  let price = parseInt(priceStr);
  item3.name = $("#item3").text();
  item3.price = price * item3.nClicks;
  console.log(item3);
});
$("#bnt4").click(function () {
  item4.nClicks++;
  let priceStr = $("#val4").text();
  let price = parseInt(priceStr);
  item4.name = $("#item4").text();
  item4.price = price * item4.nClicks;
  console.log(item4);
});
$("#bnt5").click(function () {
  item5.nClicks++;
  let priceStr = $("#val5").text();
  let price = parseInt(priceStr);
  item5.name = $("#item5").text();
  item5.price = price * item5.nClicks;
  console.log(item5);
});
$("#bnt6").click(function () {
  item6.nClicks++;
  let priceStr = $("#val6").text();
  let price = parseInt(priceStr);
  item6.name = $("#item6").text();
  item6.price = price * item6.nClicks;

  console.log(item6);
});
let cesta = new Cesta();
cesta.products = [item1, item2, item3, item4, item5, item6];

$("#cart").click(function () {
  $(".product_table").empty();
  $(".total").empty();
  let total = 0;
  for (const item of cesta.products) {
    if (item.nClicks > 0) {
      $(".product_table").append(
        `<div class='cart_item'> ${item.name} x ${item.nClicks}  <p>${item.price} $</p></div>`
      );
      total += item.price;
    }
  }
  $(".total").append(
    `<div class='cart_total'>Total: <p> ${total} $ </p> </div>`
  );
});
