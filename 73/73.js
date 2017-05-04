
// function direction(){
var ball = document.getElementById('ball');

// ball.style.animationName='bounce';
// ball.style.left='10px';
setInterval(function(){
    ball.style.animationName='left';
},2000);
setTimeout(function(){
    setInterval(function(){
        ball.style.animationName='right';
        // console.log(ball.style.left);
    },2000);
},1000);
    // if(ball.style.left >= screen.width){
// ball.style.animationName='right';
    // }

// }
