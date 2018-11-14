// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"app.js":[function(require,module,exports) {
$(document).ready(function () {
  var year = document.title;
  var yearsObj = {
    "Baking Day Tracker": [["Chocolate Marshmallow Cookies", "Sugar Cookies", "Santa's Whiskers"], ["Fudge", "Toffee"], ["Toffee Party Mix", "Hoffmans' Cracker Mix"]],
    "2017": [["Santa's Whiskers", "Sugar Cookies", "Samoa Thumbprint Cookies", "Puppy Chow Cookies", "Chocolate Marshmallow Cookies", "Espresso Chocolate Shortbread Cookies", "Dark Chocolate Orange Biscotti", "White Chocolate Chip Cranberry Oatmeal Cookies"], ["Peanut Butter Truffles", "Fudge", "Toffee"], ["Toffee Party Mix", "Hoffmans' Cracker Mix"]],
    "2016": [["Salted Dark Chocolate Rolo-Filled Cookies", "Toffee Shortbread Meltaways", "Chocolate Cookies with Andes Mints", "Santa's Whiskers", "Sugar Cookies"], ["Peanut Butter Truffles", "Fudge", "Toffee"], ["Buffalo Chicken Dip", "Toffee Party Mix", "Bacon-Wrapped Sweet Potatoes", "Hoffmans' Cracker Mix"]],
    "2015": [["Salted Dark Chocolate Rolo-Filled Cookies", "Pumpkin Butterscotch Chip Cookies", "Chocolate Marshmallow Cookies", "Peanut Butter Star Cookies", "Sugar Cookies", "Santa's Whiskers", "Cranberry Cookies with Browned Butter Glaze"], ["Fudge", "Round Pretzels with Hugs and M&M's", "Round Pretzels with Rolos and Pecans", "Bailey's Truffles", "Toffee"], ["Spinach and Kale Roll-Ups", "Baked Brie with Crostini and Fruit", "Hummus and Pita Chips", "Toffee Party Mix", "Buffalo Chicken Dip", "Bacon-Wrapped Sweet Potatoes", "Hoffmans' Cracker Mix", "Baked Brie with Crostini and Fruit", "Hummus and Pita Chips", "Toffee Party Mix", "Buffalo Chicken Dip", "Bacon-Wrapped Sweet Potatoes", "Hoffmans' Cracker Mix"]]
  };
  var foodLists = ["#cookiesList", "#candiesList", "#appsList"];

  function createLists(arr, id) {
    for (var i = 0; i < arr.length; i++) {
      $(id).append("<li>" + arr[i] + "</li>");
    }
  }

  for (var i = 0; i < yearsObj[year].length; i++) {
    createLists(yearsObj[year][i], foodLists[i]);
  } //toggle display of list and associated styling


  var foodCategories = document.querySelectorAll(".foodType");
  foodCategories.forEach(function (category) {
    category.addEventListener("click", function () {
      this.nextElementSibling.classList.toggle("hide");
    });
  }); //add styling to current link

  var yearLinks = document.querySelectorAll("footer a");

  for (var _i = 0; _i < yearLinks.length; _i++) {
    if (yearLinks[_i].getAttribute("href") == "#") {
      yearLinks[_i].classList.add("current");
    }
  }

  if (document.title == "Baking Day Tracker") {
    var addFood = document.getElementById("addFood");
    var form = document.getElementById("form");
    var submitBtn = document.getElementById("submitBtn"); //show form on button click

    addFood.addEventListener("click", function () {
      form.classList.toggle("hide");
      form.classList.toggle("formContainer");
    });
    submitBtn.addEventListener("click", function () {
      //prevent form from submitting
      event.preventDefault();
      var catChecked = $("input[name=categoryChoice]:checked").val();
      var foodName = document.getElementById("foodName").value;
      var foodNameWords = foodName.split(" ");
      var capitalizedFoodName = "";
      var idxObj = {
        "cookies": 0,
        "candies": 1,
        "appetizers": 2
      }; //capitalize first letter of each word

      foodNameWords.forEach(function (word) {
        capitalizedFoodName += word.charAt(0).toUpperCase() + word.slice(1) + " ";
      }); //check that form has been filled out

      if (catChecked && foodName != "") {
        //add entry to array and list
        yearsObj[year][idxObj[catChecked]].push(capitalizedFoodName);
        $(foodLists[idxObj[catChecked]]).append("<li>" + yearsObj[year][idxObj[catChecked]][yearsObj[year][idxObj[catChecked]].length - 1] + "</li>"); //clear form

        $("input[name=categoryChoice]").prop("checked", false);
        document.getElementById("foodName").value = ""; //hide form

        form.classList.toggle("hide");
        form.classList.toggle("formContainer");
      } else {
        alert("Please select a category and enter the food name.");
      }
    });
  }
});
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "32827" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.map