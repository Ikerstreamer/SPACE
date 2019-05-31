class Vector {
  //constructor for the Vector class
  constructor(x, y) {
    this.x = x || 0;
    this.y = y || 0;
  }

  //transforms the x and y coordinate to a vector centered at (0,0)+
  get magnitude() {
    let ang = 0;
    if (this.x > 0) {
      ang = Math.PI * 0.5 - Math.atan(this.y / this.x);
    } else if (this.x < 0) {
      ang = Math.PI * 1.5 - Math.atan(this.y / this.x);
    } else if (this.x === 0) {
      ang = this.y > 0 ? 0 : Math.PI;
    }
    // UP = 0 RIGHT = pi/2 DOWN = pi LEFT = 3/2pi
    return {
      theta: ang,
      value: Math.sqrt(Math.pow(this.y, 2) + Math.pow(this.x, 2))
    };
  }
  //returns a new Vector with the same constructor as the current one
  get copy() {
    return new Vector(this.x, this.y);
  }

  //used to transform a magnitude into an x and y coordinate
  set magnitude(newMag) {
    let hyp = newMag.value;
    let thetaX = newMag.thetaX;
    let thetaY = newMag.thetaY;
    this.x = Math.cos(thetaX) * hyp;
    this.y = Math.sin(thetaY) * hyp;
  }

  //adds a Vector to this Vector
  add(other) {
    this.x += other.x;
    this.y += other.y;
    return this;
  }

  //Subtracts a Vector from this Vector
  sub(other) {
    this.x -= other.x;
    this.y -= other.y;
    return this;
  }

  //magnifies the current magnitude of the Vector
  magnify(amnt) {
    let newHyp = this.magnitude.value * amnt;
    this.x = Math.sin(this.magnitude.theta) * newHyp;
    this.y = Math.cos(this.magnitude.theta) * newHyp;
    return this;
  }

  //multiplies the x and y position of the Vector
  multi(amnt) {
    this.x *= amnt;
    this.y *= amnt;
    return this;
  }

  divide(amnt) {
    this.x /= amnt;
    this.y /= amnt;
    return this;
  }

  inverseY() {
    this.y = -this.y;
    return this;
  }
}
