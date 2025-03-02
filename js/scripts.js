document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Form Handling
const form = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
        feedback.textContent = 'Message sent successfully!';
        feedback.style.color = 'lightgreen';
        form.reset();
    } else {
        feedback.textContent = 'Error sending message.';
        feedback.style.color = 'red';
    }
});
