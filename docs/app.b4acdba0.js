parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"A2T1":[function(require,module,exports) {
$(document).ready(function(){var e=document.title,o={"Baking Day Tracker":[["Chocolate Marshmallow Cookies","Sugar Cookies","Santa's Whiskers"],["Fudge","Toffee"],["Toffee Party Mix","Hoffmans' Cracker Mix"]],2017:[["Santa's Whiskers","Sugar Cookies","Samoa Thumbprint Cookies","Puppy Chow Cookies","Chocolate Marshmallow Cookies","Espresso Chocolate Shortbread Cookies","Dark Chocolate Orange Biscotti","White Chocolate Chip Cranberry Oatmeal Cookies"],["Peanut Butter Truffles","Fudge","Toffee"],["Toffee Party Mix","Hoffmans' Cracker Mix"]],2016:[["Salted Dark Chocolate Rolo-Filled Cookies","Toffee Shortbread Meltaways","Chocolate Cookies with Andes Mints","Santa's Whiskers","Sugar Cookies"],["Peanut Butter Truffles","Fudge","Toffee"],["Buffalo Chicken Dip","Toffee Party Mix","Bacon-Wrapped Sweet Potatoes","Hoffmans' Cracker Mix"]],2015:[["Salted Dark Chocolate Rolo-Filled Cookies","Pumpkin Butterscotch Chip Cookies","Chocolate Marshmallow Cookies","Peanut Butter Star Cookies","Sugar Cookies","Santa's Whiskers","Cranberry Cookies with Browned Butter Glaze"],["Fudge","Round Pretzels with Hugs and M&M's","Round Pretzels with Rolos and Pecans","Bailey's Truffles","Toffee"],["Spinach and Kale Roll-Ups","Baked Brie with Crostini and Fruit","Hummus and Pita Chips","Toffee Party Mix","Buffalo Chicken Dip","Bacon-Wrapped Sweet Potatoes","Hoffmans' Cracker Mix"]]},t=["#cookiesList","#candiesList","#appsList"];function a(e,o){for(var t=0;t<e.length;t++)$(o).append("<li>"+e[t]+"</li>")}for(var i=0;i<o[e].length;i++)a(o[e][i],t[i]);document.querySelectorAll(".foodType").forEach(function(e){e.addEventListener("click",function(){this.nextElementSibling.classList.toggle("hide")})});for(var r=document.querySelectorAll("footer a"),s=0;s<r.length;s++)"#"==r[s].getAttribute("href")&&r[s].classList.add("current");if("Baking Day Tracker"==document.title){var n=document.getElementById("addFood"),l=document.getElementById("form"),c=document.getElementById("submitBtn");n.addEventListener("click",function(){l.classList.toggle("hide"),l.classList.toggle("formContainer")}),c.addEventListener("click",function(){event.preventDefault();var a=$("input[name=categoryChoice]:checked").val(),i=document.getElementById("foodName").value,r=i.split(" "),s="",n={cookies:0,candies:1,appetizers:2};r.forEach(function(e){s+=e.charAt(0).toUpperCase()+e.slice(1)+" "}),a&&""!=i?(o[e][n[a]].push(s),$(t[n[a]]).append("<li>"+o[e][n[a]][o[e][n[a]].length-1]+"</li>"),$("input[name=categoryChoice]").prop("checked",!1),document.getElementById("foodName").value="",l.classList.toggle("hide"),l.classList.toggle("formContainer")):alert("Please select a category and enter the food name.")})}});
},{}]},{},["A2T1"], null)
//# sourceMappingURL=/app.b4acdba0.map