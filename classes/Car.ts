import {Engine} from "./Engine";
import {MusicPlayer} from "./MusicPlayer";

export class Car {

    private readonly _engine : Engine;
    private readonly _musicPlayer : MusicPlayer;

    private _fuel : number = 0;
    private _miles : number = 0;

    private readonly MAXIMUM_FUEL_CAPACITY: number;
    private readonly FUEL_MILEAGE: number = 10;

    constructor(MAXIMUM_FUEL_CAPACITY: number) {
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
        this._musicPlayer = new MusicPlayer(0,50) ;
        this._engine = new Engine(false)
    }

    addFuel(fuel : number) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    }

    //getters and setters
    get miles(): number {
        return this._miles;
    }

    get fuel(): number {
        return this._fuel;
    }

    get musicPlayer(): MusicPlayer {
        return this._musicPlayer;
    }

    get engine(): Engine {
        return this._engine;
    }

    drive() {
        if(this._engine.engineStatus === false || this._fuel <= 0) {
            return;
        }

        this._fuel -= 1;
        this._miles += this.FUEL_MILEAGE;
    }
}