
function init(x) {
  window.canvas = new Canvas("canvas");
  canvas.initPlanets(x ? x : 10);
  canvas.clear();
  canvas.drawPlanets();
}
