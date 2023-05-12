const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const sectionId = link.getAttribute('href');
        const section = document.querySelector(sectionId);
        section.scrollIntoView({ behavior: "smooth" });
    });
});


const contactForm = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const submitButton = document.querySelector('#contact-form button[type="submit"]');
submitButton.addEventListener('click', e => {
    e.preventDefault();

    if (nameInput.value.trim() === '') {
        alert('Please enter your name.');
        nameInput.focus();
        return;
    }
    if (emailInput.value.trim() === '') {
        alert('Please enter your email address.');
        emailInput.focus();
        return;
    }
    if (messageInput.value.trim() === '') {
        alert('Please enter your message.');
        messageInput.focus();
        return;
    }

    const formData = new FormData(contactForm);
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert('Thank you for your message. We will get back to you soon!');
            contactForm.reset();
        }
    }

});