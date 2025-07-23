const students = [];
function addStudents() {
    const name = document.getElementById("nameinput").value;
    const age = parseInt(document.getElementById("ageinput").value);
    const course = document.getElementById("courseinput").value;
    if (!name || !age || !course) {
        alert("please enter all fields");
        return;
    }
    const student = {
        name: name,
        age: age,
        course: course
    };
    students.push(student);
    displayStudents();
}
function displayStudents() {
    const studentlist = document.getElementById("studentlist");
    studentlist.innerHTML = "";

    students.forEach((stu, index) => {
        const div = document.createElement("div");
        div.className = "student";
        div.innerHTML = `<strong>${index + 1}.${stu.name}</strong> (age:${stu.age} , course:${stu.course})`;
        studentlist.appendChild(div);

    });

}