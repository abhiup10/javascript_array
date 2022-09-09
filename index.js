// declaring strings

var str1 = "Hi I'm Abhishek Upadhyay!"

var str3 = 'I\'m a final year student at GIT,Jaipur';

// we can use single quotes inside a single quoted strings but with slash preceeding the single quote.

var str4 = 'I\'m a final year student at GIT,Jaipur';
document.write("<pre>" + str4 + "<pre>" + "<br>");

var str4 = "I like to play Cricket nd \n I'm a great fan of virat kohli";
document.write(str4 + "<br>");

var str5 = "C:\Users\Downloads";
document.write(str5 + "<br>");

var str6 = "C:\\Users\\Downloads";
document.write(str6 + "<br>");


// perfoming oprations on String
//getting length

document.write(str1.length + "<br>");


// finding a string inside another string



// indexOf() 
//method to find substring or string within another string
// It returns index until that element if present otherwise it display's -1.
// indexOf() returns index of first occurence of specified string within the string

var pos = str1.indexOf("Upadhyay");
document.write(pos + "<br>");

// lastIndexOf()
// returns index of last occurence of a string within other string

var num = "she said sea shell on the sea floor";
document.write( num.lastIndexOf("sea")+ "<br>" );

// indexOf and lastindexOf()

var str = "If the facts don't fit the theory, change the facts.";
 
// Searching forwards
var pos1 = str.indexOf("facts", 20);
document.write(pos1 + "<br>"); 
 
// Searching backwards
var pos2 = str.lastIndexOf("facts", 20);
document.write(pos2 + "<br>"); 

// searching for a pattern inside a string
var pattern = "abhishek is Abhishek";
document.write(pattern.search("abhishek") + "<br>"); // case sensitive search

document.write(pattern.search("Abhishek") + "<br>");

// extracting a part of string
// slice()

var str2 = "I'm an Intern at celebal Technologies";
document.write(str2.slice(6,19) + "<br>");

// slice function with negative indexes
var str2 = "I'm an Intern at celebal Technologies";
document.write(str2.slice(-6,-2)+ "<br>");


// substring()  : method to extract a section of the given string
// based on startt and end index 

var str = "The quick brown fox jumps over the lazy dog.";
document.write(str.substring(4,30) + "<br>");

var str2 = "This is Abhishek Upadhyay, Junior associate at Celebal technologies";

// if start index is greater than end index
//substr() swaps starting and ending index
document.write(str2.substring(9,0) + "<br>");

// extracting a fixed number of characters

var str = "The quick brown fox jumps over the lazy dog.";
document.write(str.substring(4,15) + "<br>");

// if range exceeds it prints nothing

var str = "The quick brown fox jumps over the lazy dog.";
document.write(str.substring(-19,-34) + "<br>");


// replacing content of string

var str = "The sun rises in the west";
document.write(str.replace("west","east") + "<br>");

//By default, the replace() method replaces only the first match, and it is case-sensitive. To replace the substring within a string in a case-insensitive manner we should use reg exp with i modifier

var str = "the sun rises in the west and sets in the West";
document.write(str.replace(/west/i,"east")+ "<br>");

// to replace all the occurrences of a substring within a string in a case-insensitive manner we can use the g modifier along with the i modifier.

var str = "the sun rises in the west and sets in the West";
document.write(str.replace(/west/ig,"east") + "<br>");


// converting string to upper case

var str = "abhishek";
document.write(str.toUpperCase() + "<br>");


var str2 = "UPADHYAY";
document.write(str2.toLowerCase() + "<br>");


// concatenation

var str1 = "Abhishek";
var str2 = "Upadhyay"
document.write(str1 + " " + str2 + "<br>");

var str1 = "Happy";
    str1+= " new year!";
document.write(str1 + "<br>");


// accesing individual characters of a string
// str.charAt(index);
// if no index is provided by default it is 0.

var str = "Hello World";
document.write(str.charAt()+ "<br>");

document.write(charAt(6)+"<br>");

document.write(str.charAt(30)); // Prints nothing as it exceeds length

document.write(str.charAt(str.length - 1)+"<br>");

// array.charAt() is replaced with array[index]
// i.e. now strings are considered as read only arrays
// acc to ECMA 5

var str = "Hello World";
document.write(str[0]+ "<br>");

document.write(str[6]+"<br>");

document.write(str[30]); // Prints nothing as it exceeds length

document.write(str[str.length - 1]+"<br>");

document.write(" day 3");
// difference between slice() & substr()

// substr() if startindex > endIndex  : indexes are swapped
// slice() if startindex > endindex   : empty string

// substr() if startIndex/endIndex === NaN or startIndex/endIndex < 0
// index is treated as 0

// slice() if startIndex/endIndex === NaN 
// index is treated as 0
// startIndex/endIndex < 0
// startIndex = stringLength + startIndex
// endIndex = stringLength + endIndex


// splitting a strig into a array

var names = ["abhishek","aarti","aishwaray","tushar","vivek"];
var split = names.split(", ");
document.write(split);



 






