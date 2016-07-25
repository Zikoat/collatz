//jshint esversion: 6
function collatz (n) {
	return n % 2 === 0 ? n/2 : n*3+1;
}
function collatzSequence (n = 1) {
	var sequence = [];
	sequence.push(n);
	while (n != 1) {
		n = collatz(n);
		sequence.push(n);
	}
	return sequence;
}
var n = process.argv[2];
console.log(n +" : "+ collatzSequence(n).length);
console.log(collatzSequence(n).toString());