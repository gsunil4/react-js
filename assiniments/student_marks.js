alert('hello');

let student = prompt("enter the marks")
let student1 = parseInt(student)
if (student >= 80 && student <= 100){
console.log(`${student1} excellent you got distinction in exam`)
}
else if (student1 >=60 && student <= 79){
	console.log(`${student1} very good you got first class in exam `)
}
else if (student1 >=50 && student <= 69){
	console.log(`${student1} good you got second class in exam `)
}
else if (student1 >=35 && student <= 59){
console.log(`${student1} nice you got pass in exam `)
}

else if (student1 >= 0 && student <= 34){
console.log(`${student1} workhard you failed in exam`)
}
else{
	console.log(`please enter valied number with in 100`)
}

	//console.log(student);
	
/*let student = prompt('enter yourmarks:')
let Student1=parint(student);
if (student1 > 80 && student1 <= 100){
	console.log(student1)
}
else if (student1 >=60 && student1 <= 79){
	console.log(student1'very good you got first class in exam ')
}
else if (student1 >=50 && student1 <= 69){
	console.log(student1'very good you got first class in exam ')
	}
else if (student1 >=40 && student1 <= 59){
	console.log(student1'very good you got first class in exam ')
	}
else if (student1 >=30 && student1 <= 49){
	console.log(student1'very good you got first class in exam ')
}else {console.log('fail'}-->*/
