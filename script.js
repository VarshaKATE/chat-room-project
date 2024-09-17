document.addEventListener('DOMContentLoaded', function() {
    const chatBox = document.getElementById('chat-box');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
  
    // Store messages in an array
    let messages = [];
  
    // Function to render messages in the chat box
    function renderMessages() {
      chatBox.innerHTML = '';
      messages.forEach((message, index) => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        
        const messageText = document.createElement('div');
        messageText.classList.add('message-text');
        messageText.textContent = message;
        
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'Delete';
        
        deleteButton.addEventListener('click', () => {
          deleteMessage(index);
        });
  
        messageElement.appendChild(messageText);
        messageElement.appendChild(deleteButton);
        chatBox.appendChild(messageElement);
      });
    }
  
    // Function to add a message
    function addMessage(message) {
      if (message.trim() !== '') {
        messages.push(message);
        renderMessages();
        messageInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;  // Auto-scroll to the bottom
      }
    }
  
    // Function to delete a message
    function deleteMessage(index) {
      messages.splice(index, 1);
      renderMessages();
    }
  
    // Event listener for the send button
    sendButton.addEventListener('click', () => {
      const message = messageInput.value;
      addMessage(message);
    });
  
    // Event listener for "Enter" key press in the message input field
    messageInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const message = messageInput.value;
        addMessage(message);
      }
    });
  });
  