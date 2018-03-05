function Enemies () {
  this.enemies = [{
    // id: goombas,
    sX : oX,
    sY : 0,
    sLargeur: 20,
    sHauteur: 20,
    dX: oPosX,
    dY: 455,
    dLargeur: 43,
    dHauteur: 43
  },{
    // id: koopas,
    sX : oX + 80,
    sY : 0,
    sLargeur: 30,
    sHauteur: 30,
    dX: {
      newPosition : 3,
      oldPosition : 4,
    },
    dY: 250,
    dLargeur: 73,
    dHauteur: 43
  }
];
  this.init = function (_posX, _posY, _width, _height) {
    this.posX = _posX;
    this.posY = _posY;
    this.width = this.enemies[0].dLargeur;
    this.height = this.enemies[0].dHauteur;
     // that.context.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    return true;
  };
  this.draw = function (imageID, _oX, _oY, _oPosX, _oPosY, _nbGoombas) {
           // var args = arguments;
           var dat = this;
           /*** Goombas ***/
           if(_nbGoombas){
             var boucle = function(){
               var i = 0;
               while (i < _nbGoombas){
                 // then = now;
                 dat.coinCtx.clearRect(0, dat.enemies[0].dY, canvasWidth, canvasHeight);
                 dat.coinCtx.drawImage(enemies_image, dat.enemies[0].sX, dat.enemies[0].sY, dat.enemies[0].sLargeur, dat.enemies[0].sHauteur, oPosX, dat.enemies[0].dY, dat.enemies[0].dLargeur, dat.enemies[0].dHauteur);
                 i++;
               }
               dat.width = dat.width*i;
               return dat.width;
             };
             boucle();

           } else {
             this.ctx.drawImage(bgImage, _oX, _oY, bWidth, bHeight, 0, 0, this.width, this.height);
           }
       };
  };
