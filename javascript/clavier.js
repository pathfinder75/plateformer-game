var keysDown = {};
var isStarted = false;
var Clavier = function () {
    this.keysDown = {};
    this.hero.jumping = true;
    this.hero.grounded = true;
    var that = this;
    this.init = function() {
         window.addEventListener('keydown', function (event) {
           event.preventDefault();
            keysDown[event.keyCode] = true;

            return true;
        }, false);
	       window.addEventListener('keyup', function (event) {
            delete keysDown[event.keyCode];
            return false;
        }, false);
    };

	this.update = function (modifier) {

        for (element in keysDown) {
            if(13 in keysDown) {
              isStarted = true;
            }
            if(37 in keysDown) {
              // vers la gauche
                if(velX > -speed){
                  velX--;
                }
            }
            if (38 in keysDown) {
                // vers le haut

            }
            if (39 in keysDown) {
                // vers la droite
                if(velX < speed){
                  velX++;
                }
            }
            if (40 in keysDown) {
                // vers le bas
                // posY++;
            }
            if (32 in keysDown) {
              // saut - barre d'espace
                if(!this.hero.jumping & this.hero.grounded){
                  this.hero.jumping = true;
                  this.hero.grounded = false;
                  velY = -speed*2;
                }
                if(x >= spriteWidth*6){
                  x = 0;
                } else {
                  // posY*(modifier+1);
                  // y=spriteHeight*3;
                }
                isStarted = true;
            }
        }
        return isStarted;
    }
    this.hero.jumping = false;
};
