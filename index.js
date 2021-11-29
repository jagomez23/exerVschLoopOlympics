//LOOP OLYMPICS

console.log ("PRELIMINARIES")

console.log("1. Write a for loop that prints to the console the numbers 0 through 9.")
for (i = 0; i < 10; i++){
    console.log(i);
}

console.log("2. Write a for loop that prints to the console 9 through 0.")
for (i = 9; i >= 0; i--){
    console.log(i);
}

console.log("3. Write a for loop that prints these fruits to the console.")

var fruit = ["banana", "orange", "apple", "kiwi"]

for (i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}

console.log("BRONZE MEDAL")

console.log("1. Write a for loop that will push the numbers 0 through 9 to an array.")
arr = [];
for (i = 0; i < 10; i++){
    arr.push(i);
}
console.log(arr)

console.log("2. Write a for loop that prints to the console only even numbers 0 through 100.")
for (i = 0; i <= 100; i++){
    if (i % 2 === 0){
        console.log(i)
    }
}

console.log("3. Write a for loop that will push every other fruit to an array.")
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

fruitArr = []
for (i = 0; i < fruit.length; i++){
    if (i % 2 === 0){
        fruitArr.push(fruit[i])
    }
}
console.log(fruitArr)

console.log("SILVER MEDAL")

console.log("1. Write a loop that will print out all the names of the people of the people array")

var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

  var names = [];
  for (var i = 0; i < peopleArray.length; i++){
      names.push(peopleArray[i].name);
      console.log(names);
  }

console.log("2. Write a loop that pushes the names into a names array, and the occupations into an occupations array.")
  var occupation = [];
  for (var i = 0; i < peopleArray.length; i++){
    occupation.push(peopleArray[i].occupation);
    console.log(occupation);
  }

console.log("3. Write a loop that pushes every other name to an array starting with the first person")
  var EVnames = [];
  var ODDocc = [];

for(var i = 0; i < peopleArray.length; i++){
    if (i % 2 ===0){
        EVnames.push(peopleArray[i].name)
    } else {
        ODDocc.push(peopleArray[i].occupation)
    }
}
console.log(EVnames)
console.log(ODDocc)

console.log("GOLD MEDAL")

console.log("1. Create an array that mimics a grid like the following using nested for loops: ")
//[[0, 0, 0], 
//[0, 0, 0], 
//[0, 0, 0]]

var box = [];
for(var i = 0; i <= 3; i++){
    box.push([]);
    for (var n = 0; n <= 3; n++){
        box[i].push(0);
    }
}
console.log(box)

console.log("2.Create an array that mimics a grid like the following using nested for loops:")
//[[0, 0, 0], 
//[1, 1, 1], 
//[2, 2, 2]]

var box = [];
for(var i = 0; i <= 3; i++){
    box.push([]);
    for (var n = 0; n <= 3; n++){
        box[i].push(i);
    }
}
console.log(box)

console.log("3.Create an array that mimics a grid like the following using nested for loops:")
//[[0, 1, 2], 
//[0, 1, 2], 
//[0, 1, 2]]

var box = [];
for(var i = 0; i <= 3; i++){
    box.push([]);
    for (var n = 0; n <= 3; n++){
        box[i].push(n);
    }
}
console.log(box)

