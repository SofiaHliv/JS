// Здадача 1.1 es5
//
// function Product(name, price) {
//     this.name = name;
//     this.price = price;
// }
// Product.prototype.make25PercentDiscount = function () {
//    this.price = (this.price * 25 / 100)
// };
// let price1 = new Product("1", 22);
// console.log( "Начальная цена " + price1.price);
//     price1.make25PercentDiscount ();
// console.log("размер вашей скидки " +  price1.price);
//
//
// let price2 = new Product("2", 100);
// console.log( "Начальная цена " + price2.price);
// price2.make25PercentDiscount ();
// console.log("размер вашей скидки " + price2.price);


// Здадача 1.1 es6

// class Product {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
//     make25PercentDiscount() {
//     this.price = (this.price * 25 / 100)
//     };
// }
// let price1 = new Product("1", 22);
//  console.log( "Начальная цена " + price1.price);
//    price1.make25PercentDiscount ();
//  console.log("размер вашей скидки " +  price1.price);


/* Здадача 1.2 es5

 */
// function Post(autor, text, date) {
//     this.autor = autor;
//     this.text = text;
//     this.date = date;
// }
// Post.prototype.edit = function () {
//     Post.text = this.text;
// };
//
// function AttachedPost(autor, text, date ,highlighted) {
//     Post.call(this, autor, text, date);
//     this.highlighted = false;
//     console.log(this.highlighted);
// };
// AttachedPost.prototype = Object.create(Post.prototype);
// AttachedPost.prototype.constructor = AttachedPost;
//
// AttachedPost.prototype.makeTextHighlighted = function () {
//     this.highlighted = true;
//     console.log(this.highlighted);
// };
// let Comment1 = new AttachedPost("Федор", "super", "11.02", );
// Comment1.edit();
// Comment1.makeTextHighlighted();
// console.log(Comment1);
// let Comment2 = new AttachedPost("Роман", "привет", "15.02", );
// Comment2.edit();
// Comment2.makeTextHighlighted();
// console.log(Comment2);


/*Здадача 1.2 es6
 */

// class Post {
//     constructor(autor, text, date) {
//         this.autor = autor;
//         this.text = text;
//         this.date = date;
//     }
//     edit(){
//         Post.text = this.text;
//     }
// }
// class AttachedPost extends Post {
//     constructor(autor, text, date, highlighted) {
//         super (autor, text, date);
//         this.highlighted = false;
//         console.log(this.highlighted);
//     }
//     makeTextHighlighted() {
//         this.highlighted = true;
//         console.log(this.highlighted);
// }
// }
// let Comment1 = new AttachedPost("Федор", "super", "11.02", );
// Comment1.edit();
// Comment1.makeTextHighlighted();
// console.log(Comment1);
// let Comment2 = new AttachedPost("Роман", "привет", "15.02", );
// Comment2.edit();
// Comment2.makeTextHighlighted();
// console.log(Comment2);