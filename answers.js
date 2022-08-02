//Part 1
//answer: 3


/*
for(let i = 1; i<=20; i++);{
    console.log(i);
}

//Write a for loop that will log only the even numbers in 0 through 200.
for(let i=0; i<=200; i+=2); {
    console.log(i);
}
*/

//fizz buzz
/*
for(let i=1; i<=100; i++); {
    if(i%3==0){
        console.log("fizz")
    }
    else if(i%5==0){
        console.log('buzz', i);
    }
    else if(i%3==0 && i%5 ==0) {
        console.log("fizz buzz");
    
    }


}
*/




//wild wild life
const wolfy = ['Wolfy', 'wolf', 16, 'yukon territory'];
const Plantee = ['plantee', 'plant', 5000, 'mordor'];
const sharky = ['sharky', 'shark', 20, 'left coast'];
const porge = ['porgee', 'porg', 186, 'ahch-to'];
const dart = ["d'art", 'demogorgan dog', 2, 'upside down'];

//1.Plantee just had her birthday; change Plantee's array to reflect her being a year older.(use splice method)
//changing age from 5000 to 5001 her age is the 2nd index in the array and 1 indicates replacing 1 element in the array
Plantee.splice(2, 1, 5001);
console.log(Plantee); 

//2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City". 
wolfy.splice(3,1,'Gotham City'); 
console.log(wolfy); 

//3. Give D'Art a second hometown by adding "Hawkins" (use push medthod to add a new item to an array)
dart.push('Hawkins'); 
console.log(dart);

//4. Porgee decides that Wolfy can't be named "Wolfy" anymore. 
//Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy.splice(0,1,'Gameboy');
console.log(wolfy);

//Yell at ninja turtles 
//Use a for of loop (not a typo - try it out! Try a for of loop) 
//to call toUpperCase() on each of them and print out the result. (use .map method)
const nturtles = ['donatello', 'leonardo', 'raphel', 'michaelanglo']; 
const C = nturtles.map(nturtles => nturtles.toUpperCase()); 
console.log(C);


const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained'];
const favmovies1 = ['Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter'];
const favMovies2 = ['Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther']; 
const favMovies3 = [ 'Snatch' , 'Imitation of Life', 'Fast and Furious']; 