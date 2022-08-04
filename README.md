# Codebyte-Back-end-Challenge

In the JavaScript file, write a program to perform a GET request on the route 
https://coderbyte.com/api/challenges/json/json-cleaning and then clean the object 
according to the following rules: Remove all keys that have values of N/A, -, or 
empty strings. If one of these values appear in an array, remove that single 
item from the array. Then console log the modified object as a string.

## Example Input
{"name":{"first":"Robert","middle":"","last":"Smith"},"age":25,"DOB":"-","hobbies":["running","coding","-"],"education":{"highschool":"N\/A","college":"Yale"}}

## OUTPut
{"name":{"first":"Robert","last":"Smith"},"age":25,"hobbies":["running","coding"],"education":{"college":"Yale"}}