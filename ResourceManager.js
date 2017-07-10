class ResourceManager {
  constructor(init, update) {
    this.init = init;
    this.update = update;
    this.resourceCache = {};
    this.total = 0;
    this.loaded = 0;


  }

  addImage(url) {
    this.resourceCache[url] = false;
    let image = new Image();
    this.total++;
    this.loaded = 0;

    image.onload = () => {
      this.loaded++;

      this.update(this.loaded / this.total);
      this.resourceCache[url] = image;
      if (this.isReady()) {
        this.init();
      }
    };
    image.src = url;

  }


  isReady() {
    let allLoaded = true;

    for (let url in this.resourceCache) {
      if (this.resourceCache.hasOwnProperty(url) && !this.resourceCache[url]) {
        allLoaded = false;

      }
    }
    return allLoaded;

  }

  getImage(url) {
    return this.resourceCache[url];
  }

}
