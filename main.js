let students = JSON.parse(localStorage.getItem('students')) || [];
let editIndex = -1;

document.getElementById("addBtn").addEventListener("click", function(e) {
    

let name = document.getElementById("name").value;
let age = document.getElementById("age").value;
let course = document.getElementById("course").value;
let grade = document.getElementById("grade").value;

let student = { name, age, course, grade };

if (editIndex === -1) {
    students.push(student);
} else {
    students[editIndex] = student;
    editIndex = -1;
}

localStorage.setItem('students', JSON.stringify(students));
displayStudents();
document.getElementById("studentForm").reset(); // Clear form after submission
this.reset();

});


function displayStudents() {
    let studentList = document.getElementById("studentList");
    studentList.innerHTML = ""; 

    students.forEach((student, index) => {
        let row = ` 
            <tr>
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.course}</td>
            <td>${student.grade}</td>

            <td>
                <button onclick="editStudent(${index})">Edit</button>
                <button onclick="deleteStudent(${index})">Delete</button>
            </td>
            </tr>
        `;
        studentList.innerHTML += row;
    });
}

function editStudent(index) {
    let student = students[index];

    document.getElementById("name").value = student.name;
    document.getElementById("age").value = student.age;
    document.getElementById("course").value = student.course;
    document.getElementById("grade").value = student.grade;

    editIndex = index;

    document.getElementById("addBtn").innerText = "Update Student";

}    

function deleteStudent(index) {
    students.splice(index, 1);
    localStorage.setItem('students', JSON.stringify(students));
    displayStudents();

};

displayStudents();