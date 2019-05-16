class Planet {
  constructor(radiusRange, xRange, yRange) {
    this.radius = radiusRange.min + (Math.random() * (radiusRange.max - radiusRange.min);
    this.mass = (Math.random() + 1) * 5e21 / (4 / 3 * Math.PI * Math.pow(this.radius, 3));
  }
}
