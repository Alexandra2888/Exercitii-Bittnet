let studentsArr = [
    {
        name: 'Alex',
        age: 21,
        grades: [5, 9, 7, 6]
    },
    {
        name: 'Marius',
        age: 22,
        grades: [6, 8, 9, 5]
    },
    {
        name: 'Alexandra',
        age: 21,
        grades: [9, 9, 7, 6]
    },
    {
        name: 'Rodica',
        age: 22,
        grades: [8, 7, 9, 5]
    }
]

function calculateAverage(grades) {
    const sum = grades.reduce((total, current) => total + current, 0);
    return sum / grades.length;
}

function displayList() {
    let value = '';

    let students = studentsArr.sort((a, b) =>
        (calculateAverage(a.grades) < calculateAverage(b.grades)) ? 1 :
        ((calculateAverage(b.grades) < calculateAverage(a.grades)) ? -1 : 0)
    );

    students.forEach(student => {
        let avg = calculateAverage(student.grades);
        value += `<li>${student.name} (${student.age}) - Media este ${avg.toFixed(2)}</li>`;
    });

    document.getElementById('list').innerHTML = value;
}

displayList();

function getRandomBetween(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getRandomGrades() {
    let gradesArr = [];
    for (let i = 0; i < 4; i++) {
        gradesArr.push(getRandomBetween(5, 9));
    }
    return gradesArr;
}

function addStudent() {
    const obj = {
        name: document.getElementById('student_name').value,
        age: document.getElementById('student_age').value,
        grades: getRandomGrades()
    }

    studentsArr.push(obj);
    displayList();
    // console.log(obj);
}