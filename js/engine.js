const RATIO = 15;
var roadWidth =5
function setup(){
  createCanvas(city.sizex*RATIO, city.sizey*RATIO);
}

function draw(){
    g_citiz.arrCitizen.forEach((elem)=>{
        ellipse(elem.pos.x*RATIO, elem.pos.y*RATIO, 10, 10);
        line(elem.pos.x*RATIO,elem.pos.y*RATIO,elem.dest.x*RATIO,elem.dest.y*RATIO);
        text(elem.id +":"+elem.firstname+" "+elem.lastname,elem.pos.x*RATIO,elem.pos.y*RATIO+15);
    });
    g_road.arrRoads.forEach((elem)=>{
        rect(elem.pos.x*RATIO-roadWidth/2,
            elem.pos.y*RATIO-roadWidth/2,
            elem.or.x*roadWidth+ sign(elem.or.x)*roadWidth,
            elem.or.y*roadWidth+ sign(elem.or.y)*roadWidth);
            //textSize(8);
            //text(elem.id +":",elem.pos.x*RATIO,elem.pos.y*RATIO+15);
    })
}
