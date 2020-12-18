var colors = ['red', 'white', 'blue'];
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log('America is ' + colors[0] + ',' + colors[1] + ',' + 'and ' + colors[2] + '.');
colors[2] = 'green';

console.log('Mexico is ' + colors[0] + ',' + colors[1] + ',' + 'and ' + colors[2] + '.');
console.log('The value of colors: ' + colors);

var students = ['John', 'Mike', 'Dave', 'Steve'];
var numberOfStudents = students.length;
console.log('There are ' + numberOfStudents + ' students in the class.');

var lastIndex = numberOfStudents - 1;

var lastStudent = students[lastIndex];
console.log('The last student in the array is ' + lastStudent);
console.log('The value of students: ' + students);
