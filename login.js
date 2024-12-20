const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');
const signupName = document.getElementById('signupName');
const signupEmail = document.getElementById('signupEmail');
const signupPassword = document.getElementById('signupPassword');
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');

let users = [];

// Signup Functionality
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fullName = signupName.value;
    const email = signupEmail.value;
    const password = signupPassword.value;

    // Save new user
    users.push({ fullName, email, password });
    console.log(users);

    alert('Signup successful! Please log in.');
    document.getElementById('signup').classList.add('hidden');
    document.getElementById('login').classList.remove('hidden');
});

// Login Functionality
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginEmail.value;
    const password = loginPassword.value;

    // Check if the user exists in the `users` array
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Save current user to localStorage
        localStorage.setItem('currentUser', JSON.stringify(user));
        alert('Login successful!');
        window.location.href = 'home.html'; // Redirect to home page

        loggedInUser.innerText=user.fullName;
    } else {
        alert('Invalid email or password!');
    }
});