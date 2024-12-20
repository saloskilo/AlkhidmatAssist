const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');
const signupEmail = document.getElementById('signupEmail');
const signupPassword = document.getElementById('signupPassword');
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');

let users = [];

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signupEmail.value;
    const password = signupPassword.value;

    users.push({ email, password });
    console.log(users)
    alert('Signup successful! Please log in.');
    document.getElementById('signup').classList.add('hidden');
    document.getElementById('login').classList.remove('hidden');
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginEmail.value;
    const password = loginPassword.value;

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        alert('Login successful!');
       window.location.href='home.html' // Redirect to home page
    } else {
        alert('Invalid email or password!');
    }
});