//interfaces always strat with a capital letter (cant use Algorithms with)
// interface Point {
//   x: number;
//   y: number;
// }
// can use algorithms with classes -- Cohesion
class Point {
  //fields
  x: number;
  y: number;
  //metha
  draw() {
    //tsc main.ts| node main.js
    console.log("x: " + this.x + " y: " + this.y);
  }

  getDistance(another: Point) {
    //logic
  }
}

let point = new Point();
point.x = 1;
point.y = 2;
point.draw();
