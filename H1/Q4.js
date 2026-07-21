function filterPassedStudents(arr){
    return arr.filter(student => student >= 45)
}

const arr = [50, 30, 80, 40, 90]

console.log(filterPassedStudents(arr));
