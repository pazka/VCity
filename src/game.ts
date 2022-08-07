class Game {
    constructor() {
        console.log('hey okk Im the game');
        console.log('hey okk Im the Im another game !! ');
        document.write("I'm ecstatic");
        const p = document.createElement('p');
        p.textContent = "Hello World";
        document.getElementsByTagName('body')[0].append(p);
        console.log("truly ecstatic");
    }

    run(){
        const p = document.createElement('p');
        p.textContent = "I'm running !";
        document.getElementsByTagName('body')[0].append(p);
    }
}

export default Game