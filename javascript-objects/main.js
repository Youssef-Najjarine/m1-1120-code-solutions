var student = {
  firstName: 'Youssef',
  lastName: 'Najjarine',
  age: 24
};
var fullName = student.firstName + ' ' + student.lastName;
console.log(fullName);

student.livesInIrvine = false;
console.log(student.livesInIrvine);

student.previousOccupation = 'bookeeping';
console.log(student.previousOccupation);

var vehicle = {
  make: 'Hyundai',
  model: 'Elantra GT',
  year: 2015
};

vehicle['color'] = 'white';
console.log(vehicle['color']);

vehicle['isConvertible'] = false;
console.log(vehicle['isConvertible']);

console.log(vehicle);

var pet = {
  name: 'Kitty',
  type: 'Cat'
};

delete pet.name;
delete pet.type;
console.log(pet);
