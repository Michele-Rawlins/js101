console.log("combos");

const evenOdd = (num) => {
if (num % 2 == 0) {  
return 'Even'
} else {
    return 'Odd'
}
}; 

console.log(evenOdd(5));

const opposite = (number) => {
    return(-number);
};

console.log(opposite(4));

const palindrome = (text) => {
    const reversedText  = text.toLowerCase()
     .split('').reverse().join('');
if (text === reversedText) {
return true
} else {
    return false
}
};

    
console.log(palindrome('plane'));

const lawrence = (animal) => {

    if (animal === 'alligator') {
        return 'small'
    }else{
        return 'wide'
    }

};
console.log(lawrence("rabbit"));