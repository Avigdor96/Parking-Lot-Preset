# Parking-Lot_Preset HLD

## 1. Problem & Scope

**Problem:** <manage smart parking by pre knowing how & wich size of the free spots and update the current state when change>

**In Scope:** <Check free spots and update parking state>,
<Parking Saves stats>

**Out Scope:** <>

## 2. Assumptions & Constraints

- Users: <Max: 100>
- RPS: <Max: 30>
- Region: <Israel>
- Date size: <All-Time>

## 3. Actors & Context

**Actors:** <Vehicle>, <Parking>, <Spot>

flowchart LR
Vehicle -->Parking
Parking -->Spot

## Interface

Base: /api/parking
Headers:

### POST/allocate

Body: { vehicleId: string, size: "S" | "M" | "L"}
200: { spotId: string, size: "S" | "M" | "L"}
422: { error: "NO_FIT, message: "vehicle is too large for remaining spots"}
409: { error: "FULL", "message": "no free spots"}
400: { error: "BAD_REQUEST", "message": "invalid body: size must be S|M|L" }

### POST/release

Body: {spotId: string}
200: {ok: true}
404: {error: "NOT_FOUND", message: "spot not found or already free"}

### GET/stats

200: {
total: {S:number, M:number, L:number, all:number},
free: {S:number, M:number, L:number, all:number},
occupied:{S:number, M:number, L:number, all:number},
}

## Flows (Happy & Sad)

actor V as Vehicle
actor P as Parking

**Happy Path**

V-->P: POST/allocate {vehicleId,size}
P-->V: 200 {spotId,size}

V-->P: POST /release {spotId}
P-->V: 200 {ok:true}

**Sad Path**

actor V as Vehicle
actor P as Parking

V-->P: POST/allocate
parking is full
P-->V: 409 FULL
else already parked
P-->V: 409 ALREADY_PARKED
else no fit
P-->V: 422 NO_FIT
