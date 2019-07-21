// Code produced by Leon Singleton
// functions

//this function clears everything on the canvas
function clear() {
  context.clearRect(0, 0, WIDTH, HEIGHT);
}

//this function draws the animated circle when a difference is specified
function draw(x, y, t) {
  if (t>1) t = 1;
  //sets the colour of the circle arc
  context.strokeStyle = "rgb(200,20,60)";
  context.beginPath();
  //sets the time the cirlce arc will be drawn for along with the co-ordinate of where to dray the arc and the shape of the arc
  context.arc(x, y, 7*t, 0, Math.PI*2, true);
  //draws the arc
  context.stroke();
}

//draws the next frame of the circle as it expans out to look like an 'growing animation' effect
function nextFrame(x, y, startTime, timePeriod) {
  //finds the elapsed time of the drawing
  var date = new Date();
  var now = date.getTime();
  var elapsedTime = now-startTime;
//recursively recalls this algorithm so that several circles are drawn to formt he animation effect
  requestId = requestAnimationFrame(function() {
    nextFrame(x,y, startTime, timePeriod); 
  });
  //draws the next circle arc by initialising the draw function
  draw(x, y, elapsedTime/timePeriod);
  if (elapsedTime > timePeriod) {
//after the elapsed time becomes greater than the set time period this function will end and hence 
//the circle will stop growing by calling the stop function
    stop();
  }
}


function animation(x, y) {
//sets the current time and the time period to draw the animation for
  var timePeriod = 500;
  var date = new Date();
  var startTime = date.getTime();
//initialeses the first circle and then the nextframe function so more circles can be drawn
  draw(x, y, 0);
  nextFrame(x,y, startTime, timePeriod);  
}

//when this function is called the 'animation' will stop and the nextframe function will stop endlessly recalling itself
function stop() {
  if (requestId)
    cancelAnimationFrame(requestId);
}

//this fucntion gets the users mouse coordiantes
function getMouseXY(e) {
  var canvas = document.getElementById('canvas_example');
 //the boundingrect is used to get the co-oridates of the user's click relative to the the top left of the canvas
  var boundingRect = canvas.getBoundingClientRect();
  var offsetX = boundingRect.left;
  var offsetY = boundingRect.top;
  //takes the border width away from the canvas height and width to get completely accurate co-ordinates to get the actual width
  //and hegiht of the clickable canvas area
  var w = (boundingRect.width-canvas.width)/2;
  var h = (boundingRect.height-canvas.height)/2;
  offsetX += w;
  offsetY += h;
  // use clientX and clientY as getBoundingClientRect is used above to take away the offset in the width and height
  //caused by any padding and canvas border
  var mx = Math.round(e.clientX-offsetX);
  var my = Math.round(e.clientY-offsetY);
  //returns mx as x and my as y
  return {x: mx, y: my};
}

//this function is used to append a HTML div element to output text as conditions are met
function displayResult(str) {
//selects the outputarea of the html webpage and creates a paragraph element whcih text can 
//be written to based on the 'str' parameter passed into this function
  var outputArea = document.getElementById('output_area');
  var myElement = document.createElement("p");
  var textNode = document.createTextNode(str);
  myElement.appendChild(textNode);
//if the output area has not already been created it is created, otherwise it is jsut ammended
  if (outputArea.firstChild)
    outputArea.replaceChild(myElement, outputArea.firstChild);
  else
    outputArea.appendChild(myElement);
}

//This fucntion is responsible for loading images to the canvas
function myDrawImage() {
//creates two seperate image objects that overwrite themselves as this function is called
  var img = new Image();
  var img1 = new Image();

//depedniding on the value of the ImageNo global variable a different set of images is loaded
  if (imageNo==1) {
//this function is used to ensure the images are loaded before they are drawn to the canvas
    img.onload = function() {
    context.drawImage(img, 0,0);
    context.drawImage(img1, 0,300);
    }
//once the images have been loaded into the cahce they are called by the onload function
    img.src = "images/turtle1.jpg"
    img1.src = "images/turtle2.jpg"
//all spot the difference puzzle pictures are property of the below website and are fine to use for personal, non-commercial purposes.
//http://www.hellokids.com/
  }
  else if (imageNo==2) {
    img.onload = function() {
    context.drawImage(img, 0,0);
    context.drawImage(img1, 0,300);
    }
    img.src = "images/horse1.jpg"
    img1.src = "images/horse2.jpg"
  }
  else if (imageNo==3) {
    img.onload = function() {
    context.drawImage(img, 0,0);
    context.drawImage(img1, 0,300);
    }
    img.src = "images/elephant1.jpg"
    img1.src = "images/elephant2.jpg"
  }
}

