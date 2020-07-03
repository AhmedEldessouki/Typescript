//interfaces always strat with a capital letter (cant use Algorithms with)
// interface Point {
//   x: number;
//   y: number;
// }
// can use algorithms with classes -- Cohesion
var Point = /** @class */ (function () {
    function Point() {
    }
    //metha
    Point.prototype.draw = function () {
        //tsc main.ts| node main.js
        console.log("x: " + this.x + " y: " + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //logic
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
