class Game {

  constructor ()  {
    this.stage = new createjs.Stage("ssavana");
    this.fps = {
      txt: new createjs.Text("0 FPS", "20px Verdana", "#000"),
      frames: 0,
      delta: 0
    };

    this.stage.addChild(this.fps.txt.set({x:10, y:10}));

    createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", this.update, this);
  }

  update (e) {
    this.fps.frames ++;
    if ((this.fps.delta += e.delta) >= 1000) {
      this.fps.txt.text = this.fps.frames + " FPS";
      this.fps.delta = 0;
      this.fps.frames = 0;
    }

    this.stage.update();
  }

}
