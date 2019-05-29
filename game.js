let Game = new class Game {
  init() {
    this.speedUp = 1;
    this.canvas = new Canvas("canvas");
    this.event = new Event();
    this.player = new Player();
    this.initPlanets(10);
    this.gravity = new Gravity(this.planets, this.player);

    this.lastUpdate = Date.now();
    this.gameLoop();
    window.addEventListener("keydown", this.event.keyDown.bind(this.event));
    window.addEventListener("keyup", this.event.keyUp.bind(this.event));
  }

  initPlanets(amnt) {
    this.planets = [];
    for (let i = 0; i < amnt; i++) {
      let gen;
      do {
        gen = new Planet({
          min: 35,
          max: 45
        }, {
          min: this.canvas.width * 0.05 + 45 - this.canvas.width / 2,
          max: this.canvas.width * 0.95 - 45 - this.canvas.width / 2
        }, {
          min: this.canvas.height * 0.05 + 45 - this.canvas.height / 2,
          max: this.canvas.height * 0.95 - 45 - this.canvas.height / 2
        });
      } while (this.planets.filter((elem) => {
          return elem.collide(gen, 65);
        }).length > 0);
      this.planets.push(gen);
    }
    return this.planets;
  }

  gameLoop() {
    let delta = (Date.now() - this.lastUpdate) / 1000 * this.speedUp;
    this.lastUpdate = Date.now();
    this.canvas.clear();
    this.canvas.drawPlanets(this.planets);
    this.canvas.drawPlayer(this.player);
    this.canvas.drawCenter(this.gravity.centerOfMass);
    this.gravity.updateSystem(this.planets, this.player);
    for (let i = 0; i < this.planets.length; i++) {
      this.canvas.drawAccel(this.planets[i]);
      this.planets[i].acceleration = this.gravity.accelerationOf(this.planets[i]);
      this.planets[i].update(delta);
    }
    this.player.gravity = this.gravity.accelerationOf(this.player);
    this.player.playerMovement(delta, this.event);
    requestAnimationFrame(this.gameLoop.bind(this));
  }
}();