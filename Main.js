const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const url = "32x32.bmp";
const manager = new ResourceManager(init, updateLoading);

let ctr = 0;

loadingScreen(0);

manager.addImage(url);
manager.addImage("http://i.imgur.com/kSkAj5y.jpg?A");
manager.addImage("http://i.imgur.com/kSkAj5y.jpg?B");
manager.addImage("http://i.imgur.com/kSkAj5y.jpg?C");
manager.addImage("http://i.imgur.com/kSkAj5y.jpg?D");
manager.addImage("http://i.imgur.com/kSkAj5y.jpg?E");
manager.addImage("http://i.imgur.com/kSkAj5y.jpg?A1");
manager.addImage("http://i.imgur.com/kSkAj5y.jpg?B2");
manager.addImage("http://i.imgur.com/kSkAj5y.jpg?C3");
manager.addImage("http://i.imgur.com/kSkAj5y.jpg?4");
manager.addImage("http://i.imgur.com/kSkAj5y.jpg?E42");

function init() {
  const sprite = new Sprite(manager.getImage(url), canvas, 0, 19 * 32, 32, 32,
    32, 32, 64, 64, 16, 1, 0);

  setInterval(() => {
    ctr++;
    if (ctr >= 10) {
      sprite.frame++; //
      ctr = 0;
    }

    cls();
    sprite.render();
  }, 10);
}

function updateLoading(percentage) {
  loadingScreen(percentage);
}
