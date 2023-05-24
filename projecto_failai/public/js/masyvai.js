const arr = ["I", "study", "JavaScript", "right", "now"];
arr.splice(0, 2, "Labas", "Vakaras");

console.log(arr.join(" "));


let first = ['slice', 'splice', 'concat'];
let second = ['push', 'pop', 'shift', 'unshift'];
let third = first.concat(second, 'length', '7', { subject: 'methods'});

console.log(third);

function add(arr) {
    return arr.map(raide => {
        if(!raide.endsWith("7")){
            return raide + "7";
            }
        return raide;
        });
}

let accords1 = ["G", "F", "C"];
let accords2 = ["Dm", "G7", "E", "A"];
let accords3 = ["F", "E", "A7", "Ab7", "Gm7", "C7"];

console.log(add(accords1));
console.log(add(accords2));
console.log(add(accords3));


let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, 8, -4, 6];

function printNumbersWithIndex(callback) {
    numbers.forEach((num, index) => {
        const element = callback(index, num);
        console.log(element);
    });
}

function createHTMLElement(index, value) {
    return `<p>Index No: ${index}, value: ${value}</p>`;
}

printNumbersWithIndex(createHTMLElement)

let number = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, 8, -4, 6];
let arrDoubled = numbers.map(num => num * 2);
console.log(arrDoubled);

function multiplyArray(arr, multiplier) {
    return arr.map(num => num * multiplier);
}

let aMultiplied = multiplyArray(number, 3);
console.log(aMultiplied)

let budgets = [
    { name: "Ugne", amount: 2000},
    { name: "Laura", amount: 3000},
    { name: "Mindaugas", amount: 5000},
    { name: "Nairobi", amount: 1000}
];

function getTotal(arr) {
    return arr.reduce((total, budget) => total + budget.amount, 0)
}
let totalBudget = getTotal(budgets)
console.log(totalBudget);




let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, 8, -4, 6];

const budgets = [
  {
    name: "Rytis",
    budget: 50,
  },
  {
    name: "Saulė",
    budget: 230,
  },
  {
    name: "Paulius",
    budget: 1500,
  },
  {
    name: "Gytis",
    budget: 92,
  },
  {
    name: "Sandra",
    budget: 7,
  },
];