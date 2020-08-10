var person = {
    firstname: "Trey",
    lastname: "Harrell",
    age: "15",
    sentence: function () {
        return "My name is " + this.firstname + " " + this. lastname + " and im " + this.age + " years old ";
    }
}

// console.log(person.sentence());


// console.log(person.firstname);

// for(x in person){
//     var txt = "";
//     txt+= person[x] + " ";
//     console.log(txt);
// }

// var car = {
//     name: "Telsa",
//     color: "black",
//     horsepower: "500",
//     sentence: function(){
//         return "This is a " + this.name + ", " + this.color + ", " + this.horsepower;
//     }
// }

//console.log(car.sentence());

car.size = "mid-size"
car.start = function(){
    return "start engine";
};
    
console.log(car);

// for (x in car){
//     var words = "";
//     txt += car[x] + " ";
// console.log(words);
// }

