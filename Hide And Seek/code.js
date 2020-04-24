penUp();
hide();
var xloc = 160;
var yloc = 240;
var xmew = getXPosition("mew");
var ymew = getYPosition("mew");
var xpikachu= getXPosition("midpika");
var ypikachu= getYPosition("midpika");
var xcyndaquil = getXPosition("cyndaquil");
var ycyndaquil = getYPosition("cyndaquil");
hideElement("mew");
hideElement("mewhint");
hideElement("cyndaquil");
showElement("cyndaquilhint");

function move(){
  onEvent("button3", "click", function( ) {
    xloc = xloc - 10;
    updateTurtle();
    check();
    position();
  });
  
onEvent("home", "keydown", function(event) {
  if (event.key == "Left") {
    xloc = xloc - 10;
  } else if (event.key == "Right") {
    xloc = xloc + 10;
  } else if (event.key == "Up") {
    yloc = yloc - 10;
  } else if (event.key == "Down") {
    yloc = yloc + 10;
}

updateTurtle();
check();
position();
});
}

move();

function check(){
  xmew = getXPosition("mew");
  ymew = getYPosition("mew");
  xpikachu= getXPosition("midpika");
  ypikachu= getYPosition("midpika");
  xcyndaquil = getXPosition("cyndaquil");
  ycyndaquil = getYPosition("cyndaquil");
  
  if (xpikachu == xcyndaquil && ypikachu == ycyndaquil) {
    button("cyndaquilcheck", "Check!");
    onEvent("cyndaquilcheck", "mouseover", function() {
      hideElement("cyndaquilhint");
      showElement("cyndaquil");
      showElement("mewhint");
      deleteElement("cyndaquilcheck");
    });
    }
  if (xpikachu == xmew && ypikachu == ymew) {
    button("mewcheck", "Check!");
    onEvent("mewcheck", "mouseover", function() {
      hideElement("mewhint");
      showElement("mew");
      deleteElement("mewcheck");
      });
    } 
    
}

function updateTurtle() {
  xloc = wrap(xloc,0,320);
  yloc = wrap(yloc,0,450);
  moveTo(xloc, yloc);
  setPosition("midpika", xloc-35, yloc-35, 70, 70);
}

function wrap(input, low, high) {
  var output;
  if (input < low) {
    output = high;
  } else if (input > high) {
    output = low;
  } else {
    output = input;
  }
  return output;
}


function position(){
  setText("guide", ("Current X Position: " + xpikachu) 
  + "\nCurrent Y Position: " + ypikachu 
  + "\nCyndaquil's Possible X Position: " + xcyndaquil 
  + "\nCyndaquil's Possible Y Position: " + ycyndaquil 
  + "\nMew's Possible X Position: " + xmew 
  + "\nMew's Possible Y Position: " + ymew);
}
