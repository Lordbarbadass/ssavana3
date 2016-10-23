class Animal extends createjs.Shape {

  constructor (stage, graphics) {
    super(graphics);
    this.ssavana         = stage;
    this.updateTicker    = stage.on("gameTick", this.update, this); // subscribe to the 20Hz ticking

    this.ssavana.addChild(this); // display the animal
  }

  update (e) {
    this.x += Math.random() * 2 - 1;
    this.y += Math.random() * 2 - 1;
  }

  destroy () {
    // remove and unsubscribe from everything
    this.ssavana.removeChild(this);
    stage.off(this.updateTicker);
  }

}
