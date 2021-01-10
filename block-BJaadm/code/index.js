let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array

let peopleName = persons.map((element) => element.name);

// Create an array peopleGrade and store the value of grade key from persons array

let peopleGrade = persons.map((element) => element.grade);

// Create an array peopleSex and store the value of sex key from persons array

let peopleSex = persons.map((element) => element.sex);

// Log the filtered named of people in peopleName that starts with 'J' or 'P'

console.log(persons.filter(element => element.name.startsWith('J') || element.name.startsWith('P')));

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'

let newName = persons.filter(element => element.name.startsWith('A') || element.name.startsWith('C'));

newName.forEach(element => console.log(element.name.length)); 

// Log all the filtered male ('M') in persons array

persons.filter(element => element.sex === "M");

// Log all the filtered female ('F') in persons array

persons.filter(element => element.sex === "F");

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array

let allFemale = persons.filter(element => element.sex === "F");

console.log(allFemale.filter(element => element.name.startsWith('C') || element.name.startsWith('J')));

// Log all the even numbers from peopleGrade array

peopleGrade.filter(element => element % 2 === 0);

// Find the first name that starts with 'J' in persons array and log the object

console.log(persons.find(element => element.name.startsWith("J")));

// Find the first name that starts with 'P' in persons array and log the object

console.log(persons.find(element => element.name.startsWith("P")));

// Find the first name that starts with 'J', grade is greater than 10 and is a female

console.log(persons.find(element => element.name.startsWith("J") && element.grade > 10 && element.sex === "F"));

// Filter all the female from persons array and store in femalePersons array

let femalePersons = persons.filter(element => element.sex === "F");

// Filter all the male from persons array and store in malePersons array

let malePersons = persons.filter(element => element.sex === "M");

// Find the sum of all grades and store in gradeTotal

let gradeTotal = peopleGrade.reduce((acc,cv) => acc+cv);

// Find the average grade

console.log(gradeTotal/peopleGrade.length);

// Find the average grade of male

let malePersonsGrade = malePersons.map(element => element.grade);

malePersonsGrade.reduce((acc,cv) => (acc+cv)/malePersonsGrade.length);

// Find the average grade of female

let femalePersonsGrade = femalePersons.map(element => element.grade);

femalePersonsGrade.reduce((acc,cv) => (acc+cv)/femalePersonsGrade.length);

// Find the highest grade

let highGrade = [...peopleGrade].sort((a,b) => a-b);

console.log(highGrade[highGrade.length-1]);

// Find the highest grade in male

let maleHighGrade = [...malePersonsGrade].sort((a,b) => a-b);

console.log(maleHighGrade[maleHighGrade.length-1]);

// Find the highest grade in female

let femaleHighGrade = [...femalePersonsGrade].sort((a,b) => a-b);

console.log(femaleHighGrade[femaleHighGrade.length-1]);

// Find the highest grade for people whose name starts with 'J' or 'P'

let personJP = persons.filter(element => element.name.startsWith("J") || element.name.startsWith("P"));

let personJPGrades = personJP.map(element => element.grade);

let personJPsort = personJPGrades.sort((a,b) => a-b);

personJPsort[personJPsort.length-1];

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?

console.log(peopleGrade.sort((a,b) => a-b));

let answer = `yes the mutate`;

// Sort the peopleGrade in descending order

peopleGrade.sort((a,b) => b-a);

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

[...peopleGrade].sort((a,b) => b-a);

// Sort the array peopelName in ascending `ABCD..Za....z`

peopleName.sort();

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array

[...peopleName].sort();
