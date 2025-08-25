import { Parking } from "./parking.js";
import type { Vehicle } from "./vehicle.interface.js";



export abstract class VehicleAbs implements Vehicle {
    protected type: string;
    protected size: number;
    protected currentParking: Parking | null = null;

    constructor(type: string, size: number) {
        this.type = type;
        this.size = size;
    }

    public getSize = () => {
        return this.size;
    }

    public getType = () => {
        return this.type;
    }

    public checkIFCanEnter = (parking: Parking) => {
        return parking.getFreeSpots() > 0;
    }

    public enterToParking = (currentParking?: Parking) => {
        this.currentParking = currentParking || null;
        this.currentParking?.occupySpot();
    }

    public exitFromParking = () => {
        this.currentParking?.releaseSpot();
    }
}