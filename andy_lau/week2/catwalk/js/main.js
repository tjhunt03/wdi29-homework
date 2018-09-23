// const cat = $('img');
let newLeft = 0;
let flip = false;
let idClear;

const catWalk = function () {

  if (!flip) {
    newLeft = newLeft + 1;
    $('.cat').css("left", `${newLeft}%`);
    if (newLeft >= 100 && flip === false) {
      $('.cat').css("transform", "scaleX(-1)");
      flip = true;
    }
    if (newLeft === 50) { // do something at 50% width
      clearInterval(idClear);
      $('.cat').attr("src", "images/blingcat.jpg");
      setTimeout(anim, 4000); //different ID when anim is called.
      //   let $glass = $('<img></img>');
      //   $glass.addClass('glasses');
      //   $('body').append($glass);
      //   setTimeout($('.glasses').remove(), 4000);
    }
  }

  if (flip) {
  newLeft = newLeft - 1;
  $('.cat').css("left", `${newLeft}%`);
    if (newLeft < 0 && flip === true) {
    $('.cat').css("transform", "scaleX(1)")
    flip = false;
    }

    if (newLeft === 50) { // do something at 50% width
      clearInterval(idClear);
      $('.cat').attr("src", "images/blingcat.jpg");
      setTimeout(anim, 4000); //different ID when anim is called.
    }

  }
};

const anim = function () {
  idClear = setInterval(catWalk, 50);
  $('.cat').attr("src", "http://www.anniemation.com/clip_art/images/cat-walk.gif");
  $('.cat').css({width: 280, height: 280});
};

anim();

// const glassAnim = function () {
//   document.querySelector('img.glassesHidden').className = "glassesShow";
// };

// setInterval(catWalk, 50)




// $('cat').css("left", "0px");
// let returnWidth = window.innerWi


// using DOM %%%%%%%%%%
// const cat = document.querySelector("img");
// cat.style.left = '0px';
// let returnWidth = window.innerWidth -296;
// // let idClearright;
// let oldLeft = 0;
// let newLeft;
//
//
// const  catWalk = function(){
//   oldLeft = parseInt(cat.style.left);
//   newLeft = oldLeft + 10;
//   cat.style.left = newLeft + 'px';
// }
//   if(parseInt(cat.style.left) >= returnWidth){
//     cat.style.transform = "scaleX(-1)";
//     animateright = setInterval(walkBack,50);
//     clearInterval(animate);
//   }
//
// };
//
// const walkBack = function() {
//     newLeft = newLeft - 10;
//     cat.style.left = newLeft + 'px';
//       if(parseInt(cat.style.left) === 0){
//         cat.style.transform = "scaleX(1)";
//         animate = setInterval(catWalk, 50);
//         clearInterval(animateright);
//       }
// }
// let animate = setInterval(catWalk, 50);
