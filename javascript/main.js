'use strict'

// var debug = true;
var tiles,
goombas;
/* Canvas Background dimensions */
var canvasHeight = 500;
var canvasWidth = 1200;
var bgX = 0;
var bgY = 0;
var bWidth = 600;
var bHeight = 250;
var dirCol;
var object2;
/* Propriétés de mon perso */
// position du sprite de mon character
var spriteWidth = 55;
var spriteHeight = 72;
var sWidth = 50;
var sHeight = 70;
var x = 0; // définit la position x de mon masque;
var y = 0;
// coordonnées (posX, posY) de mon personnage :
var posX = 400;
var posY = canvasHeight - spriteHeight;
// position du perso x, y (64,406)
// propriétés de mon Goombas
var oX = 0; // définit la position x de mon masque;
var oY = 0;
var velX = 0;
var velY = 0;
var osX = 0;
var osY = 75;
var osWidth = 15;
var osHeight = 18;
var gWidth = 20;
var gHeight = 20;
var oWidth = 32;
var oHeight = 38;
var oPosX = canvasWidth;
var oPosY = 394;// canvasHeight - (2 * oHeight);
// propriétés de mes tiles / blocs
var tX = 0;
var tY = 0;
var tPosX = 640;
var tPosY = 430;
var cPosX,
cPosY = 0;
/* compteur de coins */
var count = 0;
var status = false;
var climb = false;
var speed = 3;
var friction = 0.8;
var gravity = 0.3;
/*** Chargement des images ***/

var numLoaded = 0;
var numImages = 3;

var bgImage = new Image();
bgImage.src = 'img/smb_1-1.png';

