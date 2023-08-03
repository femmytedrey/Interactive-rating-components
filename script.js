// Get references to the elements
const submitButton = document.querySelector('.submit');
const circleCheckboxes = document.querySelectorAll('input[name="circle"]');

// Add a click event listener to the submit button
submitButton.addEventListener("click", () => {
  // Initialize a variable to count the number of selected circles
  let numSelectedCircles = 0;

  // Loop through the circle checkboxes to check which ones are selected
  circleCheckboxes.forEach(checkbox => {
    if (checkbox.checked) {
      numSelectedCircles++;
    }
  });

  console.log('Number of selected circles:', numSelectedCircles);

  // Navigate to the "submitted.html" page with the selected number as a query parameter
  window.location.href = `submitted.html?selected=${numSelectedCircles}`;
});
