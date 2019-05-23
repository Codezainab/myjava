let animals = [
    "dog",
    "lion",
    "pig",
    "eagle",
    "kangaroo"

]

firstElement = animals.shift();
console.log (animals);
console.log (firstElement);
console.log (animals.unshift("goat","pelican"));
console.log (animals);
console.log (animals.slice (2));
console.log (animals.slice(2,4));
console.log (animals.slice(1,5));

animals.splice ()