var width = 640,
    height = 240,
    start = Date.now(),
    speed = 0.25;
    
var svg = d3.select("#svg_container")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("class", "canvases")
  .append("g")


function Walker() {
  this.path = [{x:width/2, y:height/2}];

  this.line = d3.svg.line()
      .x(function(d) {return d.x})
      .y(function(d) {return d.y})
      .interpolate("linear");

  this.svgLine = svg.append("path")
          .attr("d", this.line(this.path))
          .style("border-width", 1.0)
          .style("stroke", "#000000")
          .style("fill-opacity", 0);
  
  this.step = function() {
  	
  	var step = Math.floor(Math.random()*4.0);
  	if (step==0) {
  		newX = this.path[this.path.length-1].x +1;
  		newY = this.path[this.path.length-1].y;
    } else if (step == 1) {
      	newX = this.path[this.path.length-1].x -1;
  		newY = this.path[this.path.length-1].y;
    } else if (step == 2) {
      	newX = this.path[this.path.length-1].x;
  		newY = this.path[this.path.length-1].y +1;
    } else {
      	newX = this.path[this.path.length-1].x;
  		newY = this.path[this.path.length-1].y -1;
    }

    this.path.push({x:newX, y:newY});

    // var stepX = Math.floor(Math.random()*3.0 - 1.0);
    // var stepY = Math.floor(Math.random()*3.0 - 1.0);
   

    // var tempX = this.path[this.path.length-1].x + stepX;
    // var tempY = this.path[this.path.length-1].y + stepY;


  }
  this.display = function() {
    this.svgLine.attr("d", this.line(this.path));
  }
}



var walker = new Walker();
walker.display();

d3.timer(function() {
  // var deg = (Date.now() - start) * speed ; 
  walker.step();
  walker.display();
  //svg.attr("transform", transVal); // fixed ring*/
}); 