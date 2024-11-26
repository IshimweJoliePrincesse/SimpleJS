const statistics = {
  mean: function (data) {
    const sum = data.reduce((acc, val) => acc + val, 0);
    return sum / data.length;
  },

  median: function (data) {
    data.sort((a, b) => a - b);
    const mid = Math.floor(data.length / 2);
    return data.length % 2 === 0 ? (data[mid - 1] + data[mid]) / 2 : data[mid];
  },

  standardDeviation: function (data) {
    const mean = data.reduce((acc, val) => acc + val, 0) / data.length;
    const deviation =
      data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / data.length;
    return Math.sqrt(deviation);
  },
};
module.exports = statistics;
