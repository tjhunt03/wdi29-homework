
let $cat = $('#catty');  //find element #catty
let catDirection ='right';

const catWalkRight = function(){
  if(catDirection==='right'){
    let oldLeft = parseInt( $cat.css('left') );   //change value to number
    let newLeft = oldLeft+10; //add 10 to oldLeft value
    $cat.css('left', newLeft);

    if (oldLeft>window.innerWidth*0.9){   //if end of page
      catDirection='left';
      $cat.addClass('flipped');   //flip image
    }
  }else{      //catDirection is going left
    let oldLeft = parseInt( $cat.css('left') );   
    let newLeft  = oldLeft-10;
    $cat.css('left', newLeft);

    if (oldLeft<0){
      catDirection='right'
      $cat.removeClass('flipped');
    };
  };
}//end catWalk function



setInterval(catWalkRight, 50);
