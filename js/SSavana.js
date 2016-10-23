class SSavana {

  constructor (stage, pType, pRes, pResRegen, pColor) {
    this.type           = pType;
    this.resources      = pRes;
    this.resourcesRejen = pResRegen;
    this.color          = pColor;
    this.dayTicker      = stage.on("dayTick", this.update, this); // subscribe to 1Hz tick
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
