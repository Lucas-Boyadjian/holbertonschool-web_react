interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Stephane",
  lastName: "Paton",
  age: 38,
  location: "Réunion",
};

const student2: Student = {
  firstName: "Guillaume",
  lastName: "Font",
  age: 33,
  location: "Mexique",
};

const studentsList: Array<Student> = [student1, student2];

const table = document.createElement("table");
const tbody = document.createElement("tbody");

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameStudent = document.createElement("td");
  firstNameStudent.textContent = student.firstName;

  const locationStudent = document.createElement("td");
  locationStudent.textContent = student.location;

  row.appendChild(firstNameStudent);
  row.appendChild(locationStudent);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
