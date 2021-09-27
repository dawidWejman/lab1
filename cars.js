class vechicle
{
    constructor(make,moodel,year)
    {
        
        this.make = make;
        this.moodel = model;
        this.year = year;
    }
    informations(){
        console.log('make: ${this.make}');
        console.log('model: ${this.model}');
        console.log('year: ${this.year}');
    }
}



class car extends vehicle
{
    constructor(make, model, year, doors)
    {
        super(make, model,year);
        this.doors = doors;
    }
    informations(){
        super.informations();
        console.log('number of doors: ${this.doors}');
    }
}
let myCar = new cars ('VW', 'golf', '2021', '4');
let info = myCar.informations();