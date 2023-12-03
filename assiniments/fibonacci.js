//fibonacci series

// function fibonacci(number){
//     let n1 = 0, n2 = 1, nextTerm


//     for (let i = 1; i <= number; i++) {
//         console.log(n1)
//         nextTerm = n1 + n2
//         n1 = n2
//         n2 = nextTerm
//     }
// }

// fibonacci(8)



//palindrom program

// function palindrom(str1){
//     let str2 = str1.split("").reverse().join("")
//     if (str1 == str2){
//         console.log(`given input \'${str1}\' is palindrom`)

//     }
//     else {
//         console.log(`given input \'${str1}\' is not  palindrom`)
//     }
// }

// palindrom("madam")


// function count(myArray){
//     
//     const elementCounts = {};
//     myArray.forEach(element => {
//         elementCounts[element] = (elementCounts[element] || 0) + 1 ;
//     });
//     return elementCounts
// }
// console.log(count(1,2,3,2,1,4,5,6,4,7,8))



// facteriol numbers

// function facteriol(number){
//     let n1 = number, n2 = number -1
    
//     for (let i = n2; i >= 1; i--) {
//         n1=n1*i

         
//     }
//     console.log(n1)
    
// }
// facteriol(5)

 const my = [1,2,3,4,3,2,3,5,6,7];


function count(myArray){
    const elementCounts = {};
    for(let element of my) {
        elementCounts[element] = (elementCounts[element] || 0) + 1 ;
    };
    return elementCounts
}
console.log(count(s))



