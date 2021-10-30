function distanceFromHqInBlocks(b) {
	return Math.abs(42 - b);
}

function distanceFromHqInFeet(f) {
	return distanceFromHqInBlocks(f) * 264;
}

function distanceTravelledInFeet(x, y) {
	return Math.abs(x - y) * 264;
}

function calculatesFarePrice(x, y) {
	
	let tot = distanceTravelledInFeet(x, y);
	
	if (tot > 2500) {
		return 'cannot travel that far';
	} else {
		if (tot <= 400) {
			return 0;
		} else if (400 < tot && tot < 2000) {
			return (tot - 400) * 0.02;
		} else {
			return 25;
		}
	}

}