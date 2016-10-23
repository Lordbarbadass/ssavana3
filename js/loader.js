var queue = new createjs.LoadQueue();
queue.on("complete", handleComplete, this);
queue.on("fileload", handleLoad, this);
// $.getJSON("php/getAllScripts.php", function (data) {
//   var manifest = [];
//   for (scrpt of data) {
//     manifest.push({
//       id: scrpt, src: "js/" + scrpt
//     });
//   }
//   queue.loadManifest(manifest);
// });
queue.loadManifest([
  { id:"Game", src:"js/Game.js" },
  { id:"Animal", src:"js/Animal.js" },
  { id:"SSavana", src:"js/SSavana.js" },
  { id:"Grass", src:"js/Grass.js" }
]);

function handleComplete() {
  console.log("Loading complete");
  game = new Game("ssavana");
}

function handleLoad(e) {
  console.log("Loaded : " + e.item.id);
}

var game;
