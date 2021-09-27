class BMI
{
    constructor(height, weight)
    {
        this.height = height;
        this.weight = weight;
    }//construction of veriables need for BMI calculation   

     calculateBMI()
    {
        let BMI = this.weight/(this.height**2);//making calculation with the veriables.
        return BMI;//return veriables with calculations 
    }

}
let myBMI = new BMI(192,100);//making perimeters for calculation

let calc = myBMI.calculateBMI();
console.log(calc);