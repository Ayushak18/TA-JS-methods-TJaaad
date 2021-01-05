Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = "A quick brown fox jumped over a lazy".split(" ");
     sentanceArray.concat("dog").join(" "); //"A quick brown fox jumped over a lazy dog"
     let colors = ["red", "green", "blue"];
     colors.concat("black", "red", 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`

   - Parameter: optional parameter as string known as seperator
   - Return: string with the seperator and if separator is not applied then it returns the string with commas
   - Example:
     ```js
     let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

     numbers.join(); // "1,2,3,4,5,6,7,8,9,10"

     numberes.join(" "); // "1 2 3 4 5 6 7 8 9 10"

     numbers.join('-') // "1-2-3-4-5-6-7-8-9-10"

     ```

   - `join` - accepts an optional parameter known as separator and returns a string separated with separator , if separator is not present then it returns a string seperated with commas.

   - No it does not mutate the original array;

3. `flat`

- Parameter: (optional) takes number as parameter;

  - Return: returns an array
  - Example:

    ```js
    let numbers = [1, 2, 3, [1, 2, 3, [1, 2, 3, [4]]]];
    numbers.flat(); // [1, 2, 3, 1, 2, 3, Array(4)]

    numbers.flat(2); // [1, 2, 3, 1, 2, 3, 1, 2, 3, Array(1)]

    numbers.flat(Infinity); // [1, 2, 3, 1, 2, 3, 1, 2, 3, 4]
    ```

  - `flat` is used to create a new array with all the elements of sub-array present in the parent array, it takes a optional parameter which describes how many sub-array to be concatinate in the new array and if we pass Infinity as a parameter it will takes all the sub-arrays and concatinate into new array.

  - No it does not mutate the original array

4. `push`

- Parameter: N numbers of input this input can be of any type like numbers , string etc ;

  - Return: lenght of the array;
  - Example:

    ```js
    let numbers = [10, 4, 256, 1, 2, 19, 5, 6];
    numbers.push("Ayush"); // 9

    numbers; // [10, 4, 256, 1, 2, 19, 5, 6, "Ayush"];

    numbers.push("AY", "Ayush"); // 11

    numbers; // [10, 4, 256, 1, 2, 19, 5, 6, "Ayush", "AY", "Ayush"];

    numbers.push(); // 11

    numbers; // [10, 4, 256, 1, 2, 19, 5, 6, "Ayush", "AY", "Ayush"];
    ```

  - `push` is a method which adds N number of element passed as an parameter to the end of an array and returns the lenght of the mutated array.
    -It does mutate the original array

5. `indexOf`

- Parameter: takes two parameter , first one is that element whose index we want to find in the array and the second one is optional, which decide from which index we want to start our search.

- Return: if element is found then the index(first occurence) of that element otherwise -1
- Example:

  ```js
  let numbers = [10, 4, 256, 1, 2, 19, 5, 6, 1];

  numbers.indexOf(1); // 3

  numbers.indexOf(1, 4); // 8

  numbers.indexOf(100); // -1
  ```

- `indexOf` returns the index of an element , takes two argument first element whose index we want to search and second(optional) from where we want to start our search.

- No it does not mutate the original array

6. `lastIndexOf`

   - Parameter:takes two parameter , first one is that element whose index we want to find in the array and the second one is optional, which decide from which index we want to start our search.

- Return: last occurence of the searched element and if not found then -1;
- Example:

  ```js
  let numbers = [10, 4, 256, 1, 2, 19, 5, 6, 1];

  numbers.lastIndexOf(1); // 8

  numbers.lastIndexOf(1, 4); // 8

  numbers.lastIndexOf(100); // -1
  ```

-`lastIndexOf` returns the last index of an element , takes two argument first element whose index we want to search and second(optional) from where we want to start our search.

- No it does mutate the original array

7. `includes`

- Parameter: takes two parameter , first one is a value and otherone is from where the search start (optional)
- Return: true and false based on whether the value is present in the array or not
- Example:

  ```js
  let numbers = [10, 4, 256, 1, 2, 19, 5, 6, 1];

  numbers.includes(10); // true

  numbers.includes(1, 4); // true

  numbers.includes(100); //false
  ```

- `includes` takes two parameter , first one is a value and otherone is from where the search start (optional) and returns a boolean value based on whether the value is found or not.
- No it does not mutate the original array

8. `reverse`

- Parameter: no parameter
- Return: a returned array
- Example:

  ```js
  let numbers = [10, 4, 256, 1, 2, 19, 5, 6, 1];

  numbers.reverse(); // [1, 6, 5, 19, 2, 1, 256, 4, 10];

  let alphs = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
  ];

  aplhs.reverse(); // ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  ```

- `reverse` reverse the array.
- It does mutate the original array

9. `every`

- Parameter: takes a callback function and callback function takes 3 parameters
- Return: return a boolean value
- Example:

  ```js
  let numbers = [10, 4, 256, 1, 2, 19, 5, 6, 1];

  numbers.every((element, index, arr) => arr.length < 10); // true

  numbers.every((element, index, arr) => element > 300); // true

  numbers.every((element, index, arr) => index < 5); // false
  ```

- `every` method is used to test whether every method is returning true based on the condition based on callback function
- No it does not mutate the original array

10. `shift`

- Parameter: no parameter
- Return: removed element
- Example:

  ```js
  let numbers = [10, 4, 256, 1, 2, 19, 5, 6, 1];

  numbers.shift(); // 10

  numbers.shift(); // 4

  numbers.shift(); // 256
  ```

