
export class Parking {
    private spots: number;
    private freeSpots: number;

    constructor(spots: number) {
        this.spots = spots;
        this.freeSpots = spots;
    }

    setFreeSpots = (freeSpots: number) => {
        this.freeSpots = freeSpots;
    }

    getFreeSpots = () => {
        return this.freeSpots;
    }

    releaseSpot = () => {
        this.freeSpots++;
    }

    occupySpot = () => {
        this.freeSpots--;
    }

    getTotalSpots = () => {
        return this.spots;
    }

}