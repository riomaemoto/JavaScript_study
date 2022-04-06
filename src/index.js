/**
 * ------------lesson1 変数宣言　練習
 */
// ーーーーーー var 編　start ーーーーーー
//  var name = "leo"
//  console.log(name);

// ”var 変数は上書き可能”
// name = "nagatomo"
// console.log(name);

// ”var 変数は再宣言も可能”
// var name = "leonagatomo";
// console.log(name);

// ーーーーーー var 編　ここまでーーーーーー

// ーーーーーー　let 編　start ーーーーーー
//  let name = "leo"
//  console.log(name);

// ”let 変数も上書きは可能”
// name = "nagatomo"
// console.log(name);

// ”let 変数は再宣言が出来ない”
// let name = "leonagatomo";
// console.log(name);

// ーーーーーー　let　編　ここまでーーーーーー

// ーーーーーー　const 編　start ーーーーーー
// const name = "leo";
// console.log(name);

// ”const 変数は上書きすら出来ない”
// name = "nagatomo"
// console.log(name);

// ”const 変数は再宣言ももちろん出来ない”
// const name = "leonagatomo";
// console.log(name);

// ーーーーーー　const　編　ここまでーーーーーー

// ーーーーーー　const object 編　start ーーーーーー
// 波カッコ→{}で囲むと　変数が　object　になり、
// object の中のプロパティー：が変更できるようになる

// const name = {
//   first_name: "leo",
//   last_name: "moreno",
// };

// name.first_name = "nagatomo";
// name.last_name = "ohama";
// // ↓更に新しいプロパティーを追加することもできる
// name.middle_name = "andy";
// console.log(name);

// ーーーーーー　const object 編　ここまで ーーーーーー

// ーーーーーー　const list(配列) 編　start ーーーーーー
// 四角カッコ→[]で囲むと list(配列)になり、
// listの番号を指定すれば、中身を変えることが可能
// push()関数を使えば、listに新しい値を追加することが可能
// const name = ["leo", "nagatomo"];
// name[0] = "andy";
// name.push("angela");
// console.log(name);

// ーーーーーー　const list(配列) 編　ここまで ーーーーーー

/**
 * ------------lesson 2 テンプレート文字列　練習
 */
// const name = "leo";
// const age = "25";
// I'm 25 years old my name is leo.を表示したい場合
// ーーーーーーーーーー古い書き方（下記）ーーーーーーー
// const　message = "I'm " + age + " years old my name is " + name + ".";

// ---------新しく出来た　テンプレート文字列の書き方ーーーーーーーーーー
// const message = `I'm ${age} years old my name is ${name}.`;
// console.log(message);

/**
 *  -------------lesson 3 関数　練習 　新しくできたアロー関数
 */
// --------古い書き方----------
// function name(str) {
//   return str;
// }
// 変数に入れることもできる（下記）
// const name = function(str){
//   return str;
// }

// ------新しくできたアロー関数の書き方ーーーーーー
//  const name = (str) => {
//    return str;
//  }
// 上記のように{}内の処理が一行で終わる場合、下記のように
// returnと{}を省いて書ける
// const name = (str) => str;
// console.log(name("leo"));

// const name = (a,b) => a + b;
// console.log(name("leo","andy"));
// 上記のようにコンソールを使ってちゃんと値を受け取って処理されてるか確認ができる
// returnを書く書き方も忘れないように！
//  const name = (a, b) => {
//   return a + b;
// }
// console.log(name("leo","andy"));

// const number = (a,b) => a+b;
// console.log(number(10,20));

/**
 *  ---------------lesson 4 分割代入　練習 --------------
 */
// const my_profile = {
//   name: "leo",
//   age: 25
// };
// const message1 = `my name is ${my_profile.name} and I'm ${my_profile.age} years old.`;
// console.log(message1);

// 下記のように分割代入で書けばmy_profile.を省略して短くかける
// const { name, age } = my_profile;
// const message2 = `my name is ${name} and I'm ${age} years old.`;
// console.log(message2);

// const my_profile = ["leo", 25];
// const message = `I'm ${my_profile[0]} ${my_profile[1]} years old.`;
// console.log(message);

// const [name, age] = my_profile;
// const message = `I'm ${name} ${age} years old.`;
// console.log(message);

/**
 *  ---------------lesson 5 デフォルト値　練習 --------------
 */
//  この（name ＝”ゲスト”)と書いてるのは初期値の設定
// sayhello("leo");の（）になにも入らない時、こんにちはゲストさんになる
//  const sayhello = (name = "ゲスト") =>
//  console.log(`こんにちは${name}さん`)
//  sayhello("leo");

/**
 *  ---------------lesson 6 スプレット構文...　練習 --------------
 */
// 配列の展開
// const arr = [1,2];
// console.log(arr);
// スプレット構文だとこう書ける（下記）
// console.log(...arr);

// const tottal = (a, b) => console.log(a + b);
// tottal(arr[0],arr[1]);
// スプレット構文だとこう書ける（下記）
// tottal(...arr);

// const arr = [1, 2, 3, 4, 5, 6];
// const [a, b, c, ...d] = arr;
// console.log(a);
// // 上記は1が表示される
// console.log(d);
// // 上記は4,5,6が表示される

// 配列のコピー、結合
const arr = [10, 20];
// const arr3 = [40,60];
// const arr2 = [...arr];
// // このように...変数を使っってコピーできる
// // console.log(arr2);

// const arr4 = [...arr, ...arr3];
// // console.log(arr4);

// const arr5 = arr;
// console.log(arr5);
// arr5[0] = 9
// console.log(arr);
// でもこの場合arr5の値を変えた時、＝なのでarrの値も変わってしまう。
// だから、配列のコピーしたい時は...arrでコピーして書く。
// const arr5 = [...arr];
// arr5[0] = 9
// console.log(arr5);
// console.log(arr);

/**
 *  --------lesson 7  map　や　filterを使った配列の処理　練習 --------------
 */

// const name_arr = ["leo", "naga", "sean"];
// 古い書き方
// for (let index = 0; index< name_arr.length; index++){
// console.log(name_arr[index]);
// }
// 新しい書き方 map
// const name_arr2 = name_arr.map((names)=>{
//   return names;
// })
// console.log(name_arr2);
// rutun の中身が一つなので下記の書き方でも可能
// name_arr.map((names)=> console.log(names));

// const names = [1, 2, 3, 4, 5];
// const name_arr5 = names.filter((a) => {
//   return a % 2 === 1;
// });
// console.log(name_arr5);

// if分の練習　leoの時はさんをつけない
// const name_arr = ["leo", "naga", "sean"];
// const names = name_arr.map((list) => {
//   if(list === "leo"){
//     return list
//   } else{
//     return `${list}さん`
//   }
// })
// console.log(names);
