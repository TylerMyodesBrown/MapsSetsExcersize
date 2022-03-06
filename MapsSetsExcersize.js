/*
Quick Question #1
What does the following code return?

new Set([1,1,2,2,3,4])

this returns a set of [1,2,3,4]

Quick Question #2
What does the following code return?

[...new Set("referee")].join("")

this returns a string of ref


Quick Questions #3
What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

returns a map of 2 arrays. both with key [1,2,3] and one with value false and the other value true

*/

/*
hasDuplicate
Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false
*/
hasDuplicate = (arr) => {
    let l = arr.length
    let set = new Set(arr);
    let setSize = set.size
    return (l === setSize ? true : false)
}

/*
vowelCount
Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }
*/

vowelCount = (str) =>{
    const vMap = new Map();
    for(let l of str){
        let lower = l.toLowerCase();
        if("aeiou".includes(lower)){
            if(vMap.has(lower)){
            vMap.set(lower, vMap.get(l)+1)
                }
            else{
            vMap.set(lower, 1);
            }
        }
    }
    return vMap;
}