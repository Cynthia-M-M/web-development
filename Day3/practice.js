/*
Duration: about 2 hours. Goal: learn the core building blocks of programming using JavaScript. Before today: complete Days 1 and 2 and their assignments. You will build: the "brain" of QuickNotes - functions that add, count, validate and delete notes, tested in the Console.

Learning Objectives

Explain what JavaScript does and connect a script to a page.

Use the Console to run code and print messages with console.log().

Store data in variables using let and const.

Work with the main data types: strings, numbers, booleans, arrays and objects.

Make decisions with if / else and comparison operators.

Repeat actions with loops and array methods.

Write and call functions, including arrow functions.

Instructor Note: This is the hardest day for most beginners. Go slowly and use the Console constantly - every new idea should be typed and run immediately. Encourage students to predict the output before pressing Enter; wrong predictions are where learning happens. Do not introduce the DOM today; keep the focus on pure logic.


JavaScript (JS) is a real programming language that runs inside every web browser. HTML says what is on the page, CSS says how it looks, and JavaScript says what happens - for example, "when the user clicks this button, add a note to the list."

Create script.js next to index.html and connect it just before the closing </head> tag:

index.html (inside <head>)(html)

<script src="script.js" defer></script>


Key Idea: The defer attribute tells the browser: "download this script now, but only run it after the whole HTML page has been read." Without it, the script might run before the elements it needs exist, and you get errors like Cannot read properties of null.

Your first program
script.js   (javascript)
*/

console.log("Hello from JavaScript!");
console.log(2 + 3);

/*
Save, open the page with Live Server, then open DevTools → Console. You should see both messages. console.log() prints whatever you put inside the brackets. It is the programmer's best friend for checking what the code is doing.
*/
// Tip: Every line (statement) ends with a semicolon; JavaScript often works without them, but using them consistently avoids rare, confusing bugs. // starts a one-line comment, and /* ... */ //wraps a multi-line comment.
/*
A variable is a named container that stores a value so you can use it later. Think of a labelled box: the label is the variable's name, and what is inside is its value.

Declaring variables(javascript)
*/

const appName = "QuickNotes";  // const: cannot be re-assigned
let noteCount = 0;             // let: can change later
 
noteCount = noteCount + 1;     // now 1
noteCount += 1;                // shortcut: now 2
noteCount++;                   // shortcut: now 3
 
console.log(appName, noteCount); // QuickNotes 3
 
// appName = "OtherApp";  ❌ Error: Assignment to constant variable.

/*
There are three keywords for creating variables:

const creates a variable that cannot be re-assigned. Make it your default choice for anything that will not be replaced.
let creates a variable that can be re-assigned. Use it for values that change, such as counters, totals and the current state of the app.
var is the old way of creating variables. It has confusing rules about where the variable can be used, so avoid it in new code - but recognise it when you see it in older tutorials.

Naming rules: names can contain letters, digits, _ and $, but cannot start with a digit and cannot contain spaces. JavaScript uses camelCase by convention: noteCount, userName, isLoggedIn. Names are case-sensitive (count and Count are different variables).


JavaScript has a small set of main data types:

String - text inside double or single quotes, such as "Buy milk" or 'Hi'.
Number - any number, whole or decimal, such as 42, 3.14 or -7. JavaScript does not separate whole numbers and decimals.
Boolean - one of two values, true or false, used for decisions.
Array - an ordered list of values, such as ["a", "b", "c"].
Object - a group of named values (key–value pairs), such as { text: "Hi", done: false }.
undefined - the value of a variable that has been created but not given a value yet, as in let x;.
null - a value that deliberately means "nothing" or "empty", as in let user = null;.

You can check a value's type with typeof, for example typeof "hello" gives "string".

Strings
Working with strings(javascript)
*/

const firstName = "Amina";
const greeting = "Hello, " + firstName + "!";        // joining with +
const betterGreeting = `Hello, ${firstName}!`;       // template literal
 
