function rdm(start,end){
    return start+Math.round(Math.random()*100000000)%end;
}

//must be inferior to 100
function prob100(prob){
    return (Math.round(Math.random()*100) <= prob);
}

//must be inferior to 100
function prob(){
    return (Math.round(Math.random()*100));
}

//sign w/o 0
function sign(x){
    var s = Math.sign(x);
    return s == 0 ? 1 : s;
}

function sindeg(angle) {return Math.round(Math.sin(angle/180*Math.PI));};
function cosdeg(angle) {return Math.round(Math.cos(angle/180*Math.PI));};
