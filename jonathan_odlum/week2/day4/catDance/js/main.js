const Tuple = function(x, y){
  this.x = x;
  this.y = y;
};
Tuple.prototype.setXY = function(x,y){
  this.x = x;
  this.y = y;
};
Tuple.prototype.move = function (xOffset, yOffset) {
  this.coOrds.x += xOffset;
  this.coOrds.y += yOffset;
};
Tuple.prototype.getDistance = function (coOrds) {
  const a = coOrds.x - this.x;
  const b = coOrds.y - this.y;
  const c = Math.sqrt(a**2 + b**2);
}
Tuple.prototype.getVector = function (coOrds) {
  vecX = coOrds.x - this.x;
  vecY = coOrds.y - this.y;
  let vector = new Tuple(vecX, vecY);
  return vector;
};


const screenWidth = parseInt(window.innerWidth);
const screenHeight = parseInt(window.innerHeight);
let mousePos = new Tuple(0,0);
onmousemove = function(e){
  mousePos.setXY(e.clientX, e.clientY);
}

const Cat = function(x,y){
  this.catPos = new Tuple(x,y);
  this.img = $('<img>').attr('src', 'images/kitty-1.png');
  this.img.css({
    position: 'absolute',
    height: 'auto',
    width: '75px',
  });
  const offsetX = parseInt(this.img.css('width'))/2;
  const offsetY = parseInt(this.img.css('height'))/2;
  const positionX = Math.floor(this.catPos.x - offsetX);
  const positionY = Math.floor(this.catPos.y - offsetY);
  this.img.css({
    top: `${positionY}px`,
    left: `${positionX}px`,
  })
}
Cat.prototype.moveTo = function(tuple){
  const currentX = this.catPos.x;
  const currentY = this.catPos.y;
  const speed = this.catPos.getVector(tuple);
  const movementX = speed.x/100;
  const movementY =  speed.y/100;
  this.catPos.x = currentX + movementX;
  this.catPos.y = currentY + movementY;
  this.img.css({
    top: `${this.catPos.y}px`,
    left: `${this.catPos.x}px`,
  })
}


let test = new Cat(250,250);
$('body').append(test.img);



const mainLoop = function(){
  test.moveTo(mousePos);
}
let run = setInterval(mainLoop, 5);



// document.addEventListener(mousemove)

// setInterval(update, 1);
