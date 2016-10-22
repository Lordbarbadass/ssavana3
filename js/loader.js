var queue = new createjs.LoadQueue();
queue.on("complete", handleComplete, this);
$.getJSON("php/getAllScripts.php", function (data) {
  var manifest = [];
  for (scrpt of data) {
    manifest.push({
      id: scrpt, src: "js/" + scrpt
    });
  }
  queue.loadManifest(manifest);
});

 function handleComplete() {
     console.log("Loading complete");
     game = new Game();
 }

var game;
