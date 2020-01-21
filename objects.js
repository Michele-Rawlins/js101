console.log("whoops");

const wordLength = (word) => {
return word.length;
};

console.log (wordLength('cat'));
console.log(wordLength('monkeybutt'));

const ageCheck = (age) => {
if (age >= 21) {
 console.log('Party!!!!!!');

} else { 
    console.log('No drinks for you');

}
};

ageCheck(12);
ageCheck(24);

const expense = {
dateCreated: '01/17/2020',
location: 'Baja Burrito',
cost: 12.57,
isGood: true,
};

//dot notation
console.log(expense.cost);

//bracket notation
console.log(expense['cost']);

const employee = {
    id: '1234mar',
    dateHired:  '1/05/2020',
    passDrugScreen: true,
    department: 'shipping',
    city: 'clarksville',
    firstName: 'Bob',
    lastName: 'Hope',
    salary:  75000,
    supervisor: '456dar', 
};
const vip =(emp ) => {
if (emp.firstName[0] === 'M') {

emp.status = 'vip';
} else {
    emp.status = 'Peasant';
}
return emp;
};
console.log(vip(employee));