# Spread
The spread operator (`...`), a special syntax JavaScript provides to build, combine, and manipulate arrays quickly and more seamlessly.
spread 
```javascript
const mathStudents = [
  'Marty',
  'Jennifer',
  'Lorraine',
  'Goldie'
];

const scienceStudents = [
  'Emmett', 
  'Clara', 
  'Needles',
  'Strickland'
];

const mathStudentsCopy = [...mathStudents];
const scienceStudentsCopy = [...scienceStudents];

// This affects the copied arrays only
//  The original arrays remain unchanged
mathStudentsCopy.pop();
scienceStudentsCopy.push('Marvin');
 
```