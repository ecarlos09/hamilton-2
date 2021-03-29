// // ********************************************
// // SETUP
// const studentForm = document.querySelector('#new-student-form');
// const studentsList = document.querySelector('table');

// // Bind event listeners
// form.addEventListener('submit', submitStudent);

// // ********************************************

// // STUDENTS FLOW

// // create
// function submitStudent(e){
//     e.preventDefault();

//     const studentData = {
//         name: e.target.name.value,
//         username: e.target.username.value,
//         repos: e.target.repos.value
//     };

//     const options = { 
//         method: 'POST',
//         body: JSON.stringify(studentData),
//         headers: { "Content-Type": "application/json" }
//     };

//     fetch('http://localhost:3000/students', options)
//         .then(r => r.json())
//         .then(appendStudent)
//         .then(() => e.target.reset())
//         .catch(console.warn)
// };

// function updateDog(id, tr){
//     const options = { 
//         method: 'PATCH',
//     };
//     fetch(`http://localhost:3000/dogs/${id}`, options)
//         .then(r => r.json())
//         .then(data => {
//             const { dog } = data
//             tr.querySelectorAll('td')[1].textContent = dog.age
//         })
//         .catch(console.warn)
// }

// function deleteDog(id, li){
//     console.log('deleting', id)
//     const options = { 
//         method: 'DELETE',
//     };
//     fetch(`http://localhost:3000/dogs/${id}`, options)
//         .then(li.remove())
//         .catch(console.warn)
// }

// // helpers
// function appendStudents(data){
//     data.dogs.forEach(appendStudent);
// };

// function appendStudent(studentData){
//     const newRow = document.createElement('tr');
//     const studentLi = formatStudentTr(studentData, newRow)
//     studentsList.append(newRow);
// };


// function formatStudentTr(student, tr){
//     const nameTd = document.createElement('td');
//     const usernameTd = document.createElement('td');
//     const reposTd = document.createElement('td');
//     const uptTd = document.createElement('td');

//     const addRepoBtn = document.createElement('button');
//     delBtn.setAttribute('class', 'delete')
//     uptBtn.setAttribute('class', 'update')
//     delBtn.textContent = 'X';
//     uptBtn.textContent = '+';
//     delBtn.onclick = () => deleteDog(dog.id, tr);
//     uptBtn.onclick = () => updateDog(dog.id, tr);
//     delTd.append(delBtn);
//     uptTd.append(uptBtn);

//     nameTd.textContent = dog.name
//     ageTd.textContent = dog.age

//     tr.append(nameTd)
//     tr.append(ageTd)
//     tr.append(delTd)
//     tr.append(uptTd)

//     return tr
// }

// // ********************************************

// // MESSAGE FLOW
// function getMessage(){
//     fetch('http://localhost:3000')
//         .then(r => r.text())
//         .then(renderMessage)
//         .catch(console.warn)
// };

// function renderMessage(msgText){
//     document.querySelector('#msg-btn').textContent = msgText;
// };



// // ********************************************