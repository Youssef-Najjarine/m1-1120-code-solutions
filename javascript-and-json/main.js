var books = [
  {
    isbn: '978-3-16-148410-0',
    title: 'Lord of the Rings',
    author: 'J. R. R. Tolkein'
  },
  {
    isbn: '978-3-16-148410-0',
    title: 'Lord of the Rings',
    author: 'J. R. R. Tolkein'
  },
  {
    isbn: '978-3-16-148410-0',
    title: 'Lord of the Rings',
    author: 'J. R. R. Tolkein'
  }
];

console.log('typeof books = ', typeof books);

console.log(JSON.stringify(books));

console.log(typeof JSON.stringify(books));

var student = [
  {
    ID: 123456,
    Name: 'Youssef Najjarine'
  }
];

console.log(student);
console.log('typeof = ', typeof student);

var student2 = `[
  {
    "ID": 123456,
    "Name" : "Youssef Najjarine"
  }
]`;
student2 = JSON.parse(student2);
console.log('JSON.parse = ', student2);
console.log('typeof = ', typeof student2);
