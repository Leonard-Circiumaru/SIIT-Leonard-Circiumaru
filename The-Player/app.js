var player = document.getElementById('player');
var container = document.getElementById('container');

var playerLeft = 0;
var playerTop = 0;

function anim(e) {

    if(e.keyCode==39){
        playerLeft +=2;
        player.style.left = playerLeft + 'px';
        if(playerLeft >=350){
            playerLeft -=2;
        }
    }
    if(e.keyCode==37){
        playerLeft -=2;
        player.style.left = playerLeft + 'px';
        if(playerLeft <=0){
            playerLeft +=2;
        }
    }
    if(e.keyCode==38){
        playerTop -=2;
        player.style.top = playerTop + 'px';
        if(playerTop <=0){
            playerTop +=2;
        }
    }
    if(e.keyCode==40){
        playerTop +=2;
        player.style.top = playerTop + 'px';
        if(playerTop >=350){
            playerTop -=2;
        }
    }
}

document.onkeydown = anim; 