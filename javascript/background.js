function Background() {
  this.init = function (_posX, _posY, _width, _height) {
    this.posX = _posX;
    this.posY = _posY;
    this.width = _width;
    this.height = _height;
     // that.context.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    return true;
  };
  this.draw = function (imageID, _oX, _oY, _oPosX, _oPosY, _nbTiles) {
          this.ctx.clearRect(0, 0, this.width, this.height);
           // this.coinCtx.fillStyle = 'rgb(255, 0, 0)';
           // this.coinCtx.fillRect(oPosX, oPosY, 160, 30);
           // var args = arguments;
           var dat = this;
           /*** Goombas ***/
           if(_nbTiles){
             var boucle = function(){
               var i = 0;
               while (i < _nbTiles){
                 // console.log('bonjour');
                 dat.ctx.drawImage(imageID, _oX, _oY, osWidth, osHeight, dat.posX + dat.width*i, dat.posY, dat.width, dat.height);
                 i++;
               }
               dat.width = dat.width*i;
               return dat.width;
             };
             boucle();

           } else {
             this.ctx.drawImage(bgImage, _oX, _oY, sWidth, sHeight, 0, 0, this.width, this.height);
           }

    // that.coinCtx.drawImage(imageId, x, y, 52, 71, posX, posY, 52, 71);
    // console.log('perso change de position...GG');
  };
};
