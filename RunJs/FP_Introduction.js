// Object
 var person = {};
person.name = "Mrs. White";
 

var who = person.name;
who;
person.name = "Mr. White";

who;
who.story;

// Array
var persons = [];
persons.name = "Mrs. Whites";

var whos = persons.name;

typeof persons === "array";

persons[0] = "I was there";
persons.name
