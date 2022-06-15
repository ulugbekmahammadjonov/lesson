const movements = [2,7,8,13,24]

const balance = movements.reduce(function(prevValue, currentValue, index){
    console.log(`Interation ${index} ${prevValue}`)
    console.log(currentValue)

    return prevValue + currentValue
})
console.log(balance)

// dastructuring

const clubs = {
  name: "Real Madrid",
  location: "Madrid",
  categories: ["Spain", "Men", "Women"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
};

const array = [5, 7, 8, 9]
const a = array[0]
const b = array[1]
const c = array[2]
const d = array[3]
console.log(a,b,c,d)

const [x,y,z,u]=array
console.log(x, y,z,u)

// ichma ich kelganda
const nested = [2, 3, [4, 5,[6, 7]]]
const [i, j,[k, l, [m, n]]] = nested
console.log(i, j, k, l, m, n)

const { name, openingHours, categories } = clubs;
console.log(name, openingHours, categories);
const { name: clubName, openingHours: hours, categories: tags } = clubs;
console.log(clubName, hours, tags);

// spread operators

const arrSpread = [5, 7, 9];
const badNewArr = [4, 6, arrSpread[0], arrSpread[1], arrSpread[2]];
console.log(badNewArr);
const newArr = [4, 6, ...arrSpread];

console.log(newArr);
console.log(...arrSpread);

const newCategory = [...clubs.categories, "Barcelona"];
console.log(newCategory);
console.log(clubs.categories);

// Functions Declaration

function calcAge1(birthYear) {
  return 2022 - birthYear;
}
const age1 = calcAge1(2000);
console.log(age1);

// Function expression

const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};
const age2 = calcAge2(2000);
console.log(age2);

// Arrow function

const calcAge3 = (birthYear) => {
  return 2022 - birthYear;
};
const age3 = calcAge3(2000);
console.log(age3);
