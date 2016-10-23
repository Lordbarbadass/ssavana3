class Animal extends createjs.Shape {

  constructor (stage, graphics) {
    super(graphics);
    this.ssavana         = stage;
    this.updateTicker    = stage.on("gameTick", this.update, this);

    this.ssavana.addChild(this);
  }

  update (e) {
    this.x += Math.random() * 2 - 1;
    this.y += Math.random() * 2 - 1;
  }

  destroy () {
    this.ssavana.removeChild(this);
    stage.off(this.updateTicker);
  }

}
