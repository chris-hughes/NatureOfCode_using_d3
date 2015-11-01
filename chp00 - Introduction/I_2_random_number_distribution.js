var width = 640,
    height = 240,
    start = Date.now(),
    speed = 0.25;
    
var chartdata = [];
for (i=0;i<20;i++){
	chartdata.push(0); 
}

//  the width of each bar and the offset between each bar
var barWidth = 27.25,
    barOffset = 5;

d3.select('#svg_container').append('svg')
  	.attr('width', width)
  	.attr('height', height)
  	.style('background', '#dff0d8')
  	.selectAll('rect').data(chartdata)
  	.enter().append('rect')
    .style({'fill': '#3c763d', 'stroke': '#d6e9c6', 'stroke-width': '5'})
    .attr('width', barWidth)
    .attr('height', function (data) {
        return data;
    })
    .attr('x', function (data, i) {
        return i * (barWidth + barOffset);
    })
    .attr('y', function (data) {
        return height - data;
    });

d3.timer(function(){
	var n = Math.floor(Math.random()*20);
	// console.log(n);
	// console.log(chartdata)
	chartdata[n]+=20;
	d3.selectAll('rect').data(chartdata)
	// .enter().append('rect')
 //    .style({'fill': '#3c763d', 'stroke': '#d6e9c6', 'stroke-width': '5'})
    .attr('width', barWidth)
    .attr('height', function (data) {
        return data;
    })
    .attr('x', function (data, i) {
        return i * (barWidth + barOffset);
    })
    .attr('y', function (data) {
        return height - data;
    });;
})