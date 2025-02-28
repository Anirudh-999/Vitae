document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;

    // Display user message on the right
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `<div class="message user-message">${userInput}</div>`;

    fetch('/send_message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ message: userInput })
    })
    .then(response => response.json())
    .then(data => {
        // Display LLM response on the left
        const llmResponse = data.response;
        chatBox.innerHTML += `<div class="message bot-message">${llmResponse}</div>`;
    })
    .catch(error => console.error('Error:', error));
});