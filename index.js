function distanceFromHqInBlocks(pickupLocation) {
    if (pickupLocation>=42) {
        return pickupLocation-42;
    }
    else if (pickupLocation <= 42) {
        return 42-pickupLocation;
    }

}

function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation)*264;
}

function distanceTravelledInFeet(origin, destination) {
    if (origin>destination) {
        return (origin-destination)*264;
    }
    else if (origin<destination) {
        return (destination-origin)*264;
    }
}

function calculatesFarePrice(origin, destination) {
    if (distanceTravelledInFeet(origin, destination) < 400) {
        return 0;
    } else if (distanceTravelledInFeet(origin, destination)<2000) {
        return (distanceTravelledInFeet(origin, destination)-400)*2/100;
    } else if (distanceTravelledInFeet(origin, destination)>2000 && distanceTravelledInFeet(origin, destination)<2500) {
        return 25;
    } else if (distanceTravelledInFeet(origin, destination)>2500) {
        return "cannot travel that far"
    }
}