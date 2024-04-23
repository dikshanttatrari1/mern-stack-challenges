const students = [
    { name: "Rohit Sharma", marks: 85, class: "10th", address: "Rajasthan" },
    { name: "Virat Kohli", marks: 90, class: "10th", address: "Punjab" },
    { name: "Thala (Dhoni)", marks: 75, class: "11th", address: "Uttarakhand" },
    { name: "Subhman Gill", marks: 95, class: "11th", address: "Haryana" },
    { name: "Sachin Tendulkar", marks: 95, class: "11th", address: "Uttar Pradesh" },
    { name: "K.L. Rahul", marks: 95, class: "11th", address: "Rajasthan" },
    { name: "Rishabh Pant", marks: 95, class: "11th", address: "Karnataka" },
    { name: "Sanju Samsen", marks: 95, class: "11th", address: "Hyderabad" },
    { name: "Yuzi Chahel", marks: 95, class: "11th", address: "Assam" },
    { name: "Jasprit Bumrah", marks: 95, class: "11th", address: "Apne Ghar se Hai" },
    { name: "Jaddu (Jadeja)", marks: 95, class: "11th", address: "Ye bhi.." },
    { name: "Mohammad Siraj", marks: 95, class: "11th", address: "Apne Ghar se Hai" },
    { name: "Kapil Dev", marks: 95, class: "11th", address: "Apne Ghar se Hai" },
    { name: "Sachin Tendulkar", marks: 95, class: "11th", address: "Apne Ghar se Hai" },
    { name: "Harbajan Singh", marks: 95, class: "11th", address: "Apne Ghar se Hai" },
    { name: "Shikhar Dhawan", marks: 95, class: "11th", address: "Apne Ghar se Hai" },
    { name: "Yuvraj Singh", marks: 95, class: "11th", address: "Apne Ghar se Hai" },

];

const renderStudents = (students) => {
    const studentCards = document.getElementById('studentCards');
    studentCards.innerHTML = '';

    students.forEach(student => {
        const card = document.createElement('div');
        card.classList.add('card');

        const name = document.createElement('h2');
        name.textContent = student.name;
        const marks = document.createElement('p');
        marks.textContent = `Marks: ${student.marks}`;
        const className = document.createElement('p');
        className.textContent = `Class: ${student.class}`;
        const address = document.createElement('p');
        address.textContent = `Address: ${student.address}`;

        card.appendChild(name);
        card.appendChild(marks);
        card.appendChild(className);
        card.appendChild(address);

        studentCards.appendChild(card);
    });
};

renderStudents(students);

// const searchInput = document.getElementById('searchInput');
// searchInput.addEventListener('input', () => {
//     const searchText = searchInput.value.toLowerCase();
//     const filteredStudents = students.filter(student => student.name.toLowerCase().includes(searchText));
//     renderStudents(filteredStudents);
// });

const searchInput = document.getElementById('searchInput');

document.getElementById('searchButton').addEventListener('click', () => {
    const searchText = searchInput.value.toLowerCase();
    const filteredStudents = students.filter(student => student.name.toLowerCase().includes(searchText));
    renderStudents(filteredStudents);
});
