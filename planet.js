class Planet {
  constructor(radiusRange, xRange, yRange, moreMass) {
    this._radius = radiusRange.min + Math.random() * (radiusRange.max - radiusRange.min);
    this._mass = (Math.random() + 1) * 5e21 / (4 / 3 * Math.PI * Math.pow(this.radius, 3)) * (moreMass === undefined ? 1 : moreMass);
    this._pos = new Vector(xRange.min + Math.random() * (xRange.max - xRange.min), yRange.min + Math.random() * (yRange.max - yRange.min));
    this._vel = new Vector(0, 0);
    this._accel = new Vector(0, 0);
    this._id = 1 + Math.floor(Math.random() * 5);
  }

  get position() {
    return this._pos;
  }

  get velocity() {
    return this._vel;
  }

  get acceleration() {
    return this._accel;
  }

  get mass() {
    return this._mass;
  }

  get volume() {
    return 4 / 3 * Math.PI * Math.pow(this._radius, 3);
  }

  get radius() {
    return this._radius;
  }

  get id() {
    return this._id;
  }

  set acceleration(vector) {
    this._accel = vector;
  }

  update(delta) {
    this.position.add(this.velocity.add(this.acceleration.copy.multi(delta)).copy.multi(delta));
  }

  collide(other, dist) {
    return this.position.copy.sub(other.position).magnitude.value < this.radius + other.radius + dist;
  }
}