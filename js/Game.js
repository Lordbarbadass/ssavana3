class Game {

  constructor ()  {
    this.stage = new createjs.Stage("ssavana");
    this.fps = new createjs.Text("- FPS", "20px Verdana", "#000");

    this.stage.addChild(this.fps.set({
      x:10, y:10,
      frames: 0,
      delta: 0
    }));

    createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", this.update, this);
  }

  update (e) {
    this.fps.frames ++;
    if ((this.fps.delta += e.delta) >= 1000) {
      this.fps.set({
        text: this.fps.frames + " FPS",
        delta: 0,
        frames: 0
      });
    }

    this.stage.update();
  }

}
