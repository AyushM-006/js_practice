const Emp = [
  {
    name: "Ayush",
    id: 45,
    sal: 12345,
  },
  {
    name: "Harry",
    id: 785,
    sal: 72345,
  },
  {
    name: "Gary",
    id: 85,
    sal: 92345,
  },
  {
    name: "Ram",
    id: 95,
    sal: 62345,
  },
];

const filterEmp = Emp.filter((emp)=>{
    if(emp.sal > 20000){
        return emp
    }
})
console.log(filterEmp); 

//output: 
// [ { name: 'Harry', id: 785, sal: 72345 }, 
// { name: 'Gary', id: 85, sal: 92345 }, 
// { name: 'Ram', id: 95, sal: 62345 } ]

