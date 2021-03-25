const nav = document.querySelector('nav');
const main = document.querySelector('main');

const publicRoutes = ['#', '#login', '#register'];
const privateRoutes = ['#students', '#profile'];

window.addEventListener('hashchange', updateContent);

//Function that updates the nav bar
function updateNav(){
    nav.innerHTML = '';
    let links;
    let logoutBtn;
    if (currentUser()){
        links = privateRoutes.map(createNavLink);
        logoutBtn = document.createElement('button');
        logoutBtn.textContent = 'Logout';
        logoutBtn.onclick = logout;
        nav.appendChild(logoutBtn);
    } else {
        links = publicRoutes.map(createNavLink);
    }
    links.forEach(l => nav.insertBefore(l, logoutBtn))
}

//Function that updates the main content based on the path taken
function updateMain(path) {
    main.innerHTML = '';
    if (path) {
        switch(path){
            case '#login':
                renderLoginForm(); break;
            case '#register':
                renderRegisterForm(); break;
            case '#feed':
                renderFeed(); break;
            case '#profile':
                renderProfile(); break;
            default:
                render404(); break;
        }
    } else {
        renderHomepage();
    }
}

//Designs nav bar links based on the route taken
function createNavLink(route){
    const link = document.createElement('a');
    link.textContent = route === '#' ? 'Home' : `${route[1].toUpperCase()}${route.substring(2)}`;
    link.href = route;
    return link;
}

//Displays relevant content based on client routes
function updateContent(){
    const path = window.location.hash;
    if (privateRoutes.includes(path) && !currentUser()){
        window.location.hash = '#';
    } else if (!privateRoutes.includes(path) && currentUser()) {
        window.location.hash = '#feed';
    } else {
        updateNav();
        updateMain(path);
    }
}

//Invoke updateContent on page load
updateContent();