enum TrafficLight {
    Green = "Green",
    Yellow = "Yellow",
    Red = "Red",
    
}

class TrafficLightRobot {
    private currentLight: TrafficLight;
    private lights: TrafficLight[] = [TrafficLight.Green, TrafficLight.Yellow, TrafficLight.Red];
    private index: number = 0;

    constructor() {
        this.currentLight = this.lights[this.index];
        console.log(`Initial light: ${this.currentLight}`);
        setInterval(() => this.changeLight(), 10000);
    }

    private changeLight(): void {
        this.index = (this.index + 1) % this.lights.length;
        this.currentLight = this.lights[this.index];
        console.log(`Changed light to: ${this.currentLight}`);
    }
}

const robot = new TrafficLightRobot();