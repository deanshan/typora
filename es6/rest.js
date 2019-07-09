{
	// function add(...num) {}
	let add = (...num) => {
		let sum = 0;
		// for (const val of num) { sum += val; }//10
		// num.map((val) => {sum += val});//10
		num.forEach((val) => {sum += val});//10
		return sum;
	};
	// let add = (...num) => eval(num.join('+'));//10
	console.log('求和:' + add(1,2,3,4));//10
}
{
	// function add(a,...b,c){}//error
	let a = [1,2,3];
	let b = [4,5,6];
	console.log('数组合并：' , [...a,...b]);//1,2,3,4,5,6
	console.log(...b,1,2,3);//4,5,6,1,2,3
	let [x,y,...z] = 'abcdefg';
	console.log(...z);//cdefg
}
