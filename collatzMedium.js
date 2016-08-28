//jshint esversion: 6
function collatz(n) { // returns the next number in the sequence
	return n % 2 === 0 ? n/2 : n*3+1;
}
function collatzSteps(n) { // returns how many steps you need to get to 1
	let count = 0;
	while (n != 1) {
		if (cache.hasOwnProperty(n)){
			console.log(n +' : '+ cache[n] +' + '+ count +' = '+ (cache[n] + count));
			return cache[n] + count;
			// add this cache's stuff to stepamount, return that and exit function
		}
		n = collatz(n);
		count++;
		cache[n] = count;
		console.log(cache);
	}
	return count;
}

// maxN defaults to 10'000, also called limit
var maxN = typeof process.argv[2] !== 'undefined' ? Number(process.argv[2]) : 1000000;

var highestN = 0; // maxN
var highest = 0; // maxOrbit
var cache = {};
var timeStart = process.hrtime(); // start timing
var n = 3;
var totalCount = 0;

while (n < maxN) {
	n++;
	let stepAmount = collatzSteps(n);
	if (stepAmount > highest) {
		highestN = n;
		highest = stepAmount;
		// if(maxN > 999999) console.log(highestN +" : "+ highest);
	}
}

var timeDifference = process.hrtime(timeStart); // stop timing

function timeToMs(time) { // converts process.hrtime to ms
	return Math.floor((time[1]+time[0]*1e+9)/1e+6);
}

console.log('operation for ' + n + ' sequences took ' + timeToMs(timeDifference) + ' ms.');
console.log('longest sequence: ' + highestN + ' : ' + collatzSteps(highestN));
// console.log('total count: ' + totalCount);