- `shift` removes the first element of the array and returns it
- It does mutate the original array

11. `splice`

- Parameter: takes 3 parametes , first one = index we want to change , second (optional) = number of elements we want to delete , third(optional) = replace these with the deleted element.

- Return: returns the deleted element if any otherwise empty array.

- Example:

  ```js
  let numbers = [4, 256, 1, 2, 19, 5, 6, 1];

  numbers.splice(0, 1, "Ayush"); // 256

  numbers.splice(0, 0, "Ayush"); // []

  numbers.splice(0); // []
  ```

- `splice` is used to remove all the elements of an array , if conditional parameter are not provided, also used to replace elements by providing optional parameters.

- It does mutate the original array

12. `find`

- Parameter: takes a callback function as a parameter
- Return: first value which satisfy the condition of the callback function
- Example:

  ```js
  let numbers = [10, 4, 256, 1, 2, 19, 5, 6, 1];

  numbers.find((ele) => ele > 5); // 10

  numbers.find((ele) => ele > 10); // 256

  numbers.find((ele) => ele > 500); // ;undefined
  ```

- `find` method takes a callback function and returns the first value which satisfy the condition of the callback function and if not then return undefined.

- No it does not mutate the original array

13. `unshift`

- Parameter: take values as a parameter of any type
- Return: the lenght of the array on which it is called after adding values
- Example:

  ```js
  let numbers = [10, 4, 256, 1, 2, 19, 5, 6, 1];

  numbers.unshift("Ayush"); // 10

  numbers.unshift(12); //11

  numbers.unshift({ name: `Ayush` }); // 12
  ```

-`unshift` add value or values to beginning of the array and returns the length of that array after adding them.

- It does mutate the original array

14. `findIndex`

- Parameter: takes callback function as parameter
- Return: returns the index of the first element which satisfy the condition of callback, otherwise -1
- Example:

  ```js
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  numbers.findIndex((e) => e > 2); // 2
  numbers.findIndex((e) => e > 5); // 5
  numbers.findIndex((e) => e > 7); // 7
  ```

-`findIndex` takes a callback function and returns the index of the first value which satisfy the condition of the callback and if not found then returns -1

- No it does not mutate the original array

15. `filter`

- Parameter: takes a callback function
- Return: a new array consists of all the elements which passes the condition of the callback function
- Example:

  ```js
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  numbers.filter((e) => e > 2); //[3, 4, 5, 6, 7, 8, 9]

  numbers.filter((e) => e === 3); // [3]

  numbers.filter((e) => e === 300); // []
  ```

-`filter` takes a callback function and returns a new array with all the elements which satisfies the condition of the callback and if not then return a empty array.

- No it does not mutate the original array

17. `forEach`

- Parameter:takes a callback function
- Return: undefined
- Example:

  ```js
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  numbers.forEach((e) => console.log(e)); // 1,2,3,4,5,6,7,8,9
  numbers.forEach((e) => console.log(e + 2)); // 3,4,5,6,7,8,9,10,11
  numbers.forEach((e) => console.log(e * 2)); // 2,4,6,8,10,12,14,16,18
  ```

-forEach method takes a callback function and condition of the callback will get applied in each element of the array.

- No it not does mutate the original array

18. `map`

- Parameter: takes a callback function
- Return: a new array with elements after performing the condition of callback function and if callback function does not return any thing, map return an array of the same lenght with undefined keyword.
- Example:

  ```js
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  numbers.map(el => el+2); //[3, 4, 5, 6, 7, 8, 9, 10, 11]

  numbers.map(el => {console.log(el)}); // [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined] 
  ```

- `map` takes a callback function and returns an array populated with all the elements after performing condition on each element and if callback does not 
- No it does not mutate the original array

19. `pop`

- Parameter: no parameters
- Return: returns the deleted element and if the array is empty then it returns undefined
- Example:

  ```js
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    numbers.pop() // 9;
    numbers.pop() // 8;
    numbers.pop() // 7;

  ```

- `pop` deletes the last element of the array and returns that element and if array is empty then it returns the undefined
- No it does mutate the original array

20. `reduce`

- Parameter: takes a callback function which further takes five parameter , 1- accumulator 2- current Value Optional(3- index 4- array 5-initial value)
- Return: it returns a single value based on the callback function logic.
- Example:

  ```js
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  numbers.reduce((acc,cv) => { return acc+cv},0); //36

  numbers.reduce((acc,cv) => { return acc*cv},1); //40320

  numbers.reduce((acc,cv) => { return acc-cv}); // -34

  ```

- `reduce` takes each element of an array,perform a logic based on the callback function and return a single value.
- No it does not mutate the original array

21. `slice`

- Parameter: accepts two parameter both of them are optional , first is start and second is end 
- Return: returns an array of sliced element
- Example:

  ```js
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  numbers.slice(); //[1, 2, 3, 4, 5, 6, 7, 8, 9];
  numbers.slice(2,5); //[3, 4, 5]
  numbers.slice(1,6); //2, 3, 4, 5, 6]
  ```

- `slice` is used to return an array form start index to end index 
- No it does not mutate the original array

22. `some`

- Parameter: take a callback function as parameter
- Return: boolean value based on the callback funtion
- Example:

  ```js
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  numbers.some(e => e>9); //false
  numbers.some(e => e>5); // true
  numbers.some(e => e>2); // true
  ```

- `some` takes a callback function test it on each value of the array and if any value returns true then whole some method will return true.
- No it does not mutate the original array
