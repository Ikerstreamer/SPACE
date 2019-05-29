class Gravity {
  constructor(planets, player) {
    this.updateSystem(planets, player);
  }

  updateSystem(planets, player) {
    this.system = Array.from(planets);
    this.player = player;
  }

  get systemMass() {
    return this.system.reduce((acc, elem) => {
      return acc + elem.mass;
    }, this.player.mass);
  }

  get centerOfMass() {
    let center = this.player.position.copy.multi(this.player.mass / this.systemMass);
    for (let i = 0; i < this.system.length; i++) {
      center.add(this.system[i].position.copy.multi(this.system[i].mass / this.systemMass));
    }
    return center;
  }

  modifyCenterOfMass(planet) {
    return this.centerOfMass.copy.sub(planet.position.copy.multi(planet.mass / this.systemMass)).divide(1 - planet.mass / this.systemMass);
  }

  accelerationOf(planet) {
    let numerator = (this.systemMass - planet.mass) * 6.673e-11;
    let dist = this.modifyCenterOfMass(planet).sub(planet.position);
    let oldHyp = dist.magnitude.value;
    let newHyp = numerator / Math.pow(dist.magnitude.value * 1e6, 2) * 1e6;
    let accel = new Vector(dist.x * newHyp / oldHyp, dist.y * newHyp / oldHyp);
    return accel;
  }
}