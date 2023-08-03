const checkboxes = document.querySelectorAll('input[name="circle"]');

const countSelectedCheckboxes = () => {

    let selectedCount = 0;


    checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      selectedCount++;
    }
  });

  return selectedCount;
};


const handleFormSubmit = () => {

    const selectedCount = countSelectedCheckboxes();


    window.location.href = `submit.html?selectedCount=${selectedCount}`;
};


const submitButton = document.getElementById('submitButton');


submitButton.addEventListener('click', handleFormSubmit);
