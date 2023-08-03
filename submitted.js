// Extract the query parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const numSelectedCircles = urlParams.get('selected');

// Display the message in the "submittedmessage" element
const selectedMessageElement = document.querySelector('.submittedmessage');
selectedMessageElement.textContent = `You selected ${numSelectedCircles} out of 5`;
