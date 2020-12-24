Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = "Arya Stark";
     name.charAt(2); //"y"
     let sentance = "A quick brown fox jumped over a lazy dog";
     sentance(4); // "i"
     let houseName = "Starks";
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

   -Parameter : Does not take any parameter

   - Return : Return a string
     -Example :

   ```js
   let name = "this is in lowercase";
   name.toUpperCase(); // "THIS IS IN LOWERCASE"
   let New = "New string to convert";
   New.toUpperCase(); // "NEW STRING TO CONVERT"
   let hey = "Hello world";
   hey.toUpperCase(); // "HELLO WORLD"
   ```

   - 'toUpperCase' converts a lowercase string to upper case and returns that uppercase string, returns type error for null and undefined parameters;

3. `toLowerCase`

   -Parameter : Does not take any parameter

   -Return : Return a string

   -Example :

   ```js
   let name = "THIS IS IN UPPERCASE";
   name.toLowerCase(); // "this is in uppercase"
   let New = "NEW STRING TO CONVERT";
   New.toLowerCase(); // "New string to convert"
   let hey = "HELLO WORLD";
   hey.toLowerCase(); // "Hello world"
   ```

   - 'toLowerCase' converts a upperrcase string to lower case and returns that lowercase string, returns type error for null and undefined parameters;

4. `trim`

  -Parameter : No parameters

  -Return : Returns a string

  -Example : 
  ```js
  let ayush = "                     Hello World!                       ";
  ayush.trim(); //"Hello World!"

  let a ="           New Space           Hello World!                       ";
  a.trim(); //"New Space           Hello World!"

  let b = "Second Space           Hello World!                       ";
  b.trim(); // "Second Space           Hello World!"

  ```  
   - trim is used to trim the white space from both the side of the string.

5. `trimEnd`

  -Parameter : No parameters

  -Return : Returns a string

  -Example : 
  ```js
  let ayush = "                     Hello World!                       ";
  ayush.trimEnd(); //"                 Hello World!"

  let a ="           New Space           Hello World!                       ";
  a.trimEnd(); //"          New Space           Hello World!"

  let b = "Second Space           Hello World!                       "; 
  b.trimEnd(); // "                       Second Space           Hello World!"
  ```  
   - trim is used to trim the white space from the right side of the string.

6. `trimStart`

  -Parameter : No parameters

  -Return : Returns a string

  -Example : 
  ```js
  let ayush = "                     Hello World!                       ";
  ayush.trimStart(); //"Hello World!                    "

  let a ="           New Space           Hello World!                       ";
  a.trimStart(); //"New Space           Hello World!                     "

  let b = "Second Space           Hello World!                       "; 
  b.trimStart(); // "Second Space           Hello World!                    "
  ```  
   - trim is used to trim the white space from the right side of the string.

7. `concat`

  -Parameter : takes N number of string parameters.

  -Return : returns string 

  Example :
  ```js
  let ayu = "Ayush";
  let kam = "Kamboj";

  ayu.concat(kam); // "AyushKamboj";
  ayu.concat("This is concatinated"); //"AyushThisisconcatinated"
  ayu.contat(" New Example") // "Ayush New Example";
  ```

  -concat is used to concatinate two strings of the parameter and if there is a different data type then it will convert it into string and concatinate them and returns a string.


8. `endsWith`

  -Parameter : 1st parameter - string (to be searched) , 2nd parameter (optional) number -  used to limit the search length (default = str.length);

  -Return  : Boolean value , true if string matched and false if not;

  -Example : 
  ```js
  let ayu = "This is the fact that this string is going to end with none";
  ayu.endsWith("none"); // true

  let kam = "Lets try another string with optional parameters";
  kam.endsWith("with",28); // true

  let kam = "Lets try another string with optional parameters";
  kam.endsWith("with",30); // false
  ```

  -endsWith is used to check whether a string is ending with the provided parameter string or not and returns a boolean value based on that , also takes a second parameter as number which limits the lenght of the search and by default it is str.length;

