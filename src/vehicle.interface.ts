import { Parking } from "./parking.js";

export interface Vehicle {
    checkIFCanEnter: (parking: Parking) => boolean;
    enterToParking: (parking: Parking) => void;
    exitFromParking: (parking: Parking) => void;
    getSize: () => number;
    getType: () => string;

}