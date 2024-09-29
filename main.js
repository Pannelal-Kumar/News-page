// Get all dropdown items
document.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', function (event) {
      event.preventDefault();

      // Get the selected country name from the data-value attribute
      const selectedCountry = this.getAttribute('data-value');
      
      // Get the selected flag image source
      const selectedFlagSrc = this.querySelector('img').getAttribute('src');

      // Update the button HTML with the selected country name and flag image
      document.getElementById('dropdownMenuButton').innerHTML = `
          <img src="${selectedFlagSrc}" alt="${selectedCountry}"> 
          ${selectedCountry}`;
  });
});



// click troggle Open modal 
const troggle = document.getElementById("troggle");
const modal = document.getElementById("exampleModal");

// When modal opens, toggle 'change' class
modal.addEventListener('show.bs.modal', function () {
    troggle.classList.add("change");
});

// When modal closes, remove 'change' class
modal.addEventListener('hide.bs.modal', function () {
    troggle.classList.remove("change");
});

// Toggle the modal when troggle button is clicked
document.getElementById("modalButton").addEventListener("click", function () {
    if (modal.classList.contains("show")) {
        bootstrap.Modal.getInstance(modal).hide(); // Hide modal if it's already open
    }
});


//click troggle open sidebar
const troggle1 = document.getElementById("troggle1");
const sidebar1 = document.getElementById("mySidebar");

// Open the sidebar
document.getElementById("modalButton1").addEventListener("click", function () {
    sidebar1.style.width = "250px"; // Set width for the sidebar when opened
    troggle1.classList.add("change"); // Change troggle animation
});

// Close the sidebar
document.getElementById("closeSidebar").addEventListener("click", function () {
    sidebar1.style.width = "0"; // Close sidebar
    troggle1.classList.remove("change"); // Revert troggle animation
});


