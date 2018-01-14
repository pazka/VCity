
class Building extends Item {
    constructor(_pos) {
        super(_pos);
    }

    toString(){
        return "Bui:"+this.pos.toString();
    }
}

class Batiment extends Item {
    constructor(_pos) {
        super(_pos);
    }

    toString(){
        return "Bat:"+this.pos.toString();
    }
}

//A block can be only vrtical or horizontal
class Block extends Item {
    constructor(_pos,x) {
        super(_pos);
        this.elems = [];
    }

    addBuilding(build){
        this.elems.push(build);
    }

    addBuilding(build){
        this.elems.push(build);
    }
}
