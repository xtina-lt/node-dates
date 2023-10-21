/******************
 *     UTIL.JS     * 
 ******************/ 
let arr = ["Hello, pumpkin.",
    "Don't stop be-leafing.",
    "Channel the flannel.",
    "Spice, spice baby."];

module.exports = {
    // POSSIBLE UTILS
    testCase: (output, expected) => {
        return JSON.stringify(output) === JSON.stringify(expected)
          ? `PASS: ${output} === ${expected}`
          : `FAIL: ${output} !== ${expected}`;
      },
    showResult : (title, e) => {
        console.log(`${"-".repeat(5)} # ${title} # ${"-".repeat(5)}`)
        console.log(e)
        console.log("-".repeat(30))
    },

    // FOR THIS EXCERSIZE
    getAll: () => arr,
    getRandom: function() { return arr[Math.floor(Math.random() * arr.length)] },
    yellRandom: function() { return this.getRandom().toUpperCase() }
}

// console.log(module.exports.yellRandom())

