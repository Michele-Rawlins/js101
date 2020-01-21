console.log("hello");
const nuggetizer = (animal) => {
   const output = `processed ${animal}`;
   //const output = 'processed' + animal;
   // console.log('animal', animal);
   return output
//processed fish
};
console.log(nuggetizer('chicken'));
console.log(nuggetizer("pig"));
console.log(nuggetizer('cow'));
console.log(nuggetizer('chicken'));

const dogBreed = (dog) => {
return `My favorite dog breed is ${dog}`
};

console.log(dogBreed('lab'));
console.log(dogBreed('kitty'));
const fortyTwo = (num) => {
    return ( num) + 42;

};

console.log(fortyTwo(5))


const oldAge = (year) => {
    return 2099 - (year);
}
;
console.log(oldAge(1954));