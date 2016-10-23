class SSavana extends createjs.Shape {

  constructor (stage, pType, pRes, pResRegen, pColor) {
    super();
    this.type           = pType;
    this.resources      = pRes;
    this.resourcesRejen = pResRegen;
    this.color          = pColor;
    this.dayTicker      = stage.on("dayTick", this.update, this); // subscribe to 1Hz tick

    var size = stage.terrain.unitSize;
    this.graphics       = new createjs.Graphics().f(this.color).s("#000").r(0,0,size,size);

    this.cache(0,0,size,size);
    stage.addChildAt(this, 0);
  }

  update (e) {
    for (var res in this.resources) {
      this.resources[res] += this.resourcesRejen[res];
    }
  }

  destroy () {
    game.off(this.dayTicker);
  }

}
