$(document).ready(function() {

  //toggle display of list and associated styling
  let foodCategories = document.querySelectorAll(".foodType");
  foodCategories.forEach(function(category) {
    category.addEventListener("click", function() {
      this.nextElementSibling.classList.toggle("hide");
    });
  });

  //show form on button click
  let addFood = document.getElementById("addFood");
  let form = document.getElementById("form");
  addFood.addEventListener("click", function() {
    form.classList.toggle("hide");
    form.classList.toggle("formContainer");
  });

});
