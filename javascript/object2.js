function Object2() {
  this.init = function (_posX, _posY, _width, _height) {
    this.posX = _posX;
    this.posY = _posY;
    this.width = _width;
    this.height = _height;
     // that.context.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    return true;
  };
  this.draw = function (imageID, _oX, _oY, _oPosX, _oPosY, _nbTiles) {
          this.coinCtx.clearRect(_oPosX, _oPosY, canvasWidth, canvasHeight);
           // this.coinCtx.fillStyle = 'rgb(255, 0, 0)'; //POUR TEST
           var args = arguments;
           var dat = this;
           /*** boucle de création des objects ***/
           var boucle = function(){
             var i = 0;
             while (i < _nbTiles){
               // console.log('bonjour');
                 dat.coinCtx.drawImage(imageID, _oX, _oY, osWidth, osHeight, _oPosX + dat.width*i, _oPosY, dat.width, dat.height);
//                 dat.coinCtx.fillRect(dat.posX, dat.posY, dat.width * i, 30);
//                 dat.coinCtx.fillStyle = 'rgb(255, 0, 0)';
               i++;
             }
               dat.width = dat.width*i;
               return tiles;
           };
           boucle();

    // that.coinCtx.drawImage(imageId, x, y, 52, 71, posX, posY, 52, 71);
    // console.log('perso change de position...GG');
  };
};

// Object2.prototype = new Game();