console.log(betterGreeting);          // Hello, Amina!
console.log(firstName.length);        // 5 (number of characters)
console.log(firstName.toUpperCase()); // AMINA
console.log("  hi  ".trim());         // "hi" (removes spaces at both ends)

/*
Key Idea - template literals: Strings written with backticks (the key above Tab) can include variables inside ${ }. This is much easier to read than joining pieces with +, and we use it throughout the course.

Numbers and maths
Arithmetic(javascript)
*/

console.log(10 + 3);  // 13  addition
console.log(10 - 3);  // 7   subtraction
console.log(10 * 3);  // 30  multiplication
console.log(10 / 4);  // 2.5 division
console.log(10 % 3);  // 1   remainder ("modulo")
console.log("5" + 2); // "52" ⚠ a string + number joins them as text!
console.log(Number("5") + 2); // 7 - convert text to a number first

/*
Arrays - ordered lists
An array holds many values in order. Each value has a position number called an index, and indexes start at 0.

Arrays(javascript)
*/

const notes = ["Revise HTML", "Practise CSS", "Learn JS"];
 
console.log(notes[0]);      // "Revise HTML"  (first item is index 0)
console.log(notes[2]);      // "Learn JS"
console.log(notes.length);  // 3
 
notes.push("Push to GitHub");  // add to the end
console.log(notes.length);     // 4
 
notes.pop();                   // remove the last item
console.log(notes.includes("Practise CSS")); // true

/*
Objects - grouping related data
An object groups related information using keys (names) and values. A single note has several pieces of information, so it is a perfect object.

Objects(javascript)
*/

const note = {
  id: 1,
  text: "Revise HTML forms",
  done: false,
};
 
console.log(note.text);   // "Revise HTML forms" (dot notation)
note.done = true;         // change a value
note.priority = "high";   // add a new key
console.log(note);

/*
Key Idea: QuickNotes will store its data as an array of objects: a list where each item is one note object. This is exactly how real apps (and the JSON data from real servers on Day 5) are shaped.


An array of objects(javascript)
*/

const notes_example = [
  { id: 1, text: "Revise HTML forms", done: false },
  { id: 2, text: "Practise Flexbox", done: true },
];
console.log(notes_example[1].text); // "Practise Flexbox"

/*
Watch Out: const stops you replacing the variable, but you can still change what is inside an array or object. notes.push(...) is fine with const notes; notes = [] is not.

Programs need to make choices: "if the note is empty, show an error; otherwise, save it." We use comparison operators to ask questions that give true or false, and if/else to act on the answer.

Comparison and logical operators produce true or false:

=== checks whether two values are equal and the same type: 5 === 5 is true, but 5 === "5" is false (a number is not a string).
!== checks whether two values are not equal: 3 !== 4 is true.
> and < mean greater than and less than: 10 > 3 is true.
>= and <= mean greater than or equal to, and less than or equal to: 5 <= 5 is true.
&& (AND) is true only if both sides are true, for example age > 18 && hasTicket.
|| (OR) is true if at least one side is true, for example isAdmin || isOwner.
! (NOT) flips a value: !true is false, and !isEmpty means "is not empty".

if / else if/else (javascript)
*/

const noteText = "   ";
 
if (noteText.trim() === "") {
  console.log("Error: a note cannot be empty.");
} else if (noteText.length > 200) {
  console.log("Error: keep notes under 200 characters.");
} else {
  console.log("Note saved!");
}

/*
Watch Out: Always use === (three equals) to compare. A single = assigns a value, and == (two equals) converts types in surprising ways (0 == "" is true!)

A loop repeats code. The classic for loop repeats a set number of times; for...of goes through each item in an array.

Loops(javascript)
*/

// Classic for loop: start; keep going while true; step
for (let i = 1; i <= 3; i++) {
  console.log(`Loop number ${i}`);
}
 
// for...of: easiest way to visit each array item
const tasks = ["HTML", "CSS", "JS"];
for (const task of tasks) {
  console.log(`I am learning ${task}`);
}

