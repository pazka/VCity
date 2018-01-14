class G_road{
    constructor(){
        this.origRoads = [];
        this.arrRoads= [];
    }

    createRoad(){
        var r = new Road(null,null);
        this.origRoads.push(r);
        return r;
    };

    toString(){
        var str ="";
        this.arrRoads.forEach((item)=>{
            str += item.toString() + "\n";
        });
        return str;
    }
}

var rdmRot = 0;
//A block can be only vertical or horizontal
class Road extends Item {
    constructor(prec,suiv) {
        var orig;
        if(prec!=null)
            orig = prec;
        else if(suiv!=null){
            orig = suiv;
        }else {
            orig = {pos:new Position(rdm(0,city.sizex), rdm(0,city.sizey)), or:{x : cosdeg(rdmRot) ,y: sindeg(rdmRot)}};
            rdmRot = (rdmRot + 90)%360;
        }

        super(orig.pos.add(orig.or));
        this.prec = prec;
        this.suiv = suiv;

        do{
            if(suiv!=null)
                this.or = this.getOrientationBias({x :- orig.or.x, y : -orig.or.y});
            else
                this.or = this.getOrientationBias(orig.or);

        }while (orig.pos.cmp(this.pos.add(this.or)));

        if(suiv == null){
            if(this.posValid()){
                this.prec = new Road(null,this);
            }
        }else if(prec == null){
            if(this.posValid()){
                this.suiv = new Road(this,null);
            }
        }else{
            if(this.posValid())
                this.prec = new Road(null,this);
            if(this.posValid())
                this.suiv = new Road(this,null);
        }
        console.log(this);
        g_road.arrRoads.push(this);
    }

    posValid(){
        return this.pos.add(this.or).isIn({maxx : city.sizex,maxy:city.sizey});
    }

    getOrientation(){
        var p = prob();
        if(p>25){
            if(p>50){
                if (p >75){
                    //75/100
                    return {x : 1 , y : 0};
                }
                //50/75
                return {x : -1 , y : 0};
            }
            //25/50
            return {x : 0 , y : 1};
        }
        //0/25
        return {x : 0 , y : -1};
    }

    getOrientationBias(b){
        var p = prob();
        var biasStrength= 45;
        var p0=0,p25=0,p50=0,p75=0;

            if  (b.x == 1) {p75 = biasStrength;}//p75/100
        else if (b.x == -1){p50 = biasStrength;} //p50/75
        else if (b.y == 1) {p25 = biasStrength;} // p25/50
        else               {p0 = biasStrength;} // p0/25

        if(p+p25>25+p0){
            if(p+p50>50+p25){
                if (p+p75 >75+p50){
                    //console.log(this.id +"p:"+p + " B:" + p0+","+p25+","+p50+","+p75 + "got 75/100");
                    return {x : 1 , y : 0};
                }
                //console.log(this.id +"p:"+p + " B:" + p0+","+p25+","+p50+","+p75 + "got 50/75");
                return {x : -1 , y : 0};
            }
            //console.log(this.id +"p:"+p + " B:" + p0+","+p25+","+p50+","+p75 + "got 25/50");
            return {x : 0 , y : 1};
        }
        //console.log(this.id +"p:"+p + " B:" + p0+","+p25+","+p50+","+p75 + "got 0/25");
        return {x : 0 , y : -1};
    }

    toString(){
        return "R/"+(this.prec ? this.prec.id : "end")+"-|"+this.id+"|-"+ (this.suiv ? this.suiv.id : "end") +":"+this.pos.toString()+":-"+this.or.x+"|"+this.or.y+"-";
    }
}
