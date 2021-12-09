function myFunction() {
    var x = document.getElementById("nav_div");
    if (x.className === "nav_div") {
      x.className += " responsive";
    } else {
      x.className = "nav_div";
    }
  }