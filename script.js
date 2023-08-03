// Get all the checkbox elements with name="circle"
const checkboxes = document.querySelectorAll('input[name="circle"]');

// Function to count the selected checkboxes
const countSelectedCheckboxes = () => {
  // Initialize a variable to keep track of the number of selected checkboxes
  let selectedCount = 0;

  // Loop through all checkboxes and count the selected ones
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      selectedCount++;
    }
  });

  return selectedCount;
};

// Function to handle the "SUBMIT" button click
const handleFormSubmit = () => {
  // Get the number of selected checkboxes
  const selectedCount = countSelectedCheckboxes();

  // Redirect to submit.html with the selectedCount as a URL parameter
  window.location.href = `submit.html?selectedCount=${selectedCount}`;
};

// Get the "SUBMIT" button element
const submitButton = document.getElementById('submitButton');

// Add an event listener to the "SUBMIT" button to detect clicks
submitButton.addEventListener('click', handleFormSubmit);
