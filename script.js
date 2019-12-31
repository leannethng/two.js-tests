// Write about what this script is for here
var elem = document.getElementById('doodle');
var two = new Two({fullscreen: true}).appendTo(elem);

var circle = two.makeCircle(110, 110, 100);
circle.fill = "#881111";

var rect = two.makeRectangle(260,120, 210,100);
rect.fill = '#6cbf58';
rect.stroke = '#ffffff';
rect.linewidth = 5;

var line = two.makeLine(20,20, 210,300);
line.stroke = '#ff4c22';
line.linewidth = 8;

two.update();
