var stringList = ["March", "April", "May"];

var numList = [13, 78, 34];

var boolList = [false, true, false];

//  Problem 1

//  I think I may have done to much work in this function to get the same answer
//  as my option 2. I couldnt figure out how to get a period at the end,
//  so i resorted to 'if' statements. I wasnt sure if we needed to use a loop,
//  or if my option 2 is ok.

//option 1
 var string = "Months listed are " ;
 for(var i = 0; i < stringList.length; i++) {
  if(i < stringList.length -1) {
  string += stringList[i] + ", ";
} else if( i = stringList.length -1)
  string += stringList[i] + ".";
}
  console.log(string);

//Problem 1, solution 2
// console.log('Months listed are ' + stringList.join(", ") + ".")


//Problem 2
console.log(numList[numList.length - 1]);

//3
var singleString = '';
for(var i = 0; i < numList.length; i++) {
  singleString += numList[i];
}
  console.log(singleString);

//Problem 3, option 2;
// console.log(numList.join(''));

//4
var sum = 0;
for (var i = 0; i < numList.length; i++) {
  sum += numList[i]
}

console.log(sum);

//5
if(boolList[1] === true) {
  console.log(numList[0] + numList[2]);
} else {
  console.log(numList[1] * numList[1]);
}

//6
for(i = 0; i <= boolList.length; i++) {
  if(boolList[i] === true) {
    console.log(numList[i]);
  }
}

//7
var newArray = stringList.concat(numList, boolList);
console.log(newArray.reverse());
