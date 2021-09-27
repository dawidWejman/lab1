class vechicle
{
    constructor(make,moodel,year)
    {
        
        this.make = make;//veriable to make
        this.moodel = model;//veriable for model 
        this.year = year;//veriable for year
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
        super(make, model,year);//super method just to transform veriables from dif class
        this.doors = doors;
    }
    informations(){
        super.informations();
        console.log('number of doors: ${this.doors}');//console for maing numbers of doors
    }
}
let myCar = new cars ('VW', 'golf', '2021', '4');//creating file
let info = myCar.informations();//main log