//this function initialises following a click event detected by the canvas
function doSomething(evt) {
  var pos = getMouseXY(evt);
  var str;

//depending on the current imageNo global variable the clicked position is checked to see 
// if it is a valid click co-ordinate within a range for a difference to be valid whether 
// it has not already been found
  if (imageNo==1) {
    if ((pos.x >= 110 && pos.x <=125) && (pos.y >= 545 && pos.y  <=565) && diff1 != "found") {
      //sets the diff property to found so that the same difference can not be selected again
      diff1="found"
      //calls the animation function which draws the animated circle effect where the user has clicked
      animation(pos.x, pos.y);
      //increments the difference counter by 1 to keep a track of the number of differences found by the user
      differencecounter = differencecounter +1; 
    }
    else if  ((pos.x >= 60 && pos.x <=70) && (pos.y >= 485 && pos.y  <=500) && diff2 != "found") {
      diff2="found"
      animation(pos.x, pos.y);
      differencecounter = differencecounter +1;
    }
    else if  ((pos.x >= 280 && pos.x <=295) && (pos.y >= 510 && pos.y  <=525) && diff3 != "found") {
      diff3="found"
      animation(pos.x, pos.y);
      differencecounter = differencecounter +1;
    }
    else if  ((pos.x >= 45 && pos.x <=55) && (pos.y >= 430 && pos.y  <=440) && diff4 != "found") {
      diff4="found"
      animation(pos.x, pos.y);
      differencecounter = differencecounter +1;
    }
    else if  ((pos.x >= 35 && pos.x <=45) && (pos.y >= 415 && pos.y  <=430) && diff5 != "found") {
      diff5="found"
      animation(pos.x, pos.y);
      differencecounter = differencecounter +1;
    }
  }

  if (imageNo==2) {
    if ((pos.x >= 125 && pos.x <=145) && (pos.y >= 515 && pos.y  <=530) && diff1 != "found") {
      diff1="found"
      animation(pos.x, pos.y);
      differencecounter = differencecounter +1; 
    }
    else if  ((pos.x >= 25 && pos.x <=35) && (pos.y >= 415 && pos.y  <=425) && diff2 != "found") {
      diff2="found"
      animation(pos.x, pos.y);
      differencecounter = differencecounter +1;
    }
    else if  ((pos.x >= 10 && pos.x <=25) && (pos.y >= 370 && pos.y  <=380) && diff3 != "found") {
      diff3="found"
      animation(pos.x, pos.y);
      differencecounter = differencecounter +1;
    }
    else if  ((pos.x >= 55 && pos.x <=75) && (pos.y >= 355 && pos.y  <=375) && diff4 != "found") {
      diff4="found"
      animation(pos.x, pos.y);
      differencecounter = differencecounter +1;
    }
    else if  ((pos.x >= 275 && pos.x <=290) && (pos.y >= 390 && pos.y  <=420) && diff5 != "found") {
      diff5="found"
      animation(pos.x, pos.y);
      differencecounter = differencecounter +1;
    }
  }

  if (imageNo==3) {
    if ((pos.x >= 290 && pos.x <=300) && (pos.y >= 545 && pos.y  <=565) && diff1 != "found") {
      diff1="found"
      animation(pos.x, pos.y);
      differencecounter = differencecounter +1; }
    else if  ((pos.x >= 170 && pos.x <=180) && (pos.y >= 460 && pos.y  <=470) && diff2 != "found") {
      diff2="found"
      animation(pos.x, pos.y);
      differencecounter = differencecounter +1;
    }
    else if  ((pos.x >= 135 && pos.x <=150) && (pos.y >= 555 && pos.y  <=575) && diff3 != "found") {
      diff3="found"
      animation(pos.x, pos.y);
      differencecounter = differencecounter +1;
    }
    else if  ((pos.x >= 65 && pos.x <=90) && (pos.y >= 320 && pos.y  <=350) && diff4 != "found") {
      diff4="found"
      animation(pos.x, pos.y);
      differencecounter = differencecounter +1;
    }
    else if  ((pos.x >= 160 && pos.x <=175) && (pos.y >= 470 && pos.y  <=485) && diff5 != "found") {
      diff5="found"
      animation(pos.x, pos.y);
      differencecounter = differencecounter +1;
    }
  }

//depending on the value of the difference counter a different message string is set
  if (differencecounter == 1) {
    messagetext = "well done you have found a difference!"
//the set message string is written to the string by initialising the display result function
    displayResult(messagetext);
  }
  else if (differencecounter > 1 && differencecounter < 5 ) {
    messagetext = "well done you have found " + differencecounter +" differences!"
    displayResult(messagetext);
  }
  //i have had to use a variable to check if the state of the game is finished so that a user can not click the canvas after 
  //the game has been completed which would cause the congratualtions message to be drawn multiple times making it flash extremely fast
  else if (differencecounter == 5 && gamecomplete != "true") {
    gamecomplete = "true"
    messagetext = "well done you have found every difference!"
    displayResult(messagetext);
//this calls the randomcolour function every half a second which continously changes the colour of the congratualtions message
    Winmessage = setInterval(randomColour, 500);
  }
}