/*
Array methods: forEach, filter, find, map
Arrays have built-in methods that loop for you. You give them a function that runs once for each item (we cover functions in Part 6 - for now, read (note) => ... as "for each note, do this").


Array methods(javascript)
*/

const notes_list = [
  { id: 1, text: "Revise HTML", done: true },
  { id: 2, text: "Practise CSS", done: false },
  { id: 3, text: "Learn JS", done: false },
];
 
// forEach: do something with every item
notes_list.forEach((note) => console.log(note.text));
 
// filter: build a NEW array with only matching items
const unfinished = notes_list.filter((note) => note.done === false);
console.log(unfinished.length); // 2
 
// find: get the FIRST matching item (or undefined)
const found = notes_list.find((note) => note.id === 3);
console.log(found.text); // "Learn JS"
 
// map: build a NEW array by transforming every item
const texts = notes_list.map((note) => note.text.toUpperCase());
console.log(texts); // ["REVISE HTML", "PRACTISE CSS", "LEARN JS"]

/*
Key Idea: To delete an item, we usually filter it out: keep every note whose id is not the one we want to remove. notes.filter((n) => n.id !== 2) returns a new array without note 2.

A function is a named, reusable block of code - like a recipe. You define it once, then call (use) it as many times as you like. Functions can take parameters (inputs) and return a result (output).

Function declaration (javascript)
*/

function greet(name) {             // name is a parameter
  return `Hello, ${name}!`;       // return sends a value back
}
 
const message = greet("Brian");    // "Brian" is the argument
console.log(message);              // Hello, Brian!
console.log(greet("Wanjiku"));     // Hello, Wanjiku!

/*
Arrow functions are a shorter way to write functions. They are very common in modern JavaScript, especially inside array methods and event listeners.

Arrow functions (javascript)
*/

// These three do exactly the same thing:
function double(n) {
  return n * 2;
}
 
const doubleArrow = (n) => {
  return n * 2;
};
 
const doubleShort = (n) => n * 2; // one-line version: return is automatic
 
console.log(double(4), doubleArrow(4), doubleShort(4)); // 8 8 8

/*
Watch Out: Writing greet refers to the function itself; writing greet() runs it. This difference becomes important tomorrow with event listeners.

Scope: where variables live.
A variable created inside a function (or inside { } braces) only exists there. This is called scope. Variables created at the top of a file (outside any function) are available everywhere in that file.
*/

let total = 0; // global: usable everywhere in this file
 
function addOne() {
  const step = 1;   // local: only exists inside addOne
  total += step;
}
 
addOne();
console.log(total); // 1
// console.log(step); ❌ ReferenceError: step is not defined

/*
while loops and break

A while loop repeats as long as a condition is true. Use it when you do not know in advance how many times to repeat. break exits a loop immediately.

while and break(javascript)
*/

let attempts = 0;
 
while (attempts < 5) {
  attempts++;
  console.log(`Attempt ${attempts}`);
  if (attempts === 3) {
    console.log("Success on attempt 3 - stopping early.");
    break; // leave the loop now
  }
}

/*
Be careful: if the condition never becomes false, the loop runs forever and the browser tab freezes (an infinite loop). Always make sure something inside the loop moves it towards the end.

switch for many fixed choices.
When one value can match several fixed options, switch can be easier to read than a long if/else if chain. Each case needs a break, otherwise the code "falls through" into the next case.

switch(javascript)
*/

function categoryColour(category) {
  switch (category) {
    case "work":
      return "darkred";
    case "study":
      return "blue";
    case "personal":
      return "teal";
    default:
      return "grey"; // used when nothing else matches
  }
}
 
console.log(categoryColour("study")); // blue

/*
(Here return also ends the function, so no break is needed after each return.)

More useful string methods
String methods(javascript)
*/

const sentence = "Learn HTML, CSS and JavaScript";
 
