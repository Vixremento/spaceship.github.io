// Set up the canvas and get the context
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Set up the starfield
var numStars = 100;
var stars = [];
var stars2 = [];

// Create a star object with random x, y, and size values
for (var i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 3,
  });
  
  stars2.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2,
  });
}

// Set up the spaceship
var ship = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 20,
};

// Flag to indicate if the starfield should be animated or not
var shouldAnimateStarfield = false;

document.addEventListener("keypress", function(event) {
  // Get the key code from the event object
  var keyCode = event.keyCode;
  
  // Move the starfield background based on the pressed key
  /*
  if (keyCode === 97) { // "a" key
    moveStarfield("left");
  } else if (keyCode === 119) { // "w" key
    moveStarfield("up");
  } else if (keyCode === 100) { // "d" key
    moveStarfield("right");
  } else if (keyCode === 115) { // "s" key
    moveStarfield("down");
  }
  */
  console.log(event.keyCode);
  switch (event.keyCode) {
		
    case 97: // A key
      // Move the starfield to the right
      shouldAnimateStarfield = true;
	  
      for (var i = 0; i < numStars; i++) {
        stars[i].x += 5;
        if (stars[i].x > canvas.width) {
          stars[i].x = 0;
        }
		
		stars2[i].x += 3;
        if (stars2[i].x > canvas.width) {
          stars2[i].x = 0;
        }
      }
      break;
    case 100: // D key
      // Move the starfield to the left
      shouldAnimateStarfield = true;
	  
      for (var i = 0; i < numStars; i++) {
        stars[i].x -= 5;
        if (stars[i].x < 0) {
          stars[i].x = canvas.width;
        }
      }
      break;
    case 119: // W key
      // Move the starfield downwards
      shouldAnimateStarfield = true;
	  
      for (var i = 0; i < numStars; i++) {
        stars[i].y += 5;
        if (stars[i].y > canvas.height) {
          stars[i].y = 0;
        }
      }
		break;
    case 115: // S key
      // Move the starfield upwards
      shouldAnimateStarfield = true;
	  
      for (var i = 0; i < numStars; i++) {
        stars[i].y -= 5;
        if (stars[i].y < 0) {
          stars[i].y = canvas.height;
        }
      }
      break;
  }
  
  
});


/*
// Add event listener for keydown events
document.addEventListener("keydown", function (event) {
  switch (event.keyCode) {
    case 65: // A key
      // Move the starfield to the right
      shouldAnimateStarfield = true;
	  console.log("A");
      for (var i = 0; i < numStars; i++) {
        stars[i].x += 5;
        if (stars[i].x > canvas.width) {
          stars[i].x = 0;
        }
      }
      break;
    case 68: // D key
      // Move the starfield to the left
      shouldAnimateStarfield = true;
	  console.log("D");
      for (var i = 0; i < numStars; i++) {
        stars[i].x -= 5;
        if (stars[i].x < 0) {
          stars[i].x = canvas.width;
        }
      }
      break;
    case 87: // W key
      // Move the starfield downwards
      shouldAnimateStarfield = true;
	  console.log("W");
      for (var i = 0; i < numStars; i++) {
        stars[i].y += 5;
        if (stars[i].y > canvas.height) {
          stars[i].y = 0;
        }
      }
      break;
    case 83: // S key
      // Move the starfield upwards
      shouldAnimateStarfield = true;
	  console.log("S");
      for (var i = 0; i < numStars; i++) {
        stars[i].y -= 5;
        if (stars[i].y < 0) {
          stars[i].y = canvas.height;
        }
      }
      break;
  }
});
*/

// Add event listener for keyup events
/*
document.addEventListener("keyup", function (event) {
  // Stop animating the starfield when the key is released
  shouldAnimateStarfield = false;
});
*/



// Game loop
function draw() {
  // Clear the canvas
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw the starfield
  for (var i = 0; i < numStars; i++) {
    ctx.fillStyle = "white";
    ctx.fillRect(stars[i].x, stars[i].y, stars[i].size, stars[i].size);
	
	ctx.fillRect(stars2[i].x, stars2[i].y, stars2[i].size, stars2[i].size);
  }

  // Draw the spaceship in the center of the canvas
  ctx.fillStyle = "red";
  ctx.fillRect(ship.x - ship.size / 2, ship.y - ship.size / 2, ship.size, ship.size);

  // Animate the starfield if the flag is set to true
  //if (shouldAnimateStarfield) {
    requestAnimationFrame(function () {
      draw();
    });
  //}
}


// Start the animation
draw();
