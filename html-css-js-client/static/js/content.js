function renderHomepage(){
    const logo = document.createElement('img');
    logo.id = 'logo';
    logo.src = '../assets/hamilton-title';
    logo.alt = 'Hamilton title'
    main.appendChild(logo);
}


function renderLoginForm() {
    const fields = [
        { tag: 'input', attributes: { type: 'email', name: 'email', placeholder: 'Email' } },
        { tag: 'input', attributes: { type: 'password', name: 'password', placeholder: 'Password' } },
        { tag: 'input', attributes: { type: 'submit', value: 'Login' } }
    ]
    const form = document.createElement('form');
    fields.forEach(f => {
        let field = document.createElement(f.tag);
        Object.entries(f.attributes).forEach(([a, v]) => {
            field.setAttribute(a, v);
            form.appendChild(field);
        })
    })
    form.addEventListener('submit', requestLogin)
    main.appendChild(form);
}

function renderRegisterForm() {
    const fields = [
        { tag: 'input', attributes: { type: 'text', name: 'username', placeholder: 'Username' } },
        { tag: 'input', attributes: { type: 'email', name: 'email', placeholder: 'Email' } },
        { tag: 'input', attributes: { type: 'password', name: 'password', placeholder: 'Password' } },
        { tag: 'input', attributes: { type: 'password', name: 'passwordConfirmation', placeholder: 'Confirm Password' } },
        { tag: 'input', attributes: { type: 'submit', value: 'Create Account' } }
    ]
    const form = document.createElement('form');
    fields.forEach(f => {
        let field = document.createElement(f.tag);
        Object.entries(f.attributes).forEach(([a, v]) => {
            field.setAttribute(a, v);
            form.appendChild(field);
        })
    })
    form.addEventListener('submit', requestRegistration)
    main.appendChild(form);
}

async function renderStudents() {
    const feed = document.createElement('section');
    feed.id = 'feed';
    const students = await getAllStudents();
    if(students.err){return}
    const renderStudent = studentData => {
        const student = document.createElement('div');
        student.className = 'student';
        const name = document.createElement('h3');
        // const gitUsername = document.createElement('p');
        name.textContent = postData.name;
        // body.textContent = postData.body;
        student.appendChild(name);
        // post.appendChild(body);
        feed.appendChild(student);
    }
    students.forEach(renderStudent);
    main.appendChild(feed);
}

function renderProfile() {
    const profile = document.createElement('section');
    const greeting = document.createElement('h3');
    greeting.textContent = `Hi there, ${localStorage.getItem('username')}!`;
    profile.appendChild(greeting);
    main.appendChild(profile);
}

function render404() {
    const error = document.createElement('h2');
    error.textContent = "Oops, we can't find that page sorry!";
    main.appendChild(error);
}