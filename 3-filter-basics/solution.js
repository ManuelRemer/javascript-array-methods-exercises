const grades = [5, 1, 1.3, 3.7, 1.7, 2.1, 2.4, 4.1, 6];

let gradeLowerThree = grades.filter((grade) => {
  return grade < 3;
});
let gradeHigherThree = grades.filter((grade) => {
  return grade >= 3;
});

console.log(gradeLowerThree);
console.log(gradeHigherThree);

// Your code below
