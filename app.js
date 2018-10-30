$(document).ready(function() {
  let year = document.title;
  let yearsObj = {
    "Baking Day Tracker": [
      ["Chocolate Marshmallow Cookies", "Sugar Cookies", "Santa's Whiskers"],
      ["Fudge", "Toffee"],
      ["Toffee Party Mix", "Hoffmans' Cracker Mix"]
    ],
    "2017": [
      ["Santa's Whiskers","Sugar Cookies","Samoa Thumbprint Cookies","Puppy Chow Cookies","Chocolate Marshmallow Cookies","Espresso Chocolate Shortbread Cookies","Dark Chocolate Orange Biscotti","White Chocolate Chip Cranberry Oatmeal Cookies"],
      ["Peanut Butter Truffles","Fudge","Toffee"],
      ["Toffee Party Mix","Hoffmans' Cracker Mix"]
    ],
    "2016": [
      ["Salted Dark Chocolate Rolo-Filled Cookies", "Toffee Shortbread Meltaways", "Chocolate Cookies with Andes Mints", "Santa's Whiskers", "Sugar Cookies"],
      ["Peanut Butter Truffles","Fudge","Toffee"],
      ["Buffalo Chicken Dip","Toffee Party Mix", "Bacon-Wrapped Sweet Potatoes", "Hoffmans' Cracker Mix"]
    ],
    "2015": [
      ["Salted Dark Chocolate Rolo-Filled Cookies", "Pumpkin Butterscotch Chip Cookies", "Chocolate Marshmallow Cookies", "Peanut Butter Star Cookies", "Sugar Cookies", "Santa's Whiskers","Cranberry Cookies with Browned Butter Glaze"],
      ["Fudge", "Round Pretzels with Hugs and M&M's", "Round Pretzels with Rolos and Pecans", "Bailey's Truffles", "Toffee"],
      ["Spinach and Kale Roll-Ups", "Baked Brie with Crostini and Fruit", "Hummus and Pita Chips", "Toffee Party Mix", "Buffalo Chicken Dip", "Bacon-Wrapped Sweet Potatoes", "Hoffmans' Cracker Mix"]
    ]
  };

  let foodLists = ["#cookiesList", "#candiesList", "#appsList"];

  function createLists(arr, id) {
    for (let i = 0; i < arr.length; i++) {
      $(id).append("<li>" + arr[i] + "</li>");
    }
  }

  for (let i = 0; i < yearsObj[year].length; i++) {
      createLists(yearsObj[year][i], foodLists[i]);
  }

  //toggle display of list and associated styling
  let foodCategories = document.querySelectorAll(".foodType");
  foodCategories.forEach(function(category) {
    category.addEventListener("click", function() {
      this.nextElementSibling.classList.toggle("hide");
    });
  });

  if (document.title == "Baking Day App") {
    //show form on button click
    let addFood = document.getElementById("addFood");
    let form = document.getElementById("form");
    addFood.addEventListener("click", function() {
      form.classList.toggle("hide");
      form.classList.toggle("formContainer");
    });

    $("#submitBtn").on("click", function(event) {
      //prevent form from submitting
      event.preventDefault();

      let catChecked = $("input[name=categoryChoice]:checked").val();
      let foodName = $("#foodName").val();
      let idxObj = {
        "cookies":0,
        "candies":1,
        "appetizers":2
      };

      //check that form has been filled out
      if (catChecked && foodName != ""){
        //add entry to array and list
        yearsObj[year][idxObj[catChecked]].push(foodName);
        $(foodLists[idxObj[catChecked]]).append("<li>" + yearsObj[year][idxObj[catChecked]][yearsObj[year][idxObj[catChecked]].length - 1] + "</li>");

        //clear form
        $("#foodName").val("");
        $("input[name=categoryChoice]").prop("checked", false);

        //hide form
        form.classList.toggle("hide");
        form.classList.toggle("formContainer");

      } else {
          alert("Please select a category and enter the food name.");
      }
    });
  }

});
