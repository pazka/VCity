class City {
    constructor(x,y) {
        this.sizex = x;
        this.sizey = y;

        this.elems = [,];
    }

    placeItem(e){
        this.elems[e.pos.x,e.pos.y] = e;
    }

    getItem(pos){
        return this.elems[pos.x,pos.y];
    }

    deleteItem(pos){
        delete this.elem[pos.x,pos.x];
    }

    generateCity(gcitizen,groad){
        for (var i = 0; i < 10; i++) {
            gcitizen.createCitizen();
        }
        for (var i = 0; i < 10; i++) {
            groad.createRoad();
        }
    }

    toString(){
        var txt = "";
        this.elems.forEach((elem)=>{
            txt += elem.toString() + "\n";
        });
        return txt;
    }
}

var curId = 0;
class Item {
//pos is of type Posistion
    constructor(pos) {
        this.pos = pos;
        this.id = curId++;
        city.placeItem(this);

        if(curId > 700)
            console.log("debug");
    }
}

class Position {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    cmp(pos){
        return (this.x == pos.x && this.y == pos.y);
    }
    add(pos){
        return new Position(this.x + pos.x , this.y + pos.y);
    }
    isIn(lim){
        return this.x >= (lim.minx ? lim.minx : 0) && this.x <= lim.maxx && this.y >= (lim.miny ? lim.miny : 0) && this.y <= lim.maxy;
    }

    toString(){
        return "["+this.x+":"+this.y+"]";
    }
}
