const rect = require("./rectangle");

function CalculateRect(x, y) {
  if (x <= 0 || y <= 0) {
    console.log(
      "Rectangle dimensions should be greater than zero: l = " +
        x +
        ", and b = " +
        y
    );
  } else {
    console.log("The area of the rectangle is: " + rect.area(x, y));
    console.log("The perimeter of the rectangle is: " + rect.parameter(x, y));
  }
}

CalculateRect(2, 4);
CalculateRect(23, 34);
CalculateRect(0, 4);
CalculateRect(2, -4);
