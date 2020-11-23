I will explain my code for the mysterious organism challenge
Let’s have a look for the mutate
#mutate
-First i create two arrays, one for the base possibilities and another one
that stores the dna
-After that i randomly choose a base from the dna
-With the filter method i left the base possibilities without the base that i randomly choose above.
For example: base=’T’ letters.filter(…) letters = ['A', 'C', 'G'] 
-Again i randomly choose a new base from the letters array and put it
to the mutate dna
#compareDNA
-I create one variable that increases every time a base in the two objects
are the same
-With the for loop i test all the bases
#willLikelySurvive
-I create a variable that increases every time that a base is ‘C’ or ‘G’
-With the for loop i test all the bases