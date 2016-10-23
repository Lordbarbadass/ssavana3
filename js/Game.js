class Game extends createjs.Stage {

  constructor (id)  {
    super(id);
    this.fps           = new createjs.Text("- FPS", "20px Verdana", "#000");
    this.events        = { // events list
      "gameTick":{
        "event": new createjs.Event("gameTick"),
        "delta": 0,
        "period": 50
      },
      "dayTick":{
        "event": new createjs.Event("dayTick"),
        "delta": 0,
        "period": 1000
      }
    };

    this.addChild(this.fps.set({
      x:10, y:10,
      frames: 0,
      delta: 0
    }));

    var graph = new createjs.Graphics().f("#999").dc(0,0,10);
    var animal = new Animal(this, graph);
    animal.set({x:100, y:100});
    var land = new SSavana(this, "ssavana", {grass:10}, {grass:0.02}, "beige");

    // initialise and subscribe to the clock
    createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", this.update, this);
  }

  update (e) {
    // FPS meter
    this.fps.frames ++;
    if ((this.fps.delta += e.delta) >= 1000) {
      this.fps.set({
        text: this.fps.frames + " FPS",
        delta: 0, frames: 0
      });
    }

    // Event checking and dispatching
    for (var event in this.events) {
      if ((this.events[event].delta += e.delta) >= this.events[event].period) {
        this.dispatchEvent(this.events[event].event);
        this.events[event].delta -= this.events[event].period;
      }
    }

    super.update(); // update graphics
  }

}