console.log(sentence.includes("CSS"));      // true
console.log(sentence.indexOf("HTML"));      // 6 (position where it starts)
console.log(sentence.slice(0, 5));          // "Learn" (index 0 up to 5)
console.log(sentence.split(" "));
// ["Learn", "HTML,", "CSS", "and", "JavaScript"]
console.log(sentence.replace("Learn", "Master"));
// "Master HTML, CSS and JavaScript"
console.log("ab".repeat(3));                // "ababab"

/*
split turns a string into an array, and join does the opposite: ["a", "b", "c"].join("-") gives "a-b-c". Together they are useful for tasks such as counting words: text.trim().split(/\s+/).length splits on any group of spaces and counts the pieces.

More useful array methods.

Array methods: some, every, sort, reduce   (javascript)
*/
const scores = [72, 95, 58, 88];
 
console.log(scores.some((s) => s < 60));   // true  - at least one is below 60
console.log(scores.every((s) => s >= 50)); // true  - all are at least 50
 
// sort numbers from lowest to highest (a copy, so the original is unchanged)
const sorted = [...scores].sort((a, b) => a - b);
console.log(sorted); // [58, 72, 88, 95]
 
// reduce: combine all items into one value (here, a total)
const total_sum = scores.reduce((sum, s) => sum + s, 0);
console.log(total_sum / scores.length); // 78.25 (the average)

/*
[...scores] uses the spread syntax to make a copy of the array. This matters because sort changes the array it is called on. The comparison function (a, b) => a - b tells sort to compare numbers by value; without it, JavaScript sorts numbers as text, so 100 would come before 9.

The Math object.

JavaScript has built-in maths helpers: Math.round(4.6) gives 5, Math.floor(4.9) gives 4, Math.max(3, 9, 2) gives 9, and Math.random() gives a random decimal between 0 and 1. A random whole number from 1 to 6 (a dice roll) is Math.floor(Math.random() * 6) + 1.


Every programmer writes bugs every day. The skill is finding them quickly.

The three errors you will see most

SyntaxError - the code is not valid JavaScript, so nothing in the file runs. Usually a missing bracket, brace, quote or comma. Example: Unexpected end of input often means a missing }.
ReferenceError - you used a name that does not exist, usually a typo or a variable used outside its scope. Example: notess is not defined.
TypeError - you did something with a value that it does not support, most often using a property of null or undefined. Example: Cannot read properties of undefined (reading 'text') means you wrote something like note.text while note was undefined.

The Console shows the error type, the message and a link such as script.js:14. Click the link to jump straight to line 14.


Printing values
console.log is the simplest debugging tool: print values at different points to see where they stop being what you expect. console.table(notes) prints an array of objects as a neat table, and console.error("...") prints a message in red.


Breakpoints: pausing the code
In DevTools, open the Sources tab, open script.js and click a line number. A blue marker appears: this is a breakpoint. When the code reaches that line, it pauses, and you can hover over any variable to see its current value. Use the "step over" button to run one line at a time. You can also write the word debugger; on a line in your code to pause there whenever DevTools is open.

Behind the Scenes: How JavaScript Runs Your Code
Knowing what the JavaScript engine does with your code turns many confusing bugs into obvious ones.

The engine reads and runs from top to bottom
Every browser contains a JavaScript engine (Chrome's is called V8). When your script loads, the engine first reads the whole file to check it is valid JavaScript - if there is a syntax error anywhere, nothing runs. Then it executes the statements one at a time, from top to bottom. JavaScript is single-threaded, meaning it does exactly one thing at a time.

There is one exception to the top-to-bottom rule. Functions written with the function keyword are set up before the code runs (this is called hoisting), so you can call them earlier in the file than where they are written. Functions stored in a const variable (such as arrow functions) are not available until that line has run.


Hoisting(javascript)
*/

sayHello();               // works: function declarations are hoisted
 
function sayHello() {
  console.log("Hello!");
}
 
// sayBye();              // ❌ ReferenceError: cannot use before this line
const sayBye = () => console.log("Bye!");
sayBye();                 // works here

