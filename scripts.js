function add(num){
  return num + 2;
}

function multiply(num){
  return num * 3;
}

function subtract(num){
  return num - 4;
}

console.log("After performing lots of functions on the number 2, I've decided the answer is: " + add(multiply(subtract(2))));
