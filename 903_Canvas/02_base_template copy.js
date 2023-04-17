window.onload = function () {
    let e = document.getElementById("support-canvas");

    // Creating an element and checking the properties of the resulting object

    function supports_canvas() {
      return !!document.createElement("canvas").getContext;
    }

    if (supports_canvas()) {
      e.innerHTML = "Your browser supports the Canvas element";
    } else {
      return (e.innerHTML =
        "Your browser does NOT support the Canvas element");
    }

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var context2 = canvas.getContext("2d");

    context.font = "38px Arial";

    // fillText
    context.fillStyle = "white";
    context.fillText(
      "Canvas",
      canvas.width / 2,
      canvas.height / 2 + 15
  );

  context.fillStyle = "red";
  context2.fillText(
    "Canvas 2",
    canvas.width / 2,
    canvas.height
  );
  
    // strokeText
    context.strokeStyle = "blue";
    context.strokeText(
      "Canvas",
      canvas.width / 2 - 150,
      canvas.height / 2 + 15
    );
  };