/*
The call stack: functions calling functions.

When a function calls another function, the engine pauses the first one, runs the second, then comes back. It keeps track using the call stack - a pile of "where was I?" notes. Follow this example:

Tracing the call stack(javascript)
*/

function formatNote(text) {
  return `• ${text.trim()}`;
}
 
function printNote(text) {
  const line = formatNote(text);  // 2. pause printNote, run formatNote
  console.log(line);              // 4. back in printNote
}
 
printNote("  Buy milk ");         // 1. run printNote
// 3. formatNote returns "• Buy milk" to printNote

/*
printNote is called and placed on the stack.
Inside it, formatNote is called and placed on top. printNote waits.
formatNote finishes, is removed from the stack and hands back its result.
printNote continues from exactly where it paused and prints the line

Error messages show this stack, listing which function called which, so you can trace a bug back to where it started.

Values and references: a very common surprise
Simple values - numbers, strings and booleans - are copied when you assign them to another variable. Arrays and objects are not copied: the new variable points to the same array or object in memory. This is called a reference.

Copying values vs sharing references(javascript)
*/

let a = 5;
let b = a;       // b gets its own copy of 5
b = 10;
console.log(a);  // 5 - unchanged
 
const notes_copy_demo = ["Buy milk"];
const sameNotes = notes_copy_demo;    // NOT a copy: both names point to one array
sameNotes.push("Call mum");
console.log(notes_copy_demo);         // ["Buy milk", "Call mum"] - changed too!
 
const realCopy = [...notes_copy_demo]; // spread syntax makes a real copy

/*
This is why array methods such as filter and map are so useful: they return a new array and leave the original untouched, which makes code easier to reason about.

Today we write the logic of QuickNotes without touching the page. Tomorrow we connect it to the buttons. Create practice/quicknotes-day3/script.js (with a basic index.html that loads it using defer) and type:
*/

// 1. Our data: an array of note objects
let quicknotes = [];
 
// 2. Check that a note's text is acceptable
function isValidNote(text) {
  const cleaned = text.trim();
  return cleaned.length > 0 && cleaned.length <= 200;
}
 
// 3. Add a note (returns true if added, false if rejected)
function addNote(text) {
  if (!isValidNote(text)) {
    console.log("❌ Note rejected: must be 1-200 characters.");
    return false;
  }
  const newNote = {
    id: Date.now(),        // milliseconds since 1970: a simple unique id
    text: text.trim(),
    createdAt: new Date().toLocaleString(),
  };
  quicknotes.push(newNote);
  console.log(`✅ Added: "${newNote.text}"`);
  return true;
}
 
// 4. Delete a note by its id
function deleteNote(id) {
  quicknotes = quicknotes.filter((note) => note.id !== id);
}
 
// 5. A friendly summary sentence
function countMessage() {
  if (quicknotes.length === 0) return "You have no notes yet.";
  if (quicknotes.length === 1) return "You have 1 note.";
  return `You have ${quicknotes.length} notes.`;
}
 
// 6. Print all notes
function listNotes() {
  quicknotes.forEach((note, index) => {
    console.log(`${index + 1}. ${note.text} (${note.createdAt})`);
  });
  console.log(countMessage());
}
 
// --- Test it ---
addNote("Revise HTML forms");
addNote("   ");              // rejected
addNote("Practise Flexbox");
listNotes();

