import {Engine} from "./Engine";
import {MusicPlayer} from "./MusicPlayer";
import {FuelTank} from "./FuelTank";

export class Car {
    private readonly _engine : Engine;
    private readonly _musicPlayer : MusicPlayer;
    private readonly _fuelTank : FuelTank;

    private _miles : number = 0;

    constructor(MAXIMUM_FUEL_CAPACITY: number) {
        this._musicPlayer = new MusicPlayer(0,50) ;
        this._engine = new Engine(false)
        this._fuelTank = new FuelTank(0,10,MAXIMUM_FUEL_CAPACITY);
    }

    get miles(): number {
        return this._miles;
    }

    get fuelTank(): FuelTank {
        return this._fuelTank;
    }

    get musicPlayer(): MusicPlayer {
        return this._musicPlayer;
    }

    get engine(): Engine {
        return this._engine;
    }

    drive() {
        if(this._engine.engineStatus === false || this.fuelTank.fuel <= 0) {
            return;
        }
        this.fuelTank.fuel -= 1;
        this._miles += this.fuelTank.FUEL_MILEAGE;
    }
}