window.onload = function () {
bgImage.onload = function () {
	imageLoaded();
}

var bsprite = new Image();
bsprite.src = 'img/character-sprite.png';
bsprite.onload = function () {
	imageLoaded();
}

var tileSprite = new Image();
tileSprite.src = 'img/tiles.png';
tileSprite.id = 'tileSprite';
tileSprite.onload = function () {
	imageLoaded();
}

function imageLoaded() {
	// Vérifie que les images sont bien chargées...
	numLoaded++;
	if (numLoaded === numImages) {
		//console.log('images chargees : ' + numLoaded);
		run();
	}
}

/*** début mon constructeur de JEU ***/
var Game = function() {
	this.startTime = Date.now();
	/*** INITIALISE BG + PERSO + ENEMIES ***/
	this.bgWorld = document.getElementById('background');
	this.ctx = this.bgWorld.getContext('2d');
	this.perso = document.getElementById('perso');
	this.context = this.perso.getContext('2d');
	this.coin = document.getElementById('coin');
	this.coinCtx = this.coin.getContext('2d');
	this.init = function () {
		if (this.bgWorld.getContext) {

			return true;
		} else
			return false;

	};
	var that = this;
	/*** RENDER BACKGROUND + HERO ***/
	// game.render.draw
	this.render = {

		/*** Affichage et mise à jour des infos ***/
		text: {
			color: 'red',
			content: 'compte : ' + count // + ' competences'
		},
		score: {
			color: 'white',
			content: 'Score ' // Bravo tu as gagné
		},

		draw: function (count) {

      that.coinCtx.clearRect(0, 0, 10, canvasHeight/12);
      that.coinCtx.font = "24px Arial";
			that.coinCtx.fillStyle = this.text.color;
			that.coinCtx.fillText(this.text.content, 10, 50);
			that.coinCtx.fill();
		}
	};
	/*** RENDER HERO / PERSO ***/
	// game.hero.initialize
	this.hero = {

		init: function (x, y, posX, posY) {

			this.x = x;
			this.y = y;
			this.posX = posX;
			this.posY = posY;
			this.grounded = false;
			this.jumping = false;
		},
	// game.hero.update
		update: function (x, y, posX, posY) {
			// mise à jour des variables de mon personnage :
			that.context.clearRect(0, 0, canvasWidth, canvasHeight);
			that.context.drawImage(bsprite, x, y, 52, 72, posX, posY, 52, 72);
		}
	};
	// game.background.initialize
	this.background = {
		init : function (bgX, bgY, sWidth, sHeight) {
			this.x = bgX;
			this.y = bgY;
			this.width = sWidth;
			this.height = sHeight;
		},
		// game.background.update
		draw : function(bgX, bgY, sWidth, sHeight) {
			that.ctx.clearRect(0,0,canvasWidth, canvasHeight);
			that.ctx.drawImage(bgImage, bgX, bgY, sWidth, sHeight, 0, 0, 1200, 480);
		}

	};
	// mise a jour du rendu du game object
	this.update = function(x, y, posX, posY){
		// fonction qui met a jour le tracé
	}
};
/*** PRE BOUCLE ***/
function infiniteLoop(){
	var stop = false;
	oPosX-=2; // mouvement des enemies

	if (!stop){
	  if(cPosY >= 455){
	      cPosY = 455;
	  } else {
	      cPosY+=2; // mouvement de mes compétences
	  }
		if(oX > 20){
				oX = 0;
	      // osX = 0;
		} else {
					oX += 30;
	       // osX += 40;
		}
		if (x > spriteWidth*6){
			x = spriteWidth;
		} else {
		x += spriteWidth;
		}
} else {
		x = 0;
		osX = 0;
	}
}
/*** INITIALISATION DE LA BOUCLE JEU ***/
var fps, then, startTime, fpsInterval, elapsed, now, isStarted;
var stop = false;
var frameCount = 0;
startAnimation(12);
function startAnimation(fps) {
	fpsInterval = 1000 / fps;
    then = Date.now();
	startTime = then;
	run();
}
/*** BOUCLE DU JEU ***/
function run(){
	isStarted = false;

	var game = new Game();
	Clavier.prototype = new Game();
	var clavier = new Clavier();

	if (!isStarted){
        
		// initialise le rendu du jeu...
		game.init();
        
        // initilise le clavier...
		clavier.init();
        
		// initialise le rendu du héro...
		if(game.init()){
			game.hero.init(x, y, posX, posY);

			Object2.prototype = new Game();
			var tiles = new Object2();

			Background.prototype = new Object2();
			var background = new Background();
			background.init(bgX, bgY, canvasWidth, canvasHeight);
			background.draw(bgImage, 0, 0, canvasWidth, canvasHeight, 0, 0);
			tiles.init(0, 100, oWidth, oHeight);
			tiles.draw(tileSprite, osX, osY, 0, 100, 12);

			Enemies.prototype = new Object2();
    	    var goombas = new Enemies();
			goombas.init(oPosX, posY, oWidth, oHeight);
			goombas.draw(coin, oX, oY, 0, 100, 1);
			isStarted = true;
		};
	}
		/*** Gestion du clavier ***/

		window.requestAnimationFrame(run);

		now = Date.now();
		var delai = now - then;

        // pour ralentir la boucle

		if (delai > fpsInterval){
			then = now - (delai % fpsInterval);
            
			// lance la seconde boucle
			infiniteLoop();
			
			clavier.update();

			if(posX + spriteWidth > canvasWidth){
				posX = canvasWidth - spriteWidth;
			} else if (posX <= 0) {
				posX = 0;
			}
			if(clavier.hero.jumping){
				velY += speed*gravity;
			}

			posY += velY;
			if (posY <= 0){
				velY *= -1;
			}
			
			collision(tiles);
			collision(goombas);
            if (dirCol === 'l' || dirCol === 'r'){
                velX = 0;
                clavier.hero.jumping = false;
            } else if(dirCol === 'b'){
                clavier.hero.jumping = false;
                game.hero.grounded = false;
                velY *= -1;
            } else if(dirCol === 't'){
                velY *= -1;
            }
             if (clavier.hero.grounded){
                 velY *= -1;
             }
			velX *= friction;
			posX += velX;
			posY += velY;
            if (posY <= 0){
                posY = 0;
            } else if(posY + spriteHeight >= canvasHeight){
                posY = canvasHeight - spriteHeight;
                // game.hero.grounded = true;
            }
			game.hero.update(x, y, posX, posY);
            SkillSet.prototype = new Game();
            var skillSet = new SkillSet();
		}

		/*** Gestion des collisions : fonction collision ***/

		function collision(object2) {

			var halfWidth = (spriteWidth/2) + (object2.width/2);
			var halfHeight = (spriteHeight/2) + (object2.height/2);
			var vX = (posX + spriteWidth/2) - (object2.posX + object2.width/2);
			var vY = (posY + spriteHeight/2) - (object2.posY + object2.height/2);
			if( Math.abs(vX) < halfWidth && Math.abs(vY) < halfHeight){
				var offsetX = halfWidth - Math.abs(vX);
				var offsetY = halfHeight - Math.abs(vY);
				dirCol = null;
				if (offsetX >= offsetY){
					if ( vY < 0 ){
						// collision en bas

						dirCol = "b";
						posY -= offsetY;
						velY = 0;
					} else {
						// collision en haut

						dirCol = "t";
						posY += offsetY;
            velY *= -1;
					}
				} else {

					if( vX < 0 ){
						// collision à droite

						dirCol = "r";
						posX -= offsetX;

					} else {
						// collision à gauche

						dirCol = "l";
						posX += offsetX;
					}
				}
			}
			return dirCol;
	 };
 };
};
