const select = d3.select

const height = window.innerHeight;
const width = window.innerWidth;

const svg = select("body")
 .append("svg")
    .attr("height", height)
    .attr("width", width);

const circle = svg.append("circle")
    .attr("r", 200)
    .attr("cx", width / 2)
    .attr("cy", height / 2)
    .attr("fill", "yellow")
    
const eyeOffset = 80
const leftEye = svg.append("circle")
    .attr("r", 25)
    .attr("cx", width / 2 - eyeOffset)
    .attr("cy", height / 2 - eyeOffset)

const rightEye = svg.append("circle")
    .attr("r", 25)
    .attr("cx", width / 2 + eyeOffset)
    .attr("cy", height / 2 - eyeOffset)


const mouth = svg.append("path")
    .attr("transform", `translate(${width /2 },${height / 2})`)
    .attr("d", 
        d3.arc()
            .innerRadius( 90 )
            .outerRadius( 100 )
            .startAngle( 4  )     
            .endAngle( 2.28) 
        )