var myPenguin = {
    name: "Tacky the Penguin",
    origin: "Tacky the Penguin",
    Author: "Helen Lester",
    sentence: function () {
        return "Hello, I'm a penguin and my name is " + this.name;
    }
}

console.log(myPenguin.sentence());

myPenguin.canFly = false;



var myPenguin = {
    name: "Tacky the Penguin",
    origin: "Tacky the Penguin",
    Author: "Helen Lester",
    chirp: "CHIRP CHIRP!",
    sentence: function () {
        return this.chirp + " Is this what penguins sound like?";
    }
}
console.log(myPenguin.sentence());

// var myPenguin = {
//     sayHello: "Hello, I'm a penguin and my name is ", 
//     sentence: function() {
//         return this.sayHello + this.name;
//     }
// }

// // console.log(myPenguin.sentence());