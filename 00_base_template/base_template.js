window.onload = function () {
    let e = document.getElementById("support-canvas");

    // Creating an element and checking the properties of the resulting object

    function supports_canvas() {
      return !!document.createElement("canvas").getContext;
  }
  
  // support the Canvas element

    if (supports_canvas()) {
      e.innerHTML = "Your browser supports the Canvas element";
    } else {
      return (e.innerHTML =
        "Your browser does NOT support the Canvas element");
    }

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var context2 = canvas.getContext("2d");
  };