function countPrimeNumbers(){
    let count = 0;
    for (let i = 2; i <= 100; i++) {
        let prime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j == 0) {
                prime = false;
                break;
            }
        }
        if (prime) {
            count++;
        }
    }
    return count;
}
let t0 = performance.now();
for (let i = 0; i < 100; i++) {
   setTimeout(function(){countPrimeNumbers();}, 0);
}
let t1 = performance.now();
console.log("Execution time of printing countPrimeNumbers was " + (t1 - t0) + " milliseconds.");