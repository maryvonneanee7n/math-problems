const numbers = [1, 2, 3, 4, 5];
const operator = ["+", "-", "*", "/"];
const answer = numbers[Math.floor(Math.random() * numbers.length)] + operator[Math.floor(Math.random() * operator.length)];
return answer;
