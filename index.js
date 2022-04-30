const string1= "I am human";

const regexpression1= /I am [a-z]+/;

const boolean= regexpression1.test(string1);

console.log("Is there a word after 'I am' and does it"+
" have a lowercase letter beginning? --> "+boolean); //true

const string2="I am 22 years old.";

const regexpression2= /I am [1-9]+/;

const boolean2=regexpression2.test(string2);

console.log("Is there a number after 'I am' and does it"+
" start with a number between 1-9? --> "+boolean2);  //true

const string3="I am 1Yunus."; 

const regexpression3= /I am [a-zA-z]+/;

const boolean3=regexpression3.test(string3);

console.log("Is there a word after 'I am' and does it"+
" start with a lower or upper case letter? --> "+boolean3);  //false

//* but const string3="I am Yunus" or "I am yUNUS" would return true.