/*Maps - called hash maps in other languages

keys can be any data type in a maps
in an object they can only be strings - not a true boolean or number
functions cannot be keys in objects but they can be in maps
you can have objects in maps keys but not in objects


*/


//how to make a maps

new Map(); //this is the only way to make a new map

// name it like this
const myMap = new Map();

myMap.set(7,'seven'); //put in a key and a value. It will read out as 7 => "seven"
myMap.set('7','seven string'); //reads out '7' => "seven string"

//the above are 2 different keys, but in an object they would be the same. Both would become a string

myMap.set([],'empty array'); //arrays are reference types [] === [] will read false sense they reference different areas in the memory. We can ddo this if we have a reference to it


// if instead we do 
const empty = []
myMap.set(empty, 'emtpy array') //  this will work to call 'empty array' it will readout like this Array(0) => "empty array"

myMap.set(true, "TRue") // this is set as a true boolean. So could it be called using an if type statement?



/*
Map methods below here
Start with functions as a key - can be used to track how often they are being called
Then to the methods
*/

const funcCalls = new Map();

funcCalls.set(add, 0);
funcCalls.set(mult,0);

funcCalls.set(add, 1);
funcCalls.set(mult,9);

//can do funcCalls.get(function name) - in this case add or mult to get the value from the function keys

//can pass in an array = but only if the array is set up in a specific way. Namely, it has to have several sub arrays. Each sub array would focus on a key value pair that would show the map what to create. it would look like this [[k,v],[k,v],[k,v]]

//example
const bandData = [
    [3, '3doordown'],
    ['three', 'threedoordown'],
    [9, 'ninenailsdoordown'],
    ['nine', '9nails'],
]

const bandMap = new Map(bandData);

// can get an array from the map as well using the spread notation
//example
const retrieveBandData = [...bandMap];

//can change set calls together in order to get multiple sets into a map
// bandMap.set()

// .has = will check to see if it has any of these things you put into it

//delete will delete a pair to anything you put into it (put in the key)

//clear will clear out the map

//values and keys will retrieve all the keys or values in something called a map iterator => technically an object. use spread to turn into an object. Its just an interable anyway though

/*
Below is all about iterating with maps and that fun stuff
*/

/*
Sets are interesting
All values are unique
These are more similar to an array
Use set as they are more efficient
New key word
*/

const bannedHashes = new Set(['asfdwa','stupid','dumb','yolo']);

//if you had something like "hello" it would iterate over and return h e l o because l is already there
bannedHashes.add('bestLife');

//the above added another one, if you tried one thats already in there it would be ignored

// check if something is in the set uses .has Which will check for what is in there

//so we have new set. set.add and set.has. clear and delete do the same things that new maps have


