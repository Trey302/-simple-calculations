// var firstName = "Trey";
// var lastName = "Harrell";

// var fullName= firstName.concat(lastName);

// console.log(fullName.length);

// for(var i=0; i<10; i++){
//     if(i>5){
//         console.log("hello");
//     } else if(i == 5){
//         console.log("high five")
//     }
//     else{
//         console.log("world");
//     }
// }

for(var i=1; i<=30; i++){
    if(i % 15 == 0){
        console.log("FizzBuzz")
    }
    else if(i % 3 == 0){
        console.log("Fizz")
    } else if(i % 5 == 0){
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
}