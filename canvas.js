class Canvas {
  constructor(id) {
    this._elem = document.getElementById(id);
    this._canvas = this._elem.getContext('2d');
    this.height = this._elem.height;
    this.width = this._elem.width;
  }

  clear() {
    this._canvas.clearRect(0, 0, this.width, this.height);
  }

  canvasPos(pos) {
    return pos.copy.inverseY().add(new Vector(this.width / 2, this.height / 2))
  }

  drawPlanets(planets) {
    let colors = ["#2E86C1", "#CD53FD", "#F6FD00", "#6E031F", "#036E2D", "#55A28B"]
    for (let i = 0; i < planets.length; i++) {
      let planet = planets[i];
      this._canvas.beginPath();
      this._canvas.strokeStyle = "#000000";
      this._canvas.lineWidth = 1;
      this._canvas.arc(this.canvasPos(planet.position).x, this.canvasPos(planet.position).y, planet.radius, 0, 2 * Math.PI);
      this._canvas.stroke();
      this._canvas.fillStyle = colors[planet.id - 1];
      this._canvas.fill();
    }
  }

  drawPlayer(player) {
    this._canvas.lineWidth = 1;
    this._canvas.fillStyle = "#c0c0c0";
    this._canvas.fillRect(this.canvasPos(player.position).x - 5, this.canvasPos(player.position).y - 5, 10, 10);
  }
  // drawPlanets(planets) {
  //   for (let i = 0; i < planets.length; i++) {
  //     let planet = planets[i];
  //     let elem = document.createElement("img");
  //     elem.src = "planets/" + planet.id + ".png";
  //     console.log(elem);
  //     this._canvas.drawImage(elem, this.canvasPos(planet).x, this.canvasPos(planet).y, planets.radius, planet.radius);
  //   }
  // }

  drawAccel(planet) {
    this._canvas.beginPath();
    this._canvas.lineWidth = 2;
    this._canvas.strokeStyle = "#FF0000";
    let startPos = this.canvasPos(planet.position);
    let endPos = this.canvasPos(planet.position.copy.add(planet.acceleration.copy.multi(1e6)));
    this._canvas.moveTo(startPos.x, startPos.y);
    this._canvas.lineTo(endPos.x, endPos.y);
    this._canvas.arc(endPos.x, endPos.y, 2, 0, 2 * Math.PI);
    this._canvas.stroke();
    this._canvas.fillStyle = "#FF0000";
    this._canvas.fill();
  }

  drawCenter(pos) {
    this._canvas.beginPath();
    this._canvas.strokeStyle = "#000000";
    this._canvas.arc(this.canvasPos(pos).x, this.canvasPos(pos).y, 1, 0, 2 * Math.PI);
    this._canvas.stroke();
    this._canvas.fillStyle = "#000000";
    this._canvas.fill();
  }

}