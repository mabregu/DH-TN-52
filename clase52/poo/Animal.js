class Animal {
    constructor(name, specie, color) {
        this.name = name;
        this.specie = specie;
        this.color = color;
    }
    
    getName() {
        return this.name;
    }
    
    setName(name) {
        this.name = name;
        
        return this.name;
    }
    
    getSpecie() {
        return this.specie;
    }
    
    setSpecie(specie) {
        this.specie = specie;
        
        return this.specie;
    }
}

export default Animal;