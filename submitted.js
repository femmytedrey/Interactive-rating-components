const urlParams = new URLSearchParams(window.location.search);
const selectedCount = urlParams.get('selectedCount');

const selectedMessage = document.getElementById('selectedMessage');
selectedMessage.textContent = `You selected ${selectedCount} out of 5`;