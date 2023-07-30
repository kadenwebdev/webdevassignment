const name = document.getElementById('name');
const email = document.getElementById('email');
const feedback = document.getElementById('feedback');
const feedbackform = document.getElementById('feedbackform');
const errorElement = document.getElementById('error');
const thankYouMessage = document.getElementById('thank-you-message');

function isAlphabetic(input) {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(input);
}

feedbackform.addEventListener('submit', (e) => {
    e.preventDefault();
    let messages = [];

    if (name.value.length < 3) {
        messages.push("Name must be longer than 2 characters");
    }

    if (!isAlphabetic(name.value)) {
        messages.push("Name cannot contain numbers");
    }

    if (messages.length > 0) {
        const joinedMessages = messages.join('\n');
        errorElement.innerText = joinedMessages;
    } else {
        errorElement.innerText = "";
        feedbackform.style.display = 'none';
        thankyoumessage.style.display = 'block';
    }
});
