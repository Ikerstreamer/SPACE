class Canvas {
  constructor(id) {
    this.elem    = document.getElementById(id);
    this.canvas  = this.elem.getContext('2d');
    this.height  = this.elem.height;
    this.width   = this.elem.width;
    this.planets = [];
  }

  // 1px = 1 Mm
  generateInitialObjects(amnt) {
    this.objects = [];

    for(let i = 0; i < amnt; i++){
      let newObj = {
      Mass = Math.max(60 * Math.random(), 1) * 10;

      this.objects.push()
    }
  }

}
