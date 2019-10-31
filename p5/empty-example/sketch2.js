function setup() 
{  createCanvas(1000, 10000);  
    noStroke(); 
}
function draw() 
{  background(204, 226, 225); 
    fill(255, 0, 0, 160);  
    ellipse(132, 82, 200, 200);
    fill(0, 255, 0, 160); 
    ellipse(228, -16, 200, 200); 
    fill(0, 0, 255, 160); 
    ellipse(268, 118, 200, 200);  
}

function draw()
{
    if (MouseisPressed)
    { fill (0, 160, 255, 0); } else
    { triangle(158, 55, 290, 91, 290, 112); }
    { fill(0, 255); }
    ellipse(mouseX, mouseY, 50, 100);
}