9. `includes`

  -Parameters : 1st parameter - string (to be searched), 2nd parameters (optional) -number - determines from where the search start , default = 0;

  -Returns : Boolean value

  -Example :
  ```js
  const sentence = 'The quick brown fox jumps over the lazy dog';
  sentence.includes("jumps") // true

  let ayu = "A new string to use in the new manner";
  ayu("man") // true;

  let kam ="A string which return false";
  kam.includes("returns",10); //false
  ```

  -includes method is used to check whether the string contains the parameter string or not and returns the boolean value based on that,also accepts a second parameter which determines the start of the search and its default value is 0;


10. `indexOf`

  -Parameter : 1st parameter - string (whose index we need to find) , 2nd (optional) - from where we want to start the search

  -Return  : Index of the searched parameter (Number) or if not found then -1; 

  Example :
  ```js
  let ayush = "This is the sample string which we are going to use for this sample method";
  ayush.indexOf("which"); //26

  ayush.indexOf("this"); // 56

  ayush.indexOf("sample") // 20;
  ```
  -indexOf takes a string parameter and returns the index of the first occurence of that string and if not found it returns -1 , it also takes a second optional parameter which determines from where the search begin (default value is 0);

11. `lastIndexOf`

  -Parameter : 1st parameter - string (whose index we need to find) , 2nd (optional) - from where we want to start the search

  -Return  : Index of the searched parameter (Number) or if not found then -1; 

  Example :
  ```js
  let ayush = "This is the sample string which we are going to use for this sample method";
  ayush.lastIndexOf("which"); //26

  ayush.lastIndexOf("this"); // 56

  ayush.lastIndexOf("sample") // 61;
  ```

  -lastIndexOf takes a string parameter and returns the index of the last occurence of that string and if not found it returns -1 , it also takes a second optional parameter which determines from where the search begin (default value is +Infinity);
  
  
12. `padEnd`

  -Parameter : 1st parameter (Number) , till which we want to add space/ string at the end , 

13. `padStart`


14. `repeat`

-Parameter : Accepts a single paramter (Number);

- Returns  : string

- Example : 

```js
let ayush = "Repeat One ";
ayush.repeat(2); // "Repeat One Repeat One "

let kam = 2;
kam.repeat(10); // type error; 

```
- repeat method is used to repeat the string N number of times, it takes a number input and repeat the string and returns a string

15. `replace`

-Parameter : Accepts two parameter , 1st (string) which we want to replace , 2nd (string) new string to be placed in place of 1st parameter

-Returs : string

-Example : 

```js
let ayush = "This is the string to be used in the replace method";
ayush.replace("t","T"); // "This is The string to be used in the replace method"


let kam = "New string which we are going to test on the repeat method";
kam.replace("New","Same old"); //"Same old string which we are going to test on the repeat method"
```

-replace method is used to replace the first occurence of the matching parameter and replaced it with the second parameter which we provided and returns a string

16. `slice`

-Parameter : accepts 2 parameter (Number) 1st - starting index and 2nd - End index(optional) default value str.length;
-Return : String 

-Example : 
```js
let ayush = "SLice method is a method which we are gonna use";
ayush.slice(2,10); // "ice meth";

ayush.slice(2); //ice method is a method which we are gonna use"

```

-slice method is used to slice a section of string using index , it takes two parameter first is for start slicing and another one which is optional is used for end the slicing (default str.length) and return a new sliced string;

17. `split`

-Parameter  : accepts two parameter 1st is pattern and second is the number of array elements we want;
-Return : An array 

Example :
```js
let ayush = "Split method is a method which we are gonna use";
ayush.split(" "); //["SLice", "method", "is", "a", "method", "which", "we", "are", "gonna", "use"]

ayush.split(" ",5); //["SLice", "method", "is", "a", "method"];
```

split method is used to identify a pattern and based on that pattern it divides the string and put it into a array and return it.

18. `substring`

-Parameter : accepts 2 parameter (Number) 1st - starting index and 2nd - End index(optional) default value str.length;
-Return : String 

-Example : 
```js
let ayush = "substring method is a method which we are gonna use";
ayush.substring(2,10); // "bstring ";

ayush.substring(10,2); // "bstring"

ayush.substring(2); //"bstring method is a method which we are gonna use"

```

-substring method is used to slice a section of string using index , it takes two parameter first is for start slicing and another one which is optional is used for end the slicing (default str.length) and return a new sliced string;
it is almost identical to slice but it can also handle negative and inverted parameters also which slice cannot.
