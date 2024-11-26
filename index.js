const statistics = require("./statistics");

const data = [1, 2, 3, 4, 5];

console.log("Mean:", statistics.mean(data));
console.log("Median:", statistics.median(data));
console.log("Standard Deviation:", statistics.standardDeviation(data));
