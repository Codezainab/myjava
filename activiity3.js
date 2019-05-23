let topfilms = [
    "Eternal Sunshine of a Spotless mind",
    "Wreck it Ralph",
    "Ghostbusters",
    "Watertboy",
    "Happy Gilmore"

]

for (let moviesIndex = 0; moviesIndex<topfilms.length; moviesIndex++) {
    console.log (topfilms[moviesIndex]);

};

let currentfilm = "Waterboy"

const filmcheck = (film) => {
    if (film == "Ghostbusters") {
        console.log("Yay It's Ghostbusters")
    }
    else { 
        console.log ("booo, we want Ghostbusters")
    }
}

console.log("lets check the third film")

filmcheck(topfilms[2])

while (currentfilm !="Ghostbusters") {
    console.log(currentfilm);
    filmcheck(currentfilm)
    currentfilm = topfilms[Math.floor(Math.random()*5)]
}
console.log (`Finally, ${currentfilm}!`)