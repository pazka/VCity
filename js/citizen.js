class G_citizen{
    constructor(){
        this.arrName = ["Jean","Marvin","Sylvain","Xavier","Pol","Henry","Vivian","Mathéo"];
        this.arrLName = ["Devis","Farmier","Potenski","Pake","Porte","Klein","Salk","Glomeo"];
        this.arrCitizen = [];
    }

    createCitizen(){
        var c = new Citizen(
            this.arrName[rdm(0,this.arrName.length)],
            this.arrLName[rdm(0,this.arrLName.length)]
        );
        this.arrCitizen.push(c);
        return c;
    };

    toString(){
        var str ="";
        this.arrCitizen.forEach((item)=>{
            str += item.toString() + "\n";
        });
        return str;
    }
}

class Citizen extends Item {
    constructor(_fn,_ln) {
        super(new Position(rdm(0,city.sizex),rdm(0,city.sizey)));
        this.firstname = _fn;
        this.lastname = _ln;
        this.dest = new Position(rdm(0,city.sizex),rdm(0,city.sizey));
    }

    makeAMove(){
        //TODO : Path finding
    };

    toString(){
        return  this.id +" : "+this.firstname + " " + this.lastname + " / " + this.pos.toString() +":"+this.dest.toString();
    }
}
