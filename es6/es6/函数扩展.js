{
	// (function foo(x = 5, y = 5){
	// 	let x = 2;//error
	// 	const y = 2;//error
	// })();
	// function foo({x,y=5}){
	// 	console.log(x,y);
	// }
	// foo({})//undefined 5
	// foo({x:1})//1 5
	// foo({x:1,y:3})//1 3
	// foo();// Cannot destructure property `x` of 'undefined' or 'null'.
}
{
	// var x = 1;
	// function f(x,y=x) {
	// 	var x = 3;
	// 	console.log(y);
	// }
	// f(2);//2

	// var x = 1;
	// function f(y=x) {
	// 	var x = 3;
	// 	console.log(y);
	// }
	// f();//1
	
	// let x = 1;
	// function f(y=x) {
	// 	let x = 3;
	// 	console.log(y);
	// }
	// f();//1	

	// let x = 1;
	// function f(x,y=x) {
	// 	let x = 3;
	// 	console.log(y);
	// }
	// f();//1	
	
	// var x = 1;
	// function foo(x, y = function() { x = 2; }, z=x) {
	//   var x = 3;
	//   y();//此x指向参数x
	//   console.log(x);//3
	//   console.log(z);//undefined
	// }
	// foo();

	// var x = 1;
	// function foo(x, y = function() { x = 2; }) {
	//   x = 3;//去掉var后，函数内部的x都指向参数x
	//   y();
	//   console.log(x);
	// }
	// foo() // 2
}
{
	// function foo(a = 'add') {
	// 	let a = 11;
	// 	console.log(a);
	// }
	// foo();
	// function m2({x, y} = {x: 0, y: 0}) {
	//     return [x,y];
	// }
	// console.log(m2())
	// function foo(x,...y,z=1) {
	// 	console.log(x,y,z)
	// }
	// foo(1,2,3);
	// const full = ({ first, last }) => first + ' ' + last;
	// console.log(full({first:'aa',last:'bb'}))//aa bb;
}