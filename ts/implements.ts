interface CoffeMaker{
    makeCoffee:()=>void;
}

interface TeaMaker{
    makeTea:()=>void;

}

class VendingMachine implements CoffeMaker {
    
    makeCoffee ():void{

    }

    start(){
        
    }

    stop(){

    }

}

class VendingMachine2 extends VendingMachine implements TeaMaker {

    makeTea() : void {
        
    }
}