/*
What is happening in this code

let notes = [] creates the app's only store of data. It uses let rather than const because deleteNote replaces the whole array with a filtered copy.

isValidNote returns the result of a comparison directly. cleaned.length > 0 && cleaned.length <= 200 is already true or false, so there is no need for an if statement. trim() runs first, so a note of only spaces counts as empty.


addNote uses an early return: if the text is invalid it logs a message and stops immediately with return false. Only valid notes reach the code below. Each note is an object with three properties; new Date().toLocaleString() creates a readable date and time in the user's local format, such as "22/09/2026, 10:15:00".


deleteNote shows the standard way to remove an item: build a new array containing every note except the one whose id matches, then store it back in notes.


countMessage handles the three grammatical cases - none, one and many - because "You have 1 notes" looks careless. Small details like this separate polished apps from rough ones.

listNotes uses the second parameter of forEach, the index, and adds 1 because people count from 1 while arrays count from 0.

Check your work

Open the Console. You should see two ✅ messages, one ❌ message and a list of 2 notes followed by "You have 2 notes."
In the Console, type addNote("Learn arrays") and press Enter, then listNotes().
Copy an id from notes (type notes in the Console to see them) and run deleteNote(PASTE_ID) then listNotes(). The note is gone.

Tip: Date.now() gives the current time in milliseconds. Because it changes every millisecond, it works as a simple unique id for a beginner project. Real systems use database-generated ids (Day 6).

Common Beginner Mistakes

Confusing = (assign) with === (compare) inside an if.
Forgetting that arrays start at index 0, so the last item is array[array.length - 1], not array[array.length].
Spelling and capitalisation: console.Log or notes.lenght will fail. Read error messages - they name the line and the problem.
Mixing up the quotes in template literals. "Hello ${name}" (double quotes) prints the characters literally; you need backticks.

Recap
Variables store data: use const by default and let when the value must change.
The main types are string, number, boolean, array (an ordered list) and object (named values).
if / else and switch make decisions; loops and array methods (forEach, filter, find, map, some, reduce) repeat actions.
Functions are reusable recipes with inputs (parameters) and outputs (return values).
Error messages tell you the type of problem and the line; breakpoints let you pause and inspect.
*/

let variable = "Miss Cynthia"
const variable_2 = "Miss Cynthia"

// data types in JS

// string - "My name is Miss Cynthia"

// Number - 56523456725, 183, 575.2, 636

// Boolean - true or false

// Undefined - no value assigned to the variable

// Object - {
//     name:"Cynthia",
//     age:23,
//     isFemale:true,
//     job:"Software Engineer"
// }

// Array - ["Miss Cynthia", 23, true, "Software Engineer"]

// Null

//OPERATORS
// Assignment operators += -= *= /= %= **= ++ --
//Arithmetic operators  + - * / %(modulur) **(exponential)
// Comparison operators === !== == != < > <= >= 
// Logical operators && || !
//Ternary Operators ? :
//typeof operator typeof instance of
//typeof(variable)




//CONDITIONAL STATEMENTS

let bank_balance = 2000;
const fuliza_limit = 200;

const can_fuliza_check = (amount) => {
    if (amount > bank_balance){
        console.log()
    }
}


const can_fuliza = (amount) => {
    if (amount > bank_balance || amount > fuliza_limit){
        return "i am sorry, you can not fuliza!"
    }
    else if (amount < bank_balance || amount < fuliza_limit){
        return "you can fuliza!"
    }    
    else{
        return "you can fuliza!"
    }    
}       
console.log(`Hello miss Cynthia, ${can_fuliza(200)}`)


for(i=1; i<=5; i++){
    console.log(i)
}


const greetings = (name) => {
    console.log(`hello ${name}`)
}

greetings("miss Cynthia")

/*
while()

start CODE

LET I = 1
IF I =1
PRINT 1  //find out what this  language is 
*/


for (i = 1; i <= 90; i++) {
    if (i % 2 == 0){
        console.log(`the numbers ${i} is even`)
    }
    else{
        console.log(`the numbers ${i} is odd`)
    }
}


let run = true;
while (run){
    for(i = 1; i<=10000; i++) {
        if(i==90){
            console.log(i)
            run = false;
        }
    }
}

let j = 10;
while (j <= 100){
 console.log(j);
 j++;
} 

let num = 1
switch (num){
    case 1:
        console.log("one")
        break;
    case 2:
        console.log("two")
        break;
    case 3:
        console.log("three")
        break;
    case 4:
        console.log("four")
        break;
    case 5:
        console.log("five")
        break;
    default:
        console.log("number is not between 1 and 5")
        break;
}

let sum = 0
for (i = 1; i<= 100; i++){
    sum += i
}
console.log(sum)