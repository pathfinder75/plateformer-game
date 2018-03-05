var SkillSet = function(){
    this.init = function (_posX, _posY, _width, _height) {
        this.posX = _posX;
        this.posY = _posY;
        this.width = _width;
        this.height = _height;
     // that.context.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    return true;
  };
//var image = document.getElementById('image');
var css = document.getElementById('css_image');
var js = document.getElementById('js_image');
var html = document.getElementById('html_image');
var jquery = document.getElementById('jquery_image');
var angular = document.getElementById('angular_image');
var skills = [
{
  id: css,
  dx: 300,
  dy: cPosY,
  dLargeur: 43,
  dHauteur: 43
},
{
  id: js,
  dx: 650,
  dy: cPosY,
  dLargeur: 43,
  dHauteur: 43
},
{
  id: html,
  dx: 950,
  dy: cPosY,
  dLargeur: 43,
  dHauteur: 43
},
{
  id: jquery,
  dx: 1150,
  dy: cPosY,
  dLargeur: 43,
  dHauteur: 43
}];
// Skills.prototype = new Image();
// var html = new Skills('image', 0, 0, 200, 100, 0, 0, 120, 60);
var i = 0;
while(i < skills.length){

  this.context.clearRect(skills[i].dx, skills[i].dy, skills[i].dLargeur, skills[i].dHauteur);
  this.context.drawImage(skills[i].id, skills[i].dx, skills[i].dy, skills[i].dLargeur, skills[i].dHauteur);
  i++;
}
    return skills[0];
};