//this function generates a random colour and then assigns that colour to 
//a congratualtions message that is drawn to the screen
function randomColour() {
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  var colour = "rgb("+r+","+g+","+b+")";
  context.fillStyle = colour;
  context.font = "40px sans-serif";
  context.fillText("Congratulations!", 5,300);
}

//this function draws the line seperating the two images from eachother on the canvas
function drawSeperation() {
  context.strokeStyle = "#4C9CF1";
  context.lineWidth = "3";
  context.moveTo(0,300);
  context.lineTo(300,300);
  context.stroke();
}

//This function is initialised when the 'next puzzle' button is clicked by the user
function loadNextPuzzle() { 
//stops the Congratulations message flashing
   clearInterval(Winmessage);
//the game complete check is reset
   gamecomplete = "false"
//the not found variables are reset along with the differences spotted counter
  differencecounter = 0;
  diff1= "notfound";
  diff2= "notfound";
  diff3= "notfound";
  diff4= "notfound";
  diff5= "notfound";
  //depending on the current value of the imageNo global variable it sets the variable to 
  //next image in the quee and repeats
  if (imageNo==1) {
    imageNo=2;    
  }
  else if (imageNo==2) {
    imageNo=3; 
  }
  else if (imageNo==3) {
    imageNo=1; 
  }

//clears the current message written to the screen
  messagetext = ""
  displayResult(messagetext);
//clears the canvas and draws the next pair of images and line seperation
  clear();
  myDrawImage();
  drawSeperation();
}

// MAIN PROGRAM
//these variables are set in order to get at the properties of the canvas and the button elements
var canvas = document.getElementById('canvas_example');
var nextbutton = document.getElementById('nextpuzzle');
var context = canvas.getContext('2d');
//sets the width and height of the canvas
const WIDTH = canvas.width;
const HEIGHT = canvas.height;
var requestId;
var Winmessage;
var messagetext;
//sets the default image set to call initially
var imageNo=1;
//these vairables are used to keep track of whether an individual difference has 
//already been spotted and to count the number of differences spotted at any one instance
var differencecounter = 0;
var diff1;
var diff2;
var diff3;
var diff4;
var diff5;
//this variable is used to set the state of the game to finished
var gamecomplete;
//draws the first pair of images and draws a line seperation between them
myDrawImage();
drawSeperation();

//These event listeners detect click events to the specified elements 
//(either the button or the canvas) and then initialises a function
canvas.addEventListener('click', doSomething);
nextbutton.addEventListener('click', loadNextPuzzle);