function checkPassword() {
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');
    const correctPassword = "1234"; // Replace with your desired password

    if (password === correctPassword) {
        alert("Access Granted!"); // Replace with actual navigation or functionality
    } else {
        errorMsg.style.display = 'block';
        setTimeout(() => {
            errorMsg.style.display = 'none';
        }, 3000);
    }
}

document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('loginBox').style.display = 'none';
});