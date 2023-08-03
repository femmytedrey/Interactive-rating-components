// Get the selectedCount from the URL parameter
const urlParams = new URLSearchParams(window.location.search);
const selectedCount = urlParams.get('selectedCount');

// Update the message with the correct selected count
const selectedMessage = document.getElementById('selectedMessage');
selectedMessage.textContent = `You selected ${selectedCount} out of 5`;