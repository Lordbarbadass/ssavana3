class Animal extends createjs.Shape {

  constructor (stage, graphics) {
    super(graphics);
    this.ssavana         = stage;
    this.updateTicker    = stage.on("gameTick", this.update, this); // subscribe to the 20Hz ticking
    this.speed           = 50;
    this.target          = {x:null, y:null};

    this.ssavana.addChild(this); // display the animal
    this.ssavana.on("click", function (e) {
      this.target = {
        x: e.stageX, y: e.stageY
      };
    }, this);
  }

  update (e) {
    var move = {x:0, y:0};
    var factor = (this.speed * (this.ssavana.events.gameTick.period / 1000));
    if (this.target.x != null) {
      move.x = (this.target.x - this.x);
      move.y = (this.target.y - this.y);
      var l = Math.sqrt(move.x*move.x + move.y*move.y);
      this.x += ((move.x / l) * factor);
      this.y += ((move.y / l) * factor);
      if (l <= factor) this.target = {x:null, y:null};
    }
  }

  destroy () {
    // remove and unsubscribe from everything
    this.ssavana.removeChild(this);
    stage.off(this.updateTicker);
  }

}
