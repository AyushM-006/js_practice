const student = [
  {
    name: "Ayush",
    marks: 85,
  },
  {
    name: "Max",
    marks: 75,
  },
  {
    name: "Brock",
    marks: 95,
  },
  {
    name: "Ken",
    marks: 78,
  },
];

const totalMarks = student.reduce((sum, student) => {
  return sum + student.marks;
}, 0);

console.log(totalMarks);
