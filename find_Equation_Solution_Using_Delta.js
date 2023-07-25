function f(a, b, c) {
    var x = x;
    //   var result = a * x ** 2 + b * x + c;
    var delta = b ** 2 - 4 * a * c;
    var sqrtDelta = Math.sqrt(delta);
    var numerator1 = -b - sqrtDelta;
    var numerator2 = -b + sqrtDelta;
    var denumerator = 2 * a;
    var doubleRootLaw = b / (2 * a);
    console.log("Equation :   " + a + "x^2" + b + "x" + c);
    console.log("Solution : ");
    console.log("a = " + a);
    console.log("b = " + b);
    console.log("c = " + c);
    console.log("--------------");
    function showLaw() {
      console.log("delta = b^2 - 4ac = ");
      console.log("      = " + delta);
      if (delta !== 0) {
        console.log("=> sqrt of delta = " + sqrtDelta);
        console.log("--------------");
      }
    }
  
    if (delta > 0) {
      showLaw();
      console.log("");
      console.log("delta is positive");
      console.log("=> An equation has 2 different roots");
      console.log("--------------");
      console.log("x1 = -b - sqrt(delta) / 2a");
      console.log("   = " + numerator1 / denumerator);
      console.log("x2 = -b + sqrt(delta) / 2a");
      console.log("   = " + numerator2 / denumerator);
    } else if (delta < 0) {
      showLaw();
      console.log("--------------");
      console.log("delta is negative");
      console.log("=> An eqaution has no solution (Is imposible to solve!)");
      console.log("--------------");
    } else {
      showLaw();
      console.log("--------------");
      console.log("delta is equal to 0");
      console.log("=> An equation has 2 real equal roots (Double root)");
  
      console.log("--------------");
      console.log("Then we use the law : x1 = x2 = b / 2a");
      console.log("                         =" + doubleRootLaw);
    }
    console.log("===========================================");
  }
  // some tests:
  f(1, -4, 4); // delta = 0, double root x1 =x2
  f(3, 5, 2); // delta > 0, two different roots
  f(12, 5, -2); // delta > 0, two different roots
  f(1, -4, 6); // delta > 0, two different roots
  