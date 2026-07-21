const student = [
    {
        name: "Ayush",
        marks: 85
    },
    {
        name: "Max",
        marks: 75
    },
    {
        name: 'Brock',
        marks: 95
    },
    {
        name: 'Ken',
        marks: 78
    }]


const above80 = student.filter((student)=>{
    return student.marks > 80    
    
})

console.log(above80);
