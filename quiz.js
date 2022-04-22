/*Friday Quiz: 1) Create 3 arrays, One with all String data types, 
one with all Numbers data types, and one with Boolean data types((HOW???)). 
 You will need to add sample data to each array (don't over think this). 
 Each array should have at least 5 elements.. 

2) Next create a function that can take any of these arrays as a parameter and add 
an additional String, Number, or Boolean depending on which array was passed in. 

Hint: You will need an array method to add new items to the end of the array. 
You will also need conditionals set up to check the item at index 0 so you 
know what array was passed into the function. 
You can use the typeof method to determine what type of data is in the array. 
 */
let people = [
    ['Jesse', 29],
    ['Mae', 24],
    ['Cole',27],
    ['Patrick',31],
    ['Austin',25],
]
people.push(['ED',25])
console.log(people)