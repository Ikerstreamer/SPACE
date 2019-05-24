class Canvas {
  constructor(id) {
    this._elem    = document.getElementById(id);
    this._canvas  = this._elem.getContext('2d');
    this._height  = this._elem.height;
    this._width   = this._elem.width;
    this._planets = [];
  }

  // 1px = 1 Mm
  initPlanets(amnt) {
    this._planets = [];
    for(let i = 0; i < amnt; i++){
      let gen;
      // do {
      gen = new Planet({
        min: 35,
        max: 45
      },{
        min: this._width * 0.075,
        max: this._width * 0.925
      },{
        min: this._height * 0.075,
        max: this._height * 0.925
      }
    );
  // } while (this._planets.filter((elem) => {
  //   return elem.position.x + elem.radius > gen.position.x - gen.radius && elem.position.y + elem.radius > gen.position.y - gen.radius
  //   ||     elem.position.x + elem.radius > gen.position.x - gen.radius && elem.position.y - elem.radius < gen.position.y + gen.radius
  //   ||     elem.position.x - elem.radius < gen.position.x + gen.radius && elem.position.y + elem.radius > gen.position.y - gen.radius
  //   ||     elem.position.x - elem.radius < gen.position.x + gen.radius && elem.position.y - elem.radius < gen.position.y + gen.radius
  // }).length === 0)
  let genMinx = gen.position

  this._planets.filter((elem) => {

        let miny = elem.position.y - elem.radius;
        let maxy = elem.position.y + elem.radius;
        let minx = elem.position.x - elem.radius;
        let maxx = elem.position.x + elem.radius;
        console.log(gen, minx, maxx, miny, maxy);
        return miny
      })
      this._planets.push(gen);
    }
    return this._planets;
  }

  clear(){
    this._canvas.clearRect(0, 0, this._width, this._height);
  }

  drawPlanets() {
    for(let i = 0; i < this._planets.length; i++){
      let planet = this._planets[i];
      this._canvas.beginPath();
      this._canvas.arc(planet.position.x, planet.position.y, planet.radius, 0, 2 * Math.PI);
      this._canvas.stroke();
    }
  }

}
