export class FuelTank{
    private _fuel : number = 0;
    private readonly MAXIMUM_FUEL_CAPACITY: number;
    private readonly _FUEL_MILEAGE ;

    constructor(fuel: number,FUEL_MILEAGE : number, MAXIMUM_FUEL_CAPACITY : number ) {

        this._fuel = fuel;
        this._FUEL_MILEAGE = FUEL_MILEAGE;
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    }


    set fuel(value: number) {
        this._fuel = value;
    }

    get fuel(): number {
        return this._fuel;
    }

    get FUEL_MILEAGE() {
        return this._FUEL_MILEAGE;
    }

    addFuel(fuel: number){
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    }
}