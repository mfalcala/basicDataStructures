// 1 Use an Array to Store a Collection of Data
let yourArray = ['hola', 1, true, 2, false]; // Change this line
  console.log(yourArray);

//2 Access an Array's Contents Using Bracket Notation
let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "esto es bocaaaaa";
// Only change code above this line
console.log(myArray);

//3 Add Items to an Array with push() and unshift()
function mixedNumbers(arr) {
    // Only change code below this line
    arr.unshift('I', 2, 'three');
     arr.push(7, 'VIII', 9)
    // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));

  //4 Remove Items from an Array with pop() and shift()
  function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));

  //5 Remove Items Using splice()
  const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
let newArr = arr.splice(1,4)
// Only change code above this line
console.log(arr);

//6 Add Items Using splice()
function htmlColorNames(arr) {
    // Only change code below this line
    let newArr = arr.splice(0,2, 'DarkSalmon','BlanchedAlmond')
    
    // Only change code above this line
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

  //7 Copy Array Items Using slice()
  function forecast(arr) {
    // Only change code below this line
    let arr2 = arr.slice(2,4); 
    return arr2;
  }
  
  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

  //8 Copy an Array with the Spread Operator
  function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
    newArr.push([...arr])
      // Only change code above this line
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));

  //9 Combine Arrays with the Spread Operator
  function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ["learning", ...fragment, "is", "fun"]; // Change this line
    return sentence;
  }
  
  console.log(spreadOut());

  //10 Check For The Presence of an Element With indexOf()
  function quickCheck(arr, elem) {
    // Only change code below this line
    return arr.indexOf(elem) >= 0 ? true : false;
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

  //11 Iterate Through All an Array's Items Using For Loops
  function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for(let i = 0; i < arr.length; i++){
      if(arr[i].indexOf(elem) == -1){
        newArr.push(arr[i]);
      }
    }
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

  //12 Create complex multi-dimensional arrays
  let myNestedArray = [
    // Only change code below this line
    'level 1',
    ['level 2'],
    [['level 3', 'deep']],
    [[['level 4', 'deeper']]],
    [[[['level 5', 'deepest']]]],
    // Only change code above this line
  ];

  //13 Add Key-Value Pairs to JavaScript Objects
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  
  // Only change code below this line
  foods.bananas = 13;
  foods.grapes = 35;
  foods.strawberries = 27;
  // Only change code above this line
  
  console.log(foods);

  //14 Modify an Object Nested Within an Object
  let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  
  // Only change code below this line
  userActivity.data.online = 45;
  // Only change code above this line
  
  console.log(userActivity);

  //15 Access Property Names with Bracket Notation
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
    // Only change code below this line
    return foods[scannedItem];
    // Only change code above this line
  }
  
  console.log(checkInventory("apples"));

  //16 Use the delete Keyword to Remove Object Properties
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  // Only change code below this line
  delete foods.oranges;
  delete foods.plums;
  delete foods.strawberries;
  // Only change code above this line
  
  console.log(foods);

  //17 Check if an Object has a Property
  let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    // Only change code below this line
    if(userObj.hasOwnProperty('Alan')
    && userObj.hasOwnProperty('Jeff')
    && userObj.hasOwnProperty('Sarah')
    && userObj.hasOwnProperty('Ryan')
    ){
      return true
     }else {
            return false
      }
    // Only change code above this line
  }
  
  console.log(isEveryoneHere(users));
  
  //18 Iterate Through the Keys of an Object with a for...in Statement
  const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(usersObj) {
    // Only change code below this line
    let count = 0;
    for (let user in usersObj){
      if (usersObj[user].online === true){
        count++
      }
    }
    return count;
    // Only change code above this line
  }
  
  console.log(countOnline(users));

  //19 Generate an Array of All Object Keys with Object.keys()
  let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
    // Only change code below this line
    return Object.keys(obj)
    // Only change code above this line
  }
  
  console.log(getArrayOfUsers(users));

  
//20 Modify an Array Stored in an Object
let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    // Only change code below this line
    userObj.data.friends.push(friend);
    return userObj.data.friends;
    // Only change code above this line
  }
  
  console.log(addFriend(user, 'Pete'));
