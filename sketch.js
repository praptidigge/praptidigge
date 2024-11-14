let numSegments = 12; // Number of segments for the mandala
let angle; // Angle between each segment
let currentPalette = 0; // Variable to track the current color palette
let colorPalettes = [
  ['#000000', '#FFFFFF'], // Black and White (Palette 1)
  ['#E63946', '#F1FAEE', '#A8DADC', '#457B9D', '#1D3557'], // Complementary palette (Palette 2)
  ['#8E44AD', '#3498DB', '#E74C3C', '#F1C40F', '#1ABC9C'], // Analogous palette (Palette 3)
];
let brushSize = 4; // Default brush size
let dottedBrush = false; // Flag to toggle between regular and dotted brush
let bgColor = 255; // Default background color is white

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bgColor); // Set initial background
  angle = TWO_PI / numSegments; // Calculate the angle between segments
}

function draw() {
  // No continuous drawing
}

// Function to draw the mirrored brushstrokes
function drawMandala() {
  let mx = mouseX - width / 2;
  let my = mouseY - height / 2;
  let pmx = pmouseX - width / 2;
  let pmy = pmouseY - height / 2;

  let colorIndex = int(random(colorPalettes[currentPalette].length));
  let selectedColor = colorPalettes[currentPalette][colorIndex];
  stroke(selectedColor);

  if (dottedBrush) {
    strokeWeight(brushSize * 2); // Thicker stroke for dotted brush
    point(mx, my); // Draw dots instead of lines
  } else {
    strokeWeight(brushSize); // Regular brush stroke weight
  }

  for (let i = 0; i < numSegments; i++) {
    let theta = i * angle;

    // Mirrored strokes
    push();
    translate(width / 2, height / 2);
    rotate(theta);

    if (dottedBrush) {
      point(mx, my); // Dotted brush creates points
      point(-mx, my); // Symmetric dotted brush
    } else {
      // Drawing the stroke on each segment
      line(mx, my, pmx, pmy);
      line(-mx, my, -pmx, pmy); // Symmetric across the center axis
    }

    pop();
  }
}

function mouseDragged() {
  drawMandala(); // Draw mandala when the mouse is dragged
}

// Function to change color palettes using keyboard shortcuts
function keyPressed() {
  if (key === '1') {
    currentPalette = 0; // Black and White palette
  } else if (key === '2') {
    currentPalette = 1; // Complementary palette
  } else if (key === '3') {
    currentPalette = 2; // Analogous palette
  } else if (key === 'b') {
    dottedBrush = !dottedBrush; // Toggle between regular and dotted brush
  } else if (keyCode === BACKSPACE) {
    background(bgColor); // Clear the canvas to current background color
  } else if (keyCode === RIGHT_ARROW) {
    toggleBackgroundColor(); // Change background when right arrow is pressed
  }
}

// Function to toggle background between white and black
function toggleBackgroundColor() {
  if (bgColor === 255) {
    bgColor = 0; // Switch to black background
  } else {
    bgColor = 255; // Switch to white background
  }
  background(bgColor); // Apply the background change
}

// Function to handle resizing the canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(bgColor); // Ensure background is maintained on window resize
}
