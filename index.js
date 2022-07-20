//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// 1
function uppercase(str) {
  //write your code here 
  let convertToArray = str.split('');
  for (let i = 0; i < convertToArray.length; i++) {
    convertToArray[i] = convertToArray[i][0].toUpperCase() + convertToArray[i].slice(1);
  }
  return convertToArray.join('');
}

console.log(uppercase("the quick brown fox"));
console.log('-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.');

// 2
// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
function find_longest_word(str) {
  //write your code here 
  let largest = -Infinity
  let toArray = str.split(' ')
  for (let i = 0; i < toArray.length; i++) {
      if (toArray[i].length > largest){
        largest = toArray[i].length;
        index = i;
      }
  }
  return toArray[index];
}
console.log(find_longest_word("Web Development Tutorial"));
console.log('.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.');

// 3
// Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
function Longest_Country_Name(country_name) {
  //write your code here 
  let longestName = []
  for (let i = 0; i < country_name.length; i++) {
    if (country_name[i].length >= longestName.length) {
      longestName = country_name[i];
    }
  }
  return longestName;
}

console.log(
  Longest_Country_Name(["Australia", "Germany", "United States of America"])
);
console.log('=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:');
