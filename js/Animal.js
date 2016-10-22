class Animal extends createjs.Shape {

  constructor (graphics) {
    super(graphics);

    this.updateTicker    = createjs.Ticker.on("tick", this.update, this);

    game.stage.addChild(this);
  }

  update (e) {
    this.x += Math.random() * 2 - 1;
    this.y += Math.random() * 2 - 1;
  }

  destroy () {
    game.removeChild(this);
    createjs.Ticker.off(this.updateTicker);
  }

}
