import Animal from './Animal.js';

class Perro extends Animal {
    constructor(name, specie, color, race) {
        super(name, specie, color);
        
        this.race = race;
    }
    
    getRace() {
        return this.race;
    }
}

export default Perro;