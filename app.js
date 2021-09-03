

// Function #1: Array Slice


const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];

const modifiedFoods= console.log("After Slice",foods.slice(1,4));


// Function #2: Array Splice

const foods2 = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
foods2.splice(2,0,"Icecream","noodles")
console.log("using splice iserting two elments at index value:2",foods2)

  //Function #3: Filter

let numberArray=[12,324,213,4,2,3,45,4234,7,11,19,23];
evenNumbers=numberArray.filter(function(isEven){
    // return num&1;
    if(isEven%2==0){
        return isEven;
    }  
})
// filtering prime no from an array 

Primeno=numberArray.filter((isPrime) => {
    for (var i = 2; i <= Math.sqrt(isPrime); i++) {
        if (isPrime % i === 0) 
        return false;
      }
      return true;
});

// Function #4: Reject

NonPrime = numberArray.filter((nonPrime) => {
    for (var i = 2; i <= Math.sqrt(nonPrime); i++) {
        if (nonPrime % i === 0) 
        return true;
      }
      return false;
});

// Function #5: Lambda

let evenno2 =numberArray.filter(isEven2 => isEven2 %2==0)

// Function #6: Map

const myArray = [11, 34, 20, 5, 53, 16];
let findSquareOfNumbers = myArray.map(function(myArray){
  return myArray *myArray;

})

// unction #7: Reduce
function multiply(...myArray2)
{
    console.log("Muliplication of Array using reduce",myArray2.reduce(function(acc,init){
        return acc*init;
    }));
}
multiply(5,2,3,4)


console.log("Even No is :",evenNumbers);
console.log("Prime No is:",Primeno);
console.log("Non-Prime Numbers Are:",NonPrime);
console.log("Even no using lamda function is:",evenno2)
console.log("Square of no using map funtion:",findSquareOfNumbers)

