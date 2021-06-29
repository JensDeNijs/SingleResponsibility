import {Car} from "./classes/Car";
import {MusicPlayer} from "./classes/MusicPlayer";

const musicToggleElement = <HTMLElement>document.querySelector('#music-toggle');
const musicSliderElement = <HTMLInputElement>document.querySelector('#music-slider');
const engineToggleElement = <HTMLInputElement>document.querySelector('#engine-toggle');
const addFuelForm = document.querySelector('#add-fuel-form');
const addFuelInput = <HTMLFormElement>document.querySelector('#add-fuel-input');
const fuelLevelElement = <HTMLElement>document.querySelector('#fuel-level');
const milesElement = <HTMLElement>document.querySelector('#miles-value');
const audioElement = <HTMLAudioElement>document.querySelector('#car-music');

let car = new Car(100);

musicToggleElement.addEventListener('click', () => {
    if(car.musicPlayer.musicLevel === 0) {
        car.musicPlayer.turnMusicOn();
        musicSliderElement.value = car.musicPlayer.musicLevel.toString();
        musicToggleElement.innerText = 'Turn music off';
        return;
    }
    musicToggleElement.innerText = 'Turn music on';
    car.musicPlayer.turnMusicOff();
});

musicSliderElement.addEventListener('input', (event) => {
    let target = <HTMLFormElement>(event.target);

    car.musicPlayer.musicLevel = target.value;
    audioElement.volume = car.musicPlayer.musicLevel / 100;

    //@todo when you are repeating the same text over and over again maybe we should have made some constants for it? Can you do improve on this?
    musicToggleElement.innerText = car.musicPlayer.musicLevel ? 'Turn music off' : 'Turn music on';
});

engineToggleElement.addEventListener('click', () => {
    if(car.engine.engineStatus) {
        car.engine.turnEngineOff();
        engineToggleElement.innerText = 'Turn engine on';
        return;
    }
    engineToggleElement.innerText = 'Turn engine off';
    car.engine.turnEngineOn();
});


addFuelForm.addEventListener('submit', (event) => {
    event.preventDefault();

    car.addFuel(Number(addFuelInput.value));
    fuelLevelElement.innerText = car.fuel.toString();
});


setInterval(() => {
    car.drive();
    milesElement.innerText = <string><unknown>(car.miles);
    fuelLevelElement.innerText = car.fuel.toString();

    if(car.musicPlayer.musicLevel === 0) {
        audioElement.pause();
    } else {
        audioElement.play();
    }

}, 1000);