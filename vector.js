class Vector {
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  get magnitude () {
    let signx = this.x/Math.abs(this.x);
    let signy = this.y/Math.abs(this.y);
    let ang = isNaN(Math.atan(this.y / this.x)) ? 0 : Math.atan(this.y / this.x);
    // UP = 0 RIGHT = pi/2 DOWN = pi LEFT = 3/2pi
    return {
      theta: ang,
      value: Math.sqrt(Math.pow(this.y, 2) + Math.pow(this.x, 2))
    }
  }

  add(other){
    this.x += other.x;
    this.y += other.y;
  }

  multi(amnt){
    let newHyp  = this.magnitude.value * amnt;
    this.x = Math.cos(this.magnitude.theta) * newHyp;
    this.y = Math.cos(this.magnitude.theta) * newHyp;
  }
}
