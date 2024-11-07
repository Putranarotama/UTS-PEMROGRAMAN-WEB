
function validateForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    
    let isValid = true;


    nameError.style.display = 'none';
    emailError.style.display = 'none';
    messageError.style.display = 'none';


    if (name.value.trim() === '') {
        nameError.style.display = 'block';
        isValid = false;
    }

    if (message.value.trim() === '') {
        messageError.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert('Pesan berhasil dikirim!');
        document.getElementById('contactForm').reset();
    }

    return false;
}

document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        item.style.transform = 'scale(0.95)';
        setTimeout(() => {
            item.style.transform = 'scale(1)';
        }, 200);
    });
});
