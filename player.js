class Player {
  constructor() {
    this._accel = new Vector(0, 0);
    this._vel = new Vector(0, 0);
    this._pos = new Vector(-400, 0);
    this._gravity = new Vector(0, 0);
  }

  get mass() {
    return 531000;
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

  get gravity() {
    return this._gravity;
  }

  set gravity(vector) {
    this._gravity = vector;
  }

  playerMovement(delta, events) {
    if (events.left == true) {
      this.acceleration.add(new Vector(-0.00804672, 0));
    }
    if (events.right == true) {
      this.acceleration.add(new Vector(0.00804672, 0));
    }
    if (events.up == true) {
      this.acceleration.add(new Vector(0, 0.00804672));
    }
    if (events.down == true) {
      this.acceleration.add(new Vector(0, -0.00804672));
    }
    this.velocity.add(this.acceleration.copy.multi(delta));
    this.velocity.add(this.gravity.copy.multi(delta));
    this.position.add(this.velocity.copy.multi(delta));
  }
}