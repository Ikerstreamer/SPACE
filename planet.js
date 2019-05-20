class Planet {
  constructor(radiusRange, xRange, yRange) {
    this._radius = radiusRange.min + Math.random() * (radiusRange.max - radiusRange.min);
    this._mass = (Math.random() + 1) * 5e21 / (4 / 3 * Math.PI * Math.pow(this.radius, 3));
    this._pos = {
      x: xRange.min + Math.random() * xRange.max - xRange.min,
      y: yRange.min + Math.random() * yRange.max - yRange.min
    }
    this._vel = {
      x: 0,
      y: 0
    }
    this._accel = {
      x: 0,
      y: 0
    }
  }

  get position() {
    return this._pos;
  }

  get velocity () {
    return this._vel;
  }

  get acceleration(){
    return this._accel;
  }

  get mass() {
    return this._mass;
  }

  get volume() {
    return 4 / 3 * Math.PI * Math.pow(this._radius, 3);
  }

  get radius() {
    return  this._radius;
  }


}
