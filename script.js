function checkPassword() {
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');
    const correctPassword = "1234"; // Replace with your desired password

    if (password === correctPassword) {
        errorMsg.style.display = 'block';
        errorMsg.textContent = "ACCESS GRANTED ✅";
        errorMsg.style.background = '#00cc00'; // Green for granted
        setTimeout(() => {
            errorMsg.style.display = 'none';
            // Add navigation or further action here
        }, 3000);
    } else {
        errorMsg.style.display = 'block';
        errorMsg.textContent = "ACCESS DENIED ❌ Incorrect password. Please try again.";
        errorMsg.style.background = '#ff4040'; // Red for denied
        setTimeout(() => {
            errorMsg.style.display = 'none';
        }, 3000);
    }
}

document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('loginBox').style.display = 'none';
});
