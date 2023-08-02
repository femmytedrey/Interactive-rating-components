// Get references to the elements
const submitButton = document.querySelector('.submit');
const circleCheckboxes = document.querySelectorAll('input[name="circle"]');

// Add a click event listener to the submit button
submitButton.addEventListener("click", () => {
    // Count the number of selected circles
    const numSelectedCircles = [...circleCheckboxes].filter(checkbox => checkbox.checked).length;

    // Navigate to the "submitted.html" page with the selected number as a query parameter
    window.location.href = `submitted.html?selected=${numSelectedCircles}`;
});
