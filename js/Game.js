class Game extends createjs.Stage {

  constructor (id)  {
    super(id);
    this.fps           = new createjs.Text("- FPS", "20px Verdana", "#000");
    this.gameTickEvent = {
      "event": new createjs.Event("gameTick"),
      "delta": 0
    };

    this.addChild(this.fps.set({
      x:10, y:10,
      frames: 0,
      delta: 0
    }));

    var graph = new createjs.Graphics().f("#999").dc(0,0,10);
    var animal = new Animal(this, graph);
    animal.set({x:100, y:100});

    createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", this.update, this);
  }

  update (e) {
    this.fps.frames ++;
    if ((this.fps.delta += e.delta) >= 1000) {
      this.fps.set({
        text: this.fps.frames + " FPS",
        delta: 0, frames: 0
      });
    }

    if ((this.gameTickEvent.delta += e.delta) >= 50) {
      this.dispatchEvent(this.gameTickEvent.event);
      this.gameTickEvent.delta = 0;
    }

    super.update();
  }

}
