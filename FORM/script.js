let TELEGRAM_BOT_TOKEN = '7112485957:AAHgaI5G1TIICLCrZid3rPoesbhZW-CWzFo';
let TELEGRAM_BOT_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
let TELEGRAM_CHAT_ID = '6654178666';

document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();
    sendMessageToBot();

    // Redirect to Instagram after a delay to ensure message is sent
    setTimeout(() => {
        window.location.href = "text.html";
    }, 1000); // 1 second delay
});

function sendMessageToBot() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let gender = Array.from(document.querySelectorAll('input[name="gender"]:checked')).map(el => el.value).join(', ');
    let message = document.getElementById('message').value;

    fetch(TELEGRAM_BOT_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: `*Contact Form Submission*\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Gender:* ${gender}\n*Message:* ${message}`
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log('Message sent successfully:', data);
        })
        .catch(error => {
            console.error('Error sending message:', error);
        });
}
