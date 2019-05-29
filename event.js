class Event {
  constructor() {
    this.left = false;
    this.right = false;
    this.up = false;
    this.down = false;
  }

  keyDown(event) {
    if (event.keyCode === 37) {
      this.left = true;
    }
    if (event.keyCode === 38) {
      this.up = true;
    }
    if (event.keyCode === 39) {
      this.right = true;
    }
    if (event.keyCode === 40) {
      this.down = true;
    }
  }

  keyUp(event) {
    if (event.keyCode === 37) {
      this.left = false;
    }
    if (event.keyCode === 38) {
      this.up = false;
    }
    if (event.keyCode === 39) {
      this.right = false;
    }
    if (event.keyCode === 40) {
      this.down = false;
    }
  }

}