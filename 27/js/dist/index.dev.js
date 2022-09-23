"use strict";

/* 
Створи масив «Список покупок». Кожен елемент масиву є об'єктом, 
який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. 
Написати кілька функцій для роботи з таким масивом:
*/
var myShoppingList = [{
  productName: 'Iphone 14 Pro Max',
  quantity: 1,
  isbought: true,
  price: 1099.99,
  amountPrice: 1099.99
}, {
  productName: 'AirPods 2',
  quantity: 2,
  isbought: true,
  price: 149.35,
  amountPrice: 298.70
}, {
  productName: 'MacBook Air M2 chip',
  quantity: 1,
  isbought: false,
  price: 1199.99,
  amountPrice: 1199.99
}, {
  productName: 'Apple Watch Series 8',
  quantity: 1,
  isbought: false,
  price: 399.45,
  amountPrice: 399.45
}, {
  productName: 'MagSafe Charger',
  quantity: 4,
  isbought: true,
  price: 39.00,
  amountPrice: 156.00
}];
/* Min 1.1  Виводити весь список на екран таким чином, щоб спочатку йшли продукти, 
'що ще не придбані, 
а потім - ті, що вже придбали. */

function showShoppingList(list) {
  for (var i = 0; i < list.length; i++) {
    if (!list[i].isbought) {
      console.log(list[i].productName);
    }
  }

  for (var _i = 0; _i < list.length; _i++) {
    if (list[_i].isbought) {
      console.log(list[_i].productName);
    }
  }
} // Min 1.2 Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.


function productIsBought(productName) {
  myShoppingList.forEach(function (element) {
    if (productName === element.productName) {
      element.isbought = true;
    }
  });
}

showShoppingList(myShoppingList);
productIsBought('MacBook Air M2 chip');
console.log(myShoppingList);
/* 
Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, 
в якому продукт, що ми шукаємо, буде відсутнім)
*/

function newProductList(productName) {
  // filter створює новий масив з усіма елементами, які проходять певну перевірку, яка задається у функції
  return myShoppingList.filter(function (element) {
    return element.productName !== productName;
  });
}

var myNewProductList = newProductList('AirPods 2');
console.log(myNewProductList);
/* 
Додавання покупки в список. 
Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, 
необхідно збільшувати кількість в існуючій покупці, а не додавати нову. 
При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, 
а кількості товарів стало 2, то сума буде 24.
*/

function addingToShoppingList(newProduct) {
  var index = myShoppingList.findIndex(function (element) {
    return element.productName === newProduct.productName;
  });

  if (index !== -1) {
    myShoppingList[index].quantity += 1;
    myShoppingList[index].amountPrice += myShoppingList[index].price;
  } else {
    myShoppingList.push(newProduct);
  }
}

var newProduct = {
  productName: 'Apple Watch Series 8',
  quantity: 1,
  isbought: false,
  price: 399.45,
  amountPrice: 399.45
};
addingToShoppingList(newProduct);
console.log(myShoppingList);
newProduct = {
  productName: "Apple Watch Ultra",
  quantity: 1,
  isbought: true,
  price: 450,
  amountPrice: 450
};
addingToShoppingList(newProduct);
console.log(myShoppingList); // Max 1 Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.

function sum(allProducts) {
  var a = 0;
  allProducts.forEach(function (element) {
    a += element.quantity * element.price;
  });
  return a;
}

var sumOfAllProducts = sum(myShoppingList);
console.log(Math.trunc(sumOfAllProducts)); // Max 2 Підрахунок суми всіх (не) придбаних продуктів.

function sumOfNotBought(allProducts) {
  var a = 0;
  allProducts.forEach(function (element) {
    if (!element.isbought) {
      a += element.quantity * element.price;
    }
  });
  return a;
}

var allNotBoughtProducts = sumOfNotBought(myShoppingList);
console.log(allNotBoughtProducts); // max 3 Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)

var DisplaySortedList = [{
  productName: 'Iphone 14 Pro Max',
  quantity: 1,
  isbought: true,
  price: 1099.99,
  amountPrice: 1099.99
}, {
  productName: 'AirPods 2',
  quantity: 2,
  isbought: true,
  price: 149.35,
  amountPrice: 298.70
}, {
  productName: 'MacBook Air M2 chip',
  quantity: 1,
  isbought: false,
  price: 1199.99,
  amountPrice: 1199.99
}, {
  productName: 'Apple Watch Series 8',
  quantity: 1,
  isbought: false,
  price: 399.45,
  amountPrice: 399.45
}, {
  productName: 'MagSafe Charger',
  quantity: 4,
  isbought: true,
  price: 39.00,
  amountPrice: 156.00
}];

function displayFromLess(a, b) {
  return a.amountPrice - b.amountPrice;
}

function displayFromBig(a, b) {
  return b.amountPrice - a.amountPrice;
} // DisplaySortedList.sort(displayFromBig); Від більшого до меншого.
// console.log(DisplaySortedList)


DisplaySortedList.sort(displayFromLess);
console.log(DisplaySortedList);