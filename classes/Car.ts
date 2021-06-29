import {Engine} from "./Engine";
import {MusicPlayer} from "./MusicPlayer";

export class Car {
    //it is convention to start property names in TypeScript with an underscore.
    // If you want to known why, remove the underscore and see if your compiler is throwing you an error!
    private _engine : Engine;
    private readonly _musicPlayer : MusicPlayer;

    private _fuel : number = 0;
    private _miles : number = 0;

    //By changing this variable to readonly I have in essence created a property constant.
    // the only subtle difference is that you can write once to the variable inside the constructor
    private readonly MAXIMUM_FUEL_CAPACITY: number;
    private readonly FUEL_MILEAGE: number = 10;

    constructor(MAXIMUM_FUEL_CAPACITY: number) {
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
        this._musicPlayer = new MusicPlayer(0,50) ;
        this._engine = new Engine()
    }

    addFuel(fuel : number) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    }

//Take attention to these getter and setters
    get miles(): number {
        return this._miles;
    }

    get fuel(): number {
        return this._fuel;
    }

    get musicPlayer(): MusicPlayer {
        return this._musicPlayer;
    }

//When a value can only go one way (you add fuel, consuming fuel is handled by the car itself)
    // it is better to provide a specific method for this instead of a generic setter.
    // with a setter there is always the chance of somebody lowering the fuel amount by accident.

    drive() {
        if(this._engine.engineStatus === false || this._fuel <= 0) {
            //what I am doing here is a good principle called "failing early"
            // If you have some conditions you need to check, that will exclude most of the code in your function check that first
            // This prevents your "happy path" of code to be deeply indented.
            return;
        }

        this._fuel -= 1;
        this._miles += this.FUEL_MILEAGE;
    }
}