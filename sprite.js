//Creates the class for the stationary sprite
class Sprite {
  constructor(animation, x, y, speed) {
    this.x = x;
    this.y = y;
    this.animation = animation;
    this.w = this.animation[0].width;
    this.h = this.animation[0].height;
    this.len = this.animation.length;
    this.speed = speed;
    this.index = 0;
  }

  
  show() {
    let index = floor(this.index) % this.len;
    image(this.animation[index], this.x, this.y);
  }

  animate() {
    this.index += this.speed;
  }
  
  moveUp() {
    this.index += this.speed;
    this.y -= this.speed * 15;
  }
  
  moveRight() {
    this.index += this.speed;
    this.x += this.speed * 15;

    if (this.x > width) {
      this.x = -this.w;
    }
  }
  
  moveDown() {
    this.index += this.speed;
    this.y += this.speed * 15;

    if (this.y > height) {
      this.y = -this.len;
    }
  }
  
  moveLeft() {
    this.index += this.speed;
    this.x -= this.speed * 15;
  }
}
