//jshint esversion: 6
function collatz(n) { // returns the next number in the sequence
	return n % 2 === 0 ? n/2 : n*3+1;
}
function collatzSteps(n) { // returns how many steps you need to get to 1
	let count = 0;
	while (n != 1) {
		n = collatz(n);
		count++;
	}
	return count;
}

// maxN defaults to 10'000
var maxN = typeof process.argv[2] !== 'undefined' ? Number(process.argv[2]) : 10000;

var highestN = 0;
var highest = 0;

var timeStart = process.hrtime(); // start timing
var n = 0;

while (n < maxN) {
	n++;
	let stepAmount = collatzSteps(n);
	if (stepAmount > highest) {
		highestN = n;
		highest = stepAmount;
		if(maxN > 999999) console.log(highestN +" : "+ highest);
	}
}

var timeDifference = process.hrtime(timeStart); // stop timing

function timeToMs(time) { // converts process.hrtime to ms
	return Math.floor((time[1]/1000+time[0]*1000000));
}

console.log('operation for ' + n + ' sequences took ' + timeToMs(timeDifference) + ' ms.');
console.log('longest sequence: ' + highestN + ' : ' + collatzSteps(highestN));