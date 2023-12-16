const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Введите строку: ', (str) => {
  let frequency = {};

  for (let i = 0; i < str.length; i++) {
    if (frequency[str.charAt(i)]) {
      frequency[str.charAt(i)]++;
    } else {
      frequency[str.charAt(i)] = 1;
    }
  }

  console.log('Алфавит:');
  let entropy = 0;
  for (let char in frequency) {
    const value = frequency[char] / str.length;
    entropy -= value * Math.log2(value);
    console.log(`${char}: ${value}`);
  }
  console.log(`Энтропия: ${entropy}`);
  rl.close();
});
