$(document).ready(function() {
  let twentyeighteen = [["Chocolate Marshmallow Cookies", "Sugar Cookies", "Santa's Whiskers"],["Fudge", "Toffee"],["Toffee Party Mix", "Hoffmans' Cracker Mix"]];
  let foodLists = ["#cookiesList", "#candiesList", "#appsList"];

  function createLists(arr, id) {
    for (let i = 0; i < arr.length; i++) {
      $(id).append("<li>" + arr[i] + "</li>");
    }
  }

  for (let i = 0; i < twentyeighteen.length; i++) {
      createLists(twentyeighteen[i], foodLists[i]);
  }

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

  //add entry to arrays
  $("#submitBtn").on("click", function(event) {
    event.preventDefault();

    let catChecked = $("input[name=categoryChoice]:checked").val();
    let foodName = $("#foodName").val();

    if (catChecked == "cookies") {
      twentyeighteen[0].push(foodName);
    } else if (catChecked == "candies") {
        twentyeighteen[1].push(foodName);
    } else {
        twentyeighteen[2].push(foodName);
    }
    $("#cookiesList").append("<li>" + twentyeighteen[0][twentyeighteen[0].length - 1] + "</li>");
  });

});
