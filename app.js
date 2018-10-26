$(document).ready(function() {

  //toggle display of list and associated styling
  var foodCategories = document.querySelectorAll(".foodType");
  foodCategories.forEach(function(category) {
    category.addEventListener("click", function() {
      this.nextElementSibling.classList.toggle("hide");
    });
  });

});
