const marks = [45, 85, 78, 95, 67]

const grades = marks.map((marks) => {
    if (marks > 80) {
        return 'A'
    } else if (marks > 50 && marks < 80) {
        return 'B'

    } else {
        return 'C'
    }
})

const above75 = marks.filter((marks) => {
    return marks > 75
})

const total = marks.reduce((sum, marks) => {
    return sum += marks
})

console.log(grades);
console.log(above75);
console.log(total);


