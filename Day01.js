function reverseFunction(num, reversed = 0) { 
	if (num === 0) { 
		return reversed; 
	} 
	return reverseFunction(Math.floor(num / 10), 
		reversed * 10 + num % 10); 
} 

const num = 987654321; 
const result = reverseFunction(num); 

console.log